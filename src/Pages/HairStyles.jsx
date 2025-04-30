import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCut,
  FaBraille,
  FaLeaf,
  FaSpinner,
  FaGem,
  FaSnowflake,
  FaCloud,
  FaStar,
  FaWater,
  FaMoon
} from 'react-icons/fa';

const HairStyles = ({ isHomePreview = false }) => {
  // Hair styles data with icons
  const hairStyles = [
    {
      id: 1,
      name: "Knotless Braids",
      description: "Natural-looking braids with no knots at the root for less tension and pain.",
      duration: "4-6 hours",
      icon: <FaBraille className="text-brown-500 text-2xl" />
    },
    {
      id: 2,
      name: "Boho Marley Twist",
      description: "Bohemian-inspired twists with curly ends for a free-spirited look.",
      duration: "3-5 hours",
      icon: <FaLeaf className="text-green-400 text-2xl" />
    },
    {
      id: 3,
      name: "Boho Twist",
      description: "Elegant twisted style with bohemian flair and decorative accessories.",
      duration: "3-4 hours",
      icon: <FaSpinner className="text-purple-500 text-2xl" />
    },
    {
      id: 4,
      name: "Spiral Braids",
      description: "Distinctive spiral pattern creating a beautiful dimensional look.",
      duration: "4-6 hours",
      icon: <FaSnowflake className="text-blue-400 text-2xl" />
    },
    {
      id: 5,
      name: "Fulani Braids",
      description: "Traditional style with geometric patterns and decorative beads.",
      duration: "5-7 hours",
      icon: <FaGem className="text-yellow-500 text-2xl" />
    },
    {
      id: 6,
      name: "French Curls",
      description: "Sophisticated curly style with elegant French-inspired patterns.",
      duration: "2-3 hours",
      icon: <FaCloud className="text-pink-400 text-2xl" />
    },
    {
      id: 7,
      name: "Soft Locs",
      description: "Lightweight and natural-looking locs with a softer texture.",
      duration: "4-6 hours",
      icon: <FaWater className="text-teal-400 text-2xl" />
    },
    {
      id: 8,
      name: "All Curls",
      description: "Various curly styles tailored to enhance your natural texture.",
      duration: "2-4 hours",
      icon: <FaStar className="text-orange-400 text-2xl" />
    },
    {
      id: 9,
      name: "Sasha Locs",
      description: "Modern take on traditional locs with a stylish, neat finish.",
      duration: "5-7 hours",
      icon: <FaMoon className="text-indigo-400 text-2xl" />
    },
    {
      id: 10,
      name: "Loose Knotless",
      description: "Relaxed knotless style with a natural, flowing appearance.",
      duration: "3-5 hours",
      icon: <FaCut className="text-red-400 text-2xl" />
    }
  ];

  // For home preview, show first 3 items to match other pages
  const displayStyles = isHomePreview ? hairStyles.slice(0, 2) : hairStyles;

  return (
    <div className={`bg-white ${isHomePreview ? 'py-12' : 'py-24'} px-4 sm:px-6 lg:px-8`}>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
          Our Signature Styles
        </h2>
        <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
          Hair Artistry Collection
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 font-poppins leading-relaxed">
          {isHomePreview
            ? "Discover our premium hair styling services"
            : "Each style is crafted with precision to enhance your natural beauty"}
        </p>
      </div>

      {/* Hair Styles Grid - Updated to match pedicure page */}
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
            to="/hairstyles"
            className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300 group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span>Explore All Hair Services</span>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Hair Consultations</h3>
            <p className="text-gray-600 mb-4">Want something personalized? Book a consultation with our stylists to create your perfect look!</p>
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

export default HairStyles;