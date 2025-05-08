import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaHome,
    FaCut,
    FaHandSparkles,
    FaUserAlt,
    FaCalendarAlt,
    FaChevronDown,
} from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/main_logo.png";

const MainNav = () => {
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

    // Add scroll effect for styling changes only
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
                { name: "Frontal Installations", path: "/frontal" },
                { name: "Makeup", path: "/makeup" },
            ],
        },
        {
            name: "Contact Us",
            icon: <FaUserAlt />,
            path: "/contact",
        },
        {
            name: "About Us",
            icon: <AiOutlineInfoCircle />,
            path: "/about",
        },
    ];

    return (
        <>
            {/* Main Navbar - Always visible with white background */}
            <nav className="fixed top-0 left-0 w-full z-[9999] transition-all duration-500 bg-white shadow-lg">
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
                                className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full 
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
                                                    className="px-4 py-2 rounded-lg flex items-center gap-1 h-14 cursor-pointer transition-all duration-300 hover:bg-primary/10 group text-gray-800 hover:text-primary"
                                                >
                                                    <span className="font-medium font-poppins">
                                                        {item.name}
                                                    </span>
                                                    <FaChevronDown
                                                        className="text-xs ml-1 transition-transform duration-200 group-hover:rotate-180 text-gray-500"
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
                                                className="px-4 py-2 rounded-lg flex items-center h-14 transition-all duration-300 font-poppins text-gray-800 hover:bg-primary/10 hover:text-primary font-medium"
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
        </>
    );
};

export default MainNav;