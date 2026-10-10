import { createRootRoute, HeadContent, Link, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import appCss from '../styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Every Victorian Ever' },
      { name: 'description', content: 'A bright guide to Victorian life and times in Britain, 1837 to 1901.' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

const links = [
  ['/', 'Home'],
  ['/people', 'People'],
  ['/places', 'Places'],
  ['/beliefs', 'Beliefs'],
  ['/time', 'Time'],
  ['/quiz', 'Quiz'],
  ['/work', 'Work'],
  ['/about', 'About'],
] as const

function RootComponent() {
  const [showPWA, setShowPWA] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    if (isIOS && !isStandalone) setShowPWA(true)
  }, [])

  return (
    <div className="site-wrap">
      <header className="site-header">
        <div className="site-title">Every Victorian Ever</div>
        <nav className="site-nav" aria-label="Pages">
          {links.map(([to, label]) => (
            <Link key={to} to={to} className="nav-btn">
              {label}
            </Link>
          ))}
        </nav>
      </header>
      {showPWA && (
        <div className="pwa-note">
          To add to iPhone or iPad: Tap Share, then Add to Home Screen.
          <button type="button" onClick={() => setShowPWA(false)}>Close</button>
        </div>
      )}
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}
