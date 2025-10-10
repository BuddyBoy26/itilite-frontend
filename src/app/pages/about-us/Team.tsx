"use client";

import Image from "next/image";
import Link from "next/link";
import Mayank from "../../../../public/Mayank-Kukreja.webp";
import Anish from "../../../../public/Anish-Khadiya.webp";

const Leaders = [
  {
    name: "Mayank Kukreja",
    src: Mayank,
    designation: "Global Chief Executive Officer",
    id: 1,
  },
  {
    name: "Anish Khadiya",
    src: Anish,
    designation: "Chief Business Officer",
    id: 2,
  },
];

const Links = [
  {
    name: "Corporate travel",
    href: "#",
    id: 1,
  },
  {
    name: "Expense management",
    href: "#",
    id: 2,
  },
  {
    name: "Unified travel & expense",
    href: "#",
    id: 3,
  },
];

const Team = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-4">
            Led by a <span className="text-orange-500">mission-driven</span> team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            After spending 200+ days on the road at McKinsey, we experienced the
            pain points of business travel firsthand. The solution? A complete
            technological overhaul.
          </p>
        </div>

        {/* Leaders Section */}
        <div className="flex flex-wrap justify-center gap-12 mb-20">
          {Leaders.map((leader) => (
            <div
              key={leader.id}
              className="text-center flex flex-col items-center"
            >
              <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={leader.src}
                  alt={leader.name}
                  width={280}
                  height={320}
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">
                {leader.name}
              </h2>
              <p className="text-gray-500">{leader.designation}</p>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            Explore our technology-driven products
          </h1>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {Links.map((link) => (
            <Link href={link.href} key={link.id} className="group w-72">
              <div className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between text-white">
                  <span className="text-lg font-semibold">{link.name}</span>
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
