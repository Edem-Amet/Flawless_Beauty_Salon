import React from 'react';
import { Link } from 'react-router-dom';
import { FaMagic, FaShoePrints, FaPalette, FaPaintBrush, FaGem } from 'react-icons/fa';

const NailStyles = ({ isHomePreview = false }) => {
    // Nail services data with icons
    const nailStyles = [
        {
            id: 1,
            name: "Acrylic Nails",
            description: "Durable and customizable extensions with a glossy finish for long-lasting beauty.",
            duration: "90-120 minutes",
            icon: <FaPaintBrush className="text-pink-500 text-2xl" />
        },
        {
            id: 2,
            name: "Press-On Nails",
            description: "Quick and easy application with premium quality press-on nails for instant glam.",
            duration: "30-45 minutes",
            icon: <FaMagic className="text-purple-400 text-2xl" />
        },
        {
            id: 3,
            name: "Toe Nails",
            description: "Specialized pedicure with nail art options to complement your foot care routine.",
            duration: "60 minutes",
            icon: <FaShoePrints className="text-blue-400 text-2xl" />
        },
        {
            id: 4,
            name: "Gel Polish",
            description: "Chip-resistant polish cured under UV light for a flawless, long-wearing finish.",
            duration: "60 minutes",
            icon: <FaPalette className="text-red-400 text-2xl" />
        },
        {
            id: 5,
            name: "Nail Art",
            description: "Custom designs from subtle elegance to bold statements for unique self-expression.",
            duration: "30-90 minutes",
            icon: <FaPaintBrush className="text-yellow-500 text-2xl" />
        },
        {
            id: 6,
            name: "Dip Powder",
            description: "Strong, lightweight alternative to acrylics with vibrant color options.",
            duration: "75 minutes",
            icon: <FaGem className="text-teal-400 text-2xl" />
        }
    ];

    // For home preview, show first 3 items to match other pages
    const displayStyles = isHomePreview ? nailStyles.slice(0, 2) : nailStyles;

    return (
        <div className={`bg-white ${isHomePreview ? 'py-12' : 'py-24'} px-4 sm:px-6 lg:px-8`}>
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    Our Nail Services
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    Nail Artistry Collection
                </h1>
                <p className="max-w-2xl mx-auto text-gray-700 font-poppins leading-relaxed">
                    {isHomePreview
                        ? "Discover our premium nail treatments"
                        : "Each service is crafted to perfection for beautiful, healthy nails"}
                </p>
            </div>

            {/* Nail Styles Grid - Updated to match pedicure page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid ${isHomePreview ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {displayStyles.map((style) => (
                        <div
                            key={style.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-pink-100"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="mr-3">
                                        {style.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary">{style.name}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 pl-9">{style.description}</p>
                                <div className="flex justify-between items-center pl-9">
                                    <span className="text-primary text-sm font-medium">{style.duration}</span>
                                    <Link
                                        to="/booking"
                                        className="flex items-center text-primary bg-secondary bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-100 hover:text-white font-medium transition-all duration-300 group"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <span>Book</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View More Link (only shown in home preview) */}
            {isHomePreview && (
                <div className="max-w-7xl mx-auto mt-12 text-center">
                    <Link
                        to="/nail-styles"
                        className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300 group"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <span>Explore All Nail Services</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            )}

            {/* Full Page Content (only shown when not in home preview) */}
            {!isHomePreview && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="bg-gradient-to-r from-pink-50 to-secondary/10 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Nail Designs</h3>
                        <p className="text-gray-600 mb-4">Want something unique? Book a consultation with our nail artists to create your perfect look!</p>
                        <Link
                            to="/booking"
                            className="inline-flex items-center text-primary font-medium transition-colors duration-300 group"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <span>Book a Consultation</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NailStyles;