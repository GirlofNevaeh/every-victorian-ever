import { createFileRoute } from '@tanstack/react-router'
import { BritainMap } from '../components/BritainMap'
import { ScotlandNote } from '../components/ScotlandNote'

export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 print:space-y-4">
      <h1 className="text-2xl font-bold">Work</h1>
      <section className="break-inside-avoid rounded bg-white p-4 shadow print:shadow-none">
        <h2 className="text-xl font-bold">Label the map</h2>
        <BritainMap blank />
        <p className="mt-2">Write these names in the right places: Scotland, England, Wales, Ireland, Balmoral, Edinburgh, Glasgow, London, and the railway.</p>
      </section>
      <section className="break-inside-avoid rounded bg-white p-4 shadow print:shadow-none">
        <h2 className="text-xl font-bold">Two homes</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded bg-[var(--color-gold)] p-3">
            <h3 className="font-bold">Big house</h3>
            <p>Many rooms. Servants. Gas lamps. Warm fires.</p>
          </div>
          <div className="rounded bg-[var(--color-pine)] p-3 text-[var(--color-lace)]">
            <h3 className="font-bold">One-room home</h3>
            <p>One room for the family. Hard work. Simple food.</p>
          </div>
        </div>
        <p className="mt-2">How are these homes different? Who might live in each one?</p>
      </section>
      <section className="break-inside-avoid rounded border border-[var(--color-soot)] p-4">
        <h2 className="text-xl font-bold">Scotland page</h2>
        <p>Balmoral: a Highland castle where Queen Victoria stayed.</p>
        <p>Tartan: many clan tartans became popular because Victorians liked a Highland holiday look.</p>
        <p>Glasgow: the city built ships and engines.</p>
        <ScotlandNote text="Edinburgh had schools, publishers, and a New Town." />
      </section>
      <p className="text-sm">You can print this page.</p>
    </div>
  )
}
