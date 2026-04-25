'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import type { DataCenter, FilterValue } from '@/types'
import FilterBar from '@/components/FilterBar'
import LocationTable from '@/components/LocationTable'

// ssr: false is required here (client component) — Leaflet uses window and breaks on the server
const MapView = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center" style={{ height: 460 }}>
      <p className="text-sm text-slate-400">Loading map…</p>
    </div>
  ),
})

type Props = { locations: DataCenter[] }

export default function DashboardClient({ locations }: Props) {
  const [filter, setFilter] = useState<FilterValue>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return locations
    const country = filter === 'us' ? 'US' : 'UK'
    return locations.filter((l) => l.country === country)
  }, [filter, locations])

  const usCount    = locations.filter((l) => l.country === 'US').length
  const ukCount    = locations.filter((l) => l.country === 'UK').length
  const totalCount = locations.length

  return (
    <div className="space-y-5">
      <FilterBar
        active={filter}
        onChange={setFilter}
        usCount={usCount}
        ukCount={ukCount}
        totalCount={totalCount}
      />
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <MapView locations={filtered} />
      </div>
      <LocationTable locations={filtered} />
    </div>
  )
}
