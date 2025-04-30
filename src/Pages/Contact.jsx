import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import BookingForm from "./BookingForm"

// Custom salon map icon
const salonIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3703/3703692.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    crossOrigin: "anonymous",
});

const Contact = () => {
    // Coordinates for Shalom Spot, Lashibi
    const salonLocation = [5.6351, -0.1203];
    const googleMapsLink = "https://www.google.com/maps/place/Flawless+Beauty+Saloon/@5.648105,-0.0620988,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf8100715c62ef:0x7529af67297829bd!8m2!3d5.648105!4d-0.0620988!16s%2Fg%2F11lzq__123?entry=ttu";

    return (
        <div className="min-h-screen pt-[90px] px-4 md:px-10 pb-16 bg-gray-50 text-gray-800">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12 mt-4">
                <h2 className="text-3xl sm:text-4xl font-parisienne text-primary mb-2">
                    Contact Flawless Beauty
                </h2>
                <h1 className="text-xl lg:text-4xl md:text-3xl font-bold font-playfair text-secondary mb-4">
                    Visit Our Salon
                </h1>
                <p className="text-lg max-w-2xl mx-auto font-poppins text-gray-600">
                    Reach out to us through any of our contact channels or visit our luxurious salon in Lashibi.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    {
                        icon: <FaPhone size={16} className="text-white" />,
                        title: "Call Us",
                        info: "+233 241 439 492",
                        link: "tel:+233241439492",
                    },
                    {
                        icon: <FaMapMarkerAlt size={16} className="text-white" />,
                        title: "Visit Us",
                        info: "Flawless Beauty Salon",
                        link: googleMapsLink,
                    },
                    {
                        icon: <FaEnvelope size={16} className="text-white" />,
                        title: "Email Us",
                        info: "info@flawlessbeauty.com",
                        link: "mailto:info@flawlessbeauty.com",
                    },
                ].map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        className="flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary/70 text-white p-2 rounded-xl shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:-translate-y-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-white/20 p-4 rounded-full mb-4">
                            {contact.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                        <p className="text-sm text-center">{contact.info}</p>
                    </a>
                ))}
            </div>

            {/* Salon Information */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
                    <div className="flex items-center mb-6">
                        <FaClock className="mr-4 text-2xl text-primary" />
                        <h3 className="text-xl font-semibold text-gray-800 font-playfair">Working Hours</h3>
                    </div>
                    <div className="pl-4 space-y-4">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium">Monday - Friday:</span>
                            <span className="font-medium">8:30 AM – 8:00 PM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium">Saturday:</span>
                            <span className="font-medium">9:00 AM – 8:00 PM</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="font-medium">Sunday:</span>
                            <span className="font-medium">1:00 PM – 7:30 PM</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 italic">*Emergency appointments available upon request</p>
                    </div>
                </div>

                {/* Booking Form */}
                <BookingForm />

                <div className="bg-gray-200 text-secondary p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 font-playfair">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://facebook.com/flawlessbeauty"
                            className="bg-secondary text-primary p-4 rounded-full hover:bg-white/30 transition transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://instagram.com/flawlessbeauty"
                            className="bg-secondary text-primary p-4 rounded-full hover:bg-white/30 transition transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://wa.me/233241439492"
                            className="bg-secondary text-primary p-4 rounded-full hover:bg-white/30 transition transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                    <p className="mt-6 text-center text-primary">
                        Follow us for special offers and beauty tips
                    </p>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-secondary font-playfair">
                        Our Location
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visit us at Shalom Spot, Lashibi for a luxurious beauty experience
                    </p>
                </div>
                <div className="h-[400px] w-full rounded-xl overflow-hidden border-4 border-white">
                    <MapContainer
                        center={salonLocation}
                        zoom={15}
                        style={{ height: "100%", width: "100%" }}
                        className="z-0"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        />
                        <Marker position={salonLocation} icon={salonIcon}>
                            <Popup className="text-center">
                                <div className="font-bold text-primary">Flawless Beauty Salon</div>
                                <div className="text-sm">Shalom Spot, Lashibi</div>
                                <div className="text-sm font-medium">024 143 9492</div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Contact;