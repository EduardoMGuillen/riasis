import Header from "@/components/construccion/Header";
import Hero from "@/components/construccion/Hero";
import Services from "@/components/construccion/Services";
import About from "@/components/construccion/About";
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
        <About />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
