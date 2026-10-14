export function safeNext(value: string) {
  let path = value
  try {
    path = decodeURIComponent(value)
  } catch {
    return '/people'
  }
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('\\') || path.includes('://') || path.includes('..')) {
    return '/people'
  }
  const pathname = path.split(/[?#]/)[0]
  if (pathname === '/' || pathname === '/locked') return '/people'
  return path
}
