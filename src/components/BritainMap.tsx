import { land, spots } from './map-data'

const labels = [
  ['Scotland', 230, 150],
  ['England', 310, 470],
  ['Wales', 214, 500],
  ['Ireland', 118, 430],
] as const

export function BritainMap({ blank = false }: { blank?: boolean }) {
  return (
    <figure className="map-frame">
      <svg viewBox="0 0 420 640" role="img" aria-label="Map of Britain and Ireland">
        <rect width="420" height="640" fill="#d7eef8" />
        {land.uk.map((d, index) => (
          <path key={`uk-${index}`} d={d} fill="#1F6B4A" stroke="#1C1C1C" strokeWidth="1.4" />
        ))}
        {land.ireland.map((d, index) => (
          <path key={`ie-${index}`} d={d} fill="#E7B23C" stroke="#1C1C1C" strokeWidth="1.4" />
        ))}
        <polyline
          points={[spots.London, spots.Birmingham, spots.Edinburgh, spots.Glasgow].map((p) => p.join(',')).join(' ')}
          fill="none"
          stroke="#B42318"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {labels.map(([name, x, y]) => (
          <text key={name} x={x} y={y} textAnchor="middle" fontSize="16" fontWeight="800" fill="#1C1C1C" stroke="#FFF8EE" strokeWidth="4" paintOrder="stroke">
            {blank ? '' : name}
          </text>
        ))}
        {Object.entries(spots).map(([name, [x, y]]) => (
          <g key={name}>
            <circle cx={x} cy={y} r="5" fill="#B42318" stroke="#FFF8EE" strokeWidth="2" />
            <text x={x + 8} y={y - 8} fontSize="12" fontWeight="800" fill="#1C1C1C" stroke="#FFF8EE" strokeWidth="3" paintOrder="stroke">
              {blank ? '' : name}
            </text>
            {blank && <line x1={x + 8} y1={y - 6} x2={x + 78} y2={y - 6} stroke="#1C1C1C" strokeWidth="2" />}
          </g>
        ))}
      </svg>
      <figcaption>
        {blank
          ? 'Green is Britain. Gold is Ireland. The red line is a railway from London toward Scotland. Write the missing names.'
          : 'A real coastline. Green is Britain, including Northern Ireland. Gold is the rest of Ireland. The red line runs from London toward Scotland.'}
      </figcaption>
    </figure>
  )
}

export function RailwayMap() {
  return <BritainMap />
}
