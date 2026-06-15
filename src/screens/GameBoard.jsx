import React, { useState } from 'react';
import { BOARD_ROWS } from '../data/categories';
import NeoButton from '../components/NeoButton';
import TeamScore from '../components/TeamScore';
import './GameBoard.css';

const ADJUST_VALUES = [200, 400, 600];

export default function GameBoard({
  gameState,
  categories,
  usedQuestions,
  onSelectQuestion,
  onStop,
  onAdjustScore,
}) {
  const [adjustOpen, setAdjustOpen] = useState(false);
  const currentTeam = gameState.currentTeam === 1 ? gameState.team1 : gameState.team2;

  // Split BOARD_ROWS into two columns: index=0 questions on one side, index=1 on the other.
  const sideA = BOARD_ROWS.filter(r => r.index === 0);
  const sideB = BOARD_ROWS.filter(r => r.index === 1);

  const renderCell = (category, row) => {
    const key = `${category.id}_${row.points}_${row.index}`;
    const isUsed = usedQuestions[key];
    return (
      <button
        type="button"
        key={key}
        className={`cat-cell cat-cell--${row.points} ${isUsed ? 'is-used' : ''}`}
        onClick={() => !isUsed && onSelectQuestion(category.id, row.points, row.index)}
        disabled={isUsed}
      >
        {isUsed ? '✓' : row.points}
      </button>
    );
  };

  return (
    <div className="screen board-screen nb-enter">
      <div className="board-header">
        <TeamScore
          name={gameState.team1.name}
          score={gameState.team1.score}
          active={gameState.currentTeam === 1}
          variant="yellow"
          size="lg"
        />

        <div className="board-turn">
          <div className="nb-tag">دور</div>
          <div className="board-turn-name">{currentTeam.name}</div>
        </div>

        <TeamScore
          name={gameState.team2.name}
          score={gameState.team2.score}
          active={gameState.currentTeam === 2}
          variant="violet"
          size="lg"
        />
      </div>

      <div className="board-grid-wrap">
        <div className="board-grid">
          {categories.map((category) => (
            <div key={category.id} className="cat-group">
              <div className="cat-side">
                {sideA.map(row => renderCell(category, row))}
              </div>

              <div
                className="cat-card"
                style={{ background: category.color || 'var(--nb-bg-soft)' }}
              >
                <div className="cat-card-art">{category.icon}</div>
                <div className="cat-card-name">{category.name}</div>
              </div>

              <div className="cat-side">
                {sideB.map(row => renderCell(category, row))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="board-footer">
        <NeoButton variant="yellow" onClick={() => setAdjustOpen(true)}>
          ✏️ تعديل النقاط
        </NeoButton>
        <NeoButton variant="danger" onClick={onStop}>إيقاف اللعبة</NeoButton>
      </div>

      {adjustOpen && (
        <div className="adjust-modal" onClick={() => setAdjustOpen(false)}>
          <div className="adjust-card" onClick={(e) => e.stopPropagation()}>
            <div className="adjust-head">
              <h2 className="nb-heading">✏️ تعديل النقاط</h2>
              <NeoButton variant="ghost" size="sm" onClick={() => setAdjustOpen(false)}>
                إغلاق
              </NeoButton>
            </div>
            <p className="adjust-help">استخدم الأزرار لتصحيح النقاط إذا حدث خطأ.</p>

            {[1, 2].map((teamNum) => {
              const team = teamNum === 1 ? gameState.team1 : gameState.team2;
              return (
                <div key={teamNum} className={`adjust-team adjust-team--${teamNum}`}>
                  <div className="adjust-team-head">
                    <div className="adjust-team-name">{team.name}</div>
                    <div className="adjust-team-score">{team.score}</div>
                  </div>
                  <div className="adjust-row">
                    {ADJUST_VALUES.map((v) => (
                      <button
                        type="button"
                        key={`minus-${v}`}
                        className="adjust-btn adjust-btn--minus"
                        onClick={() => onAdjustScore(teamNum, -v)}
                        disabled={team.score < v}
                      >
                        −{v}
                      </button>
                    ))}
                    {ADJUST_VALUES.map((v) => (
                      <button
                        type="button"
                        key={`plus-${v}`}
                        className="adjust-btn adjust-btn--plus"
                        onClick={() => onAdjustScore(teamNum, v)}
                      >
                        +{v}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
