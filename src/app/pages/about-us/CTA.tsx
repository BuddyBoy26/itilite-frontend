import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Decorative element top left */}
        <div className="relative mb-8">
          <svg
            className="absolute -top-8 left-32 w-12 h-12 text-orange-500"
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
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 text-center mb-8 leading-tight">
          Let&apos;s build the future of travel management together
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          We pride ourselves on our value-driven, people-first and
          high-performance culture, where inclusivity and diversity are at the
          forefront. Come join us in our mission to create a welcoming and
          equitable workplace for all, and partner with us in rewriting the
          future of travel and expense.
        </p>

        {/* CTA Button with decorative arrow */}
        <div className="flex justify-center items-center gap-8">
          <Link
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-colors duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
          >
            View jobs
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
          </Link>

          {/* Decorative curved arrow */}
          {/* <svg 
            className="w-24 h-24 text-gray-900 hidden md:block" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M 20 20 Q 50 10, 70 30 T 80 60" />
            <path d="M 75 55 L 80 60 L 75 65" />
          </svg> */}
        </div>
      </div>

      {/**CTA Banner */}
      <div className="max-w-7xl mx-auto mt-40 pb-20">
        <div className="relative bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl px-12 py-16 md:py-20 overflow-hidden">
          {/* Decorative elements */}
          {/* Top curved lines */}
          <svg
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-16 text-yellow-400"
            viewBox="0 0 120 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M 20 40 Q 35 20, 50 40" />
            <path d="M 70 40 Q 85 20, 100 40" />
          </svg>

          {/* Sparkle top right */}
          <svg
            className="absolute top-24 right-32 w-6 h-6 text-blue-400 opacity-60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
          </svg>

          {/* Star bottom right */}
          <svg
            className="absolute bottom-16 right-24 w-8 h-8 text-orange-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L14 9L21 9L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9L10 9L12 2Z" />
          </svg>

          {/* Content container */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text content */}
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Experience itilite for yourself and know your true T&E savings
                potential!
              </h2>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20"
              >
                Schedule demo
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
