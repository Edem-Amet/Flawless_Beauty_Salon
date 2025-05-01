import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitterSquare, FaSnapchat } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <footer className="bg-gradient-to-b from-primary to-gray-300 relative overflow-hidden">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Logo & About Section */}
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center">
                                {/* Logo */}
                                <div className="w-10 h-10 mr-2 bg-secondary rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-playfair text-secondary">Flawless</h2>
                                    <span className="text-white text-sm md:text-lg">Beauty Salon</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Transform your look with our expert beauty services. We specialize in creating stunning styles that enhance your natural beauty.
                            </p>

                            <div className="flex space-x-4">
                                <Link
                                    to="https://www.instagram.com/flawless_beautysaloon/"
                                    className="text-white hover:text-primary transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />
                                </Link>

                                <Link
                                    to="/twitter"
                                    className="text-white hover:text-primary transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FaTwitterSquare className="h-5 w-5 md:h-6 md:w-6" />
                                </Link>

                                <Link
                                    to="/snapchat"
                                    className="text-white hover:text-primary transition-colors"
                                    aria-label="Snapchat"
                                >
                                    <FaSnapchat className="h-5 w-5 md:h-6 md:w-6" />
                                </Link>
                            </div>

                        </div>

                        {/* Quick Links */}
                        <div className="mt-4 sm:mt-0">
                            <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">Quick Links</h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">About Us</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Services</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="mt-6 sm:mt-0">
                            <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">Our Services</h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li>
                                    <a href="/hairstyles" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Hair Styling</a>
                                </li>
                                <li>
                                    <a href="/nail-styles" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Nail Artistry</a>
                                </li>
                                <li>
                                    <a href="/pedicure-styles" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Pedicure</a>
                                </li>
                                <li>
                                    <a href="/frontal" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Frontal Installation</a>
                                </li>
                                <li>
                                    <a href="/makeup" className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base">Makeup Services</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 lg:mt-0">
                            <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">Contact Us</h3>
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-primary rounded-full p-1.5 mr-3 flex-shrink-0">
                                        <svg className="h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-sm">26 Nii Ankrah Road, Lashibi<br />Shalom Spot, Lashibi</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary rounded-full p-1.5 mr-3 flex-shrink-0">
                                        <svg className="h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-sm">+233 241 439 492</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary rounded-full p-1.5 mr-3 flex-shrink-0">
                                        <svg className="h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-sm">info@flawlessbeauty.com</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-primary rounded-full p-1.5 mr-3 flex-shrink-0">
                                        <svg className="h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <p className="font-semibold mb-1">Business Hours:</p>
                                        <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                                        <p>Saturday: 9:00 AM - 8:00 PM</p>
                                        <p>Sunday: 1:00pm - 8:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Newsletter Subscription */}
                <div className="bg-gradient-to-r from-secondary/5 to-primary/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-6 md:mb-0 md:pr-4">
                                <h3 className="text-lg font-semibold text-secondary">Subscribe to our newsletter</h3>
                                <p className="text-gray-600 text-sm mt-1">Stay updated with our latest beauty trends and promotions</p>
                            </div>
                            <div className="flex-1 md:max-w-md lg:max-w-lg xl:max-w-xl">
                                <form className="flex flex-col sm:flex-row">
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full px-4 py-2 text-base border rounded-md sm:rounded-l-md sm:rounded-r-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                                        placeholder="Enter your email"
                                    />
                                    <div className="mt-3 sm:mt-0 sm:ml-0">
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white py-2 px-4 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer with Copyright */}
                <div className="bg-secondary/80 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
                                &copy; {new Date().getFullYear()} Flawless Beauty Salon. All rights reserved.
                            </div>
                            <div className="mt-4 md:mt-0">
                                <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                                    <li>
                                        <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors">
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors">
                                            Cookie Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="hidden md:block absolute -z-10 right-0 bottom-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="hidden md:block absolute -z-10 left-1/4 bottom-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
            </footer>
        </div>
    )
}

export default Footer