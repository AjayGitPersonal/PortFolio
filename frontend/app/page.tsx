"use client";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Hero from "@/src/sections/Hero";
import About from "@/src/sections/About";
import Skills from "@/src/sections/Skills";
import Experience from "@/src/sections/Experience";
import Projects from "@/src/sections/Projects";
import Contact from "@/src/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
