import { useState } from 'react'
import { spots } from './map-data'
import { regionShapes } from './region-shapes'
import { regions, type RegionId } from '../data/regions'

const cityRegion = {
  London: 'england',
  Birmingham: 'england',
  Cardiff: 'wales',
  Dublin: 'ireland',
  Belfast: 'ulster',
  Glasgow: 'scotland',
  Edinburgh: 'scotland',
  Balmoral: 'scotland',
} as const

export function InteractiveMap() {
  const [selected, setSelected] = useState<RegionId>('scotland')
  const [place, setPlace] = useState('Balmoral')
  const region = regions.find((item) => item.id === selected) ?? regions[0]

  function choose(id: RegionId, placeName?: string) {
    setSelected(id)
    const next = regions.find((item) => item.id === id)
    setPlace(placeName || next?.places[0]?.name || '')
    document.getElementById('region-detail')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  return (
    <div className="map-layout">
      <div>
        <figure className="map-frame">
          <svg viewBox="0 0 420 640" role="group" aria-label="Map of Britain and Ireland. Choose a region.">
            <rect width="420" height="640" fill="#d7eef8" />
            {(Object.keys(regionShapes) as RegionId[]).map((id) => (
              <g key={id}>
                {regionShapes[id].map((d, index) => (
                  <path
                    key={`${id}-${index}`}
                    d={d}
                    fill={regions.find((item) => item.id === id)?.fill}
                    stroke={selected === id ? '#1C1C1C' : '#1C1C1C'}
                    strokeWidth={selected === id ? 3.5 : 1}
                    style={{ cursor: 'pointer' }}
                    onClick={() => choose(id)}
                  >
                    <title>{regions.find((item) => item.id === id)?.name}</title>
                  </path>
                ))}
              </g>
            ))}
            <polyline
              points={[spots.London, spots.Birmingham, spots.Edinburgh, spots.Glasgow].map((point) => point.join(',')).join(' ')}
              fill="none"
              stroke="#B42318"
              strokeWidth="3"
              strokeLinejoin="round"
              pointerEvents="none"
            />
            {(Object.keys(cityRegion) as (keyof typeof cityRegion)[]).map((name) => {
              const [x, y] = spots[name]
              const id = cityRegion[name]
              return (
                <g key={name} style={{ cursor: 'pointer' }} onClick={() => choose(id, name)}>
                  <circle cx={x} cy={y} r="14" fill="transparent" />
                  <circle cx={x} cy={y} r="5.5" fill="#B42318" stroke="#FFF8EE" strokeWidth="2" />
                  <text x={x + 8} y={y - 8} fontSize="12" fontWeight="800" fill="#1C1C1C" stroke="#FFF8EE" strokeWidth="3" paintOrder="stroke">
                    {name}
                  </text>
                </g>
              )
            })}
          </svg>
          <figcaption>Tap a coloured land or a red dot. The red line is the railway from London toward Scotland.</figcaption>
        </figure>
        <div className="chips" role="tablist" aria-label="Regions">
          {regions.map((item) => (
            <button key={item.id} type="button" className={item.id === selected ? 'chip on' : 'chip'} onClick={() => choose(item.id)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <article className="card story" id="region-detail">
        <p className="tag">{region.years}</p>
        <h2>{region.name}</h2>
        <p>{region.summary}</p>
        {region.sections.map((section) => (
          <section key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </section>
        ))}
        <h3>On the map</h3>
        {region.places.map((item) => (
          <p key={item.name}><strong>{item.name}.</strong> {item.text}</p>
        ))}
        {place && <p className="note note-gold">You chose {place}.</p>}
        <div className="photo-grid">
          {region.photos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    </div>
  )
}
