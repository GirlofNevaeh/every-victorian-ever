import { useState, type FormEvent } from 'react'
import { unlockSite } from '../server/access'

export function Paywall() {
  const [key, setKey] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    const next = key.trim()
    if (!next) {
      setError('Type the access key from your school.')
      return
    }
    setPending(true)
    setError('')
    try {
      const result = await unlockSite({ data: { key: next } })
      if (!result.ok) {
        setError('That key does not open this site. Check the letters, or buy a key from Every School Ever.')
        setPending(false)
        return
      }
      window.location.assign('/')
    } catch {
      setError('The key could not be checked. Try again in a moment.')
      setPending(false)
    }
  }

  return (
    <div>
      <header className="site-header">
        <div className="bar">
          <p className="brand">Every Victorian Ever</p>
          <p className="age">Ages 5–12</p>
        </div>
      </header>
      <main id="main">
        <section className="band band-pine">
          <div className="wrap">
            <h1 className="display hero-title">Every Victorian Ever</h1>
            <p className="lead">A guide to Britain from 1837 to 1901, for ages 5 to 12. Scotland is part of the story.</p>
          </div>
        </section>
        <section className="band band-paper">
          <div className="wrap gate">
            <h2>What is inside</h2>
            <ul>
              <li>Real people from Victorian Britain, with family and faith.</li>
              <li>A map of Britain and Ireland, including Scotland.</li>
              <li>A class quiz, a timeline, and printable work.</li>
              <li>Projects for Primary 1 to Primary 7.</li>
            </ul>
            <div className="note note-gold">
              <p>The rest of this site is locked.</p>
              <p>Schools buy an access key from Every School Ever, then enter it here.</p>
            </div>
            <a className="gate-buy" href="https://everyschoolever.com">Buy an access key at everyschoolever.com</a>
            <form className="gate-form" onSubmit={submit}>
              <label htmlFor="access-key">Already have a key?</label>
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
              <button type="submit" disabled={pending}>{pending ? 'Checking…' : 'Open the site'}</button>
              {error && <p className="gate-error">{error}</p>}
            </form>
            <p className="gate-note">A working key stays on this device, so a class can use the site here afterwards.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
