import Section from "@/components/helpers/section"
import Description from "@/components/typography/description"
import Heading from "@/components/typography/heading"
import SectionsMainContent from "../shared/sectionsMainContent"


const experienceData = [
    {
        id: 1,
        title: "Software Engineer",
        institute: "The connector",
        start_date: "2025-02",
        end_date: "2026-03",
        description: "Working on developing and maintaining web applications using React and Next.js. Collaborating with cross-functional teams to deliver high-quality software solutions."
    },

]

function ExperienceMainContent() {
    return (

        <SectionsMainContent title="Experience" data={experienceData} />

    )
}

export default ExperienceMainContent