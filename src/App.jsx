import LandingPage  from "./components/LandingPage"
import Introduce from "./components/Introduce"
import Logo from "./images/logo.webp"
import NoiseOverlay from "./components/Noise"
import Services from "./components/Services1"
import Sold from "./components/sold"
import Gallery from "./components/Gallery"
import Partnership from "./components/Partnership"
import Listing from "./components/Listings"
import Contact from "./components/Contact"
import Footer from "./components/footer"
import Menu from "./components/Menu"



function App() {

  return (
    <div 
      className="relative bg-[#d3d0c3] bg-blend-multiply min-h-screen flex flex-col text-[#283D3B]"
    >
  {/* Noise overlay */}
  <NoiseOverlay />
      {/* Navigation */}
  <nav className="relative z-10 p-3">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <div>
            <img className="h-16 w-auto md:h-20" src={Logo} alt="Logo" />
          </div>
          {/* Menu Component */}
          <Menu />
        </div>
      </nav>

  <main className="relative z-10">
        <LandingPage />
        <Listing />
        <Introduce/>
        <Services />
        <Sold />
        <Gallery />
        <Partnership />
        <Contact />
        <Footer />
      </main>
      
    </div>
  )
}

export default App

