import type { CSSProperties } from 'react'

export function BritainMap({ blank = false }: { blank?: boolean }) {
  const label = (name: string) => (blank ? '\u00a0' : name)
  const box: CSSProperties = {
    position: 'relative',
    margin: '0 auto',
    height: 320,
    width: '100%',
    maxWidth: 340,
    overflow: 'hidden',
    borderRadius: 16,
    border: '4px solid #1C1C1C',
    background: '#d5eef8',
  }
  const region = (extra: CSSProperties): CSSProperties => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 14,
    padding: 4,
    ...extra,
  })
  return (
    <div style={box}>
      <div style={region({ left: '24%', top: 0, height: '30%', width: '52%', borderRadius: '12px 12px 0 0', background: '#1F6B4A', color: '#FFF8EE' })}>{label('Scotland')}</div>
      <div style={region({ left: '28%', top: '30%', height: '42%', width: '46%', background: '#E7B23C', color: '#1C1C1C' })}>{label('England')}</div>
      <div style={region({ left: '8%', top: '42%', height: '22%', width: '18%', background: '#2f6b3a', color: '#FFF8EE', fontSize: 12 })}>{label('Wales')}</div>
      <div style={region({ left: 0, top: '36%', height: '28%', width: '12%', background: '#1d4d32', color: '#FFF8EE', fontSize: 11 })}>{label('Ireland')}</div>
      {!blank && (
        <>
          <Dot top="8%" left="46%" name="Edinburgh" />
          <Dot top="16%" left="34%" name="Glasgow" />
          <Dot top="6%" left="62%" name="Balmoral" />
          <Dot top="66%" left="40%" name="London" />
        </>
      )}
    </div>
  )
}

function Dot({ top, left, name }: { top: string; left: string; name: string }) {
  return (
    <div style={{ position: 'absolute', top, left, maxWidth: '42%' }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#B42318', border: '2px solid #FFF8EE' }} />
      <span style={{ display: 'block', fontSize: 11, fontWeight: 800, lineHeight: 1.1 }}>{name}</span>
    </div>
  )
}

export function RailwayMap() {
  const stops = ['London', 'Birmingham', 'Edinburgh', 'Glasgow']
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 4, alignItems: 'start' }}>
      {stops.map((name, index) => (
        <div key={name} style={{ textAlign: 'center', minWidth: 0 }}>
          <div style={{ height: 4, background: '#1C1C1C', marginTop: 6, position: 'relative' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#B42318', position: 'absolute', left: '50%', top: -4, transform: 'translateX(-50%)' }} />
          </div>
          <div style={{ marginTop: 12, fontSize: 12, fontWeight: 800, wordBreak: 'break-word' }}>{name}</div>
          {index < stops.length - 1 ? null : null}
        </div>
      ))}
    </div>
  )
}
