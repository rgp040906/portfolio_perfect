import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import SecurityLab from "@/components/sections/SecurityLab";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Platforms from "@/components/sections/Platforms";
import Contact from "@/components/sections/Contact";
import StatsBar from "@/components/sections/StatsBar";
import TrustedRow from "@/components/ui/TrustedRow";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedRow />
      <StatsBar />
      <About />
      <Certifications />
      <Skills />
      <Projects />
      <SecurityLab />
      <Experience />
      <Education />
      <Platforms />
      <Contact />
      
      <footer className="py-10 text-center border-t border-white/[0.08] bg-[#0a0810] mt-16 font-mono text-xs text-[#9b8fa0]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <span>GPR</span>
            <span className="text-[#a855f7]">// SEC_OPS</span>
          </div>
          <p>© {new Date().getFullYear()} Guru Prasanna R. All Rights Reserved.</p>
          <p className="text-[#c4b5fd]">STATUS: 100% OPERATIONAL</p>
        </div>
      </footer>
    </>
  );
}
