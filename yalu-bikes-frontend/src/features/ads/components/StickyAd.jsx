import { useEffect, useRef } from 'react';
import { useAdManager } from '../../../app/hooks/useAdManager';

export default function StickyAd({ position = 'bottom' }) {
  const adRef = useRef();
  const { displayAd } = useAdManager();

  useEffect(() => {
    if (adRef.current) {
      displayAd(adRef.current, { 
        type: 'sticky',
        position 
      });
    }
  }, [displayAd, position]);

  return (
    <div 
      ref={adRef}
      className={`sticky-ad sticky-${position}`}
    />
  );
}