export const LOCATIONS = [
  { state: 'maharashtra', name: 'Maharashtra', cities: ['Pune', 'Mumbai', 'Nashik', 'Nagpur', 'Aurangabad', 'Solapur'], landmark: 'PMC, PCMC, and NHAI NH-48 corridor projects' },
  { state: 'karnataka', name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore'], landmark: 'BBMP layouts and NHAI highway corridors' },
  { state: 'gujarat', name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'], landmark: 'GMDA development zones and NHAI corridors' },
  { state: 'rajasthan', name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'], landmark: 'JDA layouts and NHAI desert-terrain highways' },
  { state: 'madhya-pradesh', name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior'], landmark: 'NHAI and state PWD road projects' },
  { state: 'uttar-pradesh', name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Noida'], landmark: 'YEIDA layouts and NHAI expressway corridors' },
  { state: 'delhi', name: 'Delhi', cities: ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad'], landmark: 'DDA layouts and NHAI ring-road projects' },
  { state: 'tamil-nadu', name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem'], landmark: 'CMDA layouts and NHAI coastal highways' },
  { state: 'telangana', name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Karimnagar'], landmark: 'HMDA layouts and NHAI corridors' },
  { state: 'andhra-pradesh', name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Tirupati'], landmark: 'CRDA development zones and NHAI corridors' },
  { state: 'punjab', name: 'Punjab', cities: ['Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar'], landmark: 'Punjab PWD and NHAI highway projects' },
  { state: 'haryana', name: 'Haryana', cities: ['Gurgaon', 'Faridabad', 'Hisar', 'Rohtak'], landmark: 'HRERA layouts and NHAI corridors' },
  { state: 'west-bengal', name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri'], landmark: 'KMC layouts and NHAI corridors' },
  { state: 'odisha', name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela'], landmark: 'BDA layouts and NHAI corridors' },
  { state: 'jharkhand', name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad'], landmark: 'mining-sector surveys and NHAI corridors' },
  { state: 'chhattisgarh', name: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Bilaspur'], landmark: 'mining-sector surveys and NHAI corridors' },
  { state: 'bihar', name: 'Bihar', cities: ['Patna', 'Gaya', 'Muzaffarpur'], landmark: 'BSRDCL and NHAI highway projects' },
  { state: 'himachal-pradesh', name: 'Himachal Pradesh', cities: ['Shimla', 'Manali', 'Dharamsala'], landmark: 'NHAI mountain-highway corridors' },
  { state: 'uttarakhand', name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital'], landmark: 'NHAI corridors and Char Dham infrastructure projects' },
  { state: 'goa', name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco'], landmark: 'GSUDA layouts and coastal-zone surveys' },
] as const

export type Location = (typeof LOCATIONS)[number]
export type LocationSlug = Location['state']
