import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Speaking from "@/components/Speaking";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Speaking />
        </FadeIn>
        <FadeIn>
          <Certifications />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
