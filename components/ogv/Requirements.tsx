import React from 'react'
import { lato } from '@/constants/font_settings'
import { raleway } from '@/constants/font_settings'
import Image from 'next/image'
import { GV_Requirement } from '@/constants/ogv/requirements'

const Requirements = () => {
  return (
    <div>
      <div className={`${lato.className} py-2 flex justify-center`}>
        <h1 className={`text-5xl font-bold`}>Requirements</h1>
      </div>
      <div>
        <div className={`grid grid-cols-1 md:grid-cols-3 lg:gird-cols-6 gap-8 px-6 py-12 bg-white`}>
          {GV_Requirement.map((requirement, index) => (
            <div key={index} className={`${lato.className} items-center bg-white shadow-lg  rounded-xl p-4 flex flex-col h-full border-aiesec-blue border-2 hover:shadow-lg transition-shadow duration-300 hover:shadow-ogv-orange`}>
              <Image 
              src={requirement.Image}
              alt={requirement.Text}
              width={160}
              height={160}
              className={`object-cover rounded-md`}
              />
              <p>{requirement.Text}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-grey" />
    </div>
  )
}

export default Requirements