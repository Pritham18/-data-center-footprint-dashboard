export default function ComingSoonBanner() {
  return (
    <div className="bg-blue-50 border-t border-blue-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-start gap-3">
        <div className="shrink-0 mt-0.5">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-blue-900">More data coming soon</p>
          <p className="text-sm text-blue-700 mt-0.5">
            Additional locations and infrastructure details are being added as our footprint expands.
            Check back for updates.
          </p>
        </div>
      </div>
    </div>
  )
}
