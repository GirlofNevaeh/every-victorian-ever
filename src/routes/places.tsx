import { createFileRoute } from '@tanstack/react-router'
import { BritainMap, RailwayMap } from '../components/BritainMap'
import { ScotlandNote } from '../components/ScotlandNote'

export const Route = createFileRoute('/places')({
  component: Places,
})

function Places() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">Places</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-bold">Britain</h2>
        <BritainMap />
        <p>Scotland is the pine green part in the north. England is gold. Wales and Ireland are marked too.</p>
        <p>City stops: Edinburgh, Glasgow, Balmoral, and London.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold">Railway toward Scotland</h2>
        <RailwayMap />
        <p>Follow the line from London toward Scotland. Glasgow built ships and engines.</p>
      </section>
      <ScotlandNote text="Balmoral is in the Highlands. Edinburgh had schools, publishers, and a New Town." />
    </div>
  )
}
