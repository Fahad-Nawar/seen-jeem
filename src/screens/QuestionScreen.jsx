import React, { useState, useEffect, useRef } from 'react';
import { CATEGORIES } from '../data/categories';
import { fetchImage } from '../services/imageService';
import { getCustomImage, getQuestionKey } from '../services/customImageStorage';
import confetti from 'canvas-confetti';
import NeoButton from '../components/NeoButton';
import TeamScore from '../components/TeamScore';
import './QuestionScreen.css';

const FIRST_TEAM_TIME = 60;
const SECOND_TEAM_TIME = 15;

export default function QuestionScreen({
  gameState,
  onAnswerQuestion,
  onNextTurn,
  onUseHelper,
  onExit
}) {
  const { currentQuestion } = gameState;
  const [showAnswer, setShowAnswer] = useState(false);
  const [resultPhase, setResultPhase] = useState(null); // null | 'choosing-correct' | 'choosing-wrong' | 'done'
  const [scoredTeam, setScoredTeam] = useState(null); // 1 | 2 | null
  const [phase, setPhase] = useState('first'); // 'first' | 'second'
  const [timeLeft, setTimeLeft] = useState(FIRST_TEAM_TIME);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [fetchedImage, setFetchedImage] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [posterZoomed, setPosterZoomed] = useState(false);
  const timerRef = useRef(null);

  // Initialize timer when question changes
  useEffect(() => {
    setPhase('first');
    setTimeLeft(FIRST_TEAM_TIME);
    setIsTimerActive(true);
    setShowAnswer(false);
    setResultPhase(null);
    setScoredTeam(null);
    setPosterZoomed(false);
  }, [currentQuestion]);

  // Fetch image automatically when question changes
  // Priority: Custom uploaded > Unsplash > Static emoji
  useEffect(() => {
    if (!currentQuestion) {
      setFetchedImage(null);
      return;
    }

    // Check for custom uploaded image first
    const questionKey = getQuestionKey(
      currentQuestion.categoryId,
      currentQuestion.points,
      currentQuestion.questionIndex
    );
    const customImage = getCustomImage(questionKey);

    if (customImage) {
      setFetchedImage(customImage);
      return;
    }

    // Fall back to Unsplash if keyword exists
    if (!currentQuestion.imageKeyword) {
      setFetchedImage(null);
      return;
    }

    setIsLoadingImage(true);
    fetchImage(currentQuestion.imageKeyword)
      .then(url => {
        setFetchedImage(url);
        setIsLoadingImage(false);
      })
      .catch(() => {
        setFetchedImage(null);
        setIsLoadingImage(false);
      });
  }, [currentQuestion]);

  // Timer countdown
  useEffect(() => {
    if (!isTimerActive || resultPhase === 'done') {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isTimerActive, phase, resultPhase]);

  if (!currentQuestion) return null;

  const category = CATEGORIES.find(c => c.id === currentQuestion.categoryId);
  const firstTeamPicker = gameState.currentTeam === 1 ? gameState.team1 : gameState.team2;
  const teamKey = gameState.currentTeam === 1 ? 'team1' : 'team2';
  const teamHelpers = gameState.helpersUsed[teamKey];

  const correctAnswerText = currentQuestion.options[currentQuestion.correct];

  const handleTimeUp = () => {
    if (phase === 'first') {
      setPhase('second');
      setTimeLeft(SECOND_TEAM_TIME);
      setIsTimerActive(true);
    } else {
      setIsTimerActive(false);
    }
  };

  const handleMarkCorrect = () => {
    setIsTimerActive(false);
    setResultPhase('choosing-correct');
  };

  const handleBackToJudgment = () => {
    setResultPhase(null);
    // Resume timer
    setIsTimerActive(true);
  };

  const handleMarkWrong = () => {
    // Wrong answer — go straight back to the board, no points
    setIsTimerActive(false);
    onNextTurn();
  };

  const handleAwardPoints = (teamNumber) => {
    // Fire confetti directly so it plays over the next screen (the board) too
    if (typeof window !== 'undefined' &&
        !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFE066', '#FF6B9D', '#4ECDC4', '#A78BFA', '#FFA500', '#000000'],
      });
    }
    const scoreToOtherTeam = teamNumber !== gameState.currentTeam;
    onAnswerQuestion(currentQuestion.correct, scoreToOtherTeam);
    // Skip the celebration banner — go straight back to the board
    onNextTurn();
  };

  const handleSkipNoPoints = () => {
    // No team picked — go straight back to the board
    onNextTurn();
  };

  const handleNext = () => {
    setShowAnswer(false);
    setResultPhase(null);
    setScoredTeam(null);
    onNextTurn();
  };

  const isAnswered = resultPhase === 'done';
  const timerPercentage = phase === 'first'
    ? (timeLeft / FIRST_TEAM_TIME) * 100
    : (timeLeft / SECOND_TEAM_TIME) * 100;

  const timerColor = timeLeft <= 5 ? '#F44336' : timeLeft <= 15 ? '#FFA726' : '#4CAF50';

  return (
    <div className="screen q-screen nb-enter">
      <button
        type="button"
        className="q-exit nb-btn nb-btn--ghost nb-btn--sm"
        onClick={onExit}
        title="رجوع للوحة"
      >
        <span aria-hidden="true">×</span>
        <span>خروج</span>
      </button>

      <div className="q-header">
        <TeamScore
          name={gameState.team1.name}
          score={gameState.team1.score}
          active={gameState.currentTeam === 1}
          variant="yellow"
        />
        <div className="q-cat-badge" style={{ background: category.color || 'var(--nb-cyan)' }}>
          <div className="q-cat-icon">{category.icon}</div>
          <div className="q-cat-name">{category.name}</div>
          <div className="q-cat-points">{currentQuestion.points} نقطة</div>
        </div>
        <TeamScore
          name={gameState.team2.name}
          score={gameState.team2.score}
          active={gameState.currentTeam === 2}
          variant="violet"
        />
      </div>

      {!isAnswered && resultPhase !== 'choosing-correct' && (
        <div className="q-timer">
          <div className="q-timer-row">
            <div className={`q-timer-phase q-timer-phase--${phase}`}>
              {phase === 'first'
                ? `🎯 دور: ${firstTeamPicker.name} (60 ثانية)`
                : `⚡ فرصة الفريق الآخر (15 ثانية)`}
            </div>
            <div className="q-timer-num" style={{ color: timerColor }}>
              {timeLeft}<span className="q-timer-unit">ث</span>
            </div>
          </div>
          <div className="q-timer-bar">
            <div
              className="q-timer-fill"
              style={{ width: `${timerPercentage}%`, background: timerColor }}
            />
          </div>
        </div>
      )}

      <div className="q-body">
        {(currentQuestion.image || currentQuestion.imageKeyword) && (() => {
          const isMoviePoster = currentQuestion.categoryId === 'movie_posters';
          const moviePosterSrc = isMoviePoster && showAnswer && currentQuestion.imageReveal
            ? currentQuestion.imageReveal
            : currentQuestion.image;
          const imgSrc = fetchedImage ||
            (moviePosterSrc?.startsWith('http') || moviePosterSrc?.startsWith('/') ? moviePosterSrc : null);

          return (
            <div
              className={`q-img-wrap${isMoviePoster ? ' is-poster' : ''}${isMoviePoster && imgSrc ? ' is-clickable' : ''}`}
              onClick={isMoviePoster && imgSrc ? () => setPosterZoomed(true) : undefined}
            >
              {isLoadingImage ? (
                <div className="q-img-loading">
                  <div className="q-spinner" />
                  <div>جاري تحميل الصورة...</div>
                </div>
              ) : imgSrc ? (
                <img src={imgSrc} alt="سؤال" className="q-img" />
              ) : currentQuestion.image ? (
                <div className="q-img-emoji">{currentQuestion.image}</div>
              ) : null}
              {isMoviePoster && imgSrc && !showAnswer && (
                <div className="q-poster-zoom" title="اضغط للتكبير">🔍</div>
              )}
            </div>
          );
        })()}

        <div className="q-text">{currentQuestion.question}</div>

        {showAnswer ? (
          <div className="q-answer-reveal">
            <div className="q-answer-label">الإجابة الصحيحة:</div>
            <div className="q-answer-text">{correctAnswerText}</div>
          </div>
        ) : (
          !isAnswered && resultPhase !== 'choosing-correct' && (
            <NeoButton
              variant="yellow"
              size="lg"
              onClick={() => setShowAnswer(true)}
            >
              👁️ {currentQuestion.categoryId === 'movie_posters' ? 'كشف اسم الفيلم' : 'إظهار الإجابة'}
            </NeoButton>
          )
        )}

        {!isAnswered && resultPhase === null && (
          <div className="q-judge-row">
            <NeoButton variant="danger" size="lg" onClick={handleMarkWrong}>
              ❌ إجابة خاطئة
            </NeoButton>
            <NeoButton variant="success" size="lg" onClick={handleMarkCorrect}>
              ✅ إجابة صحيحة
            </NeoButton>
          </div>
        )}

        {resultPhase === 'choosing-correct' && (
          <div className="q-chooser">
            <div className="q-chooser-head">
              <NeoButton variant="ghost" size="sm" onClick={handleBackToJudgment} title="رجوع للسؤال">
                <span>←</span><span>رجوع</span>
              </NeoButton>
              <div className="q-chooser-title">🎯 من الفريق الذي أجاب بشكل صحيح؟</div>
              <span />
            </div>
            <div className="q-chooser-grid">
              <button
                type="button"
                className="q-chooser-team q-chooser-team--1"
                onClick={() => handleAwardPoints(1)}
              >
                <div className="q-chooser-name">{gameState.team1.name}</div>
                <div className="q-chooser-pts">+{currentQuestion.points} نقطة</div>
              </button>
              <button
                type="button"
                className="q-chooser-team q-chooser-team--2"
                onClick={() => handleAwardPoints(2)}
              >
                <div className="q-chooser-name">{gameState.team2.name}</div>
                <div className="q-chooser-pts">+{currentQuestion.points} نقطة</div>
              </button>
            </div>
            <NeoButton variant="ghost" size="sm" onClick={handleSkipNoPoints}>
              لا أحد — تخطي بدون نقاط
            </NeoButton>
          </div>
        )}

        {!isAnswered && resultPhase !== 'choosing-correct' && (
          <div className="q-helpers">
            <button
              type="button"
              className={`q-helper ${teamHelpers.callFriend ? 'is-used' : ''}`}
              disabled={teamHelpers.callFriend}
              onClick={() => onUseHelper('callFriend')}
            >
              📞 اتصال بصديق
            </button>
            <button
              type="button"
              className={`q-helper ${teamHelpers.answerTwo ? 'is-used' : ''}`}
              disabled={teamHelpers.answerTwo}
              onClick={() => onUseHelper('answerTwo')}
            >
              ✌️ جاوب جوابين
            </button>
            <button
              type="button"
              className={`q-helper ${teamHelpers.trap ? 'is-used' : ''}`}
              disabled={teamHelpers.trap}
              onClick={() => onUseHelper('trap')}
            >
              ⚡ الحفرة
            </button>
          </div>
        )}

      </div>

      {posterZoomed && (
        <div className="q-poster-modal" onClick={() => setPosterZoomed(false)}>
          <button
            type="button"
            className="q-poster-close"
            onClick={(e) => { e.stopPropagation(); setPosterZoomed(false); }}
            aria-label="إغلاق"
          >×</button>
          <div className="q-poster-frame" onClick={(e) => e.stopPropagation()}>
            <img
              src={
                showAnswer
                  ? (currentQuestion.imageRevealLarge || currentQuestion.imageReveal || currentQuestion.imageLarge || currentQuestion.image)
                  : (currentQuestion.imageLarge || currentQuestion.image)
              }
              alt="poster"
              className="q-poster-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
