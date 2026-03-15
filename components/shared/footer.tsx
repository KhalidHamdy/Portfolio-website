import React from 'react'
import Heading from '../typography/heading'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
function Footer() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center py-12 w-full bg-black text-gray-300'>
        <Heading size='sm' className='text-orange-300'>Let's connect</Heading>
        <div className='flex items-center gap-4'>
            <Link href='https://www.linkedin.com/in/khalid-hamdy-27a535268'>
            <Linkedin className='text-white hover:text-orange-300 transition-colors' />
            </Link>
            <Link href='https://www.github.com/KhalidHamdy'>
            <Github className='text-white hover:text-orange-300 transition-colors' />
            </Link >
        </div>
        <Heading size='sm'>© 2026 All rights reserved.</Heading>
    </div>
  )
}

export default Footer