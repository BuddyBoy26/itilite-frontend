import React, { useEffect, useState, useRef } from 'react';

const CountUpNumber = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef} className="inline-block">
      {count}{suffix}
    </span>
  );
};

export default function CustomerStats() {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
            Our customers love us
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Stat 1 - Delighted Users */}
          <div className="text-center space-y-4 group">
            <div className="text-5xl lg:text-6xl font-light text-gray-900 transition-transform duration-300 group-hover:scale-110">
              <CountUpNumber end={600} suffix="K+" duration={2500} />
            </div>
            <p className="text-lg lg:text-xl text-gray-700 font-light">
              Delighted<br />users
            </p>
          </div>

          {/* Stat 2 - Trips Booked */}
          <div className="text-center space-y-4 group">
            <div className="text-5xl lg:text-6xl font-light text-gray-900 transition-transform duration-300 group-hover:scale-110">
              <CountUpNumber end={1} suffix="M+" duration={2500} />
            </div>
            <p className="text-lg lg:text-xl text-gray-700 font-light">
              Trips<br />booked
            </p>
          </div>

          {/* Stat 3 - Global Inventory */}
          <div className="text-center space-y-4 group">
            <div className="text-5xl lg:text-6xl font-light text-gray-900 transition-transform duration-300 group-hover:scale-110">
              <CountUpNumber end={3} suffix="M+" duration={2500} />
            </div>
            <p className="text-lg lg:text-xl text-gray-700 font-light">
              Global<br />inventory
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group:nth-child(1) {
          animation: fade-in-up 0.6s ease-out 0.1s both;
        }

        .group:nth-child(2) {
          animation: fade-in-up 0.6s ease-out 0.2s both;
        }

        .group:nth-child(3) {
          animation: fade-in-up 0.6s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}