import { Crown, Group, Trophy } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { GiRunningNinja, GiTalk } from "react-icons/gi";

const Values = [
  {
    name: "Bias for actions",
    icon: <GiRunningNinja size={40} />,
    id: 1,
  },
  {
    name: "Owner's mindset",
    icon: <BsPeople size={30} />,
    id: 2,
  },
  {
    name: "Collaborate actively",
    icon: <Group size={30} />,
    id: 3,
  },
  {
    name: "Speak up",
    icon: <GiTalk size={35} />,
    id: 4,
  },
  {
    name: "Excellence in results",
    icon: <Trophy size={30} />,
    id: 5,
  },
  {
    name: "Customer first",
    icon: <Crown size={30} />,
    id: 6,
  },
];

const OurValues = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading with decorative element */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-5xl font-serif text-gray-900 text-center">
              Our values
            </h1>
          </div>
        </div>

        {/* OurValues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {Values.map((value) => (
            <div className="flex items-center gap-4" key={value.id}>
              <div className="w-12 h-12 pt-2 flex-shrink-0">{value.icon}</div>
              <span className="text-xl text-gray-900">{value.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
