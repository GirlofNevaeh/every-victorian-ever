import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/beliefs')({
  component: Beliefs,
})

function Beliefs() {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">Beliefs</h1>
      <p>Many people went to church on Sunday. They gave money to charity.</p>
      <p>They thought the world was getting better. This was called progress.</p>
      <p>People did not all believe the same thing.</p>
      <p>Many Victorians said the empire was glorious. Ruling faraway lands was not fair to the people who already lived there.</p>
    </div>
  )
}
