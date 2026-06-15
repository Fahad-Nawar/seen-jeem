import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiBurst({ trigger, intensity = 'md' }) {
  useEffect(() => {
    if (trigger === undefined || trigger === null || trigger === false) return;

    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const count = intensity === 'lg' ? 120 : intensity === 'sm' ? 20 : 50;
    confetti({
      particleCount: count,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE066', '#FF6B9D', '#4ECDC4', '#A78BFA', '#FFA500', '#000000'],
    });
  }, [trigger, intensity]);

  return null;
}
