import Section from "@/components/helpers/section";
import Description from "@/components/typography/description";
import Heading from "@/components/typography/heading";
import SectionsMainContent from "../shared/sectionsMainContent";

const educationData = [
  {
    id: 1,
    title: "Bs.c in Computing and Data science",
    institute: "Alexandria University",
    start_date: "2021",
    end_date: "2025",
    description:
      "Graduated from data science department, course work includes CS basics such as algorithms, data structures, and programming languages, as well as specialized courses in machine learning, data analysis, and big data technologies. Gained hands-on experience through projects and internships, applying theoretical knowledge to real-world data challenges.",
  },
];

function EducationMainContent() {
  return <SectionsMainContent title="Education" data={educationData} />;
}

export default EducationMainContent;
