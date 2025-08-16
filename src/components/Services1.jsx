import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Service1 from "../images/stock images/service1.webp"
import Service2 from "../images/stock images/service2.webp"
import Service3 from "../images/stock images/service3.webp"

const Services = () => {
  const slides = [
    {
      id: 1,
      image: Service1,
      title: "Real Estate Done Right",
      description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
    },
    {
      id: 2,
      image: Service2,
      title: "Commercial & Residential",
      description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars."
    },
    {
      id: 3,
      image: Service3,
      title: "Rely on Expertise",
      description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const imageRefs = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      imageRefs.current.forEach((ref, index) => {
        if (!ref) return
        
        const rect = ref.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Check if image is in the center of the viewport
        const imageCenter = rect.top + rect.height / 2
        const viewportCenter = windowHeight / 2
        const distanceFromCenter = Math.abs(imageCenter - viewportCenter)
        
        // If this image is closest to center, set it as current
        if (distanceFromCenter < windowHeight / 2 && currentSlide !== index) {
          setCurrentSlide(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSlide])

  return (
    <section ref={sectionRef} className="relative bg-[#121212] py-12">
      {/* Title Section */}
      <div className="px-4 sm:px-6 md:px-10 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[125px] leading-none font-['Inter'] font-bold text-[#D8F3DC] -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-5"
        >
          SERVICES
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="flex min-h-[300vh]">
        {/* Left Side - Sticky Text Content */}
        <div className="w-[45%] px-4 sm:px-6 md:px-10">
          <div className="sticky top-1/2 transform -translate-y-1/2 mt-[50px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 50, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-6 bg-[#121212]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#FAA307]/90"
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D8F3DC] leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Slide Indicators */}
                <div className="flex space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-[#D8F3DC] scale-125' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Scrolling Images */}
        <div className="w-[55%] pr-4 sm:pr-6 md:pr-10">
          <div className="space-y-32">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                ref={(el) => (imageRefs.current[index] = el)}
                className="relative h-[80vh] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-20%" }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Image Number */}
                  <div className="absolute top-6 right-6 bg-[#FAA307]/90 text-[#121212] px-4 py-2 rounded-full font-bold">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

   
      
    </section>
  )
}

export default Services
