import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('../components/HomePage').then((mod) => ({ default: mod.HomePage })))

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Suspense fallback={null}>
      <HomePage />
    </Suspense>
  )
}
