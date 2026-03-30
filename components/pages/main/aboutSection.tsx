import Button from '@/components/helpers/button'
import Section from '@/components/helpers/section'
import SkeletonImage from '@/components/helpers/skeletonImage'
import Description from '@/components/typography/description'
import Heading from '@/components/typography/heading'
import Image from 'next/image'
import Link from 'next/link'

function AboutSection({ id }: { id: string }) {
    return (
        <Section id={id} className='py-8 flex gap-4 flex-col'>
            <Heading size='sm' className='text-orange-300'>Data Analyst</Heading>
            <div className='flex gap-16'>
                <div className='w-1/2 flex flex-col gap-8'>
                <Heading size='lg' className='text-white'>
                    Driven Success <br />
                    Through <br />
                    <span className='text-orange-300'>Data Analytics</span>
                </Heading>
                <Description size='lg' className='text-gray-300'>
                Data analyst delivering precise e-commerce and financial insights, transforming raw data into strategic,
                impactful solutions using different data analysis tools. Driving success through data-driven decisions
                </Description>
                <Description size='lg' className='text-gray-300'>
                <div className=''> </div>
                    <Button>
                            Download CV
                    </Button>
                </Description>
                </div >
                <SkeletonImage src='/imgs/home/personal-photo.png' alt='About' className='max-h-128 rounded-lg transform -translate-y-1/12' containerClassName='m-auto' />
            </div>
        </Section>
    )
}

export default AboutSection