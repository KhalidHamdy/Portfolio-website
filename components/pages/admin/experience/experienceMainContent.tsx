import Section from "@/components/helpers/section"
import Description from "@/components/typography/description"
import Heading from "@/components/typography/heading"


const experienceData = [
    {
        id: 1,
        title: "Software Engineer",
        company: "The connector",
        start_date: "2025-02-08",
        end_date: "2026-03-08",
        description: "Working on developing and maintaining web applications using React and Next.js. Collaborating with cross-functional teams to deliver high-quality software solutions."
    },

]

function ExperienceMainContent() {
    return (
        <Section className="my-8 p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-orange-400 transition-all hover:shadow-lg hover:shadow-orange-500/20 mb-4">
            <div className="flex justify-between items-center pb-4">
                <Heading size="sm" className="font-bold text-white">Experience</Heading>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                    Add New Experience
                </button>
            </div>
            <hr />
            <div>
                {experienceData && experienceData.length > 0 ? (
                    <>
                        {experienceData.map((experience) => (
                            <div key={experience.id} className="text-gray-300 mt-4 space-y-2 border border-gray-600 rounded-xl hover:border-orange-400 transition-all p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Heading size="sm" className="font-bold">
                                            {experience.title}
                                        </Heading>
                                        <Description size="sm" className="text-orange-400">{experience.company}</Description>
                                    </div>
                                    <Description size="sm" className="text-gray-300">{experience.start_date} - {experience.end_date}</Description>

                                </div>
                                <Description size="sm" className="text-gray-300 mt-2">
                                    {experience.description}
                                </Description>
                            </div>
                        ))}
                    </>
                ) : (
                    <p className="text-gray-400 py-4">You haven't added any experience yet. Start by clicking the "Add New Experience" button above!</p>
                )}
            </div >
        </Section>
    )
}

export default ExperienceMainContent