import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { people, type Period, type Role } from '../../data/people'

export const Route = createFileRoute('/people/')({
  component: PeoplePage,
})

const roles: Role[] = ['Queen', 'Prince', 'Nurse', 'Inventor', 'Writer', 'Scientist', 'Explorer', 'Reformer']
const periods: Period[] = ['1837-1860', '1861-1880', '1881-1901']

function PeoplePage() {
  const [search, setSearch] = useState('')
  const [role, setRole] = useState<Role | ''>('')
  const [period, setPeriod] = useState<Period | ''>('')

  const matches = (person: (typeof people)[number], skipRole = false, skipPeriod = false) => {
    const text = (person.name + person.bio).toLowerCase().includes(search.trim().toLowerCase())
    const roleOk = skipRole || !role || person.role === role
    const periodOk = skipPeriod || !period || person.period === period
    return text && roleOk && periodOk
  }

  const shown = people.filter((person) => matches(person))
  const roleCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of roles) counts[item] = people.filter((person) => person.role === item && matches(person, true, false)).length
    return counts
  }, [search, period])
  const periodCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of periods) counts[item] = people.filter((person) => person.period === item && matches(person, false, true)).length
    return counts
  }, [search, role])

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h1>People</h1>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>Scottish names here include Bell, Maxwell, Livingstone, Slessor, Stevenson, Hardie, Kelvin, and more.</p>
      </aside>
      <input className="field" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search names or stories" />
      <div className="actions">
        <select className="field" value={role} onChange={(event) => setRole(event.target.value as Role | '')} style={{ width: 'auto' }}>
          <option value="">All roles</option>
          {roles.map((item) => (
            <option key={item} value={item} disabled={roleCounts[item] === 0}>
              {item}
            </option>
          ))}
        </select>
        <select className="field" value={period} onChange={(event) => setPeriod(event.target.value as Period | '')} style={{ width: 'auto' }}>
          <option value="">All years</option>
          {periods.map((item) => (
            <option key={item} value={item} disabled={periodCounts[item] === 0}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="person-grid">
        {shown.map((person) => (
          <Link key={person.id} to="/people/$personId" params={{ personId: person.id }} className="person-card">
            <h2>{person.name}</h2>
            <p className="tag">{person.role} · {person.period}{person.scottish ? ' · Scottish' : ''}</p>
            <p>{person.bio}</p>
          </Link>
        ))}
      </div>
      {shown.length === 0 && <p>No people match. Try another search.</p>}
    </div>
  )
}
