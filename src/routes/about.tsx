import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">About</h1>
      <p>Victorian life was from 1837 to 1901 in Britain. Scotland was part of it.</p>
      <p>Queen Victoria loved Balmoral. Glasgow built ships and engines. Edinburgh had schools, publishers, and a New Town.</p>
      <p>Many children worked long days in the early years. Later laws sent more of them to school.</p>
    </div>
  )
}
