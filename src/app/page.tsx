import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import FeatureCarousel from "./components/FeatureCarousel";

const Home = () => {
  return (
        <>
        <Navbar />
        
        <HeroSection />
        <FeatureCarousel />
        <FeaturesSection />
        <Testimonials />

        <Footer />
        </>
  );
}

export default Home;
