import Certifications from "@/components/pages/home/certifications";
import AboutSection from "@/components/pages/home/aboutSection";
import Education from "@/components/pages/home/eduction";
import Projects from "@/components/pages/home/projects";
import Skills from "@/components/pages/home/skills";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
    </div>
  );
}
