import { createFileRoute, Link } from '@tanstack/react-router'
import { people } from '../../data/people'
import { ScotlandNote } from '../../components/ScotlandNote'

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
    <article className="mx-auto max-w-2xl space-y-3 rounded-lg bg-white p-5 shadow">
      <h1 className="text-2xl font-bold">{person.name}</h1>
      <p className="text-[var(--color-pine)]">{person.role} · {person.period}{person.scottish ? ' · Scottish' : ''}</p>
      <p>{person.bio}</p>
      <ScotlandNote text={person.scottish ? 'Scotland was part of this life.' : 'Scotland was part of Victorian Britain while this person lived.'} />
      <Link to="/people" className="inline-block underline text-[var(--color-pine)]">Back to people</Link>
    </article>
  )
}
