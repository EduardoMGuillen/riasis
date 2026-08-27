import Header from "@/components/construccion/Header";
import Hero from "@/components/construccion/Hero";
import Services from "@/components/construccion/Services";
import Process from "@/components/construccion/Process";
import About from "@/components/construccion/About";
import Projects from "@/components/construccion/Projects";
import Testimonials from "@/components/construccion/Testimonials";
import CtaBand from "@/components/construccion/CtaBand";
import Footer from "@/components/construccion/Footer";

export default function ConstruccionPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Projects />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
