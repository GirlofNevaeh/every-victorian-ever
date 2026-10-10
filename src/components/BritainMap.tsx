export function BritainMap({ blank = false }: { blank?: boolean }) {
  const label = (name: string) => (blank ? '' : name)
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-sm overflow-hidden rounded-lg border-4 border-[var(--color-soot)] bg-[#d5eef8]">
      <div className="absolute left-[22%] top-0 flex h-[32%] w-[56%] items-center justify-center rounded-t-lg bg-[var(--color-pine)] text-sm font-bold text-[var(--color-lace)]">
        {label('Scotland')}
      </div>
      <div className="absolute left-[26%] top-[32%] flex h-[40%] w-[48%] items-center justify-center bg-[var(--color-gold)] text-sm font-bold text-[var(--color-soot)]">
        {label('England')}
      </div>
      <div className="absolute left-[6%] top-[40%] flex h-[24%] w-[20%] items-center justify-center bg-[#2f6b3a] text-xs font-bold text-[var(--color-lace)]">
        {label('Wales')}
      </div>
      <div className="absolute left-0 top-[34%] flex h-[30%] w-[14%] items-center justify-center bg-[#1d4d32] text-[10px] font-bold text-[var(--color-lace)]">
        {label('Ireland')}
      </div>
      <City top="8%" left="48%" name="Edinburgh" short="Ed" blank={blank} />
      <City top="16%" left="36%" name="Glasgow" short="Gl" blank={blank} />
      <City top="11%" left="60%" name="Balmoral" short="Ba" blank={blank} />
      <City top="68%" left="42%" name="London" short="Lo" blank={blank} />
    </div>
  )
}

function City({ top, left, name, short, blank }: { top: string; left: string; name: string; short: string; blank: boolean }) {
  return (
    <div className="absolute" style={{ top, left }}>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-red)] text-[10px] font-bold text-[var(--color-lace)]">
        {blank ? '' : short}
      </div>
      {!blank && <span className="absolute left-8 top-1 whitespace-nowrap text-[10px] font-bold text-[var(--color-soot)]">{name}</span>}
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
    <div className="relative h-24 rounded border border-[var(--color-soot)] bg-[var(--color-lace)]">
      <div className="absolute left-4 right-4 top-1/2 h-1 -translate-y-1/2 bg-[var(--color-soot)]" />
      {stops.map(([left, name]) => (
        <div key={name} className="absolute top-1/2 -translate-y-1/2" style={{ left }}>
          <div className="h-3 w-3 rounded-full bg-[var(--color-red)]" />
          <span className="absolute top-4 -left-4 w-16 text-center text-[10px]">{name}</span>
        </div>
      ))}
    </div>
  )
}
