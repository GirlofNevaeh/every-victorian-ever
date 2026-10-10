import { createFileRoute, Link } from '@tanstack/react-router'
import { people } from '../../data/people'

export const Route = createFileRoute('/people/$personId')({
  component: PersonPage,
})

function PersonPage() {
  const { personId } = Route.useParams()
  const person = people.find((item) => item.id === personId)
  if (!person) {
    return (
      <p>
        That person is not in the list. <Link to="/people" className="underline">Back to people</Link>
      </p>
    )
  }
  return (
    <article className="card" style={{ display: 'grid', gap: 8 }}>
      <h1>{person.name}</h1>
      <p className="tag">{person.role} · {person.period}{person.scottish ? ' · Scottish' : ''}</p>
      <p>{person.bio}</p>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>{person.scottish ? 'Scotland was part of this life.' : 'Scotland was part of Victorian Britain while this person lived.'}</p>
      </aside>
      <Link to="/people">Back to people</Link>
    </article>
  )
}
