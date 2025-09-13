export default function FeaturesSection() {
  const features = [
    {
      title: "Travel Booking",
      description: "Flights, hotels, car rentals — all in one booking platform.",
      icon: "/feature-1.png",
    },
    {
      title: "Policy Compliance",
      description: "Ensure travel happens within your company policy rules.",
      icon: "/feature-1.png",
    },
    {
      title: "Expense Management",
      description: "Track, approve, and reimburse expenses seamlessly.",
      icon: "/feature-1.png",
    },
    {
      title: "Real-time Insights",
      description: "Monitor spend data live with dashboards and alerts.",
      icon: "/feature-1.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Features that make your corporate travel seamless
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
              <img src={feat.icon} alt={feat.title} className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{feat.title}</h3>
              <p className="mt-2 text-gray-600">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
