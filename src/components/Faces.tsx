const faces = Array.from({ length: 20 }, (_, i) => `/faces/${String(i + 1).padStart(2, '0')}.jpg`)

export function QuizFaces({ index }: { index: number }) {
  const shown = [0, 1, 2, 3, 4].map((n) => faces[(index + n) % faces.length])
  return (
    <div className="faces" aria-hidden="true">
      {shown.map((src) => (
        <img key={src} src={src} alt="" width={64} height={64} />
      ))}
    </div>
  )
}
