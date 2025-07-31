"use client"

import { contactDetails } from "@/data/cta"
import { HiPhone, HiMail, HiLocationMarker, HiChat } from "react-icons/hi"

const Contact: React.FC = () => {
    const handleWhatsAppClick = () => {
        const phone = contactDetails.phone.replace(/\s/g, '').replace(/[()]/g, '');
        const message = encodeURIComponent(contactDetails.whatsappMessage);
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="mt-20 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{contactDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5 mb-8">{contactDetails.subheading}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl w-full">
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                                <HiPhone className="w-8 h-8 text-primary" />
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-gray-300">{contactDetails.phone}</p>
                            </div>
                            
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                                <HiMail className="w-8 h-8 text-primary" />
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-gray-300">{contactDetails.email}</p>
                            </div>
                            
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                                <HiLocationMarker className="w-8 h-8 text-primary" />
                                <h3 className="font-semibold text-lg">Address</h3>
                                <p className="text-gray-300 text-sm">{contactDetails.address}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button 
                                onClick={handleWhatsAppClick}
                                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors flex items-center gap-2"
                            >
                                <HiChat className="w-5 h-5" />
                                Chat on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact