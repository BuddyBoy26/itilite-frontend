"use client";

import React from "react";

type YtVideoProps = {
  url: string;
  title: string;
};

const YtVideo: React.FC<YtVideoProps> = ({ url, title }) => {
  return (
    <section className="w-full flex justify-center my-12 px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">{title}</h2>

        {/* Responsive aspect ratio for video */}
        <div className="relative" style={{ paddingTop: "56.25%" }}> {/* 16:9 Aspect Ratio */}
          <iframe
            src={url.replace("watch?v=", "embed/")}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YtVideo;
