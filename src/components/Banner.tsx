import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="md:flex-1 md:flex md:items-center md:min-h-0 md:overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 p-4 py-10 md:py-4 w-full md:h-full">
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-[3.5rem] leading-[1.15] md:leading-[1.1] text-[#0f172a]">
            Build Your Ideal <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-[#475569] text-sm sm:text-base font-normal leading-snug">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the
            stack that fits your next project.
          </p>

          <div className="flex flex-row items-center gap-3 sm:gap-5 mt-6 md:mt-10">
            <button className="btn flex-1 sm:w-48 sm:flex-none bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white border-none rounded-lg">
              Explore Technologies
            </button>

            <button className="btn flex-1 sm:w-48 sm:flex-none bg-transparent border border-gray-300 text-gray-600 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-none md:h-full flex items-center justify-center md:justify-end">
          <img
            className="w-full h-auto md:w-auto md:h-full md:max-h-[75vh] object-contain md:ml-6 lg:ml-10"
            src={BannerImg}
            alt="Development stack illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
