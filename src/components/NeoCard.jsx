import React from 'react';

export default function NeoCard({
  variant,
  lgShadow = false,
  className = '',
  as: Tag = 'div',
  children,
  ...rest
}) {
  const classes = [
    'nb-card',
    variant && `nb-card--${variant}`,
    lgShadow && 'nb-card--lg-shadow',
    className,
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}
