import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SlideIn({ 
  children, 
  direction = 'left', 
  delay = 0,
  duration = 0.5
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const from = {
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
      top: { y: -100, opacity: 0 },
      bottom: { y: 100, opacity: 0 }
    }[direction];

    gsap.fromTo(element, 
      from,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out'
      }
    );
  }, [direction, delay, duration]);

  return <div ref={ref}>{children}</div>;
}