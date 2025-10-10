"use client";

import BestSoftware from "../../../../public/best-software-award.png";
import HighPerformer from "../../../../public/high-performer-award.png";
import CategoryLeader from "../../../../public/category-leader-award.webp";
import MomentumLeader from "../../../../public/momentum-leader-award.png";
import TVS from "../../../../public/tvs-motor-logo.jpg";
import Intellect from "../../../../public/intellect-designs-logo.png";
import Infotech from "../../../../public/itc-infotech-logo.svg";
import Datamatics from "../../../../public/datamatics-logo.png";
import Fashinza from "../../../../public/fashinza-logo.png";
import Image from "next/image";
import { useState } from "react";

const CompanyLogos = [
  { name: "TVS", src: TVS, height: 40, id: 0 },
  { name: "Intellect Designs", src: Intellect, height: 40, id: 1 },
  { name: "ITC Infotech", src: Infotech, height: 60, id: 2 },
  { name: "Datamatics", src: Datamatics, height: 30, id: 3 },
  { name: "Fashinza", src: Fashinza, height: 40, id: 4 },
];

const Awards = [
  {
    name: "Best Software Award",
    src: BestSoftware,
    description: "Best Software Awards 2024",
    id: 1,
  },
  {
    name: "High Performer Award",
    src: HighPerformer,
    description: "High Performer - Spring 2024",
    id: 2,
  },
  {
    name: "Category Leader Award",
    src: CategoryLeader,
    description: "Category Leader - GetApp 2023",
    id: 3,
  },
  {
    name: "Momentum Leader Award",
    src: MomentumLeader,
    description: "Momentum Leader - Spring 2024",
    id: 4,
  },
];

const Trust = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-12">
          Why do users choose us to book travel and manage expenses?
        </h1>

        {/* Awards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {Awards.map((award) => (
            <div
              key={award.id}
              className="bg-white border-2 border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="flex justify-center items-center h-[180px]">
                <Image
                  src={award.src}
                  alt={award.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-orange-500 text-xl md:text-2xl font-semibold text-center mt-6">
                {award.description}
              </h3>
            </div>
          ))}
        </div>

        {/* Trusted Brands Heading */}
        <h2 className="text-center text-3xl md:text-4xl text-gray-800 mb-10">
          Trusted by Global Brands
        </h2>

        {/* Logo Carousel */}
        <div
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className={`flex justify-between flex-shrink-0 min-w-full gap-6 mx-3 animate-scroll ${
                isHovered ? "animation-paused" : ""
              }`}
            >
              {CompanyLogos.map((logo) => (
                <div
                  key={`${index}-${logo.id}`}
                  className="flex items-center justify-center border border-gray-300 bg-white rounded-lg shadow-sm w-40 sm:w-48 md:w-56 h-28 flex-shrink-0 p-3"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={logo.height}
                    style={{
                      height: `${logo.height}px`,
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-102%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Trust;
