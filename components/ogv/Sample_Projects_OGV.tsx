import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Sample_OGV_Projects } from '@/constants/ogv_data';
import { lato } from '@/constants/font_settings';

const Sample_Projects_OGV = () => {
  return (
    <div>
      {/* <hr className="border-aiesec-blue pb-2" /> */}
      <div className={`${lato.className}`}>
        <div className={`flex justify-center`}>
          <h1 className={`font-bold text-4xl pt-5`}>Projects</h1>          
        </div>
        <div>
            <section className="px-4 py-10 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {Sample_OGV_Projects.map((program, index) => (
                        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col text-center space-y-4 h-full">
                            <h3 className={`text-xl font-semibold`}>
                                {program.title}
                            </h3>

                            <div className="flex-grow pt-2">
                                <p className=" text-gray-600 text-l">{program.description}</p>
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

export default Sample_Projects_OGV