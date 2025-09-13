import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
        <>
        <Navbar />
        
        <HeroSection />
        <FeaturesSection />
        <Testimonials />
        </>
  );
}

export default Home;
