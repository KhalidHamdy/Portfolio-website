import Section from "@/components/helpers/section"
import Title from "@/components/shared/title"
import Description from "@/components/typography/description"
import Heading from "@/components/typography/heading"

const skillsData = [
    {
        title: 'Technical Skills',
        skills: [
            'Excel', 'Google sheets', 'Power BI', 'Tableau', 'SQL', 'Exploratory Data Analysis', 'Data Wrangling', 'Data Visualization', 'Data Analytics', 'python', 'pandas', 'numpy', 'Machine Learning', 'Azure Cloud', 'Probability and Statistics'
        ]
    },
    {
        title: 'Soft Skills',
        skills: [
            'Analytical thinking', 'Problem solving', 'Time management']
    },
]
function Skills() {
    return (
        <Section className='py-8'>
            <Title SectionName='Skills' SectionDescription='My skills' />
            <div className='grid grid-cols-2 gap-4 py-4'>
              {skillsData.map((skill) => (
                <div className='flex flex-col gap-2 py-4 hover:border-orange-300 transition-all duration-300' key={skill.title}>
                    <Heading size='md' className='text-orange-300'>{skill.title}</Heading>
                    <Description size='sm' className='text-gray-300'>
                        <div className='flex flex-wrap gap-2'>
                            {skill.skills.map((skill) => (
                                <span className='rounded-full p-2 text-white bg-black hover:border-orange-300 hover:border-2 transition-all duration-300 hover:text-orange-300' key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Description>
                </div>
              ))}
            </div>
        </Section>
    )
}

export default Skills