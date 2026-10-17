import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { quizQuestions } from '../data/questions'
import { QuizFaces } from '../components/Faces'
import { useT } from '../i18n/language'
import { playCheer, playFart, warmAudio } from '../lib/quiz-sounds'

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
  const t = useT()

  useEffect(() => {
    const unlock = () => warmAudio()
    window.addEventListener('pointerdown', unlock, true)
    window.addEventListener('keydown', unlock, true)
    return () => {
      window.removeEventListener('pointerdown', unlock, true)
      window.removeEventListener('keydown', unlock, true)
    }
  }, [])

  function start(count: number) {
    warmAudio()
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
    warmAudio()
    if (correct) playCheer()
    else playFart()
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
      <div className="page" style={{ textAlign: 'center' }}>
        <h1>{t('Quiz')}</h1>
        <p>{t('Quick 10 or Mega 25. One player, or up to 10 teams.')}</p>
        <label>
          {t('Teams')}
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
          <button type="button" onPointerDown={() => warmAudio()} onClick={() => start(10)}>{t('Quick 10')}</button>
          <button type="button" className="alt" onPointerDown={() => warmAudio()} onClick={() => start(25)}>{t('Mega 25')}</button>
        </div>
        {winner !== null && <p style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('CONGRATULATIONS')} {t('Team')} {winner + 1}</p>}
        {draw && <p>{t('It is a draw after three clean tied rounds.')}</p>}
        <p>{quizQuestions.length} {t('questions are ready.')}</p>
        <p>
          <a href="/quiz.pdf">{t('Download the full quiz')}</a>
        </p>
        <aside className="scotland" style={{ textAlign: 'left' }}>
          <strong>{t('Scotland')}</strong>
          <p>{t('Questions include Balmoral, Glasgow ships, and Edinburgh schools.')}</p>
        </aside>
      </div>
    )
  }

  const card = deck[index]
  const team = index % scores.length
  return (
    <div className="page">
      <h1>{t('Question')} {index + 1}</h1>
      {sudden && <p className="red" style={{ display: 'inline-block', padding: '4px 8px', borderRadius: 8 }}>{t('Sudden death')}</p>}
      <p>{t('Team')} {team + 1} {t('answers.')}</p>
      <QuizFaces index={index} />
      <p style={{ fontSize: '1.2rem', fontWeight: 800 }}>{t(card.question)}</p>
      <div style={{ display: 'grid', gap: 8 }}>
        {card.options.map((option, optionIndex) => (
          <button
            key={option}
            type="button"
            disabled={picked !== null}
            onPointerDown={() => choose(optionIndex)}
            onClick={() => choose(optionIndex)}
            className="choice"
            style={picked === null ? undefined : optionIndex === card.answer ? { background: '#d9f5e3' } : picked === optionIndex ? { background: '#f8d0cc' } : undefined}
          >
            {t(option)}
          </button>
        ))}
      </div>
      {note && <p style={{ textAlign: 'center', fontWeight: 800 }}>{t(note)}</p>}
      <div className="actions" style={{ justifyContent: 'center' }}>
        {scores.map((score, i) => (
          <span key={i} className="card" style={{ padding: 8 }}>{t('Team')} {i + 1}: {score}</span>
        ))}
      </div>
    </div>
  )
}
