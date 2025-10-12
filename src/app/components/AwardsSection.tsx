"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import G2India from "../../../public/g2-india.webp";
import G2HighPerformer from "../../../public/ExpenseManagement_HighPerformer_India_HighPerformer.webp";
import GetAppCategoryLeader from "../../../public/GA-Badge-CategoryLeaders-2023-FullColor-Positive-1-1.webp";
import G2MomentumLeader from "../../../public/TravelManagement_MomentumLeader_Leader.webp";

type Award = {
  imageUrl: StaticImageData;
  imageAlt: string;
  title: string;
};

const awards: Award[] = [
  {
    imageUrl: G2India,
    imageAlt: "G2 Top 50 Indian Companies 2024",
    title: "Best Software Awards 2024",
  },
  {
    imageUrl: G2HighPerformer,
    imageAlt: "G2 High Performer Spring 2024",
    title: "High Performer - Spring 2024",
  },
  {
    imageUrl: GetAppCategoryLeader,
    imageAlt: "GetApp Category Leader 2023",
    title: "Category Leader - GetApp 2023",
  },
  {
    imageUrl: G2MomentumLeader,
    imageAlt: "G2 Momentum Leader Spring 2024",
    title: "Momentum Leader - Spring 2024",
  },
];

const AwardsSection: React.FC = () => (
  <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-8 text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-8 sm:mb-12">
      Why users love us?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
      {awards.map((award) => (
        <div
          key={award.title}
          className="bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-8 sm:py-10 px-4 sm:px-6 shadow-sm min-h-[300px] sm:min-h-[350px] transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src={award.imageUrl}
            alt={award.imageAlt}
            width={120}
            height={120}
            className="mb-4 sm:mb-6 object-contain w-28 sm:w-32 h-auto"
          />
          <p className="text-base sm:text-lg text-orange-500 font-semibold leading-snug">
            {award.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AwardsSection;
