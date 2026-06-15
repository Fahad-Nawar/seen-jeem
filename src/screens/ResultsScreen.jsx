import React from 'react';
import NeoButton from '../components/NeoButton';
import NeoCard from '../components/NeoCard';
import ConfettiBurst from '../components/ConfettiBurst';
import DecoShape from '../components/DecoShape';
import './ResultsScreen.css';

export default function ResultsScreen({ gameState, onHome, onHistory }) {
  const winner =
    gameState.team1.score > gameState.team2.score
      ? gameState.team1.name
      : gameState.team2.score > gameState.team1.score
      ? gameState.team2.name
      : 'تعادل!';
  const isTie = winner === 'تعادل!';

  return (
    <div className="screen res-screen nb-enter">
      <ConfettiBurst trigger={1} intensity="lg" />
      <DecoShape shape="star" color="var(--nb-pink)" top="10%" left="8%" />
      <DecoShape shape="circle" color="var(--nb-violet)" size={60} bottom="14%" right="8%" />

      <div className="res-inner">
        <h1 className="nb-display res-title">انتهت اللعبة!</h1>

        <div className="res-winner">
          {!isTie && <span className="res-crown" aria-hidden="true">👑</span>}
          <span className="res-winner-name">{winner}</span>
          {!isTie && <span className="res-winner-tail">يفوز!</span>}
        </div>

        <div className="res-scores">
          <NeoCard variant="yellow" className="res-score-card">
            <div className="res-team-name">{gameState.team1.name}</div>
            <div className="res-team-score">{gameState.team1.score}</div>
          </NeoCard>
          <NeoCard variant="violet" className="res-score-card">
            <div className="res-team-name">{gameState.team2.name}</div>
            <div className="res-team-score">{gameState.team2.score}</div>
          </NeoCard>
        </div>

        <div className="res-actions">
          <NeoButton variant="cyan" size="lg" onClick={onHome}>العودة للرئيسية</NeoButton>
          <NeoButton variant="pink" size="lg" onClick={onHistory}>سجل المباريات</NeoButton>
        </div>
      </div>
    </div>
  );
}
