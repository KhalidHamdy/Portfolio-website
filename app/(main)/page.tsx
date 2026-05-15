import Certifications from "@/components/pages/main/certifications";
import AboutSection from "@/components/pages/main/aboutSection";
import Education from "@/components/pages/main/education";
import Projects from "@/components/pages/main/projects";
import Skills from "@/components/pages/main/skills";

export default function Home() {
  return (
    <div>
      <AboutSection id="about" />
      <Education id="education" />
      <Projects id="projects" />
      <Certifications id="certifications" />
      <Skills id="skills" />
    </div>
  );
}
