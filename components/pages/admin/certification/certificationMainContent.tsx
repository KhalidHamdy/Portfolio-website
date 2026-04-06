import Section from "@/components/helpers/section"
import Description from "@/components/typography/description"
import Heading from "@/components/typography/heading"
import SectionsMainContent from "../shared/sectionsMainContent"


const certificationData = [
    {
        id: 1,
        title: "Data analysis",
        institute: "Google",
        end_date: "2023-06",
        description: "Completed a comprehensive data analysis certification program offered by Google, covering essential skills such as data cleaning, visualization, and statistical analysis. Gained hands-on experience with tools like Excel, SQL, and Tableau through practical projects and real-world case studies."
    },
]


function CertificationMainContent() {
    return (

        <SectionsMainContent title="Certifications" data={certificationData} />
    )
}

export default CertificationMainContent