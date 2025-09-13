"use client";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    title: "Corporate travel",
    subtitle: "Book flights & hotels in one place",
    description:
      "Manage end-to-end corporate travel seamlessly with our integrated platform.",
    button: "Learn more",
    image: "/travel-phone.png",
  },
  {
    title: "Expense management",
    subtitle: "Automate expense reporting",
    description:
      "Eliminate manual expense reports with AI-driven automation.",
    button: "Learn more",
    image: "/expense-phone.png",
  },
  {
    title: "Unified travel & expense",
    subtitle: "All-in-one solution",
    description:
      "Get a single platform for both travel and expense management with real-time insights.",
    button: "Learn more",
    image: "/unified-phone.png",
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
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          All-in-one corporate travel management system
        </h2>
        <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
          A fully integrated corporate travel management software that
          dramatically reduces spends while improving user experience
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-8">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Carousel Content */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12 transition-all duration-700 ease-in-out">
          {/* Left Text */}
          <div className="flex-1 text-left">
            <h3 className="text-orange-600 font-semibold">
              {carouselItems[activeIndex].title}
            </h3>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              {carouselItems[activeIndex].subtitle}
            </h2>
            <p className="mt-4 text-gray-600">
              {carouselItems[activeIndex].description}
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-50 text-black font-medium rounded-lg border border-orange-200 shadow-md hover:shadow-lg transition">
              {carouselItems[activeIndex].button} →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={carouselItems[activeIndex].image}
              alt={carouselItems[activeIndex].title}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
