import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrush, FaPalette, FaLeaf, FaGem, FaMask } from 'react-icons/fa';

const MakeupStyles = ({ isHomePreview = false }) => {
    // Makeup services data
    const makeupStyles = [
        {
            id: 1,
            name: "Glamour Makeup",
            description: "Full coverage, dramatic look perfect for special occasions and photoshoots.",
            duration: "90 minutes",
            icon: <FaBrush className="text-pink-500 text-2xl" />
        },
        {
            id: 2,
            name: "Natural Beauty",
            description: "Enhance your features with this light, fresh-faced makeup look.",
            duration: "60 minutes",
            icon: <FaLeaf className="text-green-500 text-2xl" />
        },
        {
            id: 3,
            name: "Bridal Makeup",
            description: "Long-lasting, photo-ready makeup designed for your wedding day.",
            duration: "120 minutes",
            icon: <FaGem className="text-blue-500 text-2xl" />
        },
        {
            id: 4,
            name: "Editorial Makeup",
            description: "Creative, high-fashion looks for modeling portfolios or artistic expression.",
            duration: "90 minutes",
            icon: <FaPalette className="text-purple-500 text-2xl" />
        },
        {
            id: 5,
            name: "Airbrush Makeup",
            description: "Flawless, lightweight coverage that lasts all day with our premium airbrush technique.",
            duration: "75 minutes",
            icon: <FaBrush className="text-red-500 text-2xl" />
        },
        {
            id: 6,
            name: "Character Makeup",
            description: "Transform into any character with our special effects and theatrical makeup artistry.",
            duration: "120+ minutes",
            icon: <FaMask className="text-yellow-500 text-2xl" />
        }
    ];

    // For home preview, only show first 3 items
    const displayStyles = isHomePreview ? makeupStyles.slice(0, 2) : makeupStyles;

    return (
        <div className={`bg-white ${isHomePreview ? 'py-12' : 'py-24'} px-4 sm:px-6 lg:px-8`}>
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    Our Artistic Creations
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    Makeup Collection
                </h1>
                <p className="max-w-2xl mx-auto text-gray-700 font-poppins leading-relaxed">
                    {isHomePreview
                        ? "Discover transformative makeup artistry for every occasion"
                        : "Each look is customized to enhance your natural beauty and express your unique style"}
                </p>
            </div>

            {/* Makeup Styles Grid */}
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
                                    <a
                                        href="/booking"
                                        className="flex items-center text-primary bg-secondary bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-100 hover:text-white font-medium transition-all duration-300 group"
                                        onClick={(e) => {
                                            if (isHomePreview) {
                                                e.preventDefault();
                                                window.location.href = "/booking";
                                                window.scrollTo(0, 0);
                                            }
                                        }}
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
                                    </a>
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
                        to="/makeup"
                        className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300 group"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <span>Explore All Makeup Services</span>
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
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Makeup Consultations</h3>
                        <p className="text-gray-600 mb-4">Want something personalized? Book a consultation with our makeup artists to create your perfect look!</p>
                        <a
                            href="/booking"
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
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MakeupStyles;