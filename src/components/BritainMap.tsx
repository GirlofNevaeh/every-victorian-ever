export function BritainMap({ blank = false }: { blank?: boolean }) {
  const label = (name: string) => (blank ? '' : name)
  return (
    <div style={{ position: 'relative', margin: '0 auto', height: 440, maxWidth: 360, overflow: 'hidden', borderRadius: 16, border: '4px solid #1C1C1C', background: '#d5eef8' }}>
      <div style={{ position: 'absolute', left: '22%', top: 0, height: '32%', width: '56%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px 12px 0 0', background: '#1F6B4A', color: '#FFF8EE', fontWeight: 800 }}>{label('Scotland')}</div>
      <div style={{ position: 'absolute', left: '26%', top: '32%', height: '40%', width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E7B23C', fontWeight: 800 }}>{label('England')}</div>
      <div style={{ position: 'absolute', left: '6%', top: '40%', height: '24%', width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2f6b3a', color: '#FFF8EE', fontWeight: 800, fontSize: 13 }}>{label('Wales')}</div>
      <div style={{ position: 'absolute', left: 0, top: '34%', height: '30%', width: '14%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1d4d32', color: '#FFF8EE', fontWeight: 800, fontSize: 11 }}>{label('Ireland')}</div>
      <City top="8%" left="48%" name="Edinburgh" short="Ed" blank={blank} />
      <City top="16%" left="36%" name="Glasgow" short="Gl" blank={blank} />
      <City top="11%" left="62%" name="Balmoral" short="Ba" blank={blank} />
      <City top="68%" left="42%" name="London" short="Lo" blank={blank} />
    </div>
  )
}

function City({ top, left, name, short, blank }: { top: string; left: string; name: string; short: string; blank: boolean }) {
  return (
    <div style={{ position: 'absolute', top, left }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#B42318', color: '#FFF8EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800 }}>{blank ? '' : short}</div>
      {!blank && <span style={{ position: 'absolute', left: 32, top: 4, whiteSpace: 'nowrap', fontSize: 11, fontWeight: 800 }}>{name}</span>}
    </div>
  )
}

export function RailwayMap() {
  const stops = [
    ['8%', 'London'],
    ['32%', 'Birmingham'],
    ['62%', 'Edinburgh'],
    ['86%', 'Glasgow'],
  ] as const
  return (
    <div style={{ position: 'relative', height: 96, border: '3px solid #1C1C1C', borderRadius: 12, background: '#FFF8EE' }}>
      <div style={{ position: 'absolute', left: 16, right: 16, top: '50%', height: 4, background: '#1C1C1C' }} />
      {stops.map(([left, name]) => (
        <div key={name} style={{ position: 'absolute', top: '50%', left, transform: 'translateY(-50%)' }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#B42318' }} />
          <span style={{ position: 'absolute', top: 18, left: -18, width: 70, textAlign: 'center', fontSize: 11 }}>{name}</span>
        </div>
      ))}
    </div>
  )
}
