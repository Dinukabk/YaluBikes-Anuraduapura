import QRCode from 'qrcode';

export const generateQRCode = async (text, options = {}) => {
  try {
    const defaultOptions = {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      },
      ...options
    };
    return await QRCode.toDataURL(text, defaultOptions);
  } catch (err) {
    console.error('QR code generation failed:', err);
    return null;
  }
};

export const generatePaymentQR = (paymentData) => {
  const payload = {
    v: '1.0',
    t: 'P',
    n: paymentData.merchantId,
    a: paymentData.amount,
    c: paymentData.currency || 'LKR',
    r: paymentData.reference
  };
  return Object.entries(payload)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
};