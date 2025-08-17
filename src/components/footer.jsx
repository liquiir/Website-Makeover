import { Facebook, Instagram, Linkedin, Star } from 'lucide-react';

const Footer = () => {
    return(
        <footer className="bg-[#283D3B] text-[#D8F3DC] py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-['Amethysta'] mb-4">Marci Metzger</h3>
                        <p className="text-lg font-['Amethysta'] text-[#A47E1B] mb-4">THE RIDGE REALTY GROUP</p>
                        <div className="space-y-2 text-sm">
                            <p>3190 HW-160, Suite F</p>
                            <p>Pahrump, Nevada 89048</p>
                            <p>United States</p>
                            <a href="tel:+12069196886" className="hover:text-[#A47E1B] transition-colors font-medium">
                                (206) 919-6886
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-['Amethysta'] mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-[#A47E1B] transition-colors">Home Buying</a></li>
                            <li><a href="#" className="hover:text-[#A47E1B] transition-colors">Home Selling</a></li>
                            <li><a href="#" className="hover:text-[#A47E1B] transition-colors">Property Listings</a></li>
                            <li><a href="#" className="hover:text-[#A47E1B] transition-colors">Market Analysis</a></li>
                            <li><a href="#" className="hover:text-[#A47E1B] transition-colors">Investment Properties</a></li>
                        </ul>
                    </div>

                    {/* Office Hours & Social */}
                    <div>
                        <h4 className="text-lg font-['Amethysta'] mb-4">Office Hours</h4>
                        <p className="text-sm mb-4">Open Daily: 8:00 AM - 7:00 PM</p>
                        <p className="text-xs italic mb-6 text-[#A47E1B]">
                            Appointments outside office hours available upon request. Just call!
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a 
                                href="#" 
                                className="p-2 bg-[#1877F2] rounded-full hover:bg-[#166FE5] transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2 bg-gradient-to-r from-[#E4405F] to-[#5B51D8] rounded-full hover:opacity-90 transition-opacity"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2 bg-[#0A66C2] rounded-full hover:bg-[#004182] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} className="text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="p-2 bg-[#FF1A1A] rounded-full hover:bg-[#E60000] transition-colors"
                                aria-label="Yelp"
                            >
                                <Star size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-[#A47E1B] pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="mb-4 md:mb-0">
                            <p>&copy; 2025 Marci Metzger - The Ridge Realty Group. All rights reserved.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:text-[#A47E1B] transition-colors">Privacy Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#A47E1B] transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer