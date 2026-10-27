import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import About       from "@/components/About";
import Skills      from "@/components/Skills";
import Projects    from "@/components/Projects";
import Education   from "@/components/Education";
import WhatIDo     from "@/components/WhatIDo";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <WhatIDo />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
