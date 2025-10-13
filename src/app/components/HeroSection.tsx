"use client";
import HeroImage from "../../../public/HeroSectionWomen.webp";
import CarouselImage1 from "../../../public/Carousel_img01.webp";
import CarouselImage2 from "../../../public/Carousel_img02.webp";
import CarouselImage3 from "../../../public/Carousel_img03.webp";
import CarouselImage4 from "../../../public/Carousel_img04.webp";
import Image from "next/image";
import Link from "next/link";
// import { useState, useEffect } from "react";

function HeroSection() {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    { logo: CarouselImage1, alt: "Company 1" },
    { logo: CarouselImage2, alt: "Company 2" },
    { logo: CarouselImage3, alt: "Company 3" },
    { logo: CarouselImage4, alt: "Company 4" },
  ];

  // Auto-scroll carousel
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [carouselItems.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#081328] to-[#0E3054] py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Empower your Corporate Travel Management
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
              Reduce corporate travel expenses by 30%. Improve data visibility
              by implementing smart corporate travel management controls.
            </p>

            {/* Request Demo Button */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center md:items-start">
              <Link
                href="/demo"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border border-gray-200 transition"
              >
                Request Demo
              </Link>
            </div>

            {/* Trust indicator text */}
            <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
              52 customers trust ITILITE
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 mt-8 sm:mt-10 md:mt-0 md:ml-10">
            <Image
              src={HeroImage}
              alt="Travel Illustration"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Carousel Section (Full White Background) */}
      <section className="bg-white py-6 sm:py-8">
        <div className="container mx-auto overflow-hidden rounded-lg px-4 sm:px-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // transform: `translateX(-${
              //   currentSlide * (100 / Math.min(carouselItems.length, 6))
              // }%)`,
            }}
          >
            {carouselItems.concat(carouselItems).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 sm:px-8 flex justify-center items-center"
                style={{ width: `${100 / Math.min(carouselItems.length, 6)}%` }}
              >
                <Image
                  src={item.logo}
                  alt={item.alt}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                  height={50}
                  width={250}
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
