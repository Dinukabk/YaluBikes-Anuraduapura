import { useEffect, useState } from 'react';
import { getAds } from '../adAPI';
import { useInterval } from '../../../app/hooks/useInterval';

export default function AdRotator({ location, interval = 30000 }) {
  const [ads, setAds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadAds = async () => {
      try {
        const adsData = await getAds({ location });
        setAds(adsData);
      } catch (error) {
        console.error('Failed to load ads:', error);
      }
    };
    loadAds();
  }, [location]);

  useInterval(() => {
    if (ads.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }
  }, interval);

  if (ads.length === 0) return null;

  const currentAd = ads[currentIndex];

  return (
    <div className="ad-rotator">
      <a 
        href={currentAd.link} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => trackAdClick(currentAd.id)}
      >
        <img 
          src={currentAd.imageUrl} 
          alt={currentAd.title} 
          className="img-fluid"
        />
      </a>
    </div>
  );
}