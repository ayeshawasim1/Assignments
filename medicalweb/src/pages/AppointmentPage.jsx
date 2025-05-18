
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const AppointmentPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    doctor: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Appointment Scheduled!",
        description: "We've received your appointment request. You'll receive a confirmation email shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        doctor: '',
        reason: '',
      });
      setIsSubmitting(false);
      setStep(1);
    }, 1500);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const departments = [
    'Cardiology',
    'Neurology',
    'General Medicine',
    'Pediatrics',
    'Orthopedics',
    'Ophthalmology',
  ];

  const doctors = {
    'Cardiology': ['Dr. Sarah Johnson', 'Dr. Jennifer Martinez'],
    'Neurology': ['Dr. Michael Chen', 'Dr. David Patel'],
    'General Medicine': ['Dr. Emily Rodriguez'],
    'Pediatrics': ['Dr. James Wilson'],
    'Orthopedics': ['Dr. Lisa Thompson'],
    'Ophthalmology': ['Dr. Robert Kim'],
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
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
              Book an <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your visit with our experienced medical professionals.
            </p>
            <Separator className="max-w-md mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-primary text-white">
                <h2 className="text-2xl font-bold">Book Your Appointment</h2>
                <p className="text-white/80">Fill out the form below to schedule your visit</p>
              </div>

              <div className="p-8">
                {/* Progress Steps */}
                <div className="flex justify-between mb-8">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                      1
                    </div>
                    <span className="text-sm mt-2">Personal Info</span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className={`h-1 w-full ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                      2
                    </div>
                    <span className="text-sm mt-2">Appointment Details</span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className={`h-1 w-full ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                      3
                    </div>
                    <span className="text-sm mt-2">Confirmation</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="appointment-form">
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="John Doe" 
                            required 
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={formData.email} 
                              onChange={handleChange} 
                              placeholder="john@example.com" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="+1 (555) 123-4567" 
                              required 
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button type="button" onClick={nextStep}>
                          Next Step
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Appointment Details */}
                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Preferred Date</Label>
                            <div className="flex">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                              </span>
                              <Input 
                                id="date" 
                                name="date" 
                                type="date" 
                                value={formData.date} 
                                onChange={handleChange} 
                                className="rounded-l-none" 
                                required 
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Preferred Time</Label>
                            <Select 
                              value={formData.time} 
                              onValueChange={(value) => handleSelectChange('time', value)}
                            >
                              <SelectTrigger id="time">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="department">Department</Label>
                            <Select 
                              value={formData.department} 
                              onValueChange={(value) => {
                                handleSelectChange('department', value);
                                handleSelectChange('doctor', ''); // Reset doctor when department changes
                              }}
                            >
                              <SelectTrigger id="department">
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                {departments.map((dept) => (
                                  <SelectItem key={dept} value={dept}>
                                    {dept}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="doctor">Doctor</Label>
                            <Select 
                              value={formData.doctor} 
                              onValueChange={(value) => handleSelectChange('doctor', value)}
                              disabled={!formData.department}
                            >
                              <SelectTrigger id="doctor">
                                <SelectValue placeholder={formData.department ? "Select doctor" : "Select department first"} />
                              </SelectTrigger>
                              <SelectContent>
                                {formData.department && doctors[formData.department]?.map((doctor) => (
                                  <SelectItem key={doctor} value={doctor}>
                                    {doctor}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reason">Reason for Visit</Label>
                          <Textarea 
                            id="reason" 
                            name="reason" 
                            value={formData.reason} 
                            onChange={handleChange} 
                            placeholder="Please briefly describe your symptoms or reason for the appointment" 
                            rows={4} 
                            required 
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Previous Step
                        </Button>
                        <Button type="button" onClick={nextStep}>
                          Next Step
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold mb-4">Confirm Your Appointment</h3>
                      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">{formData.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email Address</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Department</p>
                            <p className="font-medium">{formData.department}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Doctor</p>
                            <p className="font-medium">{formData.doctor}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date & Time</p>
                            <p className="font-medium">{formData.date} at {formData.time}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Reason for Visit</p>
                          <p className="font-medium">{formData.reason}</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Previous Step
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <CheckCircle className="mr-2 h-5 w-5" /> Confirm Appointment
                            </span>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">Appointment Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Please arrive 15 minutes before your scheduled appointment time.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Bring your insurance card and photo ID to your appointment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>If you need to cancel, please do so at least 24 hours in advance.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions or need assistance with scheduling your appointment, please don't hesitate to contact us.
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> appointments@medicare.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
