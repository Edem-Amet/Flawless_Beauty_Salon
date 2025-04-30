import { FaInstagram, FaFacebook, FaLinkedin, FaQuoteLeft } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen pt-[80px] px-4 md:px-10 pb-16 bg-gray-50">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    Our Story
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    Meet The Visionary Behind Flawless Beauty
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-lg max-w-2xl mx-auto font-poppins text-gray-600">
                    Where passion meets perfection in every brushstroke
                </p>
            </div>

            {/* CEO Profile Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                    <img
                        src="/path-to-ceo-image.jpg"
                        alt="Flawless Beauty CEO"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-secondary mb-4 font-playfair">
                        Nana Ama Mensah
                    </h3>
                    <p className="text-sm text-primary mb-2 font-medium">Founder & CEO</p>

                    <div className="space-y-4 text-gray-700 font-poppins">
                        <p>
                            With over 15 years in the beauty industry, Nana Ama transformed her childhood passion for
                            aesthetics into Ghana's premier luxury beauty destination. What began as a small studio in
                            Accra has blossomed into Flawless Beauty Salon - a sanctuary where artistry and self-care
                            converge.
                        </p>
                        <p>
                            A certified master stylist trained in Paris, London, and New York, Nana Ama believes true
                            beauty enhances one's natural features rather than masking them. This philosophy permeates
                            every service at Flawless Beauty.
                        </p>
                        <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                            <FaQuoteLeft className="text-primary text-2xl mb-2" />
                            <p className="italic">
                                "Beauty isn't about perfection - it's about celebrating your unique features.
                                Our mission is to help every client see and feel their most authentic, radiant self."
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="text-primary hover:text-secondary transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-primary hover:text-secondary transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-primary hover:text-secondary transition">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Milestones Section */}
            <div className="max-w-7xl mx-auto mb-16">
                <h3 className="text-2xl font-semibold text-center text-secondary mb-8 font-playfair">
                    Our Journey
                </h3>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 h-full w-0.5 bg-primary transform -translate-x-1/2"></div>

                    {/* Timeline items */}
                    <div className="space-y-8">
                        {[
                            {
                                year: "2010",
                                title: "Humble Beginnings",
                                content: "Started as a home-based beauty service in Lashibi"
                            },
                            {
                                year: "2014",
                                title: "First Salon Opening",
                                content: "Established our flagship location at Shalom Spot"
                            },
                            {
                                year: "2018",
                                title: "International Recognition",
                                content: "Featured in Glam Africa's Top 25 Salons"
                            },
                            {
                                year: "2022",
                                title: "Expansion",
                                content: "Launched our professional training academy"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                            >
                                <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                    <h4 className="text-lg font-semibold text-secondary mb-1">{item.title}</h4>
                                    <p className="text-gray-600">{item.content}</p>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        {item.year}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;