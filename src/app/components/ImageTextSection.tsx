"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Image1 from "../../../public/ImageTextSection01.webp";
import Image2 from "../../../public/ImageTextSection02.webp";
import Image3 from "../../../public/ImageTextSection03.webp";

type FeatureItem = {
  imageUrl: StaticImageData;
  title: string;
  heading: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    imageUrl: Image1,
    title: "Feature One",
    heading: "Save money on every business trip",
    description:
      "Add negotiated rates and set up approval processes to avoid last-minute bookings. Incentivise employees to make cost-efficient choices to save on every business trip.",
  },
  {
    imageUrl: Image2,
    title: "Feature Two",
    heading: "Control spends with the power of innovation",
    description:
      "Ensure 100% compliance with real-time application of policies and approval workflows.",
  },
  {
    imageUrl: Image3,
    title: "Feature Three",
    heading: "Travel support in only 30 seconds",
    description:
      "Nobody is ever stranded when they travel with itilite - 24x7 support on chat, call, and email. Guaranteed 30-sec response from our live agents.",
  },
];

const ImageTextSection: React.FC<{ sectionTitle: string }> = ({ sectionTitle }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 leading-tight">
          {sectionTitle}
        </h2>

        {/* Features */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl shadow-md object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-lg font-semibold text-orange-600 mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
                  {feature.heading}
                </h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
