import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    FaCalendarAlt,
    FaClock,
    FaUser,
    FaPhone,
    FaEnvelope,
    FaAngleRight,
    FaCheck,
    FaChevronDown,
    FaWhatsapp,
    FaExclamationTriangle,
    FaInfoCircle,
    FaHome
} from 'react-icons/fa';

const BookingForm = () => {
    // Service data structure
    const services = {
        hair: [
            "Knotless Braids",
            "Boho Marley Twist",
            "Boho Twist",
            "Spiral Braids",
            "Fulani Braids",
            "French Curls",
            "Soft Locs",
            "All Curls",
            "Sasha Locs",
            "Loose Knotless",
            "Other Hair Style"
        ],
        nails: [
            "Acrylic Nails",
            "Stick-On Nails",
            "Toe Nails",
            "Gel Polish",
            "Nail Art",
            "Dip Powder",
            "Other Nail Style"
        ],
        pedicure: [
            "Jelly Pedicure",
            "Milk Pedicure",
            "Fruits Pedicure",
            "Normal Pedicure",
            "Spa Pedicure",
            "Detox Pedicure",
            "Other Pedicure"
        ],
        frontal: [
            "Lace Frontal Installation",
            "360 Frontal Installation",
            "Custom Frontal Design",
            "Other frontal Installation"
        ],
        lashes: [
            "Classic",
            "Hybrid",
            "Cateye",
            "Wispy",
            "Volume",
            "Other lash Style"
        ],
        makeup: [
            "Bridal Makeup",
            "Natural Beauty",
            "Casual Makeup",
            "Photoshoot Makeup",
            "Glamour Makeup",
            "Editorial Makeup",
            "Airbush Makeup",
            "Other Makeup Style"
        ]
    };

    // Form validation state
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        mainService: '',
        subService: '',
        date: '',
        time: ''
    });

    // State management
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        mainService: '',
        subService: '',
        date: null,
        time: '',
        notes: ''
    });

    const [availableTimes, setAvailableTimes] = useState([]);
    const [subServiceOptions, setSubServiceOptions] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showWhatsappOption, setShowWhatsappOption] = useState(false);
    const [sendingWhatsapp, setSendingWhatsapp] = useState(false);
    const [whatsappSent, setWhatsappSent] = useState(false);
    const [readyToSubmit, setReadyToSubmit] = useState(false); // New state to track if user has confirmed booking

    // Time slots (8am-6pm, every 30 minutes)
    const allTimeSlots = [];
    for (let hour = 8; hour <= 18; hour++) {
        const formattedHour = hour > 12 ? hour - 12 : hour;
        const amPm = hour >= 12 ? 'PM' : 'AM';
        allTimeSlots.push(`${formattedHour}:00 ${amPm} `);
        if (hour < 18) allTimeSlots.push(`${formattedHour}: 30 ${amPm} `);
    }

    // Email validation function
    const validateEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Phone validation function for Ghana numbers (10 digits starting with 0)
    const validatePhone = (phone) => {
        // Remove any spaces or special characters
        const cleanPhone = phone.replace(/[^0-9]/g, '');
        // Check if it's 10 digits and starts with 0
        return cleanPhone.length === 10 && cleanPhone.startsWith('0');
    };

    // Handle input change with validation
    const handleInputChange = (field, value) => {
        // Update form data
        setFormData({ ...formData, [field]: value });

        // Clear existing error for the field
        setErrors({ ...errors, [field]: '' });

        // Validate based on field type
        if (field === 'email' && value) {
            if (!validateEmail(value)) {
                setErrors({ ...errors, email: 'Please enter a valid email address' });
            }
        } else if (field === 'phone' && value) {
            if (!validatePhone(value)) {
                setErrors({ ...errors, phone: 'Please enter a valid 10-digit number starting with 0' });
            }
        }
    };

    // Handle main service change
    const handleMainServiceChange = (e) => {
        const service = e.target.value;
        setFormData({
            ...formData,
            mainService: service,
            subService: ''
        });

        if (service && services[service]) {
            setSubServiceOptions(services[service]);
        } else {
            setSubServiceOptions([]);
        }
    };

    // Handle date change
    const handleDateChange = (date) => {
        setFormData({ ...formData, date, time: '' });

        // In a real app, you would check booked times from your API
        // For demo, we'll show all times except random 3 to simulate booked slots
        const bookedTimes = [];
        const randomCount = Math.floor(Math.random() * 3);
        for (let i = 0; i < randomCount; i++) {
            const randomIndex = Math.floor(Math.random() * allTimeSlots.length);
            bookedTimes.push(allTimeSlots[randomIndex]);
        }

        setAvailableTimes(allTimeSlots.filter(time => !bookedTimes.includes(time)));
    };

    // Filter out Sundays
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0; // Sunday is 0
    };

    // Prepare WhatsApp message
    const prepareWhatsAppMessage = () => {
        return encodeURIComponent(
            '* New Appointment *\n' +
            'Name: ' + formData.name + '\n' +
            'Phone: ' + formData.phone + '\n' +
            'Email: ' + formData.email + '\n' +
            'Service: ' + formData.subService + '\n' +
            'Date: ' + formData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) + '\n' +
            'Time: ' + formData.time + '\n' +
            'Notes: ' + (formData.notes || 'None')
        );
    };

    // Send via WhatsApp function
    const sendViaWhatsApp = () => {
        setSendingWhatsapp(true);

        // Create WhatsApp message and URL
        const message = prepareWhatsAppMessage();
        const whatsappUrl = `https://wa.me/233557095259?text=${message}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Mark as sent after a delay to simulate completion
        setTimeout(() => {
            setSendingWhatsapp(false);
            setWhatsappSent(true);
        }, 1500);
    };

    // Submit to Formspark
    const submitToFormspark = async () => {
        try {
            // Formspark endpoint (you would replace this with your actual form ID)
            const formsparkUrl = "https://submit-form.com/Pqm05C8ME";

            // Prepare data for submission
            const submissionData = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                service: `${formData.mainService} - ${formData.subService}`,
                appointmentDate: formData.date?.toISOString(),
                appointmentTime: formData.time,
                notes: formData.notes
            };

            // Post to Formspark
            const response = await fetch(formsparkUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(submissionData)
            });

            if (response.ok) {
                console.log("Form submitted successfully to Formspark");
                return true;
            } else {
                console.error("Formspark submission failed");
                return false;
            }
        } catch (error) {
            console.error("Error submitting to Formspark:", error);
            return false;
        }
    };

    // Mark booking as ready to submit
    const confirmBooking = () => {
        setReadyToSubmit(true);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // If not confirmed yet, don't proceed with submission
        if (!readyToSubmit) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Store data (in a real app, this would interact with your backend)
            localStorage.setItem('lastBooking', JSON.stringify({
                ...formData,
                date: formData.date?.toISOString(),
                bookingTime: new Date().toISOString()
            }));

            // Submit to Formspark
            await submitToFormspark();

            console.log('Booking submitted:', formData);

            // Show success and WhatsApp option
            setIsSubmitting(false);
            setIsSubmitted(true);
            setShowWhatsappOption(true);

        } catch (error) {
            console.error('Error during submission:', error);
            setIsSubmitting(false);
            // You could add error handling UI here
        }
    };

    // Next step handler
    const goToNextStep = () => {
        // Validate current step before proceeding
        let valid = true;
        const newErrors = { ...errors };

        switch (currentStep) {
            case 1:
                // Validate personal info
                if (!formData.name.trim()) {
                    newErrors.name = 'Name is required';
                    valid = false;
                }

                if (!formData.phone.trim()) {
                    newErrors.phone = 'Phone number is required';
                    valid = false;
                } else if (!validatePhone(formData.phone)) {
                    newErrors.phone = 'Please enter a valid 10-digit number starting with 0';
                    valid = false;
                }

                if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                    valid = false;
                } else if (!validateEmail(formData.email)) {
                    newErrors.email = 'Please enter a valid email address';
                    valid = false;
                }
                break;

            case 2:
                // Validate service selection
                if (!formData.mainService) {
                    newErrors.mainService = 'Please select a main service';
                    valid = false;
                }

                if (!formData.subService) {
                    newErrors.subService = 'Please select a specific service';
                    valid = false;
                }
                break;

            case 3:
                // Validate date and time
                if (!formData.date) {
                    newErrors.date = 'Please select a date';
                    valid = false;
                }

                if (!formData.time) {
                    newErrors.time = 'Please select a time';
                    valid = false;
                }
                break;
        }

        if (!valid) {
            setErrors(newErrors);
            return;
        }

        // Proceed to next step if validation passes
        setCurrentStep(currentStep + 1);

        // Reset readyToSubmit when moving to the review step
        if (currentStep === 3) {
            setReadyToSubmit(false);
        }
    };

    // Previous step handler
    const goToPreviousStep = () => {
        setCurrentStep(currentStep - 1);
        if (currentStep === 4) {
            setReadyToSubmit(false);
        }
    };

    // Check if current step is valid
    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.name.trim() !== '' &&
                    formData.phone.trim() !== '' &&
                    validatePhone(formData.phone) &&
                    formData.email.trim() !== '' &&
                    validateEmail(formData.email);
            case 2:
                return formData.mainService !== '' && formData.subService !== '';
            case 3:
                return formData.date !== null && formData.time !== '';
            case 4:
                // Notes are optional, so this step is always valid
                return true;
            default:
                return true;
        }
    };

    // Return to home page
    const goToHomePage = () => {
        // In a real app, this would redirect to the homepage
        window.location.href = "/";

        // For this demo, we'll just reset the form
        setIsSubmitted(false);
        setCurrentStep(1);
        setFormData({
            name: '',
            phone: '',
            email: '',
            mainService: '',
            subService: '',
            date: null,
            time: '',
            notes: ''
        });
        setShowWhatsappOption(false);
        setWhatsappSent(false);
        setReadyToSubmit(false);
    };

    // Animation variants
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20">
            <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center bg-white rounded-2xl shadow-xl p-10"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheck className="text-green-500 text-3xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Your appointment has been scheduled for {formData.date?.toDateString()} at {formData.time}
                            </p>
                            <p className="text-gray-500 mb-8">
                                We will reach out to you on <span className='font-bold'>{formData.phone}</span>
                            </p>

                            {showWhatsappOption && !whatsappSent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-8 p-4 bg-green-50 rounded-lg border border-green-100"
                                >
                                    <div className="flex items-center justify-center mb-3">
                                        <FaExclamationTriangle className="text-yellow-500 mr-2" />
                                        <p className="text-sm font-medium text-gray-700">
                                            NB: Form booking may be delayed. Send via WhatsApp for immediate confirmation.
                                        </p>
                                    </div>
                                    <button
                                        className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                        onClick={sendViaWhatsApp}
                                        disabled={sendingWhatsapp}
                                    >
                                        {sendingWhatsapp ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <FaWhatsapp className="mr-2 text-3xl" />
                                                Send Appointment via WhatsApp
                                            </span>
                                        )}
                                    </button>
                                </motion.div>
                            )}

                            {whatsappSent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-8 p-4 bg-green-50 rounded-lg border border-green-100"
                                >
                                    <div className="flex items-center text-green-600">
                                        <FaCheck className="mr-2" />
                                        <p className="font-medium">Appointment details sent via WhatsApp</p>
                                    </div>
                                </motion.div>
                            )}

                            <button
                                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors flex items-center mx-auto"
                                onClick={goToHomePage}
                            >
                                <FaHome className="mr-2" />
                                Back to Home Page
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={formVariants}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-primary to-secondary/80 py-6 px-8">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Book Your Appointment
                                </h2>
                                <p className="text-purple-100">
                                    Complete the form below to schedule your service
                                </p>

                                {/* Information banner about appointment booking */}
                                <div className="mt-3 p-2 bg-white bg-opacity-20 rounded-lg flex items-center">
                                    <FaInfoCircle className="text-white mr-2 flex-shrink-0" />
                                    <p className="text-white text-sm">
                                        Fill all required fields carefully to ensure your booking is processed correctly.
                                    </p>
                                </div>

                                {/* Progress Indicator */}
                                <div className="mt-6 flex items-center justify-between">
                                    {[1, 2, 3, 4].map((step) => (
                                        <div key={step} className="flex flex-col items-center">
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step
                                                    ? 'bg-white text-primary'
                                                    : 'bg-secondary bg-opacity-40 text-white'
                                                    }`}
                                            >
                                                {currentStep > step ? (
                                                    <FaCheck className="text-sm" />
                                                ) : (
                                                    <span>{step}</span>
                                                )}
                                            </div>
                                            <div className="text-xs text-white mt-1 font-medium">
                                                {step === 1 ? 'Personal' :
                                                    step === 2 ? 'Service' :
                                                        step === 3 ? 'Schedule' : 'Review'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8">
                                <AnimatePresence mode="wait">
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={containerVariants}
                                            className="space-y-6"
                                        >
                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaUser className="h-5 w-5 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        required
                                                        className={`pl-10 block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                                        value={formData.name}
                                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                                        placeholder="Comfort Awuah"
                                                    />
                                                </div>
                                                {errors.name && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                                )}
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <div className="flex items-center">
                                                            <img
                                                                src="https://flagcdn.com/w20/gh.png"
                                                                alt="Ghana flag"
                                                                className="h-4 mr-1"
                                                            />
                                                            <FaPhone className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        required
                                                        className={`pl-16 block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                                        value={formData.phone}
                                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                                        placeholder="0XX XXX XXXX"
                                                    />
                                                </div>
                                                {errors.phone ? (
                                                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                                                ) : (
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        Enter a 10-digit number starting with 0
                                                    </p>
                                                )}
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required
                                                        className={`pl-10 block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                                        placeholder="your.email@example.com"
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={containerVariants}
                                            className="space-y-6"
                                        >
                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="mainService" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Main Service <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="mainService"
                                                        required
                                                        className={`block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border appearance-none ${errors.mainService ? 'border-red-500' : 'border-gray-300'}`}
                                                        value={formData.mainService}
                                                        onChange={handleMainServiceChange}
                                                    >
                                                        <option value="">Select a service</option>
                                                        <option value="hair">Hair Styling</option>
                                                        <option value="nails">Nail Services</option>
                                                        <option value="pedicure">Pedicure</option>
                                                        <option value="frontal">Frontal Installation</option>
                                                        <option value="lashes">Lash Extensions</option>
                                                        <option value="makeup">Makeup Services</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <FaChevronDown className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                {errors.mainService && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.mainService}</p>
                                                )}
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="subService" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Specific Service <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="subService"
                                                        required
                                                        disabled={!formData.mainService}
                                                        className={`block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border appearance-none ${errors.subService ? 'border-red-500' : 'border-gray-300'}`}
                                                        value={formData.subService}
                                                        onChange={(e) => handleInputChange('subService', e.target.value)}
                                                    >
                                                        <option value="">{formData.mainService ? 'Select specific service' : 'Select main service first'}</option>
                                                        {subServiceOptions.map((service) => (
                                                            <option key={service} value={service}>{service}</option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <FaChevronDown className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                {errors.subService && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.subService}</p>
                                                )}
                                            </motion.div>


                                            {formData.mainService && formData.subService && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="bg-primary/20 p-4 rounded-lg"
                                                >
                                                    <div className="flex items-center">
                                                        <div className="bg-secondary p-3 rounded-full">
                                                            <FaCheck className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium text-gray-900">{formData.subService}</p>
                                                            <p className="text-sm text-gray-500 mt-1">Great choice! We are at your service.</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                        </motion.div>
                                    )}

                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={containerVariants}
                                            className="space-y-6"
                                        >
                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Appointment Date <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                                                    </div>
                                                    <DatePicker
                                                        selected={formData.date}
                                                        onChange={handleDateChange}
                                                        filterDate={isWeekday}
                                                        minDate={new Date()}
                                                        placeholderText="Select a date"
                                                        className={`pl-10 block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                                                        wrapperClassName="w-full"
                                                    />
                                                </div>
                                                {errors.date ? (
                                                    <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                                                ) : (
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        We are closed on Sundays
                                                    </p>
                                                )}
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Appointment Time <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaClock className="h-5 w-5 text-gray-400" />
                                                    </div>
                                                    <select
                                                        id="time"
                                                        required
                                                        disabled={!formData.date}
                                                        className={`pl-10 block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border appearance-none ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                                                        value={formData.time}
                                                        onChange={(e) => handleInputChange('time', e.target.value)}
                                                    >
                                                        <option value="">{formData.date ? 'Select a time' : 'Select a date first'}</option>
                                                        {availableTimes.map((time) => (
                                                            <option key={time} value={time}>{time}</option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <FaChevronDown className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                {errors.time && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.time}</p>
                                                )}
                                            </motion.div>

                                            {formData.date && formData.time && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="bg-green-50 p-4 rounded-lg border border-green-200"
                                                >
                                                    <div className="flex items-center">
                                                        <div className="bg-green-100 p-2 rounded-full">
                                                            <FaCalendarAlt className="h-5 w-5 text-green-600" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                {formData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                                            </p>
                                                            <p className="text-sm text-gray-500 mt-1">{formData.time}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}


                                        </motion.div>
                                    )}

                                    {currentStep === 4 && (
                                        <motion.div
                                            key="step4"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={containerVariants}
                                            className="space-y-6"
                                        >
                                            {/* Summary of booking */}
                                            <motion.div variants={itemVariants} className="p-4 bg-gray-50 rounded-lg">
                                                <h3 className="font-semibold text-gray-800 mb-3">Your Booking Summary</h3>
                                                <div className="grid grid-cols-2 gap-y-2 text-sm">
                                                    <div className="text-gray-600">Name:</div>
                                                    <div className="font-medium">{formData.name}</div>

                                                    <div className="text-gray-600">Phone:</div>
                                                    <div className="font-medium">{formData.phone}</div>

                                                    <div className="text-gray-600">Email:</div>
                                                    <div className="font-medium">{formData.email}</div>

                                                    <div className="text-gray-600">Service:</div>
                                                    <div className="font-medium">{formData.subService}</div>

                                                    <div className="text-gray-600">Date:</div>
                                                    <div className="font-medium">
                                                        {formData.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                                    </div>

                                                    <div className="text-gray-600">Time:</div>
                                                    <div className="font-medium">{formData.time}</div>
                                                </div>
                                            </motion.div>

                                            {/* Additional notes */}
                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Additional Notes <span className="text-gray-400">(optional)</span>
                                                </label>
                                                <textarea
                                                    id="notes"
                                                    rows={4}
                                                    className="block w-full rounded-lg shadow-sm focus:border-primary focus:ring-primary py-3 px-4 border border-gray-300"
                                                    value={formData.notes}
                                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                                    placeholder="Any additional information or special requests..."
                                                ></textarea>
                                            </motion.div>

                                            {/* Confirmation button */}
                                            <motion.div variants={itemVariants}>
                                                <button
                                                    type="button"
                                                    onClick={confirmBooking}
                                                    className={`w-full py-3 px-6 rounded-lg text-white font-medium ${readyToSubmit ? 'bg-green-500' : 'bg-primary'} hover:bg-opacity-90 transition-colors`}
                                                >
                                                    {readyToSubmit ? 'Confirmed! Click Submit Below' : 'Confirm Booking Details'}
                                                </button>
                                                {!readyToSubmit && (
                                                    <p className="mt-2 text-xs text-center text-gray-500">
                                                        Please review your booking details and confirm before submitting
                                                    </p>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="mt-8 flex justify-between">
                                    {currentStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={goToPreviousStep}
                                            className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {currentStep < 4 ? (
                                        <button
                                            type="button"
                                            onClick={goToNextStep}
                                            disabled={!isStepValid()}
                                            className={`ml-auto py-2 px-6 rounded-lg text-white font-medium ${isStepValid() ? 'bg-primary hover:bg-primary/80' : 'bg-gray-400 cursor-not-allowed'} transition-colors flex items-center`}
                                        >
                                            Next
                                            <FaAngleRight className="ml-1" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !readyToSubmit}
                                            className={`ml-auto py-2 px-6 rounded-lg text-white font-medium ${readyToSubmit ? 'bg-primary hover:bg-primary/80' : 'bg-gray-400 cursor-not-allowed'} transition-colors`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                'Submit Booking'
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BookingForm;
