"use client";

import React from "react";

type YtVideoProps = {
  url: string;
  title: string;
};

const YtVideo: React.FC<YtVideoProps> = ({ url, title }) => {
  return (
    <section className="w-full flex justify-center my-8 sm:my-12 px-3 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-gray-900">
          {title}
        </h2>

        {/* Video Wrapper with 16:9 aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-black aspect-video">
          <iframe
            src={url.replace("watch?v=", "embed/")}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YtVideo;
