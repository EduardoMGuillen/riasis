import Header from "@/components/verde/Header";
import Hero from "@/components/verde/Hero";
import Services from "@/components/verde/Services";
import Grasses from "@/components/verde/Grasses";
import Gardens from "@/components/verde/Gardens";
import Process from "@/components/verde/Process";
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
        <Grasses />
        <Gardens />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
