import React, { useState } from 'react';
import Navbar from "./Navbar";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import Welcome from "./Welcome";
import HairStyles from "./HairStyles";
import NailStyles from "./NailStyles";
import Frontal from "./Frontal";
import PedicureStyles from './PedicureStyles';
import LashesStyles from './LashesStyles';
import MakeupStyles from './MakeupStyles';
import Footer from "./Footer";


const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>

            <div className="relative bg-primary-50"> {/* Light yellow background */}
                {/* Navigation */}
                <Navbar showMenu={showMenu} toggleMenu={toggleMenu} />
                <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />

                <main className="space-y-12 pb-12">

                    <Welcome />


                    {/* Services Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-2xl lg:text-4xl font-playfair text-secondary mb-6 font-bold">
                                Our Services
                            </h3>
                            <p className="text-gray-700 max-w-2xl mx-auto">
                                We offer a comprehensive range of beauty services tailored to enhance your natural beauty.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8"
                            >
                                <a
                                    href="/"
                                    className="inline-flex items-center bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-medium shadow-lg transition-colors duration-300"
                                >
                                    View All Services Below
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Hair Styles Section */}
                    <section className="py-12 bg-primary/20 rounded-lg mx-4 shadow-lg">
                        <div className="container mx-auto px-4">
                            <HairStyles isHomePreview={true} />
                        </div>
                    </section>

                    {/* Nail Styles Section */}
                    <section className="py-12 bg-secondary/10 rounded-lg mx-4 shadow-lg">
                        <div className="container mx-auto px-4">
                            <NailStyles isHomePreview={true} />
                        </div>
                    </section>

                    {/* Lash Styles Section */}
                    <section className="py-12 bg-primary/20 rounded-lg mx-4 shadow-lg">
                        <div className="container mx-auto px-4">
                            <LashesStyles isHomePreview={true} />
                        </div>
                    </section>

                    {/* Frontal Section */}
                    <section className="py-12 bg-secondary/10 rounded-lg mx-4 shadow-lg">
                        <div className="container mx-auto px-4">
                            <Frontal isHomePreview={true} />
                        </div>
                    </section>

                    {/* Makeup Section */}
                    <section className="py-12 bg-primary/20 rounded-lg mx-4 shadow-lg">
                        <div className="container mx-auto px-4">
                            <MakeupStyles isHomePreview={true} />
                        </div>
                    </section>

                    {/* Pedicure Section */}
                    <section className="py-12 bg-secondary/10 rounded-lg mx-4 shadow-lg">
                        <div className="container mx-auto px-4">
                            <PedicureStyles isHomePreview={true} />
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Home;