import { PRICING } from './constants'

export type SurveyType = keyof typeof PRICING

export function calculateEstimate(
  surveyType: SurveyType,
  area: number,
  terrainMultiplier: number
): { min: number; max: number; unit: string } {
  const pricing = PRICING[surveyType]
  return {
    min: Math.round(pricing.min * area * terrainMultiplier),
    max: Math.round(pricing.max * area * terrainMultiplier),
    unit: pricing.unit,
  }
}

export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN')
}

export const TERRAIN_MULTIPLIERS = {
  flat:  { label: 'Flat', value: 1.0 },
  urban: { label: 'Urban / Semi-Urban', value: 1.2 },
  hilly: { label: 'Hilly / Forested', value: 1.4 },
} as const

export type TerrainType = keyof typeof TERRAIN_MULTIPLIERS
