import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Picture } from '../components/Picture'
import { useT } from '../i18n/language'

export const Route = createFileRoute('/time')({
  component: Time,
})

const events = [
  [1837, 'Victoria becomes queen. Scotland is part of Britain.', '/art/castle.jpg'],
  [1840, 'The Penny Black stamp starts the Penny Post.', '/art/inventions.jpg'],
  [1842, 'Victoria visits Scotland. She later stays at Balmoral.', '/art/castle.jpg'],
  [1851, 'The Great Exhibition opens in the Crystal Palace.', '/art/palace.jpg'],
  [1858, 'The Great Stink. Bazalgette builds clean sewers.', '/art/lamps.jpg'],
  [1870, 'School boards start. More children can go to school.', '/art/school.jpg'],
  [1880, 'More children must go to school. Glasgow builds ships and engines.', '/art/ships.jpg'],
  [1901, 'Victoria dies. Edinburgh still has schools, publishers, and its New Town.', '/art/school.jpg'],
] as const

function Time() {
  const t = useT()
  const [step, setStep] = useState(0)
  const [year, text, image] = events[step]
  useEffect(() => {
    for (const event of events) {
      const preload = new Image()
      preload.src = event[2]
    }
  }, [])
  return (
    <div className="page" style={{ textAlign: 'center' }}>
      <h1>{t('Time')}</h1>
      <div className="card">
        <p className="red" style={{ display: 'inline-block', borderRadius: 12, padding: '8px 16px', fontSize: '2rem', fontWeight: 800 }}>{year}</p>
        <p>{t(text)}</p>
        <Picture src={image} alt={text} priority />
      </div>
      <div className="step" style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
        <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} style={{ background: 'var(--pine)' }}>{t('Previous')}</button>
        <button type="button" disabled={step === events.length - 1} onClick={() => setStep(step + 1)} style={{ background: 'var(--red)' }}>{t('Next')}</button>
      </div>
      <p>{step + 1} {t('of')} {events.length}</p>
      <aside className="scotland" style={{ textAlign: 'left' }}>
        <strong>{t('Scotland')}</strong>
        <p>{t("These years include Victoria's Scottish visits, railways, the Great Exhibition, schools, and Scottish industry.")}</p>
      </aside>
    </div>
  )
}
