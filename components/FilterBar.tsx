'use client'

import type { FilterValue } from '@/types'

type Props = {
  active: FilterValue
  onChange: (v: FilterValue) => void
  usCount: number
  ukCount: number
  totalCount: number
}

const filters: { value: FilterValue; label: string; activeClass: string }[] = [
  { value: 'all', label: 'All Locations', activeClass: 'bg-slate-800 text-white border-slate-800' },
  { value: 'us',  label: 'United States', activeClass: 'bg-blue-600 text-white border-blue-600'  },
  { value: 'uk',  label: 'United Kingdom',activeClass: 'bg-green-600 text-white border-green-600'},
]

export default function FilterBar({ active, onChange, usCount, ukCount, totalCount }: Props) {
  const counts: Record<FilterValue, number> = { all: totalCount, us: usCount, uk: ukCount }

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ value, label, activeClass }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer
            ${active === value
              ? activeClass
              : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
            }`}
        >
          {label}
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
              active === value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {counts[value]}
          </span>
        </button>
      ))}
    </div>
  )
}
