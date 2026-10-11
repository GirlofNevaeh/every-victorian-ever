import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { PersonSearch } from '../components/PersonSearch'
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
]

function Home() {
  const [surprise, setSurprise] = useState('')

  return (
    <div>
      <section className="band band-pine">
        <div className="wrap split">
          <div>
            <p className="display" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>Ages 5–12</p>
            <h1 className="display hero-title">Every Victorian Ever</h1>
            <p className="lead">A bright guide to Britain from 1837 to 1901. Scotland is part of the story.</p>
            <PersonSearch id="home-search" />
          </div>
          <img className="scene" src="/art/castle.jpg" alt="A sunny Highland castle" width={1200} height={675} />
        </div>
      </section>

      <section className="band band-paper">
        <div className="wrap">
          <button type="button" className="surprise" onClick={() => setSurprise(facts[Math.floor(Math.random() * facts.length)])}>
            <strong>Surprise me</strong>
            <span>{surprise || 'Tap for a Victorian fact.'}</span>
          </button>
        </div>
      </section>

      <section className="band band-gold">
        <div className="wrap split">
          <img className="scene" src="/art/homes.jpg" alt="A big house beside a one-room home" width={1200} height={675} />
          <div>
            <h2 className="display section-title">Queen and home</h2>
            <p className="lead">Queen Victoria ruled from 1837 to 1901. She loved Scotland and stayed at Balmoral.</p>
            <p className="copy">A rich home had many rooms. A poor home might have one room. Families lived in both.</p>
          </div>
        </div>
      </section>

      <section className="band band-pine">
        <div className="wrap split">
          <div>
            <h2 className="display section-title">Railway</h2>
            <p className="lead">Railways let people travel faster than horses.</p>
            <p className="copy">Trains went from London toward Scotland. Glasgow built ships and engines.</p>
          </div>
          <img className="scene" src="/art/train.jpg" alt="A green steam train" width={1200} height={675} />
        </div>
      </section>

      <section className="band band-paper">
        <div className="wrap split">
          <img className="scene" src="/art/school.jpg" alt="A bright schoolroom" width={1200} height={675} />
          <div>
            <h2 className="display section-title">School</h2>
            <p className="lead">Early on, many children worked long days.</p>
            <p className="copy">Later laws sent more children to school.</p>
          </div>
        </div>
      </section>

      <section className="band band-red">
        <div className="wrap split">
          <div>
            <h2 className="display section-title">Scotland</h2>
            <p className="lead">Balmoral is a Highland castle. Edinburgh had schools, publishers, and a New Town.</p>
            <p className="copy">Many clan tartans became popular because Victorians liked a Highland holiday look.</p>
            <p className="note note-gold">Glasgow built ships and engines.</p>
          </div>
          <img className="scene" src="/art/ships.jpg" alt="A ship in a riverside yard" width={1200} height={675} />
        </div>
      </section>

      <section className="band band-cloud">
        <div className="wrap split">
          <img className="scene" src="/art/lamps.jpg" alt="A street of gas lamps" width={1200} height={675} />
          <div>
            <h2 className="display section-title">Daily life</h2>
            <p className="lead">Gas lamps lit the streets.</p>
            <p className="copy">Rich people had servants and many rooms. Poor people worked hard in small homes.</p>
          </div>
        </div>
      </section>

      <section className="band band-gold">
        <div className="wrap split">
          <div>
            <h2 className="display section-title">Inventions</h2>
            <p className="lead">Railways, stamps, photographs, street lamps, clean sewers, and drinking water changed life.</p>
            <div className="time-strip">
              {['1837 Queen', '1840 Stamps', '1851 Exhibition', '1870 Schools', '1901 End'].map((item) => (
                <div key={item} className="time-pill">{item}</div>
              ))}
            </div>
          </div>
          <img className="scene" src="/art/inventions.jpg" alt="A stamp, a camera, water, and a lamp" width={900} height={900} />
        </div>
      </section>

      <section className="band band-cloud">
        <div className="wrap">
          <h2 className="display section-title">Love, faith, and fairies</h2>
          <p className="lead">The people list is bigger now. Each life has a family story and a belief, not only a job.</p>
          <div className="cards">
            <Link to="/people/$personId" params={{ personId: 'macdonald' }} className="mini">
              <h3 className="display">George MacDonald</h3>
              <p className="copy">A Scottish minister who wrote fairy tales about courage and a loving God.</p>
            </Link>
            <Link to="/people/$personId" params={{ personId: 'doyle' }} className="mini">
              <h3 className="display">Arthur Conan Doyle</h3>
              <p className="copy">He invented Holmes, believed in spirits, and defended fairy photos that were not what they seemed.</p>
            </Link>
            <Link to="/people/$personId" params={{ personId: 'ebrowning' }} className="mini">
              <h3 className="display">Elizabeth Barrett Browning</h3>
              <p className="copy">She left a strict father and married the poet she loved.</p>
            </Link>
          </div>
          <p className="copy"><Link to="/beliefs" style={{ fontWeight: 800 }}>Read the Beliefs page</Link></p>
        </div>
      </section>

      <section className="band band-paper">
        <div className="wrap">
          <h2 className="display section-title">People</h2>
          <div className="cards">
            {people.slice(0, 6).map((person) => (
              <Link key={person.id} to="/people/$personId" params={{ personId: person.id }} className="mini">
                <h3 className="display">{person.name}</h3>
                <p className="tag">{person.role}</p>
                <p className="copy">{person.bio}</p>
              </Link>
            ))}
          </div>
          <p className="copy"><Link to="/people" style={{ fontWeight: 800 }}>All {people.length} people</Link></p>
        </div>
      </section>
    </div>
  )
}
