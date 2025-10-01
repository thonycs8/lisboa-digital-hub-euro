
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
