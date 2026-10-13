import { Link } from '@tanstack/react-router'
import { useMemo, useState, type FormEvent } from 'react'
import { people, type Person } from '../data/people'
import { useT } from '../i18n/language'

function matches(person: Person, query: string, t: (text: string) => string) {
  const blob = [person.name, person.role, t(person.role), person.bio, t(person.bio), person.family, t(person.family), person.faith, t(person.faith), person.more, t(person.more)].join(' ').toLowerCase()
  return blob.includes(query)
}

function completePerson(query: string) {
  if (!query) return null
  const exact = people.filter((person) => person.name.toLowerCase() === query)
  if (exact.length === 1) return exact[0]
  const byWord = people.filter((person) => person.name.toLowerCase().split(/\s+/).includes(query))
  return byWord.length === 1 ? byWord[0] : null
}

export function PersonSearch({ id, label = 'Find a person', onApply }: { id: string; label?: string; onApply?: (query: string) => void }) {
  const t = useT()
  const [term, setTerm] = useState('')
  const [applied, setApplied] = useState('')
  const query = term.trim().toLowerCase()
  const complete = useMemo(() => completePerson(query), [query])
  const ready = Boolean(complete) || (applied !== '' && applied === term.trim())
  const found = useMemo(() => {
    if (!ready) return []
    if (complete) return [complete]
    const q = applied.trim().toLowerCase()
    if (!q) return []
    return people.filter((person) => matches(person, q, t)).slice(0, 8)
  }, [applied, complete, ready, t])

  function run(event: FormEvent) {
    event.preventDefault()
    const next = term.trim()
    setApplied(next)
    onApply?.(complete ? complete.name : next)
  }

  return (
    <form className="search-box" onSubmit={run}>
      <label htmlFor={id}>{t(label)}</label>
      <div className="search-row">
        <input
          id={id}
          className="field"
          value={term}
          onChange={(event) => {
            const next = event.target.value
            setTerm(next)
            const trimmed = next.trim()
            const hit = completePerson(trimmed.toLowerCase())
            if (hit) onApply?.(hit.name)
            else if (trimmed !== applied) onApply?.('')
          }}
          placeholder={t('Type a full name, like Mary Seacole')}
          autoComplete="off"
        />
        <button type="submit">{t('SEARCH')}</button>
      </div>
      {ready && (
        <div className="search-hit" aria-live="polite">
          <p className="tag">{t('SEARCH')}</p>
          {found.length === 0 && <p>{t('No one matches that term. Try a full name or a surname, like Seacole.')}</p>}
          {found.map((person) => (
            <Link key={person.id} to="/people/$personId" params={{ personId: person.id }} className="search-card">
              <strong>{person.name}</strong>
              <span>{t(person.role)}{person.scottish ? ` · ${t('Scottish')}` : ''}</span>
              <span>{t(person.bio)}</span>
            </Link>
          ))}
        </div>
      )}
    </form>
  )
}
