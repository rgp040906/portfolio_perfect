import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import SecurityLab from "@/components/sections/SecurityLab";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SecurityLab />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-foreground/50 text-sm border-t border-card-border mt-12 glass">
        <p>© {new Date().getFullYear()} Guru Prasanna R. All rights reserved.</p>
        <p className="mt-2 font-mono text-xs text-cyan-400/50">SYSTEM_SHUTDOWN // DISCONNECT</p>
      </footer>
    </>
  );
}
