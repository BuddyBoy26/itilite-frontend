import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import FeatureCarousel from "./components/FeatureCarousel";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureCarousel />
      <FeaturesSection />
      <Testimonials />
    </>
  );
};

export default Home;
