import { createFileRoute } from '@tanstack/react-router'
import { ScotlandNote } from '../components/ScotlandNote'

export const Route = createFileRoute('/beliefs')({
  component: Beliefs,
})

function Beliefs() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Beliefs</h1>
      <section className="rounded-lg bg-white p-4 shadow space-y-2">
        <h2 className="font-bold">Sunday and charity</h2>
        <p>Many people went to church on Sunday.</p>
        <p>They gave money and help to the poor. That was charity.</p>
      </section>
      <section className="rounded-lg bg-[#fff1c9] p-4 space-y-2">
        <h2 className="font-bold">Progress</h2>
        <p>Many people thought the world was getting better. They called this progress.</p>
        <p>New railways, lamps, and clean water were part of that idea.</p>
      </section>
      <section className="rounded-lg border border-[var(--color-soot)] p-4 space-y-2">
        <h2 className="font-bold">Not one idea</h2>
        <p>People did not all believe the same thing.</p>
        <p>Many Victorians said the empire was glorious. Ruling faraway lands was not fair to the people who already lived there.</p>
      </section>
      <ScotlandNote text="People in Edinburgh and Glasgow also argued about church, work, and progress." />
    </div>
  )
}
