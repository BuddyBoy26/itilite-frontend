"use client";

import React from "react";
import Image from "next/image";

type TitleContentProps = {
  title: string;
  content: string;
  imageUrl?: string; // optional image
  imageAlt?: string;
};

const TitleContent: React.FC<TitleContentProps> = ({
  title,
  content,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="max-w-4xl mx-auto my-10 p-6 sm:p-10 rounded-xl shadow-sm bg-gray-100 text-center min-h-[400px] flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
        {title}
      </h1>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        {content}
      </p>

      {/* Optional Image */}
      {imageUrl && (
        <div className="mt-8 w-full flex justify-center">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full h-auto max-w-3xl"
          />
        </div>
      )}
    </section>
  );
};

export default TitleContent;
