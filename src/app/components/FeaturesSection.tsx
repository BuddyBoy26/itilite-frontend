import Image from "next/image";
import TravelBooking from "../../../public/TravelBooking.jpg";
import PolicyCompliance from "../../../public/policyCompliance.png";
import ExpenseManagement from "../../../public/ExpenseManagement.png";
import RealTime from "../../../public/Real-Time.png";

export default function FeaturesSection() {
  const features = [
    {
      title: "Travel Booking",
      description:
        "Flights, hotels, car rentals — all in one booking platform.",
      icon: TravelBooking,
    },
    {
      title: "Policy Compliance",
      description: "Ensure travel happens within your company policy rules.",
      icon: PolicyCompliance,
    },
    {
      title: "Expense Management",
      description: "Track, approve, and reimburse expenses seamlessly.",
      icon: ExpenseManagement,
    },
    {
      title: "Real-time Insights",
      description: "Monitor spend data live with dashboards and alerts.",
      icon: RealTime,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center leading-snug">
          Features that make your corporate travel seamless
        </h2>

        {/* Feature Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 sm:p-6 border border-gray-200 rounded-2xl hover:shadow-lg hover:border-orange-200 transition duration-300 bg-white"
            >
              <Image
                src={feat.icon}
                alt={feat.title}
                className="h-14 w-14 sm:h-16 sm:w-16 mb-4 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {feat.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xs">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
