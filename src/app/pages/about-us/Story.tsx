"use client";

import { Volume2 } from "lucide-react";
import React from "react";

const Story = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-4">
            Story of{" "}
            <span className="text-orange-500 font-semibold">ITILITE</span>
          </h1>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <span className="text-base">
              itilite (Pronounced as it- ee - laa - it)
            </span>
            <button className="text-orange-500 hover:text-orange-600 transition-colors">
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Story Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
          <p>
            There is a saying, <span className="italic">“best ideas come from personal pain points”</span>, and that is exactly how ITILITE came into being.
          </p>

          <p>
            Before starting ITILITE in 2017, Anish and Mayank worked at McKinsey & Co. Like many consultants, they spent over 200 nights a year traveling for work. As regular corporate travellers helping companies balance cost and employee experience, they realized the inefficiencies and pain points surrounding business travel.
          </p>

          <p>
            They observed an increasing gap between personal and{" "}
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              corporate travel processes
            </a>
            . Personal travel was becoming seamless and digital, while business travel remained stuck in manual workflows, outdated approvals, and poor cost control. They decided to redefine the experience through technology.
          </p>

          <p>
            Today, ITILITE stands as a result of their team’s relentless effort to transform business travel and expenses — replacing traditional travel desks and offline systems with digital, efficient, and employee-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
