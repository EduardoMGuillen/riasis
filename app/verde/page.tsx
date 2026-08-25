import Header from "@/components/verde/Header";
import Hero from "@/components/verde/Hero";
import Services from "@/components/verde/Services";
import About from "@/components/verde/About";
import Projects from "@/components/verde/Projects";
import Testimonials from "@/components/verde/Testimonials";
import CtaBand from "@/components/verde/CtaBand";
import Footer from "@/components/verde/Footer";

export default function VerdePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
