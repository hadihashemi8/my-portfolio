import AboutMe from "@/components/aboutMe";
import ContactMe from "@/components/contact-me";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  )
}
