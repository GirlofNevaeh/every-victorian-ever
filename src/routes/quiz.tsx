import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/quiz')({
  component: Quiz,
})

const question = {
  text: 'Where did Queen Victoria like to stay in Scotland?',
  options: ['Balmoral', 'Paris', 'Glasgow'],
  answer: 0,
}

function Quiz() {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <h1 className="text-2xl font-bold">Quiz</h1>
      <p>{question.text}</p>
      {question.options.map((option, index) => (
        <button
          key={option}
          type="button"
          className="block w-full text-left bg-white border rounded p-3"
          onClick={() => setPicked(index)}
        >
          {option}
        </button>
      ))}
      {picked !== null && (
        <p>{picked === question.answer ? 'Correct.' : 'Not quite. The answer is Balmoral.'}</p>
      )}
    </div>
  )
}
