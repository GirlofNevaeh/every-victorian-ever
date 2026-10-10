import { createFileRoute } from '@tanstack/react-router'
import { ScotlandNote } from '../components/ScotlandNote'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      <h1 className="text-2xl font-bold">About</h1>
      <p>Victorian life ran from 1837 to 1901 in Britain.</p>
      <p>Scotland was part of that life. Queen Victoria loved Balmoral. Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
      <p>Many children worked long days in the early years. Later laws sent more of them to school.</p>
      <p>Inventions changed homes and travel. People used railways, stamps, photographs, street lamps, clean sewers, and drinking water.</p>
      <p>Some families had big houses. Some lived in one room. Many people went to church. Many believed in progress. They did not all believe the same thing.</p>
      <p>We are not sure about every small detail of daily life for every person.</p>
      <ScotlandNote text="Many clan tartans became popular because Victorians liked a Highland holiday look." />
    </div>
  )
}
