// TMDB API Service - Free movie database with posters
// Get a free API key from: https://www.themoviedb.org/settings/api
// Add to .env: VITE_TMDB_KEY=your_key_here

const TMDB_KEY = import.meta.env.VITE_TMDB_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';
const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';
const POSTER_BASE_LARGE = 'https://image.tmdb.org/t/p/original';
const CACHE_KEY = 'yadee_movies_cache_v10_swap';

const MIN_YEAR = 1988;

function loadCache() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('Failed to cache movies:', e);
  }
}

/**
 * Fetch top rated English movies released 1988 or later.
 * Returns ~200 movies sorted by rating with vote_count + popularity intact.
 */
export async function fetchTopMovies(pages = 10) {
  if (!TMDB_KEY) {
    console.warn('TMDB API key not configured');
    return [];
  }

  const cached = loadCache();
  if (cached && Date.now() - cached.timestamp < 7 * 24 * 60 * 60 * 1000) {
    return cached.data;
  }

  try {
    const allMovies = [];

    for (let page = 1; page <= pages; page++) {
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${TMDB_KEY}&page=${page}&language=en-US`
      );

      if (!response.ok) {
        console.warn(`TMDB API error: ${response.status}`);
        break;
      }

      const data = await response.json();
      const movies = (data.results || [])
        .filter(movie => {
          if (movie.original_language !== 'en') return false;
          const year = parseInt(movie.release_date?.split('-')[0]);
          if (!year || year < MIN_YEAR) return false;
          return true;
        })
        .map(movie => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          poster: movie.poster_path ? `${POSTER_BASE}${movie.poster_path}` : null,
          backdrop: movie.backdrop_path ? `${POSTER_BASE}${movie.backdrop_path}` : null,
          backdropLarge: movie.backdrop_path ? `${POSTER_BASE_LARGE}${movie.backdrop_path}` : null,
          year: movie.release_date?.split('-')[0],
          rating: movie.vote_average,
          voteCount: movie.vote_count,
          popularity: movie.popularity,
        }))
        .filter(m => m.poster);

      allMovies.push(...movies);
    }

    saveCache(allMovies);
    return allMovies;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return [];
  }
}

function pickRandom(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

/**
 * Fetch the most popular textless poster for a movie.
 * Textless = same artwork minus title text. Returns null if none exists.
 */
async function fetchTextlessPoster(movieId) {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${movieId}/images?api_key=${TMDB_KEY}&include_image_language=null`
    );
    if (!res.ok) return null;
    const data = await res.json();

    const textless = (data.posters || []).filter(p => p.iso_639_1 === null);
    if (textless.length === 0) return null;

    textless.sort((a, b) => {
      const countDiff = (b.vote_count || 0) - (a.vote_count || 0);
      if (countDiff !== 0) return countDiff;
      return (b.vote_average || 0) - (a.vote_average || 0);
    });

    return {
      small: `${POSTER_BASE}${textless[0].file_path}`,
      large: `${POSTER_BASE_LARGE}${textless[0].file_path}`,
    };
  } catch {
    return null;
  }
}

/**
 * Tier movies by difficulty:
 *  - Easy (200):   highest vote_count — blockbusters everyone has seen
 *  - Medium (400): mid vote_count    — well-known but not mainstream
 *  - Hard (600):   lowest vote_count — high-rated but more obscure
 * All movies already filtered to English + post-1988 + high rating (top_rated endpoint).
 */
export async function generateMovieQuestions() {
  const movies = await fetchTopMovies(10);
  if (movies.length < 12) return null;

  // Sort by vote_count descending — proxy for "views" / how many people have seen it
  const sortedByViews = [...movies].sort((a, b) => b.voteCount - a.voteCount);

  const third = Math.floor(sortedByViews.length / 3);
  const easyPool = sortedByViews.slice(0, third);
  const mediumPool = sortedByViews.slice(third, third * 2);
  const hardPool = sortedByViews.slice(third * 2);

  // Pick 2 from each tier
  const easyPicks = pickRandom(easyPool, 2);
  const mediumPicks = pickRandom(mediumPool, 2);
  const hardPicks = pickRandom(hardPool, 2);

  // Tag each pick with its difficulty so we route to the right bucket
  const tagged = [
    ...easyPicks.map(m => ({ movie: m, points: 200 })),
    ...mediumPicks.map(m => ({ movie: m, points: 400 })),
    ...hardPicks.map(m => ({ movie: m, points: 600 })),
  ];

  // Guessing view → textless poster (no title). Reveal view → famous poster (with title).
  const withImages = await Promise.all(
    tagged.map(async ({ movie, points }) => {
      const textless = await fetchTextlessPoster(movie.id);
      const originalLarge = movie.poster?.replace('/w500', '/original') || movie.poster;
      return {
        movie,
        points,
        // Before reveal — prefer textless variant
        displaySmall: textless?.small || movie.poster,
        displayLarge: textless?.large || originalLarge,
        // After reveal — famous original poster with title text
        revealSmall: movie.poster,
        revealLarge: originalLarge,
      };
    })
  );

  const questions = { 200: [], 400: [], 600: [] };

  withImages.forEach(({ movie, points, displaySmall, displayLarge, revealSmall, revealLarge }) => {
    // Wrong options drawn from same-tier pool when possible for fairness,
    // otherwise from full pool
    const samePool = points === 200 ? easyPool : points === 400 ? mediumPool : hardPool;
    const wrongOptions = samePool
      .filter(m => m.id !== movie.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(m => m.originalTitle || m.title);

    // Top up from full pool if same-tier pool is too small
    while (wrongOptions.length < 3) {
      const extra = movies.find(m =>
        m.id !== movie.id && !wrongOptions.includes(m.originalTitle || m.title)
      );
      if (!extra) break;
      wrongOptions.push(extra.originalTitle || extra.title);
    }

    const correctTitle = movie.originalTitle || movie.title;
    const options = [...wrongOptions, correctTitle].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(correctTitle);

    questions[points].push({
      question: 'ما اسم هذا الفيلم؟',
      options,
      correct: correctIndex,
      image: displaySmall,
      imageLarge: displayLarge,
      imageReveal: revealSmall,
      imageRevealLarge: revealLarge,
      movieData: {
        year: movie.year,
        title: correctTitle,
      }
    });
  });

  return questions;
}

export function isMoviesServiceConfigured() {
  return !!TMDB_KEY;
}
