import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#0D1B2A',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            color: '#B8860B',
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          EST. 1994 · PRECISION LAND SURVEYING
        </div>
        <div
          style={{
            color: '#F5F0E8',
            fontSize: 76,
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            color: '#B8860B',
            fontSize: 30,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          Land Surveyor India · DGPS · Total Station
        </div>
      </div>
    ),
    { ...size }
  )
}
