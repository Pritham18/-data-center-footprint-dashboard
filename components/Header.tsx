export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              <rect x="2" y="3" width="6" height="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              <rect x="16" y="15" width="6" height="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900 leading-tight">
              Data Center Footprint
            </h1>
            <p className="text-sm text-slate-500">
              Infrastructure locations across the United States and United Kingdom
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
