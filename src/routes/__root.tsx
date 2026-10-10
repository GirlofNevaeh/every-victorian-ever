import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import appCss from '../styles/app.css?url'
import { useEffect, useState } from 'react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: 'Every Victorian Ever' },
      { name: 'description', content: 'A bright guide to Victorian life and times in Britain, 1837 to 1901.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    links: [{ rel: 'stylesheet', href: appCss }]
  }),
  component: RootComponent
})

function RootComponent() {
  const [showPWA, setShowPWA] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    }
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    if (isIOS && !isStandalone) {
      setShowPWA(true)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-[var(--color-gold)] text-[var(--color-soot)] h-[160px] flex flex-col justify-between p-2 shadow-md overflow-hidden">
        <div className="text-center font-bold text-xl leading-tight">Every Victorian Ever</div>
        <nav className="grid grid-cols-4 gap-1 text-xs sm:text-sm">
          <Link to="/" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">Home</Link>
          <Link to="/people" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">People</Link>
          <Link to="/places" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">Places</Link>
          <Link to="/beliefs" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">Beliefs</Link>
          <Link to="/time" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">Time</Link>
          <Link to="/quiz" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">Quiz</Link>
          <Link to="/work" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">Work</Link>
          <Link to="/about" className="bg-[var(--color-pine)] text-[var(--color-lace)] rounded px-1 py-2 text-center leading-none">About</Link>
        </nav>
      </header>
      {showPWA && (
        <div className="bg-[var(--color-red)] text-[var(--color-lace)] p-2 text-center text-sm">
          To add to iPhone or iPad: Tap Share, then Add to Home Screen.
          <button onClick={() => setShowPWA(false)} className="ml-2 underline">Close</button>
        </div>
      )}
      <main className="flex-1 p-4 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  )
}
