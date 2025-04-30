import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
    FaChevronUp,
} from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

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
                { name: "Lash Extensions", path: "/lashes-styles" },
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
            dropdown: [
                { name: "Hair Care", path: "/products/hair-care" },
                { name: "Nail Care", path: "/products/nail-care" },
                { name: "Skin Care", path: "/products/skin-care" },
                { name: "Makeup", path: "/products/makeup" },
            ],
        },
        {
            name: "Book Now",
            icon: <FaCalendarAlt />,
            path: "/booking",
            highlight: true,
        },
    ];

    return (
        <div
            className={`fixed top-0 z-50 ${showMenu ? "left-0" : "-left-full"
                } h-screen w-[65%] max-w-xs bg-gradient-to-b from-primary to-secondary text-white transition-all duration-500 ease-in-out
                 pt-32 pb-8 px-6 flex flex-col justify-between overflow-y-auto`}
        >
            {/* Navigation Links */}
            <nav>
                <ul className="space-y-0">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    {item.path && !item.dropdown ? (
                                        <Link
                                            to={item.path}
                                            onClick={toggleMenu}
                                            className={`flex items-center text-base gap-4 py-3 px-4 font-medium w-full rounded-lg transition-colors duration-300 font-poppins
                                ${item.highlight ? "bg-white text-secondary" : "hover:bg-white/10"}`}
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <>
                                            <div className={`flex items-center text-base gap-4 py-3 px-4 font-medium w-full rounded-lg transition-colors duration-300 font-poppins
                                ${item.highlight ? "bg-white text-secondary" : "hover:bg-white/10"}`}>
                                                <span className="text-lg">{item.icon}</span>
                                                {item.name}
                                            </div>
                                            {item.dropdown && (
                                                <button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className="p-2 text-white/70 hover:text-white transition-colors"
                                                >
                                                    {openDropdown === item.name ? (
                                                        <FaChevronUp />
                                                    ) : (
                                                        <FaChevronDown />
                                                    )}
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>

                                {item.dropdown && openDropdown === item.name && (
                                    <div className="mt-1 ml-4 pl-4 border-l-2 border-white/20">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={subItem.path}
                                                onClick={toggleMenu}
                                                className="block py-2.5 px-4 my-1 hover:bg-white/10 text-sm font-poppins font-medium 
                                    transition-all duration-300 ease-in-out rounded-lg"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Add divider line after each menu item except the last one */}
                            {index < menuItems.length - 1 && (
                                <div className="h-px bg-white/10 my-1 mx-4"></div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>


            {/* Footer Section */}
            <div className="mt-auto pt-6 border-t border-white/20">
                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-6">
                    <a
                        href="https://facebook.com/flawlessbeautysalon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a
                        href="https://instagram.com/flawlessbeautysalon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://twitter.com/flawlessbeauty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                        <FaTwitter className="text-lg" />
                    </a>
                </div>

                {/* CTA Button */}
                <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="block w-full bg-white hover:bg-secondary text-primary text-center py-3 rounded-lg font-semibold font-poppins 
                    transition-all duration-300 mb-4 shadow-lg hover:shadow-secondary/40"
                >
                    <div className="flex items-center justify-center gap-2">
                        <FaPhoneAlt className="text-sm" />
                        Contact Us
                    </div>
                </Link>

                {/* Legal */}
                <div className="text-center text-xs text-white/60 font-poppins">
                    © {new Date().getFullYear()} Flawless Beauty Salon. All rights reserved.
                </div>
            </div>
        </div>
    );
};

ResponsiveMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;