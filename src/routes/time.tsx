import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/time')({
  component: Time,
})

function Time() {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">Time</h1>
      <p>1837. Victoria becomes queen. Scotland is part of Britain.</p>
      <p>1840. The Penny Black stamp starts.</p>
      <p>1851. The Great Exhibition opens.</p>
      <p>Later, more children go to school. Glasgow builds more ships.</p>
      <p>1901. Victoria dies.</p>
    </div>
  )
}
