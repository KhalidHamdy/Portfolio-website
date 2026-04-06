import Section from "@/components/helpers/section"
import { useState } from "react"
import SkillsSection from "./skillsSection";

function SkillsMainContent() {
    // const [skills, setSkills] = useState<{ [key: string]: string[] }>({}); // Placeholder for skills data
    const skillsData = ({
        "Technical Skills": ["React", "Node.js", "mongodb", "HTML", "CSS", "typescript"],
        "Soft Skills": ["Communication", "Teamwork", "Problem Solving"],
    }); // This will be replaced with actual data fetching logic in the future
    return (
        <Section className="py-4 grid grid-cols-1 md:grid-cols-2 gap-6">

           <SkillsSection title="Technical" skills={skillsData["Technical Skills"]} />
           <SkillsSection title="Soft" skills={skillsData["Soft Skills"]} />
        </Section>
    );
}

export default SkillsMainContent