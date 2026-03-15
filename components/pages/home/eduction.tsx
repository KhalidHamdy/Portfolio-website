import Section from '@/components/helpers/section'
import Title from '@/components/shared/title'
import Description from '@/components/typography/description'
import Heading from '@/components/typography/heading'
import { GraduationCap } from 'lucide-react'
const educationData = [
    {
        degree: 'BsC in Computing and Data Science',
        school: 'Alexandria University',
        date: '2021-2025',
        cumulativeGPA: 3.9,
        description: 'Studied the computer science and data science fields, with a focus on artificial intelligence and machine learning.',
    },
   
]
function Education({ id }: { id: string }) {
  return (
    <Section id={id} className='py-8'>
        <Title SectionName='Education' SectionDescription='My academic background' />
        <div className='flex flex-col gap-4 py-4'>

        {educationData.map((item) => (
            
            <div className='relative flex flex-col gap-2 px-24 py-4 border border-gray-300 rounded-lg hover:border-orange-300 transition-all duration-300' key={item.degree}>
                <div className='absolute top-6 left-10 text-orange-300 bg-black rounded-lg p-2'>
                <GraduationCap size={24} className='text-orange-300' />
                </div>
                <Heading size='md' className='text-gray-300'>{item.degree}</Heading>
                <Description size='lg' className='text-orange-300'>{item.school}</Description>
                <Description size='sm' className='text-gray-300'>{item.date}</Description>
                <Description size='sm' className='text-gray-300'>{item.cumulativeGPA}/4.00</Description>
                <Description size='sm' className='text-gray-300'>{item.description}</Description>
            </div>
        ))}
        </div>

    </Section>
  )
}

export default Education