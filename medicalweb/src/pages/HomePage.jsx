
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Heart, Activity, Brain, Stethoscope, Users, Star, ArrowRight } from 'lucide-react';

const HomePage = () => {
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
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      icon: <Heart className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Neurology',
      description: 'Expert care for conditions affecting the brain, spine, and nervous system.',
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages.',
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Diagnostics',
      description: 'State-of-the-art diagnostic services for accurate health assessment.',
      icon: <Activity className="h-10 w-10 text-primary" />,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'The care I received at MediCare was exceptional. The doctors were attentive and the staff was friendly and professional.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'I was impressed by how quickly I was able to get an appointment. The online booking system is very convenient.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      content: 'The facilities are modern and clean. I felt comfortable throughout my entire visit. Highly recommend!',
      avatar: 'ER',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Your Health Is Our <span className="text-primary">Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience exceptional healthcare with our team of expert doctors and state-of-the-art facilities. We're committed to providing personalized care for you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/50 rounded-full z-0"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img  alt="Doctor with patient" className="w-full h-auto" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Doctors</h3>
                <p className="text-gray-600">Our team of experienced specialists provides the highest quality care.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">Book appointments online or by phone at your convenience.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated team is available around the clock for emergencies.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
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
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200/50 rounded-full z-0"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img  alt="Modern medical facility" className="w-full h-auto" src="https://images.unsplash.com/photo-1565711111920-4a502b43a54e" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 md:pl-10"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Providing Quality Healthcare <span className="text-primary">Since 2005</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                MediCare is dedicated to providing exceptional healthcare services with a focus on patient comfort and advanced medical treatments. Our state-of-the-art facilities and experienced medical professionals ensure that you receive the best care possible.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in a patient-centered approach, taking the time to understand your unique needs and developing personalized treatment plans. Our commitment to excellence has made us a trusted healthcare provider in the community.
              </p>
              <Button asChild size="lg" className="text-base">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of medical services to meet your healthcare needs, all delivered with the highest standards of quality and care.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="service-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-base">
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary">Patients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience with MediCare.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="testimonial-card bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" fill="#facc15" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to prioritize your health?</h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Schedule an appointment today and take the first step towards better health. Our team is ready to provide you with exceptional care.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="text-primary text-base">
              <Link to="/appointment">Book Your Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
