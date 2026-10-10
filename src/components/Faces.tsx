const faces = [
  ['#E7B23C', 'crown'],
  ['#1F6B4A', 'cap'],
  ['#B42318', 'bonnet'],
  ['#1C1C1C', 'hat'],
  ['#8C5A2A', 'tam'],
  ['#3E5C8A', 'bow'],
  ['#C47B4A', 'scarf'],
  ['#6B4C7A', 'lamp'],
  ['#2E6B4F', 'book'],
  ['#A33B2B', 'star'],
  ['#D4A24C', 'flower'],
  ['#355C7D', 'train'],
  ['#7A4E2D', 'leaf'],
  ['#4A6741', 'bell'],
  ['#8A3E4B', 'pen'],
  ['#3F5E4A', 'ship'],
  ['#B8860B', 'glass'],
  ['#5C4A32', 'key'],
  ['#6E3B2E', 'heart'],
  ['#2C4A6E', 'moon'],
]

export function QuizFaces({ index }: { index: number }) {
  const start = index % faces.length
  const shown = [0, 1, 2, 3, 4].map((n) => faces[(start + n) % faces.length])
  return (
    <div className="flex justify-center gap-2" aria-hidden="true">
      {shown.map(([color, tag], i) => (
        <div key={tag + i} className="flex flex-col items-center">
          <div className="relative h-12 w-12 rounded-full border-2 border-[var(--color-soot)]" style={{ background: color }}>
            <span className="absolute left-3 top-4 h-1 w-1 rounded-full bg-[var(--color-soot)]" />
            <span className="absolute right-3 top-4 h-1 w-1 rounded-full bg-[var(--color-soot)]" />
            <span className="absolute bottom-3 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full bg-[var(--color-soot)]" />
          </div>
          <span className="text-[10px]">{tag}</span>
        </div>
      ))}
    </div>
  )
}
