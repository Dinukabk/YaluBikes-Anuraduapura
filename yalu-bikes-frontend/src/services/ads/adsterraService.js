export const loadAdsterraAd = (zoneId, elementId) => {
  const script = document.createElement('script');
  script.src = `https://www.profitabledisplaynetwork.com/${zoneId}/invoke.js`;
  script.async = true;
  script.setAttribute('data-id', elementId);
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
};