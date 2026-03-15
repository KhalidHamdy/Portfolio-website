import React from 'react'
import Section from '../../helpers/section'
import Title from '../../shared/title'
import Heading from '../../typography/heading'
import Description from '../../typography/description'
import { Medal } from 'lucide-react'

const certificationsData = [
    {
        title: 'Data Analytics Professional Certificate',
        provider: 'Google',
        date: '2023',
    },
    {
        title: 'Data Science Professional Certificate',
        provider: 'IBM',
        date: '2024',
    },
    {
        title: 'Data analysis Professional Certificate',
        provider: 'IBM',
        date: '2024',
    },
    {
        title: 'Machine Learning Specialization',
        provider: 'DeepLearning.ai',
        date: '2024',
    },
    {
        title: 'Deep learning Specialization',
        provider: 'DeepLearning.ai',
        date: '2025',
    },
    {
        title: 'Data Analysis Training',
        provider: 'NTI',
        date: '2024',
    },
]

function Certifications() {
    return (
        <Section className='py-8'>
            <Title SectionName='Certifications' SectionDescription='Professional Credentials' />
            <div className='grid grid-cols-3 gap-4 py-8'>
                {certificationsData.map((certification) => (
                    <div className='relative flex flex-col gap-2 px-16 py-4 border border-gray-300 rounded-lg hover:border-orange-300 transition-all duration-300' key={certification.title}>
                        <div className='absolute top-4 left-4 text-orange-300 bg-black rounded-lg p-2'>
                            <Medal size={24} className='text-orange-300' />
                        </div>
                        <Description size='md' className='text-white'>{certification.title}</Description>
                        <Description size='sm' className='text-gray-300'>{certification.provider}</Description>
                        <Description size='sm' className='text-gray-300'>{certification.date}</Description>
                    </div>
                ))}
            </div>
        </Section >
    )
}

export default Certifications;