'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { countries } from '@/constants/countries';
import { lato, raleway } from '@/constants/font_settings';

const Countries_OGV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextCountry = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCountry = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? countries.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" bg-white from-blue-50 to-indigo-100">
      {/* Header */}
      <div className={`${lato.className} flex justify-center py-6`}>
        <h1 className="text-5xl font-bold text-black tracking-wide">Countries</h1>
      </div>

      {/* Main Gallery Container */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="relative w-full max-w-4xl">
          
          {/* Left Arrow */}
          <button
            onClick={prevCountry}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 group"
            aria-label="Previous country"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-aiesec-blue" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextCountry}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 group"
            aria-label="Next country"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-aiesec-blue" />
          </button>

          {/* Country Card */}
          <div className="mx-16 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              {/* Image */}
              <div className="h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={countries[currentIndex].flag}
                  alt={`${countries[currentIndex].name} flag`}
                  className="w-full h-full object-cover transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIxMyIgdmlld0JveD0iMCAwIDMyMCAyMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjEzIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTA2LjVMMTQwIDE0MEwxODAgMTQwTDE2MCAxMDYuNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                  }}
                />
              </div>
              
              {/* Country Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  {countries[currentIndex].name}
                </h2>
              </div>
            </div>

            {/* Country Quote */}
            <div className="pt-3">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">
                  <span className={`${raleway.className} text-black`}>{countries[currentIndex].quote}</span>
                </p>
                <p className={`pb-5 text-xs`}>
                  <span className={`${lato.className} text-aiesec-dark-grey`}>Estimated Budget : {countries[currentIndex].budget}</span>
                </p>
                <p className={`pb-5 text-xs`}>
                  <span className={`${raleway.className} text-gray-500`}>*Budgets may change. Please contact our TL's to get a better idea.</span>
                </p>
                {/* <div className="text-sm text-gray-500">
                  {currentIndex + 1} of {countries.length} countries
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 pb-8">
        {countries.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-ogv-orange scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${countries[index].name}`}
          />
        ))}
      </div>
        <hr className="border-aiesec-light-grey pb-2" />
    </div>
  );
};

export default Countries_OGV;