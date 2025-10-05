'use client';

import Customers from "./Customers";
import HeroSection from "./HeroSection";
import Investors from "./Investors";
import Story from "./Story";
import Team from "./Team";
import Trust from "./Trust";
import OurValues from "./OurValues";
import News from "./News";
import CTA from "./CTA";

const AboutUs = () => {
  return ( 
    <div>
      <HeroSection />
      <Story />
      <Investors />
      <Customers />
      <Trust />
      <Team />
      <OurValues />
      <News />
      <CTA />
    </div>
   );
}
 
export default AboutUs;