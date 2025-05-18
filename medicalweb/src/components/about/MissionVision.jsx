import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = ({ missionIcon, visionIcon }) => {
  return (
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
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by our core values, we strive to make a positive impact on the health and wellbeing of our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
              {missionIcon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To provide exceptional healthcare services that improve the health and wellbeing of our patients and community. We are committed to delivering personalized care with compassion, integrity, and excellence.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
              {visionIcon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To be the healthcare provider of choice, recognized for our clinical excellence, patient-centered approach, and innovative healthcare solutions. We aspire to create healthier communities through accessible, high-quality care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;