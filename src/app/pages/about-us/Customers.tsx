"use client";
import React, { useEffect, useState, useRef } from "react";

// Count-up animation component
const CountUpNumber = ({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing for smooth motion
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);
      if (progress < 1) requestAnimationFrame(updateCount);
      else setCount(end);
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef} className="inline-block">
      {count}
      {suffix}
    </span>
  );
};

export default function CustomerStats() {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:py-20 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800">
            Our customers love us
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {/* Stat 1 */}
          <div className="text-center space-y-4 animate-fade-up [animation-delay:0.1s]">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 transition-transform duration-300 hover:scale-110">
              <CountUpNumber end={600} suffix="K+" duration={2500} />
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light">
              Delighted <br /> users
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center space-y-4 animate-fade-up [animation-delay:0.2s]">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 transition-transform duration-300 hover:scale-110">
              <CountUpNumber end={1} suffix="M+" duration={2500} />
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light">
              Trips <br /> booked
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center space-y-4 animate-fade-up [animation-delay:0.3s]">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 transition-transform duration-300 hover:scale-110">
              <CountUpNumber end={3} suffix="M+" duration={2500} />
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light">
              Global <br /> inventory
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind-based fade-in animation */}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-up:nth-child(1) {
          animation-delay: 0.1s;
        }
        .animate-fade-up:nth-child(2) {
          animation-delay: 0.2s;
        }
        .animate-fade-up:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
