'use client'

import type { DataCenter } from '@/types'

type Props = { locations: DataCenter[] }

export default function LocationTable({ locations }: Props) {
  if (locations.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-10 text-center text-slate-400 text-sm">
        No locations match the selected filter.
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-700">
          Locations
          <span className="ml-2 text-xs font-normal text-slate-400">({locations.length})</span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Region / State
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Country
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {locations.map((dc) => (
              <tr key={dc.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-800">{dc.name}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{dc.region}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      dc.country === 'US'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {dc.country === 'US' ? 'United States' : 'United Kingdom'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
