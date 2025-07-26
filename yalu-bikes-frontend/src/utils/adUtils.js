export const AD_CONFIG = {
  adsterra: {
    zones: {
      banner: 'xxxxxxxx',
      popup: 'xxxxxxxx',
      sticky: 'xxxxxxxx'
    }
  },
  adsense: {
    client: 'ca-pub-xxxxxxxxxxxxxx',
    slots: {
      header: 'xxxxxxxxxx',
      sidebar: 'xxxxxxxxxx'
    }
  }
};

export const getAdScript = (type, provider) => {
  switch (provider) {
    case 'adsterra':
      return `//some.adsterra.com/servlet/xxxxxx?zone=${AD_CONFIG.adsterra.zones[type]}`;
    case 'adsense':
      return `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CONFIG.adsense.client}`;
    default:
      return '';
  }
};