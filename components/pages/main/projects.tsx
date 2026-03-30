import Section from '@/components/helpers/section'
import Title from '@/components/shared/title'
import Description from '@/components/typography/description'
import Heading from '@/components/typography/heading'

const projectsData = [
    {
        title: 'MUTHMIR graduation project',
        description: (
            <>
                <strong>Smart agriculture system</strong> that integrates AI, IoT, and data analysis
                to enhance the farming experience. <br /><br />

                Developed a <strong>Power BI dashboard</strong> to monitor key agricultural metrics
                over time, providing farmers with actionable insights.
            </>
        ),
        tools: ['Power BI'],
    },
    {
        title: 'Worldwide Importes',
        description: (
            <>
                <strong>The Worldwide Importers Data</strong> is a B2B dataset provided by Microsoft for training, testing, and demonstrating data management, data analysis, and reporting solutions Extracted data using SQL queries, followed by data cleaning and transformation for analysis.',
                <br /><br />
                <strong>Analysis Goal:</strong> Understand the sales and profit across regions
                <br /><br />
                <strong>Insights:</strong> provide insights to help stakeholders that will help in decision making
            </>
        ),
        tools: ['SQL', 'Excel', 'Power BI', 'Power Query', 'DAX'],
    },
    {
        title: 'Cyclistic',
        description: (<>
            <strong>Description :</strong> Cyclistic's data tracks bike-sharing usage patterns in Chicago, comparing ride behaviorsbetween casual riders and members for business insights.
            <br /><br />
            <strong>Analysis Goal:</strong> convert casual riders to member riders
            <br /><br />
            <strong>Recommendation:</strong> provide some recommendations based on depth analysis to convert Casual riders tomember riders
        </>
        ),

        tools: ['Power Query', 'Power BI', 'Python'],
    },
]

function Projects({ id }: { id: string }) {
    return (
        <Section id={id} className='py-8'>
            <Title SectionName='Projects' SectionDescription="Things I've built" />
            <div className='relative grid grid-cols-2 gap-8 py-4 h-full'>
                {projectsData.map((project) => (
                    <div className='flex flex-col gap-2 p-8 border border-gray-300 rounded-lg hover:border-orange-300 transition-all duration-300' key={project.title}>
                        <Heading size='md' className='text-white'>{project.title}</Heading>
                        <Description size='xs' className='text-gray-300'>
                            {project.description}
                        </Description>
                        <Description size='xs' className='text-gray-300'>
                            <div className='flex gap-2'>
                                {project.tools.map((tool) => (
                                    <span className='rounded-full p-2 text-white bg-black' key={tool}>
                                        {tool}
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

export default Projects