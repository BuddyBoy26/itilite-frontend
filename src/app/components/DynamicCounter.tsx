"use client";

import React, { useEffect, useState } from "react";

type CounterItem = {
  value: number;
  label: string;
  suffix?: string;
};

const countersData: CounterItem[] = [
  { label: "Average NPS", value: 62 },
  { label: "Average savings delivered", value: 10, suffix: "%" },
  { label: "Policy compliance", value: 100, suffix: "%" },
  { label: "Online adoption", value: 90, suffix: "%" },
];

const DynamicCounter: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Key Metrics
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {countersData.map((item, i) => (
            <CounterBox
              key={i}
              value={item.value}
              label={item.label}
              suffix={item.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Inner component for individual counters
type CounterBoxProps = {
  value: number;
  label: string;
  suffix?: string;
};

const CounterBox: React.FC<CounterBoxProps> = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1 second
    const increment = Math.ceil(value / (duration / 20));

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md min-w-[130px] sm:min-w-[160px] md:min-w-[180px] w-full max-w-[220px] transition-transform duration-300 hover:scale-[1.03]">
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 text-center leading-snug">
        {label}
      </div>
    </div>
  );
};

export default DynamicCounter;
