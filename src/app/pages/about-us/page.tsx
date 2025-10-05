'use client';

import Customers from "./Customers";
import HeroSection from "./HeroSection";
import Investors from "./Investors";
import Story from "./Story";
import Trust from "./Trust";

const AboutUs = () => {
  return ( 
    <div>
      <HeroSection />
      <Story />
      <Investors />
      <Customers />
      <Trust />
    </div>
   );
}
 
export default AboutUs;