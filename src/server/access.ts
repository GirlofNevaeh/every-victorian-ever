import { createServerFn } from '@tanstack/react-start'

export const readAccess = createServerFn({ method: 'POST' }).handler(async () => {
  const { hasAccess } = await import('./gate.server')
  return { allowed: hasAccess() }
})

export const unlockSite = createServerFn({ method: 'POST' })
  .validator((data: unknown) => {
    const key = data && typeof data === 'object' && 'key' in data ? (data as { key: unknown }).key : ''
    if (typeof key !== 'string' || key.length > 80) return { key: '' }
    return { key }
  })
  .handler(async ({ data }) => {
    const { unlock } = await import('./gate.server')
    return { ok: unlock(data.key) }
  })
