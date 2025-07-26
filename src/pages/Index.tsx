import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import StudyDestinations from "@/components/StudyDestinations";
import Testimonials from "@/components/Testimonials";
import ApplyNowForm from "@/components/ApplyNowForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <StudyDestinations />
      <Testimonials />
      <ApplyNowForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;