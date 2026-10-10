export function ScotlandNote({ text }: { text: string }) {
  return (
    <aside className="rounded-lg bg-[var(--color-pine)] p-3 text-sm text-[var(--color-lace)]">
      <p className="font-bold">Scotland</p>
      <p>{text}</p>
    </aside>
  )
}
