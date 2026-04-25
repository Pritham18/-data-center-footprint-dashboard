import type { DataCenter } from '@/types'

// All coordinates are approximate — verify against authoritative sources before public launch
const locations: DataCenter[] = [
  // United States
  { id: 'us-memphis',      name: 'Memphis',              city: 'Memphis',         region: 'Tennessee',       country: 'US', lat: 35.1495, lng: -90.0490 },
  { id: 'us-nashville',    name: 'Nashville',             city: 'Nashville',       region: 'Tennessee',       country: 'US', lat: 36.1627, lng: -86.7816 },
  { id: 'us-chattanooga',  name: 'Chattanooga',           city: 'Chattanooga',     region: 'Tennessee',       country: 'US', lat: 35.0456, lng: -85.3097 },
  { id: 'us-ashburn',      name: 'Ashburn',               city: 'Ashburn',         region: 'Virginia',        country: 'US', lat: 39.0438, lng: -77.4874 },
  { id: 'us-moncks-corner',name: 'Moncks Corner',         city: 'Moncks Corner',   region: 'South Carolina',  country: 'US', lat: 33.1957, lng: -79.9992 },
  { id: 'us-colleton',     name: 'Colleton County',       city: 'Colleton County', region: 'South Carolina',  country: 'US', lat: 32.8676, lng: -80.6356 },
  { id: 'us-marion',       name: 'Marion County',         city: 'Marion County',   region: 'South Carolina',  country: 'US', lat: 34.1821, lng: -79.3984 },
  { id: 'us-dfw',          name: 'Dallas–Fort Worth',     city: 'Dallas',          region: 'Texas',           country: 'US', lat: 32.8998, lng: -97.0403 },
  { id: 'us-san-antonio',  name: 'San Antonio',           city: 'San Antonio',     region: 'Texas',           country: 'US', lat: 29.4241, lng: -98.4936 },

  // United Kingdom
  { id: 'uk-npt',          name: 'NPT, South Wales',      city: 'Neath Port Talbot', region: 'Wales',         country: 'UK', lat: 51.6573, lng: -3.8093 },
  { id: 'uk-newham',       name: 'Newham, London',        city: 'Newham',            region: 'England',       country: 'UK', lat: 51.5150, lng:  0.0333 },
  { id: 'uk-cardiff',      name: 'Cardiff',               city: 'Cardiff',           region: 'Wales',         country: 'UK', lat: 51.4816, lng: -3.1791 },
  { id: 'uk-birmingham',   name: 'Birmingham',            city: 'Birmingham',        region: 'England',       country: 'UK', lat: 52.4862, lng: -1.8904 },
]

export default locations
