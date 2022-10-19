import React from 'react'
import Image from 'next/image'
import{MagnifyingGlassIcon, GlobeAltIcon,UserCircleIcon,UsersIcon, Bars3Icon} from '@heroicons/react/24/solid'
const Header = () => {
  return (
    <div>
        <header className="z-50 sticky top-0 grid grid-cols-3 p-5 shadow-md md:p-10 bg-white">
            
            <div className="relative flex h-10 p-5 items-center cursor-pointer">
                <Image src="https://links.papareact.com/qd3" layout='fill'
                objectFit='contain' objectPosition="left"/>
            </div>
             
            {/* Center */}
            <div className="flex items-center md:border-2 py-2 rounded-full">
                <input type="text" placeholder="search here" className="pl-5 outline-none flex-grow bg-transparent md:shadow-sm text-sm text-gray-600"/>
                <MagnifyingGlassIcon className="hidden md:inline-flex bg-red-400 text-white h-8 rounded-full p-2 md:mx-2"/>
            </div>

            {/* Left */}
            <div className="flex items-center space-x-4 justify-end text-gray-600">
                <p className='hidden md:inline hover:text-red-400 cursor-pointer'>Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer hover:text-red-400 "/>

                <div className='flex p-2 space-x-2 items-center border-2 rounded-full cursor-pointer'>
                    <Bars3Icon className='h-6 hover:text-red-400'/>
                    <UserCircleIcon className='h-6 hover:text-red-400'/>
                </div>
            </div>

        </header>

        {/* Right */}

       

    </div>
  )
}

export default Header