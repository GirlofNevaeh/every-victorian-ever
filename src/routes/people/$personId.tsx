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
    <article className="page story">
      <h1>{person.name}</h1>
      <p className="tag">{person.role} · {person.period}{person.scottish ? ' · Scottish' : ''}</p>
      <section className="card">
        <h2>The story</h2>
        <p>{person.bio}</p>
        <p>{person.more}</p>
      </section>
      <section className="panel gold">
        <h2>Family and love</h2>
        <p>{person.family}</p>
      </section>
      <section className="card">
        <h2>Faith</h2>
        <p>{person.faith}</p>
      </section>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>{person.scottish ? 'Scotland was part of this life, not a side note.' : 'This life belongs to Victorian Britain, and Scotland was part of that same kingdom. Balmoral, Glasgow, and Edinburgh were in the news while this person lived.'}</p>
      </aside>
      <Link to="/people" className="big-btn">Back to people</Link>
    </article>
  )
}
