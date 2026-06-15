import React from 'react';

export default function NeoButton({
  variant = 'ghost',
  size = 'md',
  block = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'nb-btn',
    `nb-btn--${variant}`,
    size !== 'md' && `nb-btn--${size}`,
    block && 'nb-btn--block',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
