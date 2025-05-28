import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen-nav">
      <Image
        src="/hero_bg_1.jpg"
        alt="hero_bg_1"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="group flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 rounded-xl shadow-md hover:bg-opacity-100 transition">
          <Image src="/explore.svg" alt="Explore Icon" width={20} height={20} />
          <span className="text-black font-medium group-hover:text-red-700 transition-colors">Explore</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
