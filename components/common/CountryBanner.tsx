'use client'

import React, { useEffect, useRef, useState } from 'react'
import { country_flags } from '@/constants/countries'
import { raleway } from '@/constants/font_settings'

const CountryBanner = () => {
  const containerRef = useRef(null)
  const [duration, setDuration] = useState(30) // default fallback duration
  const countryEntries = Object.entries(country_flags)

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth / 2 // because we duplicate
      const speed = 100 // pixels per second
      const newDuration = containerWidth / speed
      setDuration(newDuration)
    }
  }, [])

  return (
    <div className={`${raleway.className} w-full overflow-hidden bg-white py-4`}>
      <div
        className="flex pb-2"
        ref={containerRef}
        style={{
          animation: `scroll ${duration}s linear infinite`,
          width: 'fit-content',
        }}
      >
        {/* First and second set for looping */}
        {[...countryEntries, ...countryEntries].map(([country, flagUrl], idx) => (
          <div key={`${country}-${idx}`} className="flex-shrink-0 mx-4">
            <div className="flex flex-col items-center">
              <img 
                src={flagUrl} 
                alt={`${country} flag`}
                className="h-12 w-auto border border-gray-300 shadow-sm rounded"
              />
              <span className="text-xs mt-2 text-gray-700">{country}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
    
  )
}

export default CountryBanner
