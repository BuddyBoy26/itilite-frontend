import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import FeatureCarousel from "./components/FeatureCarousel";
import YtVideo from "./components/YtVideo";
import DynamicCounter from "./components/DynamicCounter";
import ImageTextSection from "./components/ImageTextSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureCarousel />
      <FeaturesSection />
      <YtVideo 
         url="https://www.youtube.com/embed/JiCxfStLSEA?si=C_3QdFwYL9HRbgQn" 
        title="Empower users to book the next business trip on itilite. Watch how it works!"                  
      />
      <Testimonials />
      <DynamicCounter />
      <ImageTextSection sectionTitle="Make corporate travel management easy and save money" />
    </>
  );
};

export default Home;
