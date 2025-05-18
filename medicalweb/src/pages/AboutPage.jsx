import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import Eye from '@/components/Eye';
import UserPlus from '@/components/UserPlus';

import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import MissionVision from '@/components/about/MissionVision';
import OurValues from '@/components/about/OurValues';
import TeamMembers from '@/components/about/TeamMembers';
import Stats from '@/components/about/Stats.jsx';

import { Heart, Users, Award, Target, Smile } from 'lucide-react';

const AboutPage = () => {
  const teamMembersData = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      bio: 'Dr. Johnson has over 15 years of experience in internal medicine and healthcare management.',
      avatar: 'SJ',
      imageUrl: 'https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      bio: 'Specializing in cardiovascular health, Dr. Chen is dedicated to heart disease prevention and treatment.',
      avatar: 'MC',
      imageUrl: 'https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Neurologist',
      bio: 'With expertise in neurological disorders, Dr. Rodriguez provides comprehensive care for brain and nervous system conditions.',
      avatar: 'ER',
      imageUrl: 'https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Pediatrician',
      bio: 'Dr. Wilson is passionate about children\'s health and has been caring for young patients for over a decade.',
      avatar: 'JW',
      imageUrl: 'https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0',
    },
  ];

  const valuesData = [
    {
      title: 'Patient-Centered Care',
      description: 'We put our patients first, focusing on individual needs and preferences.',
      icon: <Heart className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of healthcare delivery.',
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Compassion',
      description: 'We treat every patient with kindness, empathy, and respect.',
      icon: <Smile className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to improve patient care.',
      icon: <Target className="h-8 w-8 text-primary" />,
    },
  ];

  const statsData = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "10,000+",
      label: "Patients Served",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "20+",
      label: "Years of Excellence",
    },
    {
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      value: "30+",
      label: "Specialist Doctors",
    },
  ];


  return (
    <div className="pt-24 pb-16">
      <AboutHero 
        titlePart1="About"
        titlePart2="MediCare"
        subtitle="Providing exceptional healthcare services with a focus on patient comfort and advanced medical treatments since 2005."
      />
      <OurStory 
        storyImageUrl="https://images.unsplash.com/photo-1579684288452-b334934f845f"
        storyImageAlt="Medical team at MediCare"
      />
      <MissionVision 
        missionIcon={<Target className="h-10 w-10 text-primary" />}
        visionIcon={<Eye className="h-10 w-10 text-primary" />}
      />
      <OurValues values={valuesData} />
      <TeamMembers teamMembers={teamMembersData} />
      <Stats stats={statsData} />
    </div>
  );
};

export default AboutPage;