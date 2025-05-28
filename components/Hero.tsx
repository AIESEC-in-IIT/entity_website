import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/hero_bg_1.jpg"
        alt="hero_bg_1"
        fill
        className="object-cover"
        priority // Optional for faster loading
      />
      <div className="absolute inset-0 bg-white opacity-50"></div> {/* Overlay for exposure effect */}
      <div>
        Hey AIESEC!
      </div>
    </div>
  );
};

export default Hero;