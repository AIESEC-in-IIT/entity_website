import React from 'react'
import { lato } from '@/constants/font_settings'
import { raleway } from '@/constants/font_settings'
import Image from 'next/image'

const Requirements = () => {
  return (
    <div>
      <div className={`${lato.className} py-2 flex justify-center`}>
        <h1 className={`text-5xl font-bold`}>Requirements</h1>
      </div>
      <div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:gird-cols-2 gap-8 px-6 py-12 bg-white`}>
          <div className={`grid place-items-center min-h-full`}>
            <h1 className={`${lato.className} text-xl px-4 pb-8`}>To volunteer, the following criteria have to be satisfied.</h1>
            <ul className={`${raleway.className} list-disc text-lg px-8 pb-8 space-y-1`}>
              <li className={`hover:font-bold`}>Be between 18 & 30 years of age</li>
              <li className={`hover:font-bold`}>Availability for a period of 6-8 weeks</li>
              <li className={`hover:font-bold`}>Basic spoken English</li>
              <li className={`hover:font-bold`}>Interest in acting on global issues</li>
              <li className={`hover:font-bold`}>Desire to develop yourself</li>
              <li className={`hover:font-bold`}>Open-minded by new cultures & experiences</li>
            </ul>
            <p className={`${lato.className} px-4`}>Additionally, to these basic requirements, the EP should be an outgoing, friendly person that can work with a group of people amidst the challenges he/she is going to face throughout the experience. This would mean not cracking under pressure and being open to feedback and criticisms which opens up the pathway to being a great leader like AIESEC promises.</p>
          </div>
          <div className={`flex justify-center `}>
            <Image  className='rounded-xl shadow-md'
            src="/mirror_selfie.jpg"
            alt="Let's Volunteer"
            width={500}
            height={500}/>
          </div>
        </div>
      </div>
      <hr className="border-grey" />
    </div>
  )
}

export default Requirements