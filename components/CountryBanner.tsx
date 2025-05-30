'use client'

import React, { use } from 'react'

const CountryBanner = () => {
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

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="flex animate-scroll">
        {/* First set of flags */}
        {countryEntries.map(([country, flagUrl]) => (
          <div key={`first-${country}`} className="flex-shrink-0 mx-4">
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
        {/* Duplicate set for seamless loop */}
        {countryEntries.map(([country, flagUrl]) => (
          <div key={`second-${country}`} className="flex-shrink-0 mx-4">
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
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default CountryBanner