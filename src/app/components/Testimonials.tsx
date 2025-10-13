type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "“ITILITE has simplified our corporate travel management — from bookings to expenses, everything is so much smoother.”",
      name: "Shilpa G.",
      role: "Sr. Operations Manager",
      avatar: "/testimonial-1.jpg",
    },
    {
      quote:
        "“We now have full visibility into our travel spend, which has helped us reduce costs significantly.”",
      name: "JM",
      role: "Finance Lead",
      avatar: "/testimonial-2.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center leading-tight">
          What our customers are saying
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center sm:items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Avatar */}
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 rounded-full object-cover mb-4 sm:mb-0 sm:mr-5 flex-shrink-0"
              />

              {/* Text */}
              <div className="text-center sm:text-left">
                <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                  {t.quote}
                </p>
                <p className="mt-4 font-semibold text-gray-900 text-lg">
                  {t.name}
                </p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
