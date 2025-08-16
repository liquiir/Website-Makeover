import Logo1 from "../images/logo1.webp"
import Logo2 from "../images/logo2.webp"
import Logo3 from "../images/logo3.webp"
import Logo4 from "../images/logo4.webp"

const Partnership = () => {
  return (
    <section className="relative flex flex-col mt-20 items-center justify-center text-center h-[250px] ">
      <div className="w-11/12 h-[1px] bg-[#788a88] mb-5"></div>
     <div className="mt-10">
         <h1 className="text-2xl font-regular">Professional Associations</h1>
      <div className="flex justify-center space-x-4 mt-8 gap-15">
        <img src={Logo1} alt="Logo 1" />
        <img src={Logo2} alt="Logo 2" />
        <img src={Logo3} alt="Logo 3" />
        <img src={Logo4} alt="Logo 4" />
      </div>
     </div>
    </section>
  ) 
}

export default Partnership
