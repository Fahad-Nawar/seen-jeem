import React, { useState } from 'react';

export default function GameScreen({
  gameState,
  currentQuestion,
  onAnswerQuestion,
  onNextQuestion,
  onStop
}) {
  const [usedHelpers, setUsedHelpers] = useState([false, false, false]);

  if (!currentQuestion) {
    return <div className="screen game-screen active">Loading...</div>;
  }

  const currentTeam = gameState.currentTeam === 1 ? gameState.team1 : gameState.team2;
  const isAnswered = gameState.selectedOption !== null;

  const handleHelper = (index) => {
    setUsedHelpers(prev => {
      const newHelpers = [...prev];
      newHelpers[index] = true;
      return newHelpers;
    });
  };

  return (
    <div className="screen game-screen active">
      <div className="game-header">
        <div className="team-score">
          <div className="team-name">{gameState.team1.name}</div>
          <div className="score">{gameState.team1.score}</div>
        </div>
        <div className="team-score">
          <div className="team-name">{gameState.team2.name}</div>
          <div className="score">{gameState.team2.score}</div>
        </div>
      </div>

      <div className="game-content">
        <div>
          <div className="question-number">
            السؤال {gameState.currentQuestion + 1} من {gameState.questionsShuffled.length}
          </div>
          <div className="question">{currentQuestion.question}</div>
        </div>

        <div>
          <div className="options-grid">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`option ${gameState.selectedOption === index ? 'selected' : ''}`}
                onClick={() => !isAnswered && onAnswerQuestion(index)}
                style={{
                  cursor: isAnswered ? 'not-allowed' : 'pointer',
                  opacity: isAnswered ? 0.7 : 1
                }}
              >
                {option}
              </div>
            ))}
          </div>

          <div className="helpers">
            <button
              className="helper-btn"
              disabled={usedHelpers[0] || !isAnswered}
              onClick={() => handleHelper(0)}
            >
              📞 اتصال بصديق
            </button>
            <button
              className="helper-btn"
              disabled={usedHelpers[1] || !isAnswered}
              onClick={() => handleHelper(1)}
            >
              ✌️ جاوب جوابين
            </button>
            <button
              className="helper-btn"
              disabled={usedHelpers[2] || !isAnswered}
              onClick={() => handleHelper(2)}
            >
              ⚡ الحفرة
            </button>
          </div>
        </div>
      </div>

      <div className="button-group" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <button className="btn-secondary" onClick={onStop}>
          إيقاف اللعبة
        </button>
        <button
          className="btn-primary"
          onClick={onNextQuestion}
          disabled={!isAnswered}
          style={{ opacity: !isAnswered ? 0.5 : 1 }}
        >
          السؤال التالي
        </button>
      </div>
    </div>
  );
}
