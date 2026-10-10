import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/beliefs')({
  component: Beliefs,
})

function Beliefs() {
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <h1>Beliefs</h1>
      <img className="scene" src="/art/lamps.jpg" alt="Gas lamps on a quiet street" />
      <section className="card">
        <h2>Sunday and charity</h2>
        <p>Many people went to church on Sunday.</p>
        <p>They gave money and help to the poor. That was charity.</p>
      </section>
      <section className="panel gold">
        <h2>Progress</h2>
        <p>Many people thought the world was getting better. They called this progress.</p>
        <p>New railways, lamps, and clean water were part of that idea.</p>
      </section>
      <section className="panel cream">
        <h2>Not one idea</h2>
        <p>People did not all believe the same thing.</p>
        <p>Many Victorians said the empire was glorious. Ruling faraway lands was not fair to the people who already lived there.</p>
      </section>
      <aside className="scotland">
        <strong>Scotland</strong>
        <p>People in Edinburgh and Glasgow also argued about church, work, and progress.</p>
      </aside>
    </div>
  )
}
