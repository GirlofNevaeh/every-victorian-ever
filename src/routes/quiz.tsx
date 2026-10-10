import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { quizQuestions } from '../data/questions'
import { QuizFaces } from '../components/Faces'

export const Route = createFileRoute('/quiz')({
  component: Quiz,
})

type Phase = 'setup' | 'play' | 'done'

function Quiz() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [teams, setTeams] = useState(1)
  const [deck, setDeck] = useState(quizQuestions.slice(0, 10))
  const [mainLength, setMainLength] = useState(10)
  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<number[]>([0])
  const [picked, setPicked] = useState<number | null>(null)
  const [note, setNote] = useState('')
  const [sudden, setSudden] = useState(false)
  const [tiedRounds, setTiedRounds] = useState(0)
  const [winner, setWinner] = useState<number | null>(null)
  const [draw, setDraw] = useState(false)

  function start(count: number) {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, count)
    setDeck(shuffled)
    setMainLength(count)
    setScores(Array.from({ length: teams }, () => 0))
    setIndex(0)
    setPicked(null)
    setNote('')
    setSudden(false)
    setTiedRounds(0)
    setWinner(null)
    setDraw(false)
    setPhase('play')
  }

  function finish(nextScores: number[], nextTied: number, inSudden: boolean) {
    const top = Math.max(...nextScores)
    const leaders = nextScores.map((score, i) => (score === top ? i : -1)).filter((i) => i >= 0)
    if (leaders.length === 1) {
      setWinner(top > 0 ? leaders[0] : null)
      setDraw(false)
      setPhase('done')
      return
    }
    if (inSudden && nextTied >= 3) {
      setDraw(true)
      setWinner(null)
      setPhase('done')
      return
    }
    const extra = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
    setSudden(true)
    setTiedRounds(inSudden ? nextTied + 1 : 1)
    setDeck((prev) => [...prev, extra])
    setIndex((value) => value + 1)
    setPicked(null)
    setNote('Still tied. Sudden death.')
  }

  function choose(option: number) {
    if (picked !== null || phase !== 'play') return
    const card = deck[index]
    const team = index % scores.length
    const correct = option === card.answer
    const nextScores = scores.map((score, i) => (i === team && correct ? score + 1 : score))
    setScores(nextScores)
    setPicked(option)
    setNote(correct ? 'Correct.' : 'Not quite.')
    window.setTimeout(() => {
      const lastMain = !sudden && index + 1 >= mainLength
      const lastCard = index + 1 >= deck.length
      if (!lastMain && !lastCard) {
        setIndex(index + 1)
        setPicked(null)
        setNote('')
        return
      }
      finish(nextScores, tiedRounds, sudden || lastMain)
    }, 1000)
  }

  if (phase === 'setup' || phase === 'done') {
    return (
      <div style={{ display: 'grid', gap: 12, textAlign: 'center' }}>
        <h1>Quiz</h1>
        <p>Quick 10 or Mega 25. One player, or up to 10 teams.</p>
        <label>
          Teams
          <input
            type="number"
            min={1}
            max={10}
            value={teams}
            onChange={(event) => setTeams(Math.min(10, Math.max(1, Number(event.target.value) || 1)))}
            className="field"
            style={{ width: 80, marginLeft: 8 }}
          />
        </label>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <button type="button" onClick={() => start(10)} style={{ background: 'var(--color-pine)' }}>Quick 10</button>
          <button type="button" onClick={() => start(25)} style={{ background: 'var(--color-red)' }}>Mega 25</button>
        </div>
        {winner !== null && <p style={{ fontSize: '1.4rem', fontWeight: 800 }}>CONGRATULATIONS Team {winner + 1}</p>}
        {draw && <p>It is a draw after three clean tied rounds.</p>}
        <p>{quizQuestions.length} questions are ready.</p>
        <aside className="scotland" style={{ textAlign: 'left' }}>
          <strong>Scotland</strong>
          <p>Questions include Balmoral, Glasgow ships, and Edinburgh schools.</p>
        </aside>
      </div>
    )
  }

  const card = deck[index]
  const team = index % scores.length
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h1>Question {index + 1}</h1>
      {sudden && <p className="red" style={{ display: 'inline-block', padding: '4px 8px', borderRadius: 8 }}>Sudden death</p>}
      <p>Team {team + 1} answers.</p>
      <QuizFaces index={index} />
      <p style={{ fontSize: '1.2rem', fontWeight: 800 }}>{card.question}</p>
      <div style={{ display: 'grid', gap: 8 }}>
        {card.options.map((option, optionIndex) => (
          <button
            key={option}
            type="button"
            disabled={picked !== null}
            onClick={() => choose(optionIndex)}
            className="choice"
            style={picked === null ? undefined : optionIndex === card.answer ? { background: '#d9f5e3' } : picked === optionIndex ? { background: '#f8d0cc' } : undefined}
          >
            {option}
          </button>
        ))}
      </div>
      {note && <p style={{ textAlign: 'center', fontWeight: 800 }}>{note}</p>}
      <div className="actions" style={{ justifyContent: 'center' }}>
        {scores.map((score, i) => (
          <span key={i} className="card" style={{ padding: 8 }}>Team {i + 1}: {score}</span>
        ))}
      </div>
    </div>
  )
}
