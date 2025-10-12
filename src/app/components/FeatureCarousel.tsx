"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CorporateTravel from "../../../public/Corporate_travel.webp";
import ExpenseManagement from "../../../public/Expense-report-India-1.webp";
import UnifiedTravelExpense from "../../../public/Unified-travel-expense-India.webp";

const carouselItems = [
  {
    title: "Corporate travel",
    subtitle: "Book flights & hotels in one place",
    description:
      "Manage end-to-end corporate travel seamlessly with our integrated platform.",
    button: "Learn more",
    image: CorporateTravel,
  },
  {
    title: "Expense management",
    subtitle: "Automate expense reporting",
    description:
      "Eliminate manual expense reports with AI-driven automation.",
    button: "Learn more",
    image: ExpenseManagement,
  },
  {
    title: "Unified travel & expense",
    subtitle: "All-in-one solution",
    description:
      "Get a single platform for both travel and expense management with real-time insights.",
    button: "Learn more",
    image: UnifiedTravelExpense,
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          All-in-one corporate travel management system
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-800 text-sm sm:text-base max-w-2xl mx-auto">
          A fully integrated corporate travel management software that
          dramatically reduces spends while improving user experience
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide: ${item.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Carousel Content */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 transition-all duration-700 ease-in-out">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-orange-600 font-semibold text-sm sm:text-base">
              {carouselItems[activeIndex].title}
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 leading-snug">
              {carouselItems[activeIndex].subtitle}
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              {carouselItems[activeIndex].description}
            </p>
            <button
              className="mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-50 text-black font-medium rounded-lg border border-orange-200 shadow-md hover:shadow-lg transition"
              aria-label={carouselItems[activeIndex].button}
            >
              {carouselItems[activeIndex].button} →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-md mx-auto">
            <Image
              src={carouselItems[activeIndex].image}
              alt={carouselItems[activeIndex].title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
