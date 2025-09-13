"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselItems = [
    { logo: "/Carousel_img01.svg", alt: "Company 1" },
    { logo: "/Carousel_img02.png", alt: "Company 2" },
    { logo: "/Carousel_img03.png", alt: "Company 3" },
    { logo: "/Carousel_img04.png", alt: "Company 4" }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#081328] to-[#0E3054] py-20 text-white">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Empower your Corporate Travel Management
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Reduce corporate travel expenses by 30%. Improve data visibility by implementing smart corporate travel management controls.
            </p>

            {/* Request Demo Button */}
            <div className="mt-8 flex flex-col items-center md:items-start">
              <Link
                href="/demo"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border border-gray-200 transition"
              >
                Request Demo
              </Link>
            </div>

            {/* Trust indicator text */}
            <p className="text-sm text-gray-400 mt-4">
              52 customers trust ITILITE
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <img
              src="/HeroSectionWomen.webp"
              alt="Travel Illustration"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Carousel Section (Full White Background) */}
      <section className="bg-white py-8">
        <div className="container mx-auto overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / Math.min(carouselItems.length, 6))}%)` }}
          >
            {carouselItems.concat(carouselItems).map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8"
                style={{ width: `${100 / Math.min(carouselItems.length, 6)}%` }}
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="h-12 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
