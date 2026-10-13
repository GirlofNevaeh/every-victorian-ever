import { createHash, timingSafeEqual } from 'node:crypto'
import { getCookie, getRequest, setCookie } from '@tanstack/react-start/server'

const COOKIE = 'eve-access'

const hashes = new Set([
  'b2726f4fbcd74868c70e10b62b70c73481bf544a729e57ca0d63aa09407fee52',
  '21ebfd60c3b8700c8dae2dee8d5e58a524e0b3600a4565b5046d01647391c34f',
  'e413d5e5471e786cd6a6110046f61e65610b45e774baf5a298d73c35bcd161ca',
  '703e41800eda70227d50bd17283f5afda37f45cda4d35ccb72dfe880dd779fee',
  '5823c4b42f5638e6566a932f177bd146e890845afe460253b5a9a043b4a9b78b',
  '9d53e8c3dcfaea97636d4e986bd40f870a2f8b43bbeaa316ac1212f48d31527b',
  '4a0557086460d30a25c67c9fa305f306f9d6df39bb0c069c822bf2ed7ef51a56',
  '4c94eb87772d7c02315abf2dec8d100e617a5498afdd8ef57817715fac6d95b2',
])

function normalize(key: string) {
  return key.trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
}

function digest(key: string) {
  return createHash('sha256').update(normalize(key)).digest()
}

function allowedDigests() {
  const extra = (process.env.ACCESS_KEYS ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => digest(item))
  return [...hashes].map((item) => Buffer.from(item, 'hex')).concat(extra)
}

export function keyIsValid(key: string) {
  const got = digest(key)
  if (normalize(key).length < 8) return false
  return allowedDigests().some((item) => item.length === got.length && timingSafeEqual(item, got))
}

export function hasAccess() {
  const saved = getCookie(COOKIE)
  return Boolean(saved && keyIsValid(saved))
}

export function unlock(key: string) {
  if (!keyIsValid(key)) return false
  const request = getRequest()
  const proto = request.headers.get('x-forwarded-proto') ?? new URL(request.url).protocol.replace(':', '')
  setCookie(COOKIE, normalize(key), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 400,
    secure: proto === 'https',
  })
  return true
}
