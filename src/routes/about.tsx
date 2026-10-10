import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h1>About</h1>
      <img className="scene" src="/art/castle.jpg" alt="A Highland castle" />
      <p>Victorian life ran from 1837 to 1901 in Britain.</p>
      <p>Scotland was part of that life. Queen Victoria loved Balmoral. Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
      <p>Many children worked long days in the early years. Later laws sent more of them to school.</p>
      <p>Inventions changed homes and travel. People used railways, stamps, photographs, street lamps, clean sewers, and drinking water.</p>
      <div className="grid-2">
        <img className="scene" src="/art/train.jpg" alt="A steam train" />
        <img className="scene" src="/art/homes.jpg" alt="Two kinds of home" />
      </div>
      <p>Some families had big houses. Some lived in one room. Many people went to church. Many believed in progress. They did not all believe the same thing.</p>
      <p>We are not sure about every small detail of daily life for every person.</p>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>Many clan tartans became popular because Victorians liked a Highland holiday look.</p>
      </aside>
    </div>
  )
}
