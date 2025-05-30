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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, sed do eiu do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboconsectetur adipiscing elit, sed do eiuconsectetur adipiscing elit, sed do eiure et dolore magna aliqua.',
  },
];

const Products = () => {
  return (
    <div>
      {/* <hr className="border-aiesec-blue pb-2" /> */}
      <div className={`${lato.className}`}>
        <div className={`flex justify-center`}>
          <h1 className={`font-bold text-4xl pt-5`}>Our Products</h1>          
        </div>
        <div>
          <section className="px-4 py-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {programs.map((program, index) => (
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col text-center space-y-4 h-full">
                  <div className="px-4 py-2 w-full flex justify-center rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={220}
                      height={0}
                      className="object-contain h-auto "
                    />
                  </div>

                  <div className="flex-grow pt-2">
                    <p className=" text-gray-600 text-l">{program.description}</p>
                  </div>

                  <div className='pt-4'>
                    <button className="w-full px-5 py-2 bg-aiesec-blue text-white rounded-md hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-105">
                      Explore
                    </button>
                  </div>
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