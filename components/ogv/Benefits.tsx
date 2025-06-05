import React from 'react'
import { lato } from '@/constants/font_settings'
import { raleway } from '@/constants/font_settings'
import { ogv_benefits } from '@/constants/gv_benefits'
import Image from 'next/image'

const Benefits = () => {
  return (
    <div>
        <div className={`${lato.className} py-8 text-5xl font-bold`}>
            <h1 className={`flex justify-center tracking-wide`}>Benefits</h1>
        </div>
        <div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12 bg-white`}>
                {ogv_benefits.map((benefit, index) =>(
                    <div key={index} className="text-center flex flex-col items-center space-y-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image 
                        src={benefit.benefit_image}
                        alt={benefit.benefit_title}
                        width={100}
                        height={100} />
                        <h1 className={`${lato.className} text-bold text-2xl`}>
                            {benefit.benefit_title}
                        </h1>
                        <p className={`${raleway.className}`}>
                            {benefit.benefit_description}
                        </p>
                    </div>
                ) )}
            </div>
        </div>
    </div>
  )
}

export default Benefits