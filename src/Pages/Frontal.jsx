import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaUserAlt,
    FaUserCircle,
    FaCut,
    FaMagic,
    FaCrown
} from 'react-icons/fa';

const FrontalInstallation = ({ isHomePreview = false }) => {
    // Enhanced frontal installation data with icons
    const frontalStyles = [
        {
            id: 1,
            name: "Lace Frontal Installation",
            description: "Seamless hairline with a sheer lace base that blends perfectly with your skin tone for a natural look.",
            duration: "3-4 hours",
            icon: <FaUserCircle className="text-brown-400 text-2xl" />,
            features: ["Undetectable hairline", "Customizable density", "Natural parting space"]
        },
        {
            id: 2,
            name: "360 Frontal Installation",
            description: "Full perimeter coverage that allows for versatile styling including high ponytails and updos.",
            duration: "4-5 hours",
            icon: <FaCrown className="text-gold-500 text-2xl" />,
            features: ["Full edge coverage", "Multiple styling options", "Secure bonding"]
        },
        // Creative additional service to match 3-item preview
        {
            id: 3,
            name: "Custom Frontal Design",
            description: "Personalized frontal installation tailored to your unique facial features and style preferences.",
            duration: "5-6 hours",
            icon: <FaMagic className="text-purple-500 text-2xl" />,
            features: ["Custom hairline design", "Bleached knots", "Hand-tied knots"]
        }
    ];

    // For home preview, show first 2 items to match other pages
    const displayStyles = isHomePreview ? frontalStyles.slice(0, 2) : frontalStyles;

    return (
        <div className={`bg-white ${isHomePreview ? 'py-12' : 'py-24'} px-4 sm:px-6 lg:px-8`}>
            {/* Header Section - Always show but with different text */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    {isHomePreview ? "Premium Installations" : "Our Frontal Services"}
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    {isHomePreview ? "Frontal Installations" : "Frontal Installation Collection"}
                </h1>
                {!isHomePreview && (
                    <p className="max-w-2xl mx-auto text-gray-700 font-poppins leading-relaxed">
                        Flawless hairline installations for undetectable, natural-looking results
                    </p>
                )}
            </div>

            {/* Frontal Styles Grid - Updated to match pedicure page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid ${isHomePreview ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {displayStyles.map((style) => (
                        <div
                            key={style.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-brown-100"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="mr-3">
                                        {style.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary">{style.name}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 pl-9">{style.description}</p>

                                {/* Additional features list for full page */}
                                {!isHomePreview && (
                                    <ul className="text-xs text-gray-500 mb-4 pl-9 space-y-1">
                                        {style.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-primary mr-1">•</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

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
                <div className="max-w-7xl mx-auto mt-10 text-center">
                    <Link
                        to="/frontal"
                        className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300 group"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <span>Explore All Installation Services</span>
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
                    <div className="bg-gradient-to-r from-brown-50 to-secondary/10 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Installation Consultation</h3>
                        <p className="text-gray-600 mb-4">Our stylists will assess your hair type and facial features to recommend the perfect frontal solution!</p>
                        <a
                            href="/booking"
                            className="inline-flex items-center text-primary font-medium transition-colors duration-300 group"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <span>Book a Private Consultation</span>
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

export default FrontalInstallation;