type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "“ITILITE has simplified our corporate travel management — from bookings to expenses, everything is so much smoother.”",
      name: "Shilpa G.",
      role: "Sr. Operations Manager",
      avatar: "/testimonial-1.jpg",
    },
    {
      quote: "“We now have full visibility into our travel spend, which has helped us reduce costs significantly.”",
      name: "JM",
      role: "Finance Lead",
      avatar: "/testimonial-2.jpg",
    },
    // add more testimonials as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What our customers are saying
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex space-x-4 bg-white p-6 rounded-lg shadow">
              <img src={t.avatar} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-700 italic"> {t.quote} </p>
                <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
