import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaEye,
    FaEyeDropper,
    FaRegEye,
    FaEyeSlash,
    FaAngellist
} from 'react-icons/fa';

const LashesStyles = ({ isHomePreview = false }) => {
    // Lash extensions data with icons
    const lashStyles = [
        {
            id: 1,
            name: "Classic",
            description: "Natural-looking extensions that add length and definition with 1:1 application.",
            duration: "90-120 minutes",
            icon: <FaRegEye className="text-brown-400 text-2xl" />
        },
        {
            id: 2,
            name: "Hybrid",
            description: "Mix of classic and volume lashes for a fuller yet still natural effect.",
            duration: "120 minutes",
            icon: <FaEyeDropper className="text-purple-400 text-2xl" />
        },
        {
            id: 3,
            name: "Cateye",
            description: "Dramatic outer corner emphasis for a lifted, feline eye look.",
            duration: "120-150 minutes",
            icon: <FaAngellist className="text-pink-500 text-2xl" />
        },
        {
            id: 4,
            name: "Wispy",
            description: "Soft, feathery texture with varied lengths for a fluttery effect.",
            duration: "120 minutes",
            icon: <FaEyeSlash className="text-blue-400 text-2xl" />
        },
        {
            id: 5,
            name: "Volume",
            description: "Multiple lightweight extensions per natural lash for maximum fullness.",
            duration: "150-180 minutes",
            icon: <FaEye className="text-black text-2xl" />
        }
    ];

    // For home preview, show first 3 items to match other pages
    const displayStyles = isHomePreview ? lashStyles.slice(0, 2) : lashStyles;

    return (
        <div className={`bg-white ${isHomePreview ? 'py-12' : 'py-24'} px-4 sm:px-6 lg:px-8`}>
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    Our Lash Services
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    Lash Extension Collection
                </h1>
                <p className="max-w-2xl mx-auto text-gray-700 font-poppins leading-relaxed">
                    {isHomePreview
                        ? "Enhance your natural beauty with our premium lash extensions"
                        : "Each lash style is meticulously applied for stunning, eye-opening results"}
                </p>
            </div>

            {/* Lash Styles Grid - Updated to match pedicure page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid ${isHomePreview ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {displayStyles.map((style) => (
                        <div
                            key={style.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-purple-100"
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
                        to="/lashes-styles"
                        className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300 group"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <span>Explore All Lash Services</span>
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
                    <div className="bg-gradient-to-r from-purple-50 to-secondary/10 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Lash Consultations</h3>
                        <p className="text-gray-600 mb-4">Want something personalized? Book a consultation with our lash artists to create your perfect look!</p>
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

export default LashesStyles;