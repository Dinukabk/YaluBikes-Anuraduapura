import { useEffect } from 'react'
import { loadReCaptcha } from 'react-recaptcha-v3'

export default function ReCAPTCHA({ action }) {
  useEffect(() => {
    loadReCaptcha(import.meta.env.VITE_RECAPTCHA_SITE_KEY)
  }, [action])

  return null
}