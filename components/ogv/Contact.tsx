import React from 'react'
import { lato } from '@/constants/font_settings'
import { raleway } from '@/constants/font_settings'
import { OGV_CONTACT } from '@/constants/ogv_contact'
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
        <div className={`${lato.className} flex justify-center py-4`}>
            <h1 className={`text-5xl font-bold`}>Contact Us Now</h1>
        </div>
        <div>
            <section className={`bg-white pb-8 pt-4`}>
              <div className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 `}>
                {OGV_CONTACT.map((person, index) => (
                  <div key={index} className='bg-white items-center rounded-xl p-4 flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <Image
                      src={person.Portrait}
                      alt={person.Name}
                      width={500}
                      height={500}
                      className="object-cover rounded-full w-full shadow-aiesec-blue shadow-md hover:shadow-ogv-orange transition-all duration-300"
                    />
                    <div className='text-center'> 
                      <h3 className={`${lato.className} py-2 text-2xl font-bold`}>{person.Name}</h3>
                      <p className={`${raleway.className} font-semibold`}>{person.Position}</p>
                      <p className={`${raleway.className} `}>{person.Function}</p>
                      <p className={`${raleway.className} `}>{person.Email}</p>
                      <p className={`${raleway.className} `}>{person.Contact_Number}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
        </div>
    </div>
  )
}

export default Contact