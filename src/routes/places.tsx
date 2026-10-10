import { createFileRoute } from '@tanstack/react-router'
import { InteractiveMap } from '../components/InteractiveMap'

export const Route = createFileRoute('/places')({
  component: Places,
})

function Places() {
  return (
    <div className="page">
      <h1>Places</h1>
      <p>This map is for exploring. Each colour is a region in Victorian times. The words change when you choose a land or a city. The pictures are old paintings and photographs, free to use because they are in the public domain.</p>
      <InteractiveMap />
    </div>
  )
}
