import Image from "next/image";
import TigerGlobal from "../../../../public/tiger-global.webp";
import MatrixPartners from "../../../../public/matrix-partners.webp";
import GreenoaksCapital from "../../../../public/greenoaks-capital.webp";
import VYCapital from "../../../../public/vy-capital.webp";

const InvestorsData = [
  {
    name: "Tiger Global",
    src: TigerGlobal,
    id: 1,
  },
  {
    name: "Matrix Partners",
    src: MatrixPartners,
    id: 2,
  },
  {
    name: "Greenoaks Capital",
    src: GreenoaksCapital,
    id: 3,
  },
  {
    name: "VY Capital",
    src: VYCapital,
    id: 4,
  },
];

const Investors = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <h1 className="text-5xl text-gray-600 text-center mb-4">
          <span className="text-orange-400">itilite</span> is backed by Leading
          Investors
        </h1>

        {/* Investors List */}
        <div className="flex justify-center">
          {InvestorsData.map((investor) => (
            <div
              key={investor.id}
              className="p-8 m-4 border-2 border-gray-400 rounded-lg shadow-lg flex flex-col justify-center"
            >
              <Image
                src={investor.src}
                alt={investor.name}
                width={150}
                height={75}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investors;
