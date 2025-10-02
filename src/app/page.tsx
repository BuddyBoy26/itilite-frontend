import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import FeatureCarousel from "./components/FeatureCarousel";
import YtVideo from "./components/YtVideo";
import DynamicCounter from "./components/DynamicCounter";
import ImageTextSection from "./components/ImageTextSection";
import TitleContent from "./components/TitleContent";
import TitleContent02 from "./components/TitleContent02";
import AwardsSection from "./components/AwardsSection";

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
      <TitleContent
        title="We integrate with all major systems"
        content="We integrate with leading enterprise systems across ERP, HRMS and SSO systems"
        imageUrl="/TitleContent01.svg" />
      <TitleContent02
        title="Transparent pricing for corporate travel management"
        contentTop="Tired of monthly subscriptions and hidden fees weighing down your travel budget? Break Free & Get Crystal Clear Pricing."
        contentBottom="Pay only when you book a trip – no additional or hidden costs. Spend less time managing subscriptions and more time planning successful business trips."
        />
      <AwardsSection />
    </>
  );
};

export default Home;
