import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Sample_OGV_Projects } from '@/constants/ogv_data';
import { lato } from '@/constants/font_settings';

const Sample_Projects_OGV = () => {
    return (
        <div>
            <div className={`${lato.className}`}>

                <div className={`flex justify-center`}>
                    <h1 className={`font-bold text-4xl pt-5`}>Projects</h1>          
                </div>
                
                <div>
                    <section className="px-4 py-10 bg-white">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {Sample_OGV_Projects.map((program, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-4 flex flex-col h-full">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        width={500}
                                        height={300}
                                        className="object-cover rounded-md w-full h-48"
                                    />
                                    <h3 className="text-xl font-semibold mt-4 mb-2 text-center">{program.title}</h3>
                                    <p className="text-gray-600 text-sm">{program.description.replace('/n', '\n')}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div className='py-4 flex justify-center'>                    
                    <Link href='/ogv/volunteering_projects'>
                        <button className="px-5 py-2 bg-aiesec-blue text-white rounded-md hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-105">
                            View All Projects
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Sample_Projects_OGV