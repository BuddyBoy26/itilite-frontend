import News1 from "../../../../public/news-1-image.png";
import News2 from "../../../../public/news-2-image.png";
import News3 from "../../../../public/news-3-image.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-serif text-gray-900 text-center mb-12">
          In the news
        </h2>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-1"
                >
                  Read more
                  <svg
                    className="w-4 h-4"
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

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
            View more
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
