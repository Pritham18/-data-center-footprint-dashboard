export type Country = 'US' | 'UK'
export type FilterValue = 'all' | 'us' | 'uk'

export type DataCenter = {
  id: string
  name: string
  city: string
  region: string
  country: Country
  // Approximate coordinates — verify before public launch
  lat: number
  lng: number
}
