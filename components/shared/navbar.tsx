import React from 'react'
import Heading from '../typography/heading'
import Link from 'next/link'

const navItems = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Education',
        href: '#education'
    },
   
    {
        label: 'Projects',
        href: '#projects'
    },
    {
        label: 'Certifications',
        href: '#certifications'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
]
function Navbar() {
      return (
        <div className='sticky top-0 z-50 flex justify-between items-center p-4 w-full bg-black text-orange-300'>
            <Heading size='sm'>Portfolio</Heading>
            <div className='flex items-center gap-8 text-gray-300'>
                {navItems.map((item) => (
                    <Link className='hover:text-orange-300 transition-colors' key={item.label} href={item.href}>{item.label}</Link>
                ))}
            </div>

        </div>

)
}

export default Navbar