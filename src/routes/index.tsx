import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { people } from '../data/people'
import { ScotlandNote } from '../components/ScotlandNote'

export const Route = createFileRoute('/')({
  component: Home,
})

const facts = [
  'Queen Victoria loved Scotland and stayed at Balmoral.',
  'Glasgow built many ships and engines.',
  'Edinburgh had schools, publishers, and a New Town.',
  'The first stamp was the Penny Black in 1840.',
  'Many children worked long days early on. Later more went to school.',
  'Mary Seacole helped soldiers with food and care.',
  'Charles Darwin studied animals and plants.',
  'Clean sewers and drinking water helped stop disease.',
]

function Home() {
  const [search, setSearch] = useState('')
  const [surprise, setSurprise] = useState('')
  const found = useMemo(
    () =>
      people
        .filter((person) =>
          (person.name + person.bio).toLowerCase().includes(search.trim().toLowerCase()),
        )
        .slice(0, 5),
    [search],
  )

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <section className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg bg-white p-4 shadow">
          <h2 className="text-xl font-bold">Queen Victoria</h2>
          <p>Queen Victoria ruled from 1837 to 1901. She loved Scotland. She stayed at Balmoral Castle.</p>
          <QueenArt />
        </article>
        <article className="rounded-lg bg-white p-4 shadow">
          <h2 className="text-xl font-bold">Ordinary homes</h2>
          <p>A rich home had many rooms. A poor home might have one room. Families lived in both.</p>
          <HomeArt />
        </article>
      </section>

      <section className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-xl font-bold">Railway</h2>
        <p>Railways let people travel faster than horses. Trains went from London toward Scotland.</p>
        <div className="mt-2 h-16 rounded bg-[var(--color-soot)] text-[var(--color-gold)] flex items-center justify-center font-bold">A steam train</div>
      </section>

      <section className="rounded-lg bg-[#fff1c9] p-4">
        <h2 className="text-xl font-bold">School</h2>
        <p>Early on, many children worked long days. Later laws sent more children to school.</p>
      </section>

      <ScotlandNote text="Balmoral is a Highland castle. Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town. Many clan tartans became popular because Victorians liked a Highland holiday look." />

      <section className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-[var(--color-soot)] p-4">
          <h2 className="text-xl font-bold">Daily life</h2>
          <p>Rich people had big houses and servants. Poor people worked hard. Gas lamps lit the streets.</p>
        </article>
        <article className="rounded-lg border border-[var(--color-soot)] p-4">
          <h2 className="text-xl font-bold">Inventions</h2>
          <p>Railways, stamps, photographs, street lamps, clean sewers, and drinking water changed life.</p>
        </article>
      </section>

      <section>
        <h2 className="text-xl font-bold">Time</h2>
        <div className="flex gap-2 overflow-x-auto py-2">
          {['1837 Queen', '1840 Stamps', '1851 Exhibition', '1870 Schools', '1901 End'].map((item) => (
            <div key={item} className="min-w-[110px] rounded bg-[var(--color-red)] px-2 py-3 text-center text-sm text-[var(--color-lace)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-xl font-bold">Find a person</h2>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search people"
          className="mb-2 w-full rounded border p-2"
        />
        <ul className="space-y-1">
          {(search ? found : people.slice(0, 4)).map((person) => (
            <li key={person.id}>
              <Link to="/people/$personId" params={{ personId: person.id }} className="underline text-[var(--color-pine)]">
                {person.name}
              </Link>
              {' '}
              {person.role}
            </li>
          ))}
        </ul>
        <Link to="/places" className="mt-3 inline-block underline text-[var(--color-pine)]">See places</Link>
      </section>

      <button
        type="button"
        className="rounded bg-[var(--color-red)] px-4 py-2 text-[var(--color-lace)]"
        onClick={() => setSurprise(facts[Math.floor(Math.random() * facts.length)])}
      >
        Surprise me
      </button>
      {surprise && <p className="rounded bg-white p-3">{surprise}</p>}
    </div>
  )
}

function QueenArt() {
  return (
    <svg viewBox="0 0 120 70" className="mt-2 h-20 w-full" role="img" aria-label="A friendly drawing of a queen">
      <rect width="120" height="70" fill="#E7B23C" />
      <circle cx="40" cy="28" r="12" fill="#F3D2B3" />
      <path d="M28 22 L34 10 L40 20 L46 8 L52 22" fill="#B42318" />
      <rect x="28" y="40" width="24" height="22" rx="4" fill="#1F6B4A" />
    </svg>
  )
}

function HomeArt() {
  return (
    <svg viewBox="0 0 120 70" className="mt-2 h-20 w-full" role="img" aria-label="A small home with one room">
      <rect width="120" height="70" fill="#FFF8EE" />
      <path d="M20 40 L60 16 L100 40" fill="#1F6B4A" />
      <rect x="36" y="40" width="48" height="22" fill="#E7B23C" />
      <rect x="54" y="48" width="12" height="14" fill="#1C1C1C" />
    </svg>
  )
}
