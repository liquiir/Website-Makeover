import Input from "./ui/Input";
import Dropdown from "./ui/Dropdown";

const Contact = () => {
    return (
        <section className="relative min-h-screen p-4 md:p-8 flex items-center flex-col lg:flex-row gap-8 lg:gap-8 justify-center lg:justify-between">
            <div className="text-[40px] sm:text-[60px] lg:text-[90px] font-['Amethysta'] text-center lg:ml-[250px] lg:text-left">
                CALL OR <br /> VISIT
            </div>

            {/* CONTACT FORM */}
            <div className="flex flex-col gap-6 w-full max-w-2xl lg:mr-[180px]">
                {/* SEND A MESSAGE */}
                <div className="mb-4">
                    <h3 className="text-2xl font-['Amethysta'] text-[#283D3B] mb-6">SEND A MESSAGE:</h3>
                    
                    <div className="flex flex-col gap-4">
                        {/* NAME & EMAIL ROW */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative w-full sm:w-[321px]">
                                <label className="block text-sm font-['inter'] mb-2 text-foreground">
                                    Name
                                </label>
                                <Input placeholder="Enter your name" />
                            </div>

                            <div className="relative w-full sm:w-[321px]">
                                <label className="block text-sm font-['inter'] mb-2 text-foreground">
                                    Email
                                </label>
                                <Input type="email" placeholder="Enter your email" />
                            </div>
                        </div>

                        {/* MESSAGE ROW */}
                        <div className="relative w-full">
                            <label className="block text-sm font-['inter'] mb-2 text-foreground">
                                Message
                            </label>
                            <textarea
                                placeholder="Enter your message"
                                rows={4}
                                className="w-full bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none px-0 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 resize-none"
                            />
                        </div>

                        {/* BUTTONS ROW */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:items-center">
                            <button className="border-2 rounded-[5px] w-full sm:w-[208px] h-[45px] bg-[#283D3B] text-[#D8F3DC] px-4 py-2  font-medium hover:bg-[#1a2826] transition-colors">
                                Send
                            </button>
                            
                            <button className="border-2 rounded-[5px] w-full sm:w-[250px] h-[45px] lg:w-[350px] bg-[#25D366] text-white px-4 py-2  font-medium hover:bg-[#1ea952] transition-colors">
                                <span>Message us on WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* CONTACT INFO */}
                <div className="border-t border-gray-300 pt-6">
                    <div className="mb-6">
                        <h4 className="text-lg font-['Amethysta'] text-[#283D3B] mb-2">Marci Metzger - THE RIDGE REALTY GROUP</h4>
                        <p className="text-sm text-gray-600 mb-1">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                        <a href="tel:+12069196886" className="text-sm text-[#283D3B] hover:underline font-medium">(206) 919-6886</a>
                    </div>

                    {/* OFFICE HOURS */}
                    <div>
                        <h4 className="text-lg font-['Amethysta'] text-[#283D3B] mb-4">Office Hours</h4>
                        
                        <div className="relative w-full sm:w-[321px] mb-4">
                            <Dropdown 
                                placeholder="Open Today        8:00 am - 7:00 pm"
                                options={[
                                    "Open daily: 08:00 am – 07:00 pm",
                                    "Mon: 08:00 am – 07:00 pm",
                                    "Tue: 08:00 am – 07:00 pm", 
                                    "Wed: 08:00 am – 07:00 pm",
                                    "Thu: 08:00 am – 07:00 pm",
                                    "Fri: 08:00 am – 07:00 pm",
                                    "Sat: 08:00 am – 07:00 pm",
                                    "Sun: 08:00 am – 07:00 pm"
                                ]}
                            />
                        </div>
                        
                        <p className="text-sm text-gray-600 italic">
                            Appointments outside office hours available upon request. Just call!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;