import type { DataCenter } from '@/types'

type Props = { locations: DataCenter[] }

function Card({
  label,
  count,
  sublabel,
  accentClass,
}: {
  label: string
  count: number
  sublabel: string
  accentClass: string
}) {
  return (
    <div className={`bg-white rounded-lg border border-slate-200 shadow-sm p-6 border-l-4 ${accentClass}`}>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-4xl font-bold text-slate-900 mt-2">{count}</p>
      <p className="text-sm text-slate-400 mt-1">{sublabel}</p>
    </div>
  )
}

export default function KpiCards({ locations }: Props) {
  const usCount = locations.filter((l) => l.country === 'US').length
  const ukCount = locations.filter((l) => l.country === 'UK').length

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card label="Total Locations" count={locations.length} sublabel="Worldwide" accentClass="border-l-slate-400" />
      <Card label="United States"   count={usCount}           sublabel="TN, VA, SC, TX"  accentClass="border-l-blue-600"  />
      <Card label="United Kingdom"  count={ukCount}           sublabel="England & Wales" accentClass="border-l-green-600" />
    </div>
  )
}
