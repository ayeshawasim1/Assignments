
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Stethoscope, Baby, Bone, Eye } from 'lucide-react';

const DoctorsPage = () => {
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

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      education: 'MD, Harvard Medical School',
      experience: '15+ years of experience',
      icon: <Heart className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      education: 'MD, Johns Hopkins University',
      experience: '12+ years of experience',
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'General Medicine',
      education: 'MD, Stanford University',
      experience: '10+ years of experience',
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Pediatrics',
      education: 'MD, Yale University',
      experience: '14+ years of experience',
      icon: <Baby className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Orthopedics',
      education: 'MD, University of Pennsylvania',
      experience: '18+ years of experience',
      icon: <Bone className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. Robert Kim',
      specialty: 'Ophthalmology',
      education: 'MD, Columbia University',
      experience: '16+ years of experience',
      icon: <Eye className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. Jennifer Martinez',
      specialty: 'Cardiology',
      education: 'MD, Duke University',
      experience: '11+ years of experience',
      icon: <Heart className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Dr. David Patel',
      specialty: 'Neurology',
      education: 'MD, University of California',
      experience: '13+ years of experience',
      icon: <Brain className="h-6 w-6 text-primary" />,
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
              Our <span className="text-primary">Doctors</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet our team of experienced medical professionals dedicated to providing you with exceptional care.
            </p>
            <Separator className="max-w-md mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {doctors.map((doctor, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="doctor-card bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="h-64 bg-gray-200 relative">
                  <img  alt={`Dr. ${doctor.name}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      {doctor.icon}
                    </div>
                    <span className="text-primary font-medium">{doctor.specialty}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600 mb-1">{doctor.education}</p>
                  <p className="text-gray-600">{doctor.experience}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Doctors Section */}
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
              Why Choose Our <span className="text-primary">Doctors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our medical professionals are committed to providing you with the highest quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Experienced Specialists</h3>
              <p className="text-gray-600">
                Our doctors are highly trained specialists with years of experience in their respective fields. They stay up-to-date with the latest medical advancements to provide you with the best care possible.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Patient-Centered Approach</h3>
              <p className="text-gray-600">
                Our doctors take the time to listen to your concerns and understand your unique needs. They work with you to develop personalized treatment plans that address your specific health goals.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Collaborative Care</h3>
              <p className="text-gray-600">
                Our doctors work together as a team, consulting with each other to provide comprehensive care. This collaborative approach ensures that you receive the most effective treatment for your condition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-2/3 mb-8 md:mb-0 md:pr-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Interested in <span className="text-primary">Joining Our Team?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're always looking for talented and passionate medical professionals to join our team. If you're committed to providing exceptional patient care and want to be part of a collaborative and supportive work environment, we'd love to hear from you.
                </p>
                <p className="text-lg text-gray-600">
                  Send your resume to <span className="text-primary font-medium">careers@medicare.com</span> to learn more about current opportunities.
                </p>
              </motion.div>
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img  alt="Medical team collaboration" className="w-full h-auto" src="https://images.unsplash.com/photo-1516841273335-e39b37888115" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
