import { NextRequest, NextResponse } from 'next/server'
import { calculateEstimate, TERRAIN_MULTIPLIERS } from '@/lib/pricing'
import type { SurveyType, TerrainType } from '@/lib/pricing'
import { PRICING } from '@/lib/constants'

export async function POST(req: NextRequest) {
  try {
    const { surveyType, area, terrain } = await req.json()

    if (!surveyType || !area || !terrain) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    if (!(surveyType in PRICING)) {
      return NextResponse.json({ error: 'Invalid survey type' }, { status: 400 })
    }

    const multiplier = TERRAIN_MULTIPLIERS[terrain as TerrainType]?.value ?? 1
    const result = calculateEstimate(surveyType as SurveyType, Number(area), multiplier)

    return NextResponse.json(result)
  } catch (err) {
    console.error('Estimate error:', err)
    return NextResponse.json({ error: 'Calculation failed' }, { status: 500 })
  }
}
