import Image from 'next/image';
import React from 'react';
import { Lato } from 'next/font/google';

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
          // src="/hero_bgs/voyage24.jpg"
          // src="/hero_bgs/valentinesIGM.jpg"
          alt="hero_bg_1"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>


        <div className="absolute inset-0 flex items-center justify-center">
            <div className="scale-wrapper text-center transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative flex flex-col items-center">
                <span 
                  className="absolute top-0 left-0 w-full bg-gradient-to-r from-aiesec-blue to-ogv-orange bg-clip-text text-[5vw] sm:text-[3vw] md:text-5xl font-extrabold text-transparent text-center select-none blur-xl z-0"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Volunteer...
                </span>
                <h1
                  className="relative pb-3 whitespace-nowrap text-[5vw] sm:text-[3vw] md:text-5xl font-extrabold bg-gradient-to-r from-aiesec-blue  to-ogv-orange bg-clip-text text-transparent text-center select-auto z-10"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Volunteer...
                </h1>
              </div>
              
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
  
    </div>
  );
};

export default Hero;