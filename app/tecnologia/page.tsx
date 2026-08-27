import Header from "@/components/tecnologia/Header";
import Hero from "@/components/tecnologia/Hero";
import Services from "@/components/tecnologia/Services";
import Process from "@/components/tecnologia/Process";
import About from "@/components/tecnologia/About";
import Projects from "@/components/tecnologia/Projects";
import Testimonials from "@/components/tecnologia/Testimonials";
import Location from "@/components/tecnologia/Location";
import CtaBand from "@/components/tecnologia/CtaBand";
import Footer from "@/components/tecnologia/Footer";

export default function TecnologiaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <Projects />
        <Testimonials />
        <Location />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
