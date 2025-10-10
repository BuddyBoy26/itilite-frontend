import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import News1 from "../../../../public/news-1-image.png";
import News2 from "../../../../public/news-2-image.png";
import News3 from "../../../../public/news-3-image.png";

interface NewsCard {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
  link: string;
}

const News = () => {
  const newsItems: NewsCard[] = [
    {
      id: 1,
      image: News1,
      category: "In News",
      title:
        "Anish Khadiya, CBO of itilite, Shares His Insights on What's Next for...",
      link: "#",
    },
    {
      id: 2,
      image: News2,
      category: "In News",
      title: "2024 Year in Review: itilite Wins and Product Innovations",
      link: "#",
    },
    {
      id: 3,
      image: News3,
      category: "In News",
      title: "Top 10 Best Business Travel Conferences To Attend In 2025",
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16 animate-fade-in">
          In the <span className="text-orange-500 font-medium">news</span>
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {newsItems.map((item, i) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  {item.category}
                </span>

                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 mb-4 line-clamp-2">
                  {item.title}
                </h3>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Read more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-200 to-amber-300 text-gray-900 font-semibold rounded-lg shadow-md shadow-orange-400/30 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 active:scale-[95%] transition-all duration-300">
            View more
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 17L17 7M17 7v10M17 7H7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animations */}
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

export default News;
