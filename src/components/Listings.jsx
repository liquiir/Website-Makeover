import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Input from "./ui/input";
import Dropdown from "./ui/dropdown";

const Listing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5, margin: "-100px" });
  
  // Add scroll-based fade effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section 
      ref={ref} 
      style={{ opacity, scale }}
      className="relative min-h-screen p-4 md:p-8  flex items-center flex-col lg:flex-row gap-8 lg:gap-8 justify-center lg:justify-between"
    >
      <div className="text-[40px] sm:text-[60px] lg:text-[90px] font-['Amethysta'] text-center md:-translate-x-[200px] lg:ml-[250px] lg:text-left">
        {/* FIND YOUR */}
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[#283D3B] z-10"
            initial={{ y: 0 }}
            animate={isInView ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            FIND YOUR
          </motion.div>
        </div>

        {/* DREAM */}
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[#283D3B] z-10"
            initial={{ y: 0 }}
            animate={isInView ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            DREAM
          </motion.div>
        </div>

        {/* HOMES */}
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[#283D3B] z-10"
            initial={{ y: 0 }}
            animate={isInView ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            HOMES
          </motion.div>
        </div>
      </div>

      {/* INPUTS */}
      <div className="flex flex-col gap-3 w-full max-w-2xl lg:mr-[180px]">
        {/* ROW 1 - Location & Type */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:flex-1">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Location</label>
            <Dropdown placeholder="Select Location" />
          </div>
          <div className="relative w-full sm:flex-1">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Type</label>
            <Dropdown placeholder="Select Type" />
          </div>
        </div>

        {/* ROW 2 - Sort, Bedroom, Baths */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:flex-1">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Sort By</label>
            <Dropdown placeholder="Select Sort Option" />
          </div>
          <div className="relative w-full sm:w-24">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Beds</label>
            <Dropdown placeholder="Any" />
          </div>
          <div className="relative w-full sm:w-24">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Baths</label>
            <Dropdown placeholder="Any" />
          </div>
        </div>

        {/* ROW 3 - Price Range & Search */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <div className="relative w-full sm:flex-1">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Min Price</label>
            <Input placeholder="Min Price" />
          </div>
          <div className="relative w-full sm:flex-1">
            <label className="block text-xs font-['inter'] mb-1 text-foreground">Max Price</label>
            <Input placeholder="Max Price" />
          </div>
          <motion.button
            className="border-2 rounded-[5px] bg-[#283D3B] text-[#D8F3DC] px-6 py-2 font-medium whitespace-nowrap sm:h-[45px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Listing;
