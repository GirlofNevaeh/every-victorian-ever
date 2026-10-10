import { createFileRoute } from '@tanstack/react-router'
import { BritainMap, RailwayMap } from '../components/BritainMap'

export const Route = createFileRoute('/places')({
  component: Places,
})

function Places() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h1>Places</h1>
      <section className="card">
        <h2>Britain</h2>
        <BritainMap />
        <p>Scotland is the pine green part in the north. England is gold. Wales and Ireland are marked too.</p>
        <p>City stops: Edinburgh, Glasgow, Balmoral, and London.</p>
      </section>
      <section className="panel cream">
        <h2>Railway toward Scotland</h2>
        <RailwayMap />
        <p>Follow the line from London toward Scotland.</p>
        <img className="scene" src="/art/train.jpg" alt="A steam train" />
      </section>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>Balmoral is in the Highlands. Edinburgh had schools, publishers, and a New Town. Glasgow built ships and engines.</p>
        <img className="scene" src="/art/castle.jpg" alt="A Highland castle in sunshine" />
      </aside>
    </div>
  )
}
