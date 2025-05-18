import React from 'react';
import { motion } from 'framer-motion';

const OurStory = ({ storyImageUrl, storyImageAlt }) => {
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              MediCare was founded in 2005 with a vision to provide accessible, high-quality healthcare to our community. What began as a small clinic has grown into a comprehensive medical center offering a wide range of services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, we have expanded our facilities and services to meet the evolving healthcare needs of our patients. Our growth has been guided by our commitment to excellence and our patient-centered approach.
            </p>
            <p className="text-lg text-gray-600">
              Today, MediCare is recognized as a leading healthcare provider, known for our exceptional medical care, state-of-the-art facilities, and compassionate staff. We continue to innovate and improve, always with our patients' wellbeing as our top priority.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={fadeIn}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/50 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img alt={storyImageAlt} className="w-full h-auto" src={storyImageUrl} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;