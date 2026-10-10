import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  component: People,
})

function People() {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">People</h1>
      <p>Queen Victoria loved Scotland and stayed at Balmoral.</p>
      <p>Florence Nightingale made hospitals cleaner. Mary Seacole helped soldiers with food and care.</p>
      <p>Alexander Graham Bell, from Scotland, invented the telephone.</p>
      <p>Charles Darwin studied animals and plants.</p>
    </div>
  )
}
