import React from 'react';
import NeoButton from '../components/NeoButton';
import DecoShape from '../components/DecoShape';
import './HomeScreen.css';

export default function HomeScreen({ onStart, onAdmin }) {
  return (
    <div className="screen home-screen nb-enter">
      <DecoShape shape="circle" color="var(--nb-pink)"  size={70} top="8%"  left="6%" />
      <DecoShape shape="square" color="var(--nb-cyan)"  size={50} bottom="14%" left="10%" />
      <DecoShape shape="star"   color="var(--nb-violet)" top="10%" right="8%" />
      <DecoShape shape="circle" color="var(--nb-orange)" size={40} bottom="10%" right="14%" />

      <div className="home-inner">
        <span className="nb-tag">يَدِي</span>
        <h1 className="home-logo">يعدي</h1>
        <p className="home-sub">لعبة ثقافة وذكاء</p>

        <div className="home-actions">
          <NeoButton variant="pink" size="xl" onClick={onStart}>
            ابدأ اللعبة
          </NeoButton>
          {onAdmin && (
            <NeoButton variant="cyan" size="lg" onClick={onAdmin}>
              🖼️ إدارة الصور
            </NeoButton>
          )}
        </div>
      </div>
    </div>
  );
}
