// Image Service - Auto-fetch images from Unsplash (FREE & LEGAL)
// To enable: Get a free API key from https://unsplash.com/developers
// Then add it to .env: VITE_UNSPLASH_KEY=your_key_here

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY || '';
const CACHE_KEY = 'yadee_images_cache';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

// Load cache from localStorage
function loadCache() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return {};
    return JSON.parse(cached);
  } catch {
    return {};
  }
}

// Save cache to localStorage
function saveCache(cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.warn('Failed to save image cache:', e);
  }
}

let imageCache = loadCache();

/**
 * Fetch an image from Unsplash based on a keyword
 * @param {string} keyword - English keyword to search for (e.g., "perfume bottle")
 * @returns {Promise<string|null>} - Image URL or null
 */
export async function fetchImage(keyword) {
  if (!keyword) return null;

  // Check cache first
  const cached = imageCache[keyword];
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.url;
  }

  // If no API key, return null (fallback to emoji)
  if (!UNSPLASH_KEY) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(keyword)}&orientation=landscape&client_id=${UNSPLASH_KEY}`
    );

    if (!response.ok) {
      console.warn(`Unsplash API error for "${keyword}":`, response.status);
      return null;
    }

    const data = await response.json();
    const imageUrl = data.urls?.small || data.urls?.regular;

    if (imageUrl) {
      imageCache[keyword] = {
        url: imageUrl,
        timestamp: Date.now()
      };
      saveCache(imageCache);
      return imageUrl;
    }

    return null;
  } catch (error) {
    console.warn(`Failed to fetch image for "${keyword}":`, error);
    return null;
  }
}

/**
 * Preload images for a list of keywords (for better performance)
 * @param {string[]} keywords - List of keywords to preload
 */
export async function preloadImages(keywords) {
  if (!UNSPLASH_KEY || !keywords?.length) return;

  const uniqueKeywords = [...new Set(keywords)].filter(k => k);

  // Fetch in parallel, but limit to avoid rate limiting
  const BATCH_SIZE = 5;
  for (let i = 0; i < uniqueKeywords.length; i += BATCH_SIZE) {
    const batch = uniqueKeywords.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(keyword => fetchImage(keyword)));
  }
}

/**
 * Clear the image cache
 */
export function clearImageCache() {
  imageCache = {};
  localStorage.removeItem(CACHE_KEY);
}

/**
 * Check if API key is configured
 */
export function isImageServiceConfigured() {
  return !!UNSPLASH_KEY;
}
