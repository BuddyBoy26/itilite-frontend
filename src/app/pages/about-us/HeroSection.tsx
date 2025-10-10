"use client";
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../../public/about-us-hero-img.webp";

const HeroSection = () => {
  return (
    <section className="bg-[#232323] text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            {/* Spark Icon */}
            <div className="inline-flex justify-center lg:justify-start">
              <Sparkles
                className="w-10 h-10 text-orange-500"
                strokeWidth={2}
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
              Corporate travel management company that makes{" "}
              <span className="text-amber-300 font-normal">
                expense simple & efficient
              </span>
            </h1>

            {/* CTA Button */}
            <button className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-200 to-amber-300 text-gray-900 font-medium text-base sm:text-lg rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:-translate-y-1 active:scale-95 transition-all duration-300">
              Schedule demo
              <ArrowUpRight
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-md hidden sm:inline sm:max-w-lg md:max-w-xl">
              <Image
                src={heroImage}
                alt="Hero Image"
                className="rounded-2xl object-cover animate-fade-in-delayed"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.4s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
