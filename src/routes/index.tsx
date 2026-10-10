import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <p>Queen Victoria ruled Britain from 1837 to 1901. She loved Scotland and stayed at Balmoral.</p>
      <p>Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
      <p>Railways, stamps, photographs, street lamps, and clean water changed daily life.</p>
    </div>
  )
}
