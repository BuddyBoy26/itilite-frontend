"use client";

import React from "react";

type FeatureItem = {
  imageUrl: string;
  title: string;
  heading: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    imageUrl: "ImageTextSection01.webp",
    title: "Feature One",
    heading: "Save money on every business trip",
    description: 
      "Add negotiated rates and set up approval processes to avoid last-minute bookings. Incentivise employees to make cost-efficient choices to save on every business trip.",
  },
  {
    imageUrl: "ImageTextSection02.webp",
    title: "Feature Two",
    heading: "Control spends with the power of innovation",
    description:
      "Ensure 100% compliance with real-time application of policies and approval workflows"
  },
  {
    imageUrl: "ImageTextSection03.webp",
    title: "Feature Three",
    heading: "Travel support in only 30 seconds",
    description:
      "Nobody is ever stranded when they travel with itilite – 24×7 support on chat, call and email. Guaranteed 30 sec response from our live agents",
  },
];

const ImageTextSection: React.FC<{ sectionTitle: string }> = ({ sectionTitle }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          {sectionTitle}
        </h2>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <h4 className="text-gray-700">{feature.heading}</h4>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
