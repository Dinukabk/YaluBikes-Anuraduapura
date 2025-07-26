export const loadAdSense = () => {
  const script = document.createElement('script');
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${import.meta.env.VITE_GOOGLE_ADSENSE_ID}`;
  script.async = true;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
};

export const displayAdSenseAd = (elementId, adSlot) => {
  if (window.adsbygoogle) {
    window.adsbygoogle.push({});
  } else {
    console.error('AdSense script not loaded');
  }
};