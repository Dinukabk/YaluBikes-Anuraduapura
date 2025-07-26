import { useEffect } from 'react';

export default function AdSenseWrapper({ 
  slotId,
  format = 'auto',
  responsive = true
}) {
  useEffect(() => {
    if (window.adsbygoogle && !window.adsbygoogle.loaded) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div className="ad-container text-center my-3">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_GOOGLE_ADSENSE_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
}