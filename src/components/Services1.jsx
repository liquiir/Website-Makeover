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
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Debounce the scroll handler
      scrollTimeoutRef.current = setTimeout(() => {
        if (!sectionRef.current) return

        let closestIndex = 0
        let minDistance = Infinity

        imageRefs.current.forEach((ref, index) => {
          if (!ref) return
          
          const rect = ref.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Calculate distance from center of viewport
          const imageCenter = rect.top + rect.height / 2
          const viewportCenter = windowHeight / 2
          const distanceFromCenter = Math.abs(imageCenter - viewportCenter)
          
          // Find the image closest to center
          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter
            closestIndex = index
          }
        })

        // Only update if the closest index is different from current
        setCurrentSlide(prevSlide => {
          if (prevSlide !== closestIndex) {
            return closestIndex
          }
          return prevSlide
        })
      }, 50) // 50ms debounce
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, []) // Remove currentSlide from dependencies

  return (
    <section ref={sectionRef} className="relative bg-[#121212] py-12">
      {/* Title Section */}
      <div className="px-4 sm:px-6 md:px-10 mb-12 sm:mb-16 md:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[125px] leading-none font-['Inter'] font-bold text-[#D8F3DC] -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-5"
        >
          SERVICES
        </motion.h1>
      </div>

      {/* Main Content */}
      {/* Mobile Layout - Image then Text */}
      <div className="block sm:hidden">
        <div className="space-y-8">
          {slides.map((slide, index) => (
            <div key={slide.id} className="px-4">
              {/* Image */}
              <div className="relative h-[40vh] mb-6">
                <div className="relative w-full h-full overflow-hidden rounded-xl z-30">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover z-30"
                    />
                  
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Image Number */}
                  <div className="absolute top-3 right-3 bg-[#FAA307]/90 text-[#121212] px-2 py-1 rounded-full font-bold text-sm">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 bg-[#121212]/90 backdrop-blur-sm p-4 rounded-2xl border border-[#FAA307]/90">
                <h2 className="text-xl font-bold text-[#D8F3DC] leading-tight">
                  {slide.title}
                </h2>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Original with sticky behavior */}
      <div className="hidden sm:flex min-h-[300vh]">
        {/* Left Side - Sticky Text Content */}
        <div className="w-[45%] px-6 md:px-10">
          <div className="sticky top-1/2 transform -translate-y-1/2 mt-[50px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 30, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6 bg-[#121212]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#FAA307]/90"
              >
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#D8F3DC] leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg text-gray-300 leading-relaxed"
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
        <div className="w-[55%] pr-6 md:pr-10">
          <div className="space-y-32">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                ref={(el) => (imageRefs.current[index] = el)}
                className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-20%" }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl z-30">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover z-30"
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
