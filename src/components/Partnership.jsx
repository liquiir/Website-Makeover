import Logo1 from "../images/logo1.webp"
import Logo2 from "../images/logo2.webp"
import Logo3 from "../images/logo3.webp"
import Logo4 from "../images/logo4.webp"

const Partnership = () => {
  return (
  
    <section className="relative flex flex-col mt-10 md:mt-20 items-center justify-center text-center min-h-[200px] md:h-[250px] px-4">
      {/* yippie */}
      <div className="w-11/12 h-[1px] bg-[#788a88] mb-5"></div>
     <div className="mt-6 md:mt-10">
         <h1 className="text-lg sm:text-xl md:text-2xl font-regular mb-4 md:mb-0">Professional Associations</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-15 mt-4 md:mt-8">
        <img src={Logo1} alt="Logo 1" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
        <img src={Logo2} alt="Logo 2" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
        <img src={Logo3} alt="Logo 3" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
        <img src={Logo4} alt="Logo 4" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
      </div>
     </div>
    </section>
  ) 
}

export default Partnership
