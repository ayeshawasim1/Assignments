import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const AboutHero = ({ titlePart1, titlePart2, subtitle }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {titlePart1} <span className="text-primary">{titlePart2}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {subtitle}
          </p>
          <Separator className="max-w-md mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;