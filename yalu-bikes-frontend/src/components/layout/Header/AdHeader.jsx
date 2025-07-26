import { useEffect } from 'react';
import { useAdManager } from '../../../app/hooks/useAdManager';

export default function AdHeader() {
  const { displayAd } = useAdManager();

  useEffect(() => {
    displayAd('header');
  }, [displayAd]);

  return (
    <div className="ad-header">
      {/* Ad will be injected here */}
    </div>
  );
}