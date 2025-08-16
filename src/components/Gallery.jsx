import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Gal1 from "../images/gal1.webp"
import Gal2 from "../images/gal2.webp"
import Gal3 from "../images/gal3.webp"
import Gal4 from "../images/gal4.webp"
import Gal5 from "../images/gal5.webp"
import Gal6 from "../images/gal6.webp"
import Gal7 from "../images/gal7.webp"

const images = [
  {
    id: 1,
    src: Gal1,
  },
  {
    id: 2,
    src: Gal2,
  },
  {
    id: 3,
    src: Gal3,
  },
  {
    id: 4,
    src: Gal4,
  },
  {
    id: 5,
    src: Gal5,
  },
  {
    id: 6,
    src: Gal6,
  },
  {
    id: 7,
    src: Gal7,
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(3) // Start with second image in center
  const constraintsRef = useRef(null)
  const galleryRef = useRef(null)
  const isInView = useInView(galleryRef, { once: true, amount: 0.3 })

  const handleWheel = (event) => {
    event.preventDefault()
    const delta = event.deltaY > 0 ? 1 : -1
    setCurrentIndex((prev) => {
      const newIndex = prev + delta
      return Math.max(0, Math.min(images.length - 1, newIndex))
    })
  }

  const handleDragEnd = (event, info) => {
    const threshold = 30 // reduced threshold for more responsive dragging
    const velocity = Math.abs(info.velocity.x) + Math.abs(info.velocity.y)
    const isMobile = window.innerWidth < 1024
    
    // Consider velocity for more natural feeling
    const effectiveThreshold = velocity > 500 ? threshold * 0.5 : threshold
    
    if (isMobile) {
      // Horizontal drag for mobile
      if (info.offset.x > effectiveThreshold) {
        // Dragged right - go to previous image
        setCurrentIndex((prev) => Math.max(0, prev - 1))
      } else if (info.offset.x < -effectiveThreshold) {
        // Dragged left - go to next image
        setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1))
      }
    } else {
      // Vertical drag for desktop
      if (info.offset.y > effectiveThreshold) {
        // Dragged down - go to previous image
        setCurrentIndex((prev) => Math.max(0, prev - 1))
      } else if (info.offset.y < -effectiveThreshold) {
        // Dragged up - go to next image
        setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1))
      }
    }
  }

  const getImageProps = (index) => {
    const distance = Math.abs(index - currentIndex)
    const isCenter = index === currentIndex
    const isMobile = window.innerWidth < 1024 // lg breakpoint

    return {
      scale: isCenter ? 1.2 : Math.max(0.7, 1 - distance * 0.2),
      zIndex: isCenter ? 50 : Math.max(1, 10 - distance * 2),
      opacity: Math.max(0.4, 1 - distance * 0.3),
      y: isMobile ? 0 : (index - currentIndex) * 120,
      x: isMobile ? (index - currentIndex) * 160 : 0,
      brightness: isCenter ? 1.1 : 0.8,
    }
  }

  return (
    <section
      ref={galleryRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center p-4 lg:p-8 justify-between overflow-hidden rounded-t-3xl sm:rounded-t-4xl bg-[#d3d0c3] mt-[25px] sm:-mt-20 md:mt-5 lg:-mt-20 "
    >
      {/* Gallery Title */}
      <motion.div 
        className="p-2 lg:p-5 flex-row mt-8 lg:mt-24 order-1 lg:order-none"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Desktop - Vertical text */}
        <div className="text-lg font-medium hidden lg:block " style={{ writingMode: "vertical-rl" }}>
          <motion.h1 
            className="text-[165px] md:text-[125px] md:-translate-y-5 leading-none font-['Amethysta'] font-bold text-[#283D3B]"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            GALLERY
          </motion.h1>
        </div>
        {/* Mobile/Tablet - Horizontal text */}
        <div className="lg:hidden block">
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-5xl lg:text-7xl leading-none font-['Inter'] font-bold text-[#283D3B] text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            GALLERY
          </motion.h1>
        </div>
      </motion.div>

      {/* Selected Image Display - Mobile/Tablet Only */}
      <div className="lg:hidden order-2 mb-8">
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              className="w-[390px] h-[300px] sm:w-[400px] sm:h-[280px]"
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-full object-cover shadow-2xl rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        className="relative w-full max-w-md md:-translate-x-[150px] lg:translate-x-[120px] lg:h-96 h-32 mr-0 lg:mr-8 order-3 lg:order-none" 
        ref={constraintsRef} 
        onWheel={handleWheel}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        whileDrag={{ cursor: "grabbing" }}
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((image, index) => {
            const props = getImageProps(index)

            return (
              <motion.div
                key={image.id}
                className="absolute cursor-pointer overflow-hidden rounded-lg shadow-2xl translate-y-16 w-[280px] h-[180px] md:w-[240px] md:h-[150px] lg:translate-x-96"
                style={{
                  zIndex: props.zIndex,
                }}
                animate={{
                  scale: props.scale,
                  y: props.y,
                  x: props.x,
                  opacity: props.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 0.8,
                }}
                whileHover={{
                  scale: props.scale * 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: props.scale * 0.90 }}
                onClick={() => {
                  setCurrentIndex(index)
                  setSelectedImage(image)
                }}
              >
                <motion.img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                  animate={{
                    filter: `brightness(${props.brightness})`,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end"
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-sm font-medium p-4">{image.title}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Desktop Selected Image Display */}
      <div className="hidden md:block">
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              className="absolute left-[340px] lg:left-[425px] 2xl:left-[275px] top-1/2 transform -translate-y-1/2 z-40 w-[860px] h-[550px] md:w-[600px] md:h-[400px] lg:w-[780px] lg:h-[500px]"
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
