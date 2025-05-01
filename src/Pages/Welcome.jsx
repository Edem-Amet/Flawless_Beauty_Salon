import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Centralized image imports
import hairImage from "../assets/bg6.jpg";
import nailsImage from "../assets/Nails1.jpg";
import pedicureImage from "../assets/ped3.jpg";
import frontalImage from "../assets/frontal1.jpg";
import makeupImage from "../assets/bg5.jpg";
import lashesImage from "../assets/lash1.jpg";
import salonVideo from "../assets/Video.mp4";

const galleryImages = {
    hair: hairImage,
    nails: nailsImage,
    pedicure: pedicureImage,
    frontal: frontalImage,
    makeup: makeupImage,
    lashes: lashesImage,
    salon: salonVideo
};

const services = [
    {
        id: "hairstyles",
        title: "Hair Styling",
        subtitle: "Elegant Transformations",
        img: galleryImages.hair
    },
    {
        id: "nail-styles",
        title: "Nail Artistry",
        subtitle: "Precision & Creativity",
        img: galleryImages.nails
    },
    {
        id: "pedicure-styles",
        title: "Pedicure",
        subtitle: "Smoothing Your Steps",
        img: galleryImages.pedicure
    },
    {
        id: "frontal",
        title: "Frontal Installation",
        subtitle: "Flawless Hairlines",
        img: galleryImages.frontal
    },
    {
        id: "makeup",
        title: "Makeup Artistry",
        subtitle: "Enhance Your Beauty",
        img: galleryImages.makeup
    },
    {
        id: "lashes-styles",
        title: "Lash Extensions",
        subtitle: "Dramatic Eye Enhancement",
        img: galleryImages.lashes
    }
];

const Welcome = () => {
    const videoRef = useRef(null);

    // Ensure video plays when component mounts
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // Fallback: mute the video and try playing again
                videoRef.current.muted = true;
                videoRef.current.play();
            });
        }
    }, []);

    return (
        <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-3xl sm:text-4xl font-parisienne text-primary mb-2"
                        >
                            Welcome To
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-6"
                        >
                            Flawless Beauty Salon
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="mx-auto lg:mx-0 lg:text-xl sm:text-md text-gray-700 font-poppins leading-relaxed mb-8"
                        >
                            Flawless Beauty Salon is where artistry meets pampering. With over a year of
                            transforming clients into their most radiant selves, we've perfected the balance
                            between luxury and natural beauty.
                        </motion.p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <Link
                                to="/booking"
                                className="inline-flex items-center bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300"
                            >
                                Book Your Session <FaArrowRight className="ml-3" />
                            </Link>

                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative mb-[-30px] w-72 h-72 sm:w-80 sm:h-80 md:w-76 md:h-76 rounded-full overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 cursor-pointer border-4 border-primary">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            >
                                <source src={galleryImages.salon} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                                <div className="p-6 text-center">
                                    <h3 className="text-white font-semibold text-xl">Luxury Experience</h3>
                                    <p className="text-white/80 text-sm">Our elegant salon space</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative px-4 sm:px-6 lg:px-8 overflow-hidden"
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold lg:text-4xl font-playfair text-secondary mb-12 text-center"
                    >
                        Gallery
                    </motion.h3>

                    <div className="relative max-w-7xl mx-auto">
                        {/* Desktop Layout - 3x2 grid with rounded corners */}
                        <div className="hidden lg:grid grid-cols-3 gap-6">
                            {/* Row 1 */}
                            {services.slice(0, 3).map((service, index) => (
                                <motion.div
                                    key={`desktop-top-${service.id}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative w-full h-72 shadow-xl rounded-xl overflow-hidden group"
                                >

                                    <Link to={`/${service.id}#top`} className="block w-full h-full">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-6">
                                                <h3 className="text-white font-semibold text-xl">{service.title}</h3>
                                                <p className="text-white/80 text-sm">{service.subtitle}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </motion.div>
                            ))}

                            {/* Row 2 */}
                            {services.slice(3, 6).map((service, index) => (
                                <motion.div
                                    key={`desktop-bottom-${service.id}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative w-full h-72 shadow-xl rounded-xl overflow-hidden group"
                                >

                                    <Link to={`/${service.id}#top`} className="block w-full h-full">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-6">
                                                <h3 className="text-white font-semibold text-xl">{service.title}</h3>
                                                <p className="text-white/80 text-sm">{service.subtitle}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </motion.div>
                            ))}
                        </div>

                        {/* Tablet Layout - 2x3 grid */}
                        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={`tablet-${service.id}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative h-60 shadow-xl rounded-xl overflow-hidden group"
                                >
                                    <Link to={`/${service.id}#top`} className="block w-full h-full">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                            <div className="p-4">
                                                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                                                <p className="text-white/80 text-xs">{service.subtitle}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Layout - Slanted edges */}
                        <div className="sm:hidden space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={`mobile-${service.id}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative h-56 group"
                                    style={{
                                        clipPath: index % 2 === 0
                                            ? "polygon(0 0, 100% 10%, 100% 90%, 0 100%)"
                                            : "polygon(0 10%, 100% 0, 100% 100%, 0 90%)"
                                    }}
                                >
                                    <Link to={`/${service.id}#top`} className="block w-full h-full">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                            <div className="p-6">
                                                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                                                <p className="text-white/80 text-xs">{service.subtitle}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};


export default Welcome;