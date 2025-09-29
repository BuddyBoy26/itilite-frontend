"use client";

import React from "react";
import Image from "next/image";

type Award = {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

const awards: Award[] = [
  {
    imageUrl: "/g2-india.png", // You should add these files to public/awards/
    imageAlt: "G2 Top 50 Indian Companies 2024",
    title: "Best Software Awards 2024",
  },
  {
    imageUrl: "/ExpenseManagement_HighPerformer_India_HighPerformer.png",
    imageAlt: "G2 High Performer Spring 2024",
    title: "High Performer - Spring 2024",
  },
  {
    imageUrl: "/GA-Badge-CategoryLeaders-2023-FullColor-Positive-1-1.webp",
    imageAlt: "GetApp Category Leader 2023",
    title: "Category Leader - GetApp 2023",
  },
  {
    imageUrl: "/TravelManagement_MomentumLeader_Leader.png",
    imageAlt: "G2 Momentum Leader Spring 2024",
    title: "Momentum Leader - Spring 2024",
  },
];

const AwardsSection: React.FC = () => (
  <section className="max-w-7xl mx-auto py-16 px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12">
      Why users love us?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {awards.map((award) => (
        <div
          key={award.title}
          className="bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-10 px-6 shadow-sm min-h-[350px]"
        >
          <Image
            src={award.imageUrl}
            alt={award.imageAlt}
            width={140}
            height={140}
            className="mb-6 object-contain"
          />
          <p className="text-lg text-orange-500 font-semibold">
            {award.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AwardsSection;
