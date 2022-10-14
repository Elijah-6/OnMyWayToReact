import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <header>
            <h1>I am The Header</h1>
            <div>
                <Image src="https://links.papareact.com/qd3" layout='fill'
                objectFit='contain' objectPosition="left"/>
            </div>
             
            {/* Center */}
            <div>
                Center
            </div>

            {/* Left */}
            <div>
                Left
            </div>

        </header>

        {/* Right */}

       

    </div>
  )
}

export default Header