"use client";

import React from "react";

type TitleContent02Props = {
  title: string;
  contentTop: string;
  contentBottom: string;
};

const TitleContent02: React.FC<TitleContent02Props> = ({
  title,
  contentTop,
  contentBottom,
}) => {
  return (
    <section className="max-w-4xl mx-auto my-10 p-10 rounded-xl shadow-sm bg-gray-100 text-center min-h-[400px] flex flex-col justify-center">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <p className="text-gray-700 leading-relaxed mb-2">{contentTop}</p>
      <p className="text-gray-700 leading-relaxed">{contentBottom}</p>
      <br />
      <button
        type="button"
        className="mx-auto mt-4 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 flex items-center gap-2 transition"
      >
        View pricing
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </section>
  );
};

export default TitleContent02;
