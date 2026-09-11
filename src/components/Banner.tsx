import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="bg-amber-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex-1 space-y-7">
          <h1 className="font-bold text-[3.5rem] leading-[1.1] text-[#0f172a]">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[#475569] text-base font-normal leading-sung">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits your <br />
            next project.
          </p>
          <div className="flex items-center gap-5 mt-14">
            <button className="btn w-52 bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white border-none rounded-lg">
              Explore Technologies
            </button>

            <button className="btn w-52 bg-transparent border border-gray-300 text-gray-600 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img className="bg-amber-200" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
