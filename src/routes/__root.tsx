import { createRootRoute, HeadContent, Link, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import appCss from '../styles/app.css?url'
import { siteImages } from '../data/images'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Every Victorian Ever' },
      { name: 'description', content: 'A bright guide to Victorian life and times in Britain, 1837 to 1901.' },
      { name: 'theme-color', content: '#E7B23C' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      ...siteImages.map((image) => ({ rel: 'preload', href: image.src, as: 'image' })),
    ],
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
  ['/projects', 'Projects'],
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
    for (const image of siteImages) {
      const preload = new Image()
      preload.src = image.src
    }
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    if (isIOS && !isStandalone) setShowPWA(true)
  }, [])

  return (
    <div>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="bar">
          <Link to="/" className="brand">Every Victorian Ever</Link>
          <p className="age">Ages 5–12</p>
        </div>
        <nav className="site-nav" aria-label="Main">
          {links.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="nav-btn"
              activeOptions={{ exact: to === '/' }}
              activeProps={{ className: 'nav-btn active' }}
            >
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
      <main id="main">
        <Outlet />
      </main>
    </div>
  )
}
