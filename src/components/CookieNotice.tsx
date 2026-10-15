import { useEffect, useState } from 'react'
import { useT } from '../i18n/language'

const STORAGE_KEY = 'victorian-cookie-notice'

export function CookieNotice() {
  const t = useT()
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === '1') setOpen(false)
  }, [])

  if (!open) return null

  return (
    <div className="cookie-note" role="region" aria-label={t('Cookie notice')}>
      <p>{t('This site uses one cookie. It remembers a school access key on this device. The cookie is needed to open the locked pages. A language choice is saved on this device too.')}</p>
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem(STORAGE_KEY, '1')
          setOpen(false)
        }}
      >
        {t('I understand')}
      </button>
    </div>
  )
}
