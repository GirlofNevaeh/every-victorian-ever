import { createFileRoute } from '@tanstack/react-router'
import { BritainMap } from '../components/BritainMap'

export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  return (
    <div className="page">
      <h1>Work</h1>
      <section className="card">
        <h2>Label the map</h2>
        <BritainMap blank />
        <p>Write these names in the right places: Scotland, England, Wales, Ireland, Balmoral, Edinburgh, Glasgow, London, and the railway.</p>
      </section>
      <section className="panel cream">
        <h2>Two homes</h2>
        <img className="scene" src="/art/homes.jpg" alt="A big house and a small home" />
        <p>How are these homes different? Who might live in each one?</p>
      </section>
      <section className="scotland">
        <strong>Scotland page</strong>
        <p>Balmoral: a Highland castle where Queen Victoria stayed.</p>
        <p>Tartan: many clan tartans became popular because Victorians liked a Highland holiday look.</p>
        <p>Glasgow: the city built ships and engines.</p>
        <img className="scene" src="/art/ships.jpg" alt="A ship being built" />
        <p>Edinburgh had schools, publishers, and a New Town.</p>
      </section>
      <p>You can print this page.</p>
    </div>
  )
}
