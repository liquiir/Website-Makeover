import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Marci from '../images/marci.jpg'
const Introduce = () => (
  <motion.section
    id="about"
    aria-labelledby="about-heading"
    className="relative px-4 sm:px-6 md:px-10 py-12 pb-36 md:pb-56 bg-[#121212] mt-10  rounded-t-3xl sm:rounded-t-4xl min-h-screen"

  >
    <div className="relative z-10 flex flex-col mt-4 ">
      <motion.h1 
        className="text-4xl sm:text-6xl md:text-8xl lg:text-[125px] leading-none font-['Amethysta'] font-bold text-[#D8F3DC] break-words"

      >
        MARCI METGERZ/
      </motion.h1>
      <motion.h1 
        className="text-4xl sm:text-6xl md:text-8xl lg:text-[125px] leading-none font-['Amethysta'] font-bold text-[#D8F3DC] -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-5"

      >
        REALTOR
      </motion.h1>
      <div className="relative mt-6 md:mt-12">
        <motion.div 
          className="md:max-w-[60%] lg:max-w-[50%]"

        >
          <p className="text-[#D8F3DC] mt-8 text-lg sm:text-xl md:text-2xl xl:translate-y-27">
            A trusted REALTOR® for nearly 3 decades, helping clients buy and
            sell homes with confidence through expertise, dedication, and
            genuine care.
          </p>
          <div className="text-[#D8F3DC] mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl xl:translate-y-33 ">
            <p className="flex items-center gap-2 md:gap-4">
              <Phone className="flex-shrink-0" />
              206-919-6886
            </p>
          </div>
        </motion.div>
        {/* Image container with responsive positioning */}
        <motion.div 
          className="mt-8 md:absolute md:bottom-0 md:right-0 md:translate-y-[20%]  lg:translate-y-[10%] xl:translate-y-50 xl:mr-10"

        >
          <img
            src={Marci}
            alt="Marci Metgerz"
            className="block w-full md:w-auto h-auto max-h-[300px] md:max-h-[350px] lg:max-h-[450px]   "
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
)
export default Introduce
