import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { people } from '../data/people'

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
    <div style={{ display: 'grid', gap: 14 }}>
      <section className="grid-2">
        <article className="card">
          <h2>Queen Victoria</h2>
          <p>Queen Victoria ruled from 1837 to 1901. She loved Scotland. She stayed at Balmoral Castle.</p>
          <img className="scene" src="/art/castle.jpg" alt="A sunny Highland castle" />
        </article>
        <article className="card">
          <h2>Ordinary homes</h2>
          <p>A rich home had many rooms. A poor home might have one room. Families lived in both.</p>
          <img className="scene" src="/art/homes.jpg" alt="A big house beside a one-room home" />
        </article>
      </section>

      <section className="card">
        <h2>Railway</h2>
        <p>Railways let people travel faster than horses. Trains went from London toward Scotland.</p>
        <img className="scene" src="/art/train.jpg" alt="A green steam train on a hill" />
      </section>

      <section className="panel cream">
        <h2>School</h2>
        <p>Early on, many children worked long days. Later laws sent more children to school.</p>
        <img className="scene" src="/art/school.jpg" alt="A bright schoolroom" />
      </section>

      <aside className="scotland">
        <strong>Scotland</strong>
        <p>Balmoral is a Highland castle. Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
        <p>Many clan tartans became popular because Victorians liked a Highland holiday look.</p>
        <img className="scene" src="/art/ships.jpg" alt="A ship in a riverside yard" />
      </aside>

      <section className="grid-2">
        <article className="panel gold">
          <h2>Daily life</h2>
          <p>Rich people had big houses and servants. Poor people worked hard. Gas lamps lit the streets.</p>
          <img className="scene" src="/art/lamps.jpg" alt="A street of glowing gas lamps" />
        </article>
        <article className="card">
          <h2>Inventions</h2>
          <p>Railways, stamps, photographs, street lamps, clean sewers, and drinking water changed life.</p>
          <img className="scene" src="/art/inventions.jpg" alt="A stamp, a camera, water, and a lamp" />
        </article>
      </section>

      <section>
        <h2>Time</h2>
        <div className="time-strip">
          {['1837 Queen', '1840 Stamps', '1851 Exhibition', '1870 Schools', '1901 End'].map((item) => (
            <div key={item} className="time-pill">{item}</div>
          ))}
        </div>
        <img className="scene" src="/art/palace.jpg" alt="A glass palace on a green lawn" />
      </section>

      <section className="card">
        <h2>Find a person</h2>
        <input className="field" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search people" />
        <ul>
          {(search ? found : people.slice(0, 4)).map((person) => (
            <li key={person.id}>
              <Link to="/people/$personId" params={{ personId: person.id }}>{person.name}</Link>
              {' · '}{person.role}
            </li>
          ))}
        </ul>
        <Link to="/places">See places</Link>
      </section>

      <button type="button" className="big-btn" style={{ background: 'var(--color-red)', color: 'var(--color-lace)', textAlign: 'center' }} onClick={() => setSurprise(facts[Math.floor(Math.random() * facts.length)])}>
        Surprise me
      </button>
      {surprise && <p className="card">{surprise}</p>}
    </div>
  )
}
