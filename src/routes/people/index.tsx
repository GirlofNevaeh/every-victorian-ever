import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { PersonSearch } from '../../components/PersonSearch'
import { people, type Period, type Role } from '../../data/people'

export const Route = createFileRoute('/people/')({
  component: PeoplePage,
})

const roles: Role[] = ['Queen', 'Prince', 'Nurse', 'Inventor', 'Writer', 'Scientist', 'Explorer', 'Reformer', 'Artist', 'Preacher']
const periods: Period[] = ['1837-1860', '1861-1880', '1881-1901']

function PeoplePage() {
  const [search, setSearch] = useState('')
  const [role, setRole] = useState<Role | ''>('')
  const [period, setPeriod] = useState<Period | ''>('')

  const matches = (person: (typeof people)[number], skipRole = false, skipPeriod = false) => {
    const text = (person.name + person.bio + person.family + person.faith + person.more).toLowerCase().includes(search.trim().toLowerCase())
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
    <div className="page">
      <h1>People</h1>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>Scottish names here include Victoria's Highlands, Bell, Maxwell, Livingstone, Slessor, Stevenson, Hardie, MacDonald, Lang, Barrie, Paton, and Chalmers.</p>
      </aside>
      <PersonSearch id="people-search" label="Search names or stories" onApply={setSearch} />
      <div className="chips">
        <button type="button" className={role === '' ? 'chip on' : 'chip'} onClick={() => setRole('')}>All roles</button>
        {roles.map((item) => (
          <button key={item} type="button" className={role === item ? 'chip on' : 'chip'} onClick={() => setRole(item)} disabled={roleCounts[item] === 0}>
            {item}
          </button>
        ))}
      </div>
      <div className="chips">
        <button type="button" className={period === '' ? 'chip on' : 'chip'} onClick={() => setPeriod('')}>All years</button>
        {periods.map((item) => (
          <button key={item} type="button" className={period === item ? 'chip on' : 'chip'} onClick={() => setPeriod(item)} disabled={periodCounts[item] === 0}>
            {item}
          </button>
        ))}
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
