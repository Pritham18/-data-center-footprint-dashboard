import locations from '@/data/locations'
import Header from '@/components/Header'
import KpiCards from '@/components/KpiCards'
import DashboardClient from '@/components/DashboardClient'
import ComingSoonBanner from '@/components/ComingSoonBanner'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <KpiCards locations={locations} />
        <DashboardClient locations={locations} />
      </main>
      <ComingSoonBanner />
    </div>
  )
}
