import { createFileRoute, Link } from '@tanstack/react-router'
import { people } from '../../data/people'
import { useT } from '../../i18n/language'

export const Route = createFileRoute('/people/$personId')({
  component: PersonPage,
})

function PersonPage() {
  const { personId } = Route.useParams()
  const person = people.find((item) => item.id === personId)
  const t = useT()
  if (!person) {
    return (
      <p>
        {t('That person is not in the list.')} <Link to="/people" className="underline">{t('Back to people')}</Link>
      </p>
    )
  }
  return (
    <article className="page story">
      <h1>{person.name}</h1>
      <p className="tag">{t(person.role)} · {person.period}{person.scottish ? ` · ${t('Scottish')}` : ''}</p>
      <section className="card">
        <h2>{t('The story')}</h2>
        <p>{t(person.bio)}</p>
        <p>{t(person.more)}</p>
      </section>
      <section className="panel gold">
        <h2>{t('Family and love')}</h2>
        <p>{t(person.family)}</p>
      </section>
      <section className="card">
        <h2>{t('Faith')}</h2>
        <p>{t(person.faith)}</p>
      </section>
      <aside className="scotland">
        <strong>{t('Scotland')}</strong>
        <p>{t(person.scottish ? 'Scotland was part of this life, not a side note.' : 'This life belongs to Victorian Britain, and Scotland was part of that same kingdom. Balmoral, Glasgow, and Edinburgh were in the news while this person lived.')}</p>
      </aside>
      <Link to="/people" className="big-btn">{t('Back to people')}</Link>
    </article>
  )
}
