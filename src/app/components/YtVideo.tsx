"use client";

import React, { useEffect } from "react";

type YtVideoProps = {
  url: string;
  title: string;
};

const YtVideo: React.FC<YtVideoProps> = ({ url, title }) => {
  // Extract the YouTube video ID from any YouTube URL (e.g., watch?v=...)
  const videoIdMatch = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : "";

  useEffect(() => {
    // Dynamically load the lite-youtube-embed script once on mount
    const existingScript = document.querySelector(
      'script[src*="lite-yt-embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.2/src/lite-yt-embed.js";
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.2/src/lite-yt-embed.css";
      document.head.appendChild(link);
    }
  }, []);

  // Props for the lite-youtube custom element
  type LiteYouTubeElProps = React.HTMLAttributes<HTMLElement> & {
    videoid?: string;
    playlabel?: string;
  };

  // Wrapper to render the custom element without requiring a JSX intrinsic declaration
  const LiteYouTubeEl: React.FC<LiteYouTubeElProps> = (props) =>
    React.createElement("lite-youtube", props);

  return (
    <section className="w-full flex justify-center my-8 sm:my-12 px-3 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-gray-900">
          {title}
        </h2>

        {/* Lite YouTube Embed */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-black aspect-video">
          <LiteYouTubeEl
            videoid={videoId}
            style={{ width: "100%", height: "100%", display: "block" }}
            playlabel={`Play ${title}`}
          />
        </div>
      </div>
    </section>
  );
};

export default YtVideo;
