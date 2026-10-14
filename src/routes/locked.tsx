import { createFileRoute } from '@tanstack/react-router'
import { Paywall } from '../components/Paywall'
import { safeNext } from '../gate'

export const Route = createFileRoute('/locked')({
  validateSearch: (search: Record<string, unknown>) => ({
    next: safeNext(typeof search.next === 'string' ? search.next : ''),
  }),
  component: LockedPage,
})

function LockedPage() {
  const { next } = Route.useSearch()
  return <Paywall next={next} />
}
