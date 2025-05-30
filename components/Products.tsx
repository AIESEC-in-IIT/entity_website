import React from 'react'
import { Lato } from 'next/font/google';
import Image from 'next/image';



const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const programs = [
  {
    title: 'Global Volunteer',
    image: '/product_GV-horizontal-color.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Global Talent',
    image: '/product_GT-horizontal-color.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Global Teacher',
    image: '/product_GTe-horizontal-color.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Products = () => {
  return (
    <div>
      <hr className="border-aiesec-blue pb-2" />
      <div>
        <div className={`flex justify-center  ${lato.className}`}>
          <h1 className={`font-bold text-4xl pt-2`}>Our Products</h1>          
        </div>
        <div>
          <section className="px-4 py-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
                {/* <h3 className="text-lg font-semibold">{program.title}</h3> */}
                <p className="text-sm text-gray-600">{program.description}</p>
                <button className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Explore
                </button>
              </div>
              ))}
            </div>
    </section>
        </div>
      </div>

    </div>
  )
}

export default Products