import { imageBySrc } from '../data/images'

export function Picture({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const known = imageBySrc[src]
  return (
    <img
      className="scene"
      src={src}
      alt={alt}
      width={known?.width}
      height={known?.height}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
    />
  )
}
