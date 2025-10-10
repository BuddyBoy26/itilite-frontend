import { Crown, Group, Trophy } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { GiRunningNinja, GiTalk } from "react-icons/gi";

const Values = [
  {
    name: "Bias for actions",
    icon: <GiRunningNinja size={40} className="text-orange-500" />,
    id: 1,
  },
  {
    name: "Owner's mindset",
    icon: <BsPeople size={32} className="text-orange-500" />,
    id: 2,
  },
  {
    name: "Collaborate actively",
    icon: <Group size={32} className="text-orange-500" />,
    id: 3,
  },
  {
    name: "Speak up",
    icon: <GiTalk size={35} className="text-orange-500" />,
    id: 4,
  },
  {
    name: "Excellence in results",
    icon: <Trophy size={32} className="text-orange-500" />,
    id: 5,
  },
  {
    name: "Customer first",
    icon: <Crown size={32} className="text-orange-500" />,
    id: 6,
  },
];

const OurValues = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800">
            Our <span className="text-orange-500 font-medium">values</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto font-light">
            These principles guide every decision, action, and innovation we
            make at <span className="text-orange-500 font-medium">itilite</span>.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {Values.map((value, i) => (
            <div
              key={value.id}
              className="flex items-center gap-5 group transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex justify-center items-center w-14 h-14 bg-white border border-gray-200 rounded-xl shadow-md group-hover:shadow-orange-200 transition-shadow duration-300">
                {value.icon}
              </div>
              <span className="text-xl text-gray-800 font-medium group-hover:text-orange-500 transition-colors duration-300">
                {value.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default OurValues;
