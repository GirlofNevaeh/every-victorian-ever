import { defineHandler } from 'nitro'
import { useStorage } from 'nitro/storage'
import { keyIsValid } from '../../src/server/gate.server'

function cookieValue(header: string | null, name: string) {
  if (!header) return ''
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=')
    if (key === name) return decodeURIComponent(rest.join('='))
  }
  return ''
}

export default defineHandler(async (event) => {
  const method = event.req.method
  if (method !== 'GET' && method !== 'HEAD') {
    return new Response(null, { status: 405 })
  }
  const saved = cookieValue(event.req.headers.get('cookie'), 'eve-access')
  if (!saved || !keyIsValid(saved)) {
    return new Response(null, {
      status: 307,
      headers: { location: '/locked?next=%2Fquiz.pdf' },
    })
  }
  const file = await useStorage().getItemRaw('assets:server:quiz.pdf')
  if (!file) return new Response('The quiz file is missing.', { status: 404 })
  const bytes = file instanceof Uint8Array ? file : new Uint8Array(file as ArrayBuffer)
  const headers = {
    'content-type': 'application/pdf',
    'content-disposition': 'inline; filename="quiz.pdf"',
    'content-length': String(bytes.byteLength),
    'cache-control': 'private, no-store',
  }
  if (method === 'HEAD') return new Response(null, { headers })
  return new Response(bytes, { headers })
})
