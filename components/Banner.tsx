import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <>
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
        <Image src ="https://links.papareact.com/0fm" layout='fill' objectFit='cover'/>
        <div className="absolute top-1/2 text-center w-full">
            <p>Not sure where to go? Perfect</p>
            <button className='text-blue-600 font-bold bg-white p-3 rounded-full m-2 hover:shadow-lg active:scale-90 transition duration-300'>Flexible</button>
        </div>
      </div>
    </>
  )
}

export default Banner
