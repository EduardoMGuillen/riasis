import Header from "@/components/tecnologia/Header";
import Hero from "@/components/tecnologia/Hero";
import Featured from "@/components/tecnologia/Featured";
import Catalog from "@/components/tecnologia/Catalog";
import Services from "@/components/tecnologia/Services";
import WhyMarphone from "@/components/tecnologia/WhyMarphone";
import Process from "@/components/tecnologia/Process";
import About from "@/components/tecnologia/About";
import Testimonials from "@/components/tecnologia/Testimonials";
import Location from "@/components/tecnologia/Location";
import CtaBand from "@/components/tecnologia/CtaBand";
import Footer from "@/components/tecnologia/Footer";
import { getFeaturedProducts, getProducts } from "@/lib/product-store";

export const dynamic = "force-dynamic";

export default async function TecnologiaPage() {
  const [featured, products] = await Promise.all([
    getFeaturedProducts(),
    getProducts(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Featured products={featured} />
        <Catalog products={products} />
        <Services />
        <WhyMarphone />
        <Process />
        <About />
        <Testimonials />
        <Location />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
