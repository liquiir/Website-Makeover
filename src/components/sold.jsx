import Stock1 from "../images/stock images/stock1.webp"
import Stock2 from "../images/stock images/stock2.webp"
import Stock3 from "../images/stock images/stock3.webp"



const Sold = () => {
    
    
    const Data = [
        {
            id: 1,
            image: Stock1,
            title: "Top Residential Sales Last 5 Years",
            description: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
        },
        {
            id: 2,
            image: Stock2,
            title: "Don't Just List it...",
            description: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
        },
        {
            id: 3,
            image: Stock3,
            title: "Guide to Buyers",
            description: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
        }
    ]

    return (
        <div className="relative bg-[#121212]"

        >
            {/* Full Screen Title Section */}
            <section className="h-screen flex items-center justify-center bg-[#121212] ">
                <div className="px-4 sm:px-6 md:px-10 text-center">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[125px] leading-none font-['Inter'] font-bold text-[#D8F3DC]">
                        GET IT <span className="text-[#FAA307]">SOLD</span>
                    </h1>
                </div>
            </section>

            {/* Content Sections - Using Data */}
            {Data.map((item, index) => (
                <section key={item.id} className="relative min-h-screen bg-[#121212] px-4 sm:px-6 md:px-10 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] ${
                            index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                        }`}>
                            
                            {/* Text Content */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D8F3DC] leading-tight">
                                    {item.title}
                                </h2>
                                
                                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>


                            </div>

                            {/* Image */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl z-30">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full z-30"
                                    />
                                    
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    
                                    {/* Image Number */}
                                    <div className="absolute top-6 right-6 bg-[#FAA307]/90 text-[#121212] px-4 py-2 rounded-full font-bold">
                                        0{item.id}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                
            ))}
        </div>
    )
}

export default Sold