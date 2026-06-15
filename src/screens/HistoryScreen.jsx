import React from 'react';
import NeoButton from '../components/NeoButton';
import NeoCard from '../components/NeoCard';
import './HistoryScreen.css';

export default function HistoryScreen({ gameHistory, onHome }) {
  return (
    <div className="screen hist-screen nb-enter">
      <div className="hist-inner">
        <h1 className="nb-display nb-display--lg hist-title">سجل المباريات</h1>

        {gameHistory.length === 0 ? (
          <NeoCard variant="soft" className="hist-empty">
            لا توجد مباريات بعد. ابدأ لعبة أولاً!
          </NeoCard>
        ) : (
          <div className="hist-list">
            {gameHistory.map((game, index) => {
              const winnerLabel =
                game.score1 > game.score2 ? `✓ ${game.team1}` :
                game.score2 > game.score1 ? `✓ ${game.team2}` :
                '= تعادل';
              return (
                <NeoCard key={index} className="hist-row" variant={index % 2 === 0 ? undefined : 'yellow'}>
                  <div className="hist-row-left">
                    <div className="hist-row-teams">{game.team1} <span className="hist-vs">vs</span> {game.team2}</div>
                    <div className="hist-row-date">{game.date}</div>
                  </div>
                  <div className="hist-row-score">{game.score1} – {game.score2}</div>
                  <div className="hist-row-winner">{winnerLabel}</div>
                </NeoCard>
              );
            })}
          </div>
        )}

        <div className="hist-actions">
          <NeoButton variant="cyan" size="lg" onClick={onHome}>العودة للرئيسية</NeoButton>
        </div>
      </div>
    </div>
  );
}
