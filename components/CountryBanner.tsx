'use client'

import React, { useEffect, useRef, useState } from 'react'

const CountryBanner = () => {
  const containerRef = useRef(null)
  const [duration, setDuration] = useState(30) // default fallback duration

  const countries = {
    "India": "https://flagcdn.com/h80/in.png",
    "Nepal": "https://flagcdn.com/h80/np.png",
    "Malaysia": "https://flagcdn.com/h80/my.png",
    "Indonesia": "https://flagcdn.com/h80/id.png",
    "Thailand": "https://flagcdn.com/h80/th.png",
    "Taiwan": "https://flagcdn.com/h80/tw.png",
    "Tunisia": "https://flagcdn.com/h80/tn.png",
    "Egypt": "https://flagcdn.com/h80/eg.png",
    "Philippines": "https://flagcdn.com/h80/ph.png",
    "Italy": "https://flagcdn.com/h80/it.png",
    "Cambodia": "https://flagcdn.com/h80/kh.png",
    "Brazil": "https://flagcdn.com/h80/br.png",
    "Mexico": "https://flagcdn.com/h80/mx.png"
  }

  const countryEntries = Object.entries(countries)

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth / 2 // because we duplicate
      const speed = 100 // pixels per second
      const newDuration = containerWidth / speed
      setDuration(newDuration)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div
        className="flex"
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
              <span className="text-xs mt-2 text-gray-700 font-medium">{country}</span>
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
