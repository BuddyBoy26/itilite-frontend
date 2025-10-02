'use client';

import Customers from "./Customers";
import HeroSection from "./HeroSection";
import Investors from "./Investors";
import Story from "./Story";

const AboutUs = () => {
  return ( 
    <div>
      <HeroSection />
      <Story />
      <Investors />
      <Customers />
    </div>
   );
}
 
export default AboutUs;