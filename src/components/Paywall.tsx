import { useState, type FormEvent } from 'react'
import { useT } from '../i18n/language'
import { unlockSite } from '../server/access'

export function Paywall({ next }: { next: string }) {
  const t = useT()
  const [key, setKey] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    const typed = key.trim()
    if (!typed) {
      setError(t('Type the access key from your school.'))
      return
    }
    setPending(true)
    setError('')
    try {
      const result = await unlockSite({ data: { key: typed } })
      if (!result.ok) {
        setError(t('That key does not open this site. Check the letters, or buy a key from Every School Ever.'))
        setPending(false)
        return
      }
      window.location.assign(next)
    } catch {
      setError(t('The key could not be checked. Try again in a moment.'))
      setPending(false)
    }
  }

  return (
    <section className="band band-paper">
      <div className="wrap gate">
        <h1 className="display">{t('The rest of this site is locked.')}</h1>
        <p className="lead">{t('You can read the home page. The other pages need a school access key.')}</p>
        <div className="note note-gold">
          <p>{t('Schools buy an access key from Every School Ever, then enter it here.')}</p>
        </div>
        <a className="gate-buy" href="https://everyschoolever.com">{t('Buy an access key at everyschoolever.com')}</a>
        <form className="gate-form" onSubmit={submit}>
          <label htmlFor="access-key">{t('Already have a key?')}</label>
          <input
            id="access-key"
            className="field"
            value={key}
            onChange={(event) => setKey(event.target.value)}
            placeholder="EVE-XXXX-XXXX-XXXX"
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
          />
          <button type="submit" disabled={pending}>{pending ? t('Checking…') : t('Open the site')}</button>
          {error && <p className="gate-error">{error}</p>}
        </form>
        <p className="gate-note">{t('A working key stays on this device, so a class can use the site here afterwards.')}</p>
      </div>
    </section>
  )
}
