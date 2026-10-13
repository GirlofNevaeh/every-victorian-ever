import { createFileRoute } from '@tanstack/react-router'
import { InteractiveMap } from '../components/InteractiveMap'
import { useT } from '../i18n/language'

export const Route = createFileRoute('/places')({
  component: Places,
})

function Places() {
  const t = useT()
  return (
    <div className="page">
      <h1>{t('Places')}</h1>
      <p>{t('This map is for exploring. Each colour is a region in Victorian times. The words change when you choose a land or a city. The pictures are old paintings and photographs, free to use because they are in the public domain.')}</p>
      <InteractiveMap />
    </div>
  )
}
