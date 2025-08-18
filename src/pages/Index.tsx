import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesHighlight from "@/components/ServicesHighlight";
import StudyDestinations from "@/components/StudyDestinations";
import LatestBlogs from "@/components/LatestBlogs";
import Testimonials from "@/components/Testimonials";
import ApplyNowForm from "@/components/ApplyNowForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ServicesHighlight />
      <StudyDestinations />
      <LatestBlogs />
      <Testimonials />
      <ApplyNowForm />
      <Footer />
    </div>
  );
};

export default Index;