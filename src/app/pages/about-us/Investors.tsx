import Image from "next/image";
import TigerGlobal from "../../../../public/tiger-global.webp";
import MatrixPartners from "../../../../public/matrix-partners.webp";
import GreenoaksCapital from "../../../../public/greenoaks-capital.webp";
import VYCapital from "../../../../public/vy-capital.webp";

const InvestorsData = [
  { name: "Tiger Global", src: TigerGlobal, id: 1 },
  { name: "Matrix Partners", src: MatrixPartners, id: 2 },
  { name: "Greenoaks Capital", src: GreenoaksCapital, id: 3 },
  { name: "VY Capital", src: VYCapital, id: 4 },
];

const Investors = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-10 animate-fade-in">
          <span className="text-orange-500 font-medium">itilite</span> is backed by Leading Investors
        </h1>

        {/* Investors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {InvestorsData.map((investor) => (
            <div
              key={investor.id}
              className="group relative flex items-center justify-center w-48 h-28 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-amber-100/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <Image
                src={investor.src}
                alt={investor.name}
                width={160}
                height={80}
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

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

export default Investors;
