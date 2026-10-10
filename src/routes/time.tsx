import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ScotlandNote } from '../components/ScotlandNote'

export const Route = createFileRoute('/time')({
  component: Time,
})

const events = [
  [1837, 'Victoria becomes queen. Scotland is part of Britain.'],
  [1840, 'The Penny Black stamp starts the Penny Post.'],
  [1842, 'Victoria visits Scotland. She later stays at Balmoral.'],
  [1851, 'The Great Exhibition opens in the Crystal Palace.'],
  [1858, 'The Great Stink. Bazalgette builds clean sewers.'],
  [1870, 'School boards start. More children can go to school.'],
  [1880, 'More children must go to school. Glasgow builds ships and engines.'],
  [1901, 'Victoria dies. Edinburgh still has schools, publishers, and its New Town.'],
] as const

function Time() {
  const [step, setStep] = useState(0)
  const [year, text] = events[step]
  return (
    <div className="mx-auto max-w-xl space-y-4 text-center">
      <h1 className="text-2xl font-bold">Time</h1>
      <div className="rounded-lg bg-white p-6 shadow">
        <p className="text-3xl font-bold text-[var(--color-red)]">{year}</p>
        <p className="mt-2">{text}</p>
      </div>
      <div className="flex justify-center gap-3">
        <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="rounded bg-[var(--color-pine)] px-4 py-2 text-[var(--color-lace)] disabled:opacity-40">Previous</button>
        <button type="button" disabled={step === events.length - 1} onClick={() => setStep(step + 1)} className="rounded bg-[var(--color-red)] px-4 py-2 text-[var(--color-lace)] disabled:opacity-40">Next</button>
      </div>
      <p className="text-sm">{step + 1} of {events.length}</p>
      <ScotlandNote text="These years include Victoria's Scottish visits, railways, the Great Exhibition, schools, and Scottish industry." />
    </div>
  )
}
