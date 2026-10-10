import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { people, type Period, type Role } from '../../data/people'
import { ScotlandNote } from '../../components/ScotlandNote'

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
    <div className="mx-auto max-w-4xl space-y-4">
      <h1 className="text-2xl font-bold">People</h1>
      <ScotlandNote text="Scottish names here include Bell, Maxwell, Livingstone, Slessor, Stevenson, Hardie, Kelvin, and more." />
      <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search names or stories" className="w-full rounded border p-2" />
      <div className="flex flex-wrap gap-2">
        <select value={role} onChange={(event) => setRole(event.target.value as Role | '')} className="rounded border p-2">
          <option value="">All roles</option>
          {roles.map((item) => (
            <option key={item} value={item} disabled={roleCounts[item] === 0} className={roleCounts[item] === 0 ? 'text-gray-400' : ''}>
              {item}
            </option>
          ))}
        </select>
        <select value={period} onChange={(event) => setPeriod(event.target.value as Period | '')} className="rounded border p-2">
          <option value="">All years</option>
          {periods.map((item) => (
            <option key={item} value={item} disabled={periodCounts[item] === 0} className={periodCounts[item] === 0 ? 'text-gray-400' : ''}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {shown.map((person) => (
          <Link key={person.id} to="/people/$personId" params={{ personId: person.id }} className="rounded bg-white p-3 shadow">
            <h2 className="font-bold">{person.name}</h2>
            <p className="text-sm">{person.role} · {person.period}</p>
            <p className="mt-1 text-sm">{person.bio}</p>
            {person.scottish && <p className="text-xs text-[var(--color-pine)]">Scottish</p>}
          </Link>
        ))}
      </div>
      {shown.length === 0 && <p>No people match. Try another search.</p>}
    </div>
  )
}
