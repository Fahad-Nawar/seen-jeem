import React, { useState } from 'react';
import NeoButton from '../components/NeoButton';
import NeoCard from '../components/NeoCard';
import DecoShape from '../components/DecoShape';
import './SetupScreen.css';

export default function SetupScreen({ onStart, onBack }) {
  const [username, setUsername] = useState('');
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');

  const handleStart = () => {
    onStart(
      team1Name || 'الفريق الأول',
      team2Name || 'الفريق الثاني',
      username || 'مشرف'
    );
  };

  return (
    <div className="screen setup-screen nb-enter">
      <DecoShape shape="star"   color="var(--nb-pink)"   top="6%"  left="6%" />
      <DecoShape shape="circle" color="var(--nb-violet)" size={50} bottom="10%" right="6%" />

      <div className="setup-inner">
        <h1 className="nb-display nb-display--lg setup-title">إعداد اللعبة</h1>

        <NeoCard className="setup-username-card">
          <label className="nb-label">
            <span style={{ marginInlineEnd: 6 }}>👤</span> اسم المستخدم
          </label>
          <input
            type="text"
            className="nb-input"
            placeholder="أدخل اسمك"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </NeoCard>

        <div className="setup-teams">
          <NeoCard variant="pink" className="setup-team-card">
            <label className="nb-label">اسم الفريق الأول</label>
            <input
              type="text"
              className="nb-input"
              placeholder="الفريق الأول"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
            />
          </NeoCard>
          <NeoCard variant="cyan" className="setup-team-card">
            <label className="nb-label">اسم الفريق الثاني</label>
            <input
              type="text"
              className="nb-input"
              placeholder="الفريق الثاني"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
            />
          </NeoCard>
        </div>

        <div className="setup-actions">
          <NeoButton variant="ghost" onClick={onBack}>رجوع</NeoButton>
          <NeoButton variant="orange" size="lg" onClick={handleStart}>
            ابدأ اللعبة
          </NeoButton>
        </div>
      </div>
    </div>
  );
}
