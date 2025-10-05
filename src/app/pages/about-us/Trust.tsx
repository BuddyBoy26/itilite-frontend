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
  {
    name: "TVS",
    src: TVS,
    height: 40,
    id: 0,
  },
  {
    name: "Intellect Designs",
    src: Intellect,
    height: 40,
    id: 1,
  },
  {
    name: "ITC Infotech",
    src: Infotech,
    height: 60,
    id: 2,
  },
  {
    name: "Datamatics",
    src: Datamatics,
    height: 30,
    id: 3,
  },
  {
    name: "Fashinza",
    src: Fashinza,
    height: 40,
    id: 4,
  },
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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[80vw] mx-auto">
        <h1 className="text-center text-4xl text-gray-700 mb-8">
          Why do Users choose Us to book travel and management expenses?
        </h1>

        <div className="flex justify-center m-4">
          {/* Awards Section */}
          {Awards.map((award) => (
            <div
              key={award.id}
              className="w-[20vw] p-4 m-[1vw] mb-0 border-2 border-gray-300 rounded-lg shadow-lg"
            >
              <div className="flex flex-col justify-center h-[240px]">
                <Image
                  src={award.src}
                  alt={award.name}
                  height={180}
                  width={150}
                  className="m-4 mx-auto"
                />
              </div>
              <h3 className="text-orange-400 text-2xl font-semibold text-center pb-8">
                {award.description}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Companies Carousel Section */}
      <h1 className="text-4xl text-gray-700 text-center mt-40">
        Trusted By Global Brands
      </h1>

      <div
        className="flex max-w-[80vw] mx-auto overflow-hidden mt-10"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div
          className={`grid grid-cols-5 gap-4 w-[100vw] shrink-0 h-[150px] mx-2 animate-scroll ${
            isHovered && "animation-paused"
          }`}
        >
          {CompanyLogos.map((logo) => (
            <div
              key={logo.id}
              className={`flex flex-col justify-center border-2 border-gray-300 h-full place-items-center rounded-lg`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                className={`h-[${logo.height}px] w-[200px]`}
              />
            </div>
          ))}
        </div>

        {/*Repeated logos for seamless effect*/}
        <div
          className={`grid grid-cols-5 gap-4 w-[100vw] shrink-0 h-[150px] mx-2 animate-scroll ${
            isHovered && "animation-paused"
          }`}
        >
          {CompanyLogos.map((logo) => (
            <div
              key={logo.id}
              className={`flex flex-col justify-center border-2 border-gray-300 h-full place-items-center rounded-lg`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                className={`h-[${logo.height}px] w-[200px]`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-101%);
            }
          }

          .animate-scroll {
            animation: scroll 11s linear infinite;
          }

          .animation-paused {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Trust;
