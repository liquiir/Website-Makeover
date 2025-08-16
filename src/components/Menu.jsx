import { useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu as MenuIcon, X } from "lucide-react"

const menuItems = [
  { name: "HOME", href: "#home" },
  { name: "LISTINGS", href: "#listings" },
  { name: "LET'S MOVE", href: "#lets-move" },
  { name: "ABOUT US", href: "#about" }
]

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.6
      }
    },
    open: {
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.8
      }
    }
  }

  const menuItemVariants = {
    closed: {
      x: -100,
      opacity: 0
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + (i * 0.1),
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  }

  return (
    <>
      {/* Menu Button */}
      <motion.button
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="relative z-[10001] cursor-pointer flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ position: 'relative', zIndex: 10001 }}
      >
        {/* Animated Hamburger/X Icon */}
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="x"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="p-2 bg-black/20 rounded-full border-2 border-white/50"
              >
                <X size={32} color="#FFFFFF" strokeWidth={4} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon size={28} color="#283D3B" strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>

      {/* Full Screen Menu Overlay */}
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-[#d7dfd5]"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                zIndex: 9999,
                width: '100vw',
                height: '100vh'
              }}
            >
              {/* Menu Content */}
              <div className="flex items-center justify-start h-full pl-4 md:pl-8 lg:pl-12 pt-16 md:pt-20">
                <nav className="text-left">
                  <ul className="space-y-4 md:space-y-6">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <motion.a
                          href={item.href}
                          className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-['Inter'] hover:text-white transition-colors duration-300 no-underline"
                          style={{ color: '#283D3B' }}
                          onClick={toggleMenu}
                          whileHover={{ 
                            x: 20,
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                          }}
                        >
                          {item.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Close button overlay (invisible but clickable area) */}
              <motion.div
                className="absolute inset-0 cursor-pointer"
                onClick={toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
