import React from 'react'
import Heading from '../typography/heading'
import Link from 'next/link'

function Navbar() {
      return (
        <div className='sticky top-0 z-50 flex justify-between items-center p-4 w-full bg-black text-orange-300'>
            <Heading size='sm'>Portfolio</Heading>
            <div className='flex items-center gap-8 text-gray-300'>
                <Link href='/'>About</Link>
                <Link href='/'>Education</Link>
                <Link href='/'>Experience</Link>
                <Link href='/'>Projects</Link>
                <Link href='/'>Skills</Link>
                <Link href='/'>Certifications</Link>
            </div>

        </div>

)
}

export default Navbar