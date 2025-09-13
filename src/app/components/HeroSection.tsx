"use client";
import Link from "next/link";
//
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#081328] to-[#0E3054] py-20 text-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-300 leading-tight">
            Empower your Corporate Travel Management
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Reduce corporate travel expenses by 30%. Improve data visibility by implementing smart corporate travel management controls.
          </p>

          {/* Request Demo Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="/demo"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border border-gray-200 transition"
            >
              Request Demo
            </Link>
            <br />
            <p className="mt-4 text-sm opacity-80">
                🎉 52 customers signed up last week
            </p>

          </div>
        </div>

        {/* Right Side Image (optional placeholder for now) */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img
            src="/HeroSectionWomen.webp"
            alt="Travel Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
