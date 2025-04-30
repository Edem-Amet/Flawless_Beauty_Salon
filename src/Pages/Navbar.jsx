import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaHome,
    FaCut,
    FaHandSparkles,
    FaUserAlt,
    FaPhoneAlt,
    FaCalendarAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaChevronDown,
    FaArrowRight,
} from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/main_logo.png";
import salonHeroMobile from "../assets/hero1.jpg"; // Optimized for mobile
import salonHeroDesktop from "../assets/hero1.jpg"; // Optimized for desktop

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Toggle mobile menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Handle dropdown hover
    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        {
            name: "Home",
            icon: <FaHome />,
            path: "/",
        },
        {
            name: "Services",
            icon: <FaCut />,
            dropdown: [
                { name: "Hair Services", path: "/hairstyles" },
                { name: "Nail Services", path: "/nail-styles" },
                { name: "Pedicure & Manicure", path: "/pedicure-styles" },
                { name: "Makeup & Beauty", path: "/makeup" },
                { name: "Lash Extensions ", path: "/lashes-styles" },
                { name: "Frontal Installation", path: "/frontal" },
            ],
        },
        {
            name: "Contact Us",
            icon: <FaUserAlt />,
            path: "/contact",
        },
        {
            name: "Products",
            icon: <FaHandSparkles />,
            path: "/products",
            dropdown: [
                { name: "Hair Care", path: "/products/hair-care" },
                { name: "Nail Care", path: "/products/nail-care" },
                { name: "Skin Care", path: "/products/skin-care" },
                { name: "Makeup", path: "/products/makeup" },
            ],
        },
    ];

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20 md:h-24">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <Link to="/" className="flex items-center">
                                <img
                                    src={logo}
                                    alt="Flawless Beauty Salon Logo"
                                    className="h-10 sm:h-12 md:h-14 w-auto"
                                />
                            </Link>
                        </motion.div>

                        {/* Mobile/Tablet Book Now Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:hidden ml-auto mr-3"
                        >
                            <Link
                                to="/booking"
                                className="flex items-center gap-1 bg-primary text-white hover:bg-white hover:text-secondary px-3 py-1.5 sm:px-5 sm:py-2 rounded-full 
                                text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <FaCalendarAlt className="text-xs sm:text-sm" />
                                <span className="whitespace-nowrap">Book Us</span>
                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-1">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="relative group"
                                        onMouseEnter={() => handleMouseEnter(item.name)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item.dropdown ? (
                                            <>
                                                <div
                                                    className={`px-4 py-2 rounded-lg flex items-center gap-1 h-14 cursor-pointer transition-all duration-300 hover:bg-primary/10 group ${isScrolled ? "text-gray-800" : "text-white"
                                                        } hover:text-primary`}
                                                >
                                                    <span className="font-medium font-poppins">
                                                        {item.name}
                                                    </span>
                                                    <FaChevronDown
                                                        className={`text-xs ml-1 transition-transform duration-200 group-hover:rotate-180 ${isScrolled ? "text-gray-500" : "text-white/80"
                                                            }`}
                                                    />
                                                </div>

                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="absolute left-0 z-[9999] w-56 bg-white shadow-xl py-2 rounded-lg border border-gray-100"
                                                        onMouseEnter={() => handleMouseEnter(item.name)}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        <ul className="space-y-1">
                                                            {item.dropdown.map((subItem, subIndex) => (
                                                                <Link key={subIndex} to={subItem.path}>
                                                                    <li className="px-4 py-3 hover:bg-primary/5 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-primary font-poppins text-gray-700 hover:text-primary text-sm font-medium">
                                                                        {subItem.name}
                                                                    </li>
                                                                </Link>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`px-4 py-2 rounded-lg flex items-center h-14 transition-all duration-300 font-poppins ${isScrolled
                                                    ? "text-gray-800 hover:bg-primary/10 hover:text-primary"
                                                    : "text-white hover:bg-white/10"
                                                    } font-medium`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center gap-2 md:gap-4">
                            {/* Book Now Button - Desktop */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden lg:block"
                            >
                                <Link
                                    to="/booking"
                                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 font-semibold font-poppins shadow-lg hover:shadow-secondary/40"
                                >
                                    <FaCalendarAlt className="text-base" />
                                    Book Now
                                </Link>
                            </motion.div>

                            {/* Mobile Menu Toggle */}
                            <div className="lg:hidden">
                                {showMenu ? (
                                    <HiMenuAlt1
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all text-primary"
                                        size={32}
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all text-primary"
                                        size={32}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />

            {/* Hero Section - Modified height for different devices */}
            <div className="relative w-full overflow-hidden h-[80vh]  sm:h-auto md:h-screen lg:h-[80vh] xl:h-[80vh]">
                {/* Background Image with Overlay - Responsive */}
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 640px)" srcSet={salonHeroMobile} />
                        <source media="(max-width: 1024px)" srcSet={salonHeroMobile} />
                        <source media="(min-width: 1025px)" srcSet={salonHeroDesktop} />
                        <img
                            src={salonHeroDesktop}
                            alt="Flawless Beauty Salon"
                            className="w-full h-full object-cover object-center md:object-center lg:object-center"
                            loading="eager"
                            style={{
                                maxHeight: "80vh", // Prevent excessive enlargement on large screens
                                objectFit: "cover"
                            }}
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-black/30"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto md:mx-0"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-parisienne bg-black/30 py-3 px-3 rounded-2xl text-center md:text-left">
                                <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                                    Discover Your Beauty Potential
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-poppins text-white/80 text-center md:text-left">
                                Experience luxury beauty treatments tailored to enhance your
                                natural radiance. Our expert team is dedicated to making you look
                                and feel your absolute best.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Link
                                        to="/booking"
                                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-primary hover:bg-primary/80 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base"
                                    >
                                        Book Appointment <FaArrowRight className="text-sm sm:text-base" />
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-secondary hover:bg-secondary/90 text-white px-4 sm:px-6 py-2.5 sm:py-3 
                                        rounded-lg font-semibold shadow-lg transition-all duration-300 border-b border-primary text-sm sm:text-base"
                                    >
                                        View Services Below
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>


                {/* Floating Beauty Elements - Responsive */}
                <motion.div
                    className="absolute top-1/4 right-5 md:right-10 block"
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <FaCut className="text-white text-sm sm:text-base md:text-xl" />
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-1/3 left-4 md:left-8 block"
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <FaHandSparkles className="text-white text-xs sm:text-sm md:text-lg" />
                    </div>
                </motion.div>

                {/* Animated Circular Icons - Responsive on all devices */}
                <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 2, delay: 1 }}
                    >
                        <motion.div
                            className="w-24 h-24 xs:w-28 xs:h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border border-white/10 absolute -translate-x-1/2 -translate-y-1/2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                className="absolute -top-1.5 xs:-top-2 -left-1.5 xs:-left-2 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-primary/50 backdrop-blur-sm"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute top-1/2 -right-1.5 xs:-right-2 w-2 h-2 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-secondary/50 backdrop-blur-sm"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.div
                                className="absolute -bottom-1.5 xs:-bottom-2 left-1/3 w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-white/50 backdrop-blur-sm"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Social Media Links - Responsive */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex gap-3 sm:gap-4 md:gap-6  mt-[-70px]">
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://facebook.com/flawlessbeautysalon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base sm:text-lg md:text-xl bg-black/20 p-1.5 sm:p-2 rounded-full backdrop-blur-sm"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://instagram.com/flawlessbeautysalon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base sm:text-lg md:text-xl bg-black/20 p-1.5 sm:p-2 rounded-full backdrop-blur-sm"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://twitter.com/flawlessbeauty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base sm:text-lg md:text-xl bg-black/20 p-1.5 sm:p-2 rounded-full backdrop-blur-sm"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Navbar;