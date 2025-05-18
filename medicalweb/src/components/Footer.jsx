
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerAnimation}
        >
          {/* About Section */}
          <motion.div variants={itemAnimation}>
            <div className="flex items-center space-x-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 3v12h5c.023-3.681-.184-7.406-5-12zm0 12v6h1v-3"></path>
              </svg>
              <span className="text-xl font-bold text-primary">MediCare</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality healthcare services with a focus on patient comfort and advanced medical treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemAnimation}>
            <p className="text-lg font-semibold mb-6">Quick Links</p>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-primary transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-400 hover:text-primary transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemAnimation}>
            <p className="text-lg font-semibold mb-6">Our Services</p>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">General Consultation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Cardiology</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Neurology</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Pediatrics</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Orthopedics</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Laboratory Services</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemAnimation}>
            <p className="text-lg font-semibold mb-6">Contact Information</p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">contact@medicare.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
