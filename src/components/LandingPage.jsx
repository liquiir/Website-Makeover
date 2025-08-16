import ImageBackground from "../images/background-img.jpg";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <header className="flex flex-col" aria-labelledby="hero-heading">
        <img
          src={ImageBackground}
          alt="ImgBack"
          className="h-[380px] m:h-[300px] lp:h-[320px] lg:h-[550px] w-full object-cover z-index-[-1]"
        />
        {/* Text under the image */}
        <div className="text-left mt-4 px-4 md:px-10">
          <h1
            id="hero-heading"
            className="text-[32px] md:text-[46px] leading-tight font-['Amethysta'] text-[#283D3B]"
          >
            MARCI METZGER - THE RIDGE REALTY GROUP
          </h1>
          <h2 className="text-[40px] md:text-[86px] leading-tight font-['Amethysta'] text-[#A47E1B]">
            PAHRUMP REALTOR
          </h2>
        </div>
        <div className="px-4 md:px-10">
          <button className="border-2 rounded-sm border-[#283D3B] bg-transparent text-[#283D3B] px-4 py-2 md:px-6 md:py-3 font-medium hover:bg-[#283D3B] hover:text-white transition-colors">
            Call Now
          </button>
        </div>


      </header>
    </div>
  );
};

export default LandingPage;
