import { imageBySrc } from '../data/images'
import { useT } from '../i18n/language'

export function Picture({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const t = useT()
  const known = imageBySrc[src]
  return (
    <img
      className="scene"
      src={src}
      alt={t(alt)}
      width={known?.width}
      height={known?.height}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
    />
  )
}