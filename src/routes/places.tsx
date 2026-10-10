import { createFileRoute } from '@tanstack/react-router'
import { BritainMap, RailwayMap } from '../components/BritainMap'

export const Route = createFileRoute('/places')({
  component: Places,
})

function Places() {
  return (
    <div className="page">
      <h1>Places</h1>
      <section className="card">
        <h2>Britain</h2>
        <BritainMap />
        <p>This is a real coastline, not a stack of boxes. Scotland is the north of the green island. England is larger, to the south and east. Wales is the western bump. Northern Ireland is the green part of the western island. The gold land is the rest of Ireland.</p>
        <p>The red line is a railway from London through Birmingham toward Edinburgh and Glasgow. Balmoral sits in the Highlands, north of Edinburgh.</p>
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
