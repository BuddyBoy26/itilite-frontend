import Mayank from "../../../../public/Mayank-Kukreja.webp";
import Anish from "../../../../public/Anish-Khadiya.webp";
import Image from "next/image";
import Link from "next/link";

const Leaders = [
  {
    name: "Mayank Kukreja",
    src: Mayank,
    designation: "Global Chief Executive Office",
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
    href: "",
    id: 1,
  },
  {
    name: "Expense management",
    href: "",
    id: 2,
  },
  {
    name: "Unified travel & expense",
    href: "",
    id: 3,
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-100">
      {/**Text Heading */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-gray-700 text-center pb-2">
          Led by mission-driven team
        </h1>

        <p className="text text-gray-600 text-center pt-4">
          Clocking in 200+ travel days a year at McKinsey, we saw the challenges
          of business travel firsthand. The solution? A complete overhaul
        </p>
      </div>

      {/**Leaders photos */}
      <div className="flex justify-center py-10">
        {Leaders.map((leader) => (
          <div key={leader.id} className="mx-10">
            <Image
              src={leader.src}
              alt={leader.name}
              height={330}
              width={300}
            />
            <h2 className="text-2xl text-blue-950 text-center pt-6 pb-2">
              {leader.name}
            </h2>

            <p className="text-gray-500 text-center">{leader.designation}</p>
          </div>
        ))}
      </div>

      <h1 className="text-3xl text-gray-800 text-center mb-12 mt-4">
        Check out the technology-driven products we built
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Corporate travel Card */}
        {Links.map((link) => (
          <Link href={link.href} className="group block" key={link.id}>
            <div className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300 rounded-lg shadow-lg px-8 py-6 w-72">
              <div className="flex items-center justify-between text-white">
                <span className="font-bold">{link.name}</span>

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
    </section>
  );
};

export default Team;
