import React from "react";
import { Volume2 } from "lucide-react";

function Story() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative">
        {/* Decorative Profile Images */}
        {/* Top Left */}
        <div className="absolute -left-12 top-20 lg:left-0 lg:top-32 animate-float">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-purple-200 border-4 border-white shadow-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-500 mb-6">
              Story of{" "}
              <span className="text-orange-500 font-semibold">ITILITE</span>
            </h1>

            <div className="flex items-center justify-center gap-3 text-gray-700">
              <span className="text-sm lg:text-base">
                itilite (Pronounced as it- ee - laa - it)
              </span>
              <button className="text-orange-500 hover:text-orange-600 transition-colors">
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Placeholder */}
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              There is a saying "best ideas come from personal pain points" and
              that is exactly how itilite came into being.
            </p>

            <p>
              Before starting itilite in 2017, Anish and Mayank used to work
              with McKinsey and Co. Like many others, they used to spend 200
              nights a year travelling for work. As regular corporate travellers
              who helped companies balance cost and employee experience, they
              quickly realized the inefficiencies and flaws surrounding business
              travel.
            </p>

            <p>
              They also noticed the increasing gap between personal and{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 no-underline"
              >
                Corporate travel processes
              </a>
              , wherein personal travel was becoming increasingly digital and
              seamless. However, business travel heavily relied on manual
              processes, complicated approval workflows, and there were no
              effective cost control measures. That's when they knew that
              business travel needed to move towards technological processes,
              and they decided to define the problem further and solve it.
            </p>

            <p>
              Here we are today with the team's relentless work to usher in an
              era of transformation of business travel & expenses via products
              and processes, replacing the traditional travel desks and offline
              processes that prevailed earlier.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(15deg);
          }
        }

        @keyframes draw {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-draw {
          animation: draw 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Story;
