import { createFileRoute } from '@tanstack/react-router'
import { Picture } from '../components/Picture'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="page">
      <h1>About</h1>
      <Picture src="/photos/balmoral.jpg" alt="A painting of Balmoral Castle, shown in full" priority />
      <p>Victorian life ran from 1837 to 1901 in Britain.</p>
      <p>Scotland was part of that life. Queen Victoria loved Balmoral. Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
      <p>Many children worked long days in the early years. Later laws sent more of them to school.</p>
      <p>Inventions changed homes and travel. People used railways, stamps, photographs, street lamps, clean sewers, and drinking water.</p>
      <div className="grid-2">
        <Picture src="/art/train.jpg" alt="A steam train, shown in full" />
        <Picture src="/photos/edinburgh.jpg" alt="Edinburgh Castle in 1861, the whole picture" />
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
