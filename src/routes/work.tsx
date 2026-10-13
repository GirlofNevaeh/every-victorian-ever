import { createFileRoute, Link } from '@tanstack/react-router'
import { BritainMap } from '../components/BritainMap'
import { Picture } from '../components/Picture'
import { useT } from '../i18n/language'

export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  const t = useT()
  return (
    <div className="page">
      <h1>{t('Work')}</h1>
      <p>{t('Print this page. Write on the lines. Ask a grown-up if you want help with the harder questions.')}</p>
      <p>{t('For bigger tasks, open')} <Link to="/projects">{t('Projects')}</Link>. {t('There is work for Age 5-6 to Age 11-12.')}</p>

      <section className="card">
        <h2>{t('Label the map')}</h2>
        <BritainMap blank />
        <p>{t('The shapes are the real coasts of Britain and Ireland. Green is Britain, including Northern Ireland. Gold is the rest of Ireland. The red line is a railway from London toward Scotland.')}</p>
        <p>{t('Write these names on the right places: Scotland, England, Wales, Ireland, London, Birmingham, Cardiff, Edinburgh, Glasgow, Balmoral, Belfast, Dublin.')}</p>
      </section>

      <section className="panel cream">
        <h2>{t('Two homes')}</h2>
        <Picture src="/art/homes.jpg" alt="A big house and a small home, shown in full" />
        <p>{t('How are these homes different? Who might live in each one? What would Sunday feel like in each house?')}</p>
      </section>

      <section className="card">
        <h2>{t('Fairy or fact?')}</h2>
        <p>{t('Read about the Cottingley photographs on the Beliefs page. Then answer in sentences.')}</p>
        <p>{t('1. What did Arthur Conan Doyle want to be true?')}</p>
        <p>{t('2. What did Elsie and Frances later say they had used?')}</p>
        <p>{t('3. Why does the year 1917 matter if Victoria died in 1901?')}</p>
      </section>

      <section className="card">
        <h2>{t('Family and faith')}</h2>
        <p>{t('Pick one person. Write four lines.')}</p>
        <p>{t('Who were they? Who did they love, marry, or look after? What did they believe? What is one thing a child in 1890 might have admired or argued with?')}</p>
      </section>

      <section className="scotland">
        <strong>{t('Scotland page')}</strong>
        <p>{t('Balmoral is a Highland castle where Queen Victoria stayed. Mark it north of Edinburgh.')}</p>
        <p>{t('Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.')}</p>
        <p>{t('In 1843 the Disruption split the Scottish church. Thomas Chalmers said a congregation should choose its own minister.')}</p>
        <p>{t('Tartan became popular because many Victorians liked a Highland holiday look. That is fashion, not the whole of Scottish life.')}</p>
        <Picture src="/photos/balmoral.jpg" alt="Balmoral Castle, the whole painting" />
      </section>
    </div>
  )
}
