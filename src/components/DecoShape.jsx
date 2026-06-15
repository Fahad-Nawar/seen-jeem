import React from 'react';

export default function DecoShape({
  shape = 'circle',
  color = 'var(--nb-pink)',
  size = 50,
  top, right, bottom, left,
  float,
  spin,
  children,
}) {
  const isStar = shape === 'star';
  const defaultFloat = !isStar;
  const defaultSpin  = isStar;
  const doFloat = float ?? defaultFloat;
  const doSpin  = spin  ?? defaultSpin;

  const classes = [
    'nb-deco',
    `nb-deco--${shape}`,
    doFloat && 'nb-deco--float',
    doSpin  && 'nb-deco--spin',
  ].filter(Boolean).join(' ');

  const style = {
    width:  isStar ? undefined : size,
    height: isStar ? undefined : size,
    background: isStar ? undefined : color,
    color: isStar ? color : undefined,
    top, right, bottom, left,
  };

  return (
    <span className={classes} style={style} aria-hidden="true">
      {isStar ? (children || '★') : null}
    </span>
  );
}
