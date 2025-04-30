import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpa, FaLeaf, FaAppleAlt, FaGlassCheers, FaHandSparkles, FaWater } from 'react-icons/fa';

const PedicureStyles = ({ isHomePreview = false }) => {
    // Pedicure services data with icons
    const pedicureStyles = [
        {
            id: 1,
            name: "Jelly Pedicure",
            description: "Hydrating treatment with fruit-enriched jelly for ultra-soft, nourished feet.",
            duration: "60 minutes",
            icon: <FaWater className="text-blue-400 text-2xl" />
        },
        {
            id: 2,
            name: "Milk Pedicure",
            description: "Luxurious milk bath soak that exfoliates and moisturizes for baby-soft skin.",
            duration: "60 minutes",
            icon: <FaGlassCheers className="text-yellow-300 text-2xl" />
        },
        {
            id: 3,
            name: "Fruits Pedicure",
            description: "Vitamin-rich fruit extracts to revitalize and brighten tired feet.",
            duration: "75 minutes",
            icon: <FaAppleAlt className="text-red-400 text-2xl" />
        },
        {
            id: 4,
            name: "Classic Pedicure",
            description: "Traditional pedicure with cleansing, exfoliation, and polish for well-groomed feet.",
            duration: "45 minutes",
            icon: <FaHandSparkles className="text-gray-500 text-2xl" />
        },
        {
            id: 5,
            name: "Spa Pedicure",
            description: "Premium treatment with extended massage and deep conditioning for ultimate relaxation.",
            duration: "90 minutes",
            icon: <FaSpa className="text-green-500 text-2xl" />
        },
        {
            id: 6,
            name: "Detox Pedicure",
            description: "Mineral soak to draw out impurities and reduce puffiness in feet and ankles.",
            duration: "60 minutes",
            icon: <FaLeaf className="text-purple-400 text-2xl" />
        }
    ];

    // For home preview, show first 3 items to match makeup page
    const displayStyles = isHomePreview ? pedicureStyles.slice(0, 2) : pedicureStyles;

    return (
        <div className={`bg-white ${isHomePreview ? 'py-12' : 'py-24'} px-4 sm:px-6 lg:px-8`}>
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    Our Signature Treatments
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    Pedicure Collection
                </h1>
                <p className="max-w-2xl mx-auto text-gray-700 font-poppins leading-relaxed">
                    {isHomePreview
                        ? "Discover our premium foot care treatments"
                        : "Each treatment is designed to pamper your feet and enhance your natural beauty"}
                </p>
            </div>

            {/* Pedicure Styles Grid - Updated to match makeup page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid ${isHomePreview ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {displayStyles.map((style) => (
                        <div
                            key={style.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-100"
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
                        to="/pedicure-styles"
                        className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300 group"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <span>Explore All Pedicure Services</span>
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
                    <div className="bg-gradient-to-r from-blue-50 to-secondary/10 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Pedicure Experiences</h3>
                        <p className="text-gray-600 mb-4">Want something personalized? Book a consultation to create your perfect foot care regimen!</p>
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

export default PedicureStyles;