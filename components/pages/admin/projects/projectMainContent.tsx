import { title } from "process"
import SectionsMainContent from "../shared/sectionsMainContent"

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        institute: "react, next.js, tailwind CSS, firebase, node.js, mongodb shadcn UI",
        end_date: "2026-04",
        description: "A personal portfolio website built using React and Next.js, showcasing my skills, projects, and experience. The website features a clean and modern design, responsive layout, and smooth animations to provide an engaging user experience.",
        live_demo_link: "https://example.com",
        github_link: "https://github.com/KhalidHamdy/Portfolio-website"
    },
]

function ProjectMainContent() {
  return (
    <SectionsMainContent title="Projects" data={projectsData} />
  )
}

export default ProjectMainContent