import React from 'react';

export default function TeamScore({
  name,
  score,
  active = false,
  variant = 'yellow',
  size = 'md',
}) {
  return (
    <div className={`ts-card ts-${variant} ${active ? 'ts-active' : ''} ts-${size}`}>
      <div className="ts-name">{name}</div>
      <div className="ts-score">{score}</div>
    </div>
  );
}
