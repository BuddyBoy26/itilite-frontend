import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../../public/about-us-hero-img.webp"; // Placeholder image path

const HeroSection = () => {
  return (
    <section className="min-h-screen from-gray-900 via-gray-800 to-gray-900 bg-[#232323] text-white">
      <div className="container max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Spark Icon */}
            <div className="inline-block">
              <Sparkles
                className="w-10 h-10 text-orange-500"
                strokeWidth={2}
              />
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
              <span className="">
                Corporate travel management company that makes expense simple &
                efficient
              </span>
            </h1>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-200 to-amber-300 text-gray-900 font-medium text-lg rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:-translate-y-1 active:scale-[90%]  transition-all duration-300">
              Schedule demo
              <ArrowUpRight
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center">
            <Image src={heroImage} alt={`hero image`} />
            {/* Glass Card Container}
            { <div className="relative w-full max-w-lg aspect-square hidden">
              {/* Background Glow}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse-slow" />

              {/* Glass Card}
              <div className="relative bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Decorative Elements}

                <div className="absolute bottom-12 left-8 w-32 h-32 opacity-10">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-float"
                  >
                    <path
                      d="M 20,50 Q 40,20 60,50 T 100,50"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      className="text-orange-500"
                    />
                  </svg>
                </div>

                {/* 3D Travel Illustration Placeholder}
                <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
                  {/* Airplane}
                  <div className="relative animate-float-delayed">
                    <div className="w-32 h-24 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-xl transform -rotate-12">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-gray-800 rounded-full" />
                      </div>
                    </div>
                    <div className="absolute -right-4 top-1/2 w-16 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                  </div>

                  {/* Globe}
                  <div className="relative animate-spin-very-slow">
                    <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-2xl">
                      <div className="absolute inset-0 rounded-full border-4 border-cyan-300/30" />
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* Luggage}
                  <div className="flex gap-4 animate-float">
                    <div className="w-20 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-xl">
                      <div className="w-full h-2 bg-gray-800/30 mt-2 rounded" />
                    </div>
                    <div className="w-16 h-20 bg-gradient-to-br from-pink-400 to-orange-500 rounded-lg shadow-xl">
                      <div className="w-full h-2 bg-gray-800/30 mt-2 rounded" />
                    </div>
                  </div>

                  {/* Tickets}
                  <div className="absolute top-12 right-8 transform rotate-12 animate-float-delayed">
                    <div className="w-24 h-16 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-lg shadow-lg p-2">
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-white/40 rounded" />
                        <div className="w-3/4 h-1 bg-white/40 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
