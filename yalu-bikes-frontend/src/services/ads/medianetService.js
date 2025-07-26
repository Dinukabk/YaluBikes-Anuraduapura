export const initMedianetService = () => {
  window._mNHandle = window._mNHandle || {};
  window._mNHandle.queue = window._mNHandle.queue || [];
};

export const loadMedianetAd = (elementId, cid) => {
  window._mNHandle.queue.push(() => {
    window._mNHandle.createAd({
      divId: elementId,
      cid: cid,
      width: 300,
      height: 250,
      renderMode: 'script'
    });
  });
};