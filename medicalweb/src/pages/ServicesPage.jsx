
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Stethoscope, Activity, Baby, Bone, Microscope, Pill, Eye, Outdent as Tooth } from 'lucide-react';

const ServicesPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options for heart conditions, including ECGs, echocardiograms, stress tests, and cardiac rehabilitation.',
      icon: <Heart className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Neurology',
      description: 'Expert care for conditions affecting the brain, spine, and nervous system, including headaches, seizures, stroke, multiple sclerosis, and Parkinson\'s disease.',
      icon: <Brain className="h-12 w-12 text-primary" />,
    },
    {
      title: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages, including routine check-ups, preventive care, health screenings, and management of chronic conditions.',
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Diagnostics',
      description: 'State-of-the-art diagnostic services for accurate health assessment, including laboratory tests, imaging studies, and specialized diagnostic procedures.',
      icon: <Activity className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents, including well-child visits, immunizations, developmental assessments, and treatment of childhood illnesses.',
      icon: <Baby className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Orthopedics',
      description: 'Treatment for musculoskeletal conditions affecting bones, joints, muscles, ligaments, and tendons, including fractures, sports injuries, arthritis, and joint replacements.',
      icon: <Bone className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Laboratory Services',
      description: 'Comprehensive laboratory testing for diagnosis and monitoring of health conditions, including blood tests, urinalysis, microbiology, and pathology services.',
      icon: <Microscope className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Pharmacy',
      description: 'Convenient on-site pharmacy services, including prescription medications, over-the-counter products, medication counseling, and medication management programs.',
      icon: <Pill className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Ophthalmology',
      description: 'Comprehensive eye care services, including routine eye exams, vision correction, treatment of eye diseases, and surgical procedures for various eye conditions.',
      icon: <Eye className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Dental Care',
      description: 'Complete dental services for all ages, including preventive care, cleanings, fillings, extractions, root canals, crowns, bridges, and cosmetic dentistry.',
      icon: <Tooth className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We offer a comprehensive range of medical services to meet all your healthcare needs.
            </p>
            <Separator className="max-w-md mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="service-card bg-white rounded-xl p-8 shadow-md"
              >
                <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are equipped with state-of-the-art medical facilities to provide you with the best care possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img  alt="Modern medical equipment" className="w-full h-auto" src="https://images.unsplash.com/photo-1693264882139-6a308957c9ae" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">Advanced Diagnostic Equipment</h3>
              <p className="text-gray-600">
                Our facility is equipped with the latest diagnostic technology to ensure accurate and timely diagnosis of health conditions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img  alt="Comfortable patient rooms" className="w-full h-auto" src="https://images.unsplash.com/photo-1648224395352-812a6ce3431c" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">Comfortable Patient Rooms</h3>
              <p className="text-gray-600">
                Our patient rooms are designed with comfort in mind, providing a healing environment for recovery.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img  alt="Modern laboratory" className="w-full h-auto" src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">State-of-the-Art Laboratory</h3>
              <p className="text-gray-600">
                Our laboratory is equipped with advanced technology for accurate and efficient testing and analysis.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img  alt="Pharmacy services" className="w-full h-auto" src="https://images.unsplash.com/photo-1576091358783-a212ec293ff3" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">On-Site Pharmacy</h3>
              <p className="text-gray-600">
                Our pharmacy provides convenient access to medications and expert advice from our pharmacists.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've designed our healthcare process to be simple, efficient, and focused on your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Schedule an Appointment</h3>
              <p className="text-gray-600">
                Book an appointment online or by phone at a time that's convenient for you.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-primary/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultation & Diagnosis</h3>
              <p className="text-gray-600">
                Meet with our healthcare professionals who will assess your condition and provide a diagnosis.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-primary/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Treatment & Follow-up</h3>
              <p className="text-gray-600">
                Receive personalized treatment and ongoing care to support your recovery and health.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
