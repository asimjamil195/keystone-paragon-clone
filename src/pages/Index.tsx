import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
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
      <WhyChooseUs />
      <StudyDestinations />
      <Testimonials />
      <ApplyNowForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;