import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function PageFadeIn({ children, duration = 0.5 }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 20,
      duration,
      ease: "power2.out"
    });
  }, [duration]);

  return <div ref={ref}>{children}</div>;
}