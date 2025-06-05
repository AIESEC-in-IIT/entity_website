import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { products } from '@/constants/products';
import { lato } from '@/constants/font_settings';

const Products = () => {
  return (
    <div>
      <div className={`${lato.className}`}>
        <div className={`flex justify-center`}>
          <h1 className={`font-bold text-4xl pt-5`}>Our Products</h1>          
        </div>
        <div>
          <section className="px-4 py-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {products.map((program, index) => (
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
                    <Link href={program.link}>
                      <button className="w-full px-5 py-2 bg-aiesec-blue text-white rounded-md hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-105">
                        Explore
                      </button>
                    </Link> 
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