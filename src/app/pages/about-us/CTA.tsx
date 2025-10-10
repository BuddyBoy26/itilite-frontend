import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:py-20 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Decorative element top left */}
        <div className="relative mb-6 sm:mb-10">
          <svg
            className="absolute -top-6 left-10 sm:left-32 w-10 h-10 sm:w-12 sm:h-12 text-orange-500"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="15" y1="35" x2="25" y2="15" />
            <line x1="30" y1="35" x2="40" y2="15" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-900 text-center mb-6 sm:mb-8 leading-tight">
          Let&apos;s build the future of travel management together
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          We pride ourselves on our value-driven, people-first and
          high-performance culture, where inclusivity and diversity are at the
          forefront. Come join us in our mission to create a welcoming and
          equitable workplace for all, and partner with us in rewriting the
          future of travel and expense.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
          <Link
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold sm:font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-colors duration-300 flex items-center gap-2 sm:gap-3 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            View jobs
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          </Link>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto mt-20 sm:mt-32 pb-10 sm:pb-20">
        <div className="relative bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl sm:rounded-3xl px-6 sm:px-12 py-12 sm:py-16 md:py-20 overflow-hidden">
          {/* Decorative elements */}
          <svg
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-12 sm:h-16 text-yellow-400"
            viewBox="0 0 120 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M 20 40 Q 35 20, 50 40" />
            <path d="M 70 40 Q 85 20, 100 40" />
          </svg>

          <svg
            className="absolute top-16 sm:top-24 right-10 sm:right-32 w-5 sm:w-6 h-5 sm:h-6 text-blue-400 opacity-60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
          </svg>

          <svg
            className="absolute bottom-10 sm:bottom-16 right-10 sm:right-24 w-6 sm:w-8 h-6 sm:h-8 text-orange-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L14 9L21 9L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9L10 9L12 2Z" />
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Experience itilite for yourself and know your true T&E savings
                potential!
              </h2>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center gap-2 sm:gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold sm:font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20 text-sm sm:text-base"
              >
                Schedule demo
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
