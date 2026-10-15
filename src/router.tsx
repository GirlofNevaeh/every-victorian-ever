import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { previewPathRewrite } from './preview-path'

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: false,
    defaultPreload: false,
    rewrite: previewPathRewrite(),
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
