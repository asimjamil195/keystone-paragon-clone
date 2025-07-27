import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudyDestinations from "@/components/StudyDestinations";
import Testimonials from "@/components/Testimonials";
import ApplyNowForm from "@/components/ApplyNowForm";
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
      <Footer />
    </div>
  );
};

export default Index;