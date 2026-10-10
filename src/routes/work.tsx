import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">Work</h1>
      <p>Label Scotland, Balmoral, Edinburgh, Glasgow, London, and the railway.</p>
      <p>A big house had many rooms. A poor home might have one room.</p>
      <p>Many clan tartans became popular because Victorians liked a Highland holiday look. Glasgow built ships.</p>
    </div>
  )
}
