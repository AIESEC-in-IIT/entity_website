import Image from 'next/image';
import React from 'react';
import { Lato } from 'next/font/google';
import CountryBanner from './CountryBanner';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Hero = () => {
  return (
    <div>
      
      <div className={`relative w-full min-h-screen-nav ${lato.className}`}>
        <Image
          src="/hero_bg_1.jpg"
          alt="hero_bg_1"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white opacity-50"></div>
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-5xl">
          <h1
            style={{
              textShadow: '0 0.15ch 15px #333333, 0 -2px 0 #f5f5f5',
              // fontSize: '15vmin',
              letterSpacing: '0.05ch', // Increased from -0.15ch
              lineHeight: 0.75,
              color: '#037ef3',
              paddingBottom: '2.5rem',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            AIESEC in
          </h1>
          <h1
            style={{
              textShadow: '0 0.15ch 15px #333333, 0 -2px 0 #f5f5f5',
              // fontSize: '15vmin',
              letterSpacing: '-0.1ch', // Increased from -0.15ch
              lineHeight: 0.75,
              color: '#037ef3',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            Informatics Institute of Technology
          </h1>
        </div> */}

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="scale-wrapper text-aiesec-blue text-center transition-transform duration-300 ease-in-out hover:scale-105">
      <h1
        className="pb-3 whitespace-nowrap text-[5vw] sm:text-[3vw] md:text-5xl"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
      >
        AIESEC in
      </h1>
      <h1
        className="pb-3 whitespace-nowrap text-[5vw] sm:text-[3vw] md:text-5xl"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
      >
        Informatics Institute of Technology
      </h1>
    </div>
  </div>


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="group flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 rounded-xl shadow-md hover:bg-opacity-100 transition-all hover:font-black hover:text-aiesec-blue">
            <Image src="/explore.svg" alt="Explore Icon" width={20} height={20} />
            <span className="text-black font-medium ">Explore</span>
          </button>
        </div>
      </div>
      
      <hr className="border-aiesec-blue pb-2" />
      {/* <CountryBanner /> */}
  
    </div>
  );
};

export default Hero;