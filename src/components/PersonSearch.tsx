import { Link } from '@tanstack/react-router'
import { useMemo, useState, type FormEvent } from 'react'
import { people, type Person } from '../data/people'

function matches(person: Person, query: string) {
  return (person.name + ' ' + person.bio + ' ' + person.family + ' ' + person.faith + ' ' + person.more).toLowerCase().includes(query)
}

function completePerson(query: string) {
  if (!query) return null
  const exact = people.filter((person) => person.name.toLowerCase() === query)
  if (exact.length === 1) return exact[0]
  const byWord = people.filter((person) => person.name.toLowerCase().split(/\s+/).includes(query))
  return byWord.length === 1 ? byWord[0] : null
}

export function PersonSearch({ id, label = 'Find a person', onApply }: { id: string; label?: string; onApply?: (query: string) => void }) {
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
    return people.filter((person) => matches(person, q)).slice(0, 8)
  }, [applied, complete, ready])

  function run(event: FormEvent) {
    event.preventDefault()
    const next = term.trim()
    setApplied(next)
    onApply?.(complete ? complete.name : next)
  }

  return (
    <form className="search-box" onSubmit={run}>
      <label htmlFor={id}>{label}</label>
      <div className="search-row">
        <input
          id={id}
          className="field"
          value={term}
          onChange={(event) => {
            const next = event.target.value
            setTerm(next)
            const hit = completePerson(next.trim().toLowerCase())
            if (hit) onApply?.(hit.name)
          }}
          placeholder="Type a full name, like Mary Seacole"
          autoComplete="off"
        />
        <button type="submit">SEARCH</button>
      </div>
      {ready && (
        <div className="search-hit" aria-live="polite">
          <p className="tag">SEARCH</p>
          {found.length === 0 && <p>No one matches that term. Try a full name or a surname, like Seacole.</p>}
          {found.map((person) => (
            <Link key={person.id} to="/people/$personId" params={{ personId: person.id }} className="search-card">
              <strong>{person.name}</strong>
              <span>{person.role}{person.scottish ? ' · Scottish' : ''}</span>
              <span>{person.bio}</span>
            </Link>
          ))}
        </div>
      )}
    </form>
  )
}
