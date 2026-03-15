import React from 'react'
import Heading from '../typography/heading'
import Description from '../typography/description'

interface TitleProps {
    SectionName: string;
    SectionDescription: string;
}
export default function Title({ SectionName, SectionDescription }: TitleProps) {
  return (

    <div className='py-4 flex flex-col gap-4 justify-center items-center'>
        <Heading size='md' className='text-orange-300'>{SectionName}</Heading>
        <Description size='sm' className='text-gray-300'>{SectionDescription}</Description>
        <div className='w-1/12 h-1 bg-orange-300 rounded-full' />    
    </div>
    );
}
