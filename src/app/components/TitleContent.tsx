"use client";

import React from "react";
import Image from "next/image";

type TitleContentProps = {
  title: string;
  content: string;
  imageUrl?: string; // optional image
  imageAlt?: string;
};

const TitleContent: React.FC<TitleContentProps> = ({ title, content, imageUrl, imageAlt }) => {
  return (
    <section className="max-w-4xl mx-auto my-10 p-10 rounded-xl shadow-sm  bg-gray-100 text-centermin-h-[400px]  flex flex-col justify-center">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <p className="text-gray-700 leading-relaxed">{content}</p>
      <br />
      <br />
      {imageUrl && (
        <div className="mb-4">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default TitleContent;