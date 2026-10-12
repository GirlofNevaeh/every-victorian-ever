import { createFileRoute, Link } from '@tanstack/react-router'
import { BritainMap } from '../components/BritainMap'

export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  return (
    <div className="page">
      <h1>Work</h1>
      <p>Print this page. Write on the lines. Ask a grown-up if you want help with the harder questions.</p>
      <p>For bigger tasks, open <Link to="/projects">Projects</Link>. There is work for Primary 1 to Primary 7.</p>

      <section className="card">
        <h2>Label the map</h2>
        <BritainMap blank />
        <p>The shapes are the real coasts of Britain and Ireland. Green is Britain, including Northern Ireland. Gold is the rest of Ireland. The red line is a railway from London toward Scotland.</p>
        <p>Write these names on the right places: Scotland, England, Wales, Ireland, London, Birmingham, Cardiff, Edinburgh, Glasgow, Balmoral, Belfast, Dublin.</p>
      </section>

      <section className="panel cream">
        <h2>Two homes</h2>
        <img className="scene" src="/art/homes.jpg" alt="A big house and a small home" />
        <p>How are these homes different? Who might live in each one? What would Sunday feel like in each house?</p>
      </section>

      <section className="card">
        <h2>Fairy or fact?</h2>
        <p>Read about the Cottingley photographs on the Beliefs page. Then answer in sentences.</p>
        <p>1. What did Arthur Conan Doyle want to be true?</p>
        <p>2. What did Elsie and Frances later say they had used?</p>
        <p>3. Why does the year 1917 matter if Victoria died in 1901?</p>
      </section>

      <section className="card">
        <h2>Family and faith</h2>
        <p>Pick one person. Write four lines.</p>
        <p>Who were they? Who did they love, marry, or look after? What did they believe? What is one thing a child in 1890 might have admired or argued with?</p>
      </section>

      <section className="scotland">
        <strong>Scotland page</strong>
        <p>Balmoral is a Highland castle where Queen Victoria stayed. Mark it north of Edinburgh.</p>
        <p>Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
        <p>In 1843 the Disruption split the Scottish church. Thomas Chalmers said a congregation should choose its own minister.</p>
        <p>Tartan became popular because many Victorians liked a Highland holiday look. That is fashion, not the whole of Scottish life.</p>
        <img className="scene" src="/art/castle.jpg" alt="A Highland castle" />
      </section>
    </div>
  )
}
