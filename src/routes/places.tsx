import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/places')({
  component: Places,
})

function Places() {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">Places</h1>
      <p>Scotland is the north of Britain. England, Wales, and Ireland are part of the map too.</p>
      <p>Balmoral is a Highland castle. Glasgow built ships. Edinburgh had schools and publishers. London is in the south.</p>
      <p>A railway ran from London toward Scotland.</p>
    </div>
  )
}
