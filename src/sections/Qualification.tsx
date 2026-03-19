"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolLogo from "@/assets/images/rps.png";
import HighSchoolLogo from "@/assets/images/HS.png";
import CollegeLogo from "@/assets/images/nit.png";
import CourseLogo from "@/assets/images/iit.png"
import TimelineItem from '@/components/TimelineItem';

const MyJourney = () => {
  return (
    <section className="py-24 bg-gray-900 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-white tracking-wider">
          My <span className="text-emerald-300">Journey</span>
        </h2>

        <VerticalTimeline 
          lineColor="rgba(110, 231, 183, 0.2)" // Emerald-300 with opacity
          animate={true}
        >
          {/* 10th Standard */}
          <TimelineItem 
            date="2016"
            title="10th Standard"
            subtitle="The Reality Public School"
            score="91.4%"
            description="Completed my CBSE Boards exam on subjects Maths, English, Science, Social Science, Hindi, Computer"
            Icon={SchoolLogo}
          />

          {/* 12th Standard */}
          <TimelineItem 
            date="2018"
            title="12th Standard"
            subtitle=" St. Francis D' Assisi Senior Secondary School, Guwahati"
            score="79%"
            description="Completed higher secondary with Science stream specializing in Maths, Physics, Chemistry (MPC)"
            Icon={HighSchoolLogo}
          />

          {/* Graduation */}
          <TimelineItem 
            date="2024"
            title="Graduation"
            subtitle="National Institute of Technology Nagaland"
            score="8.3 CGPA"
            description="Graduated with a degree in Mechanical Engineeing"
            Icon={CollegeLogo}
            isSpecial={true}
          />

          {/* Course */}
          <TimelineItem 
            date="2026"
            title="Course: Data Science and Machine Learning"
            subtitle="Indian Instiute of Technology Guwahati"
            score="70%"
            description="Currently enrolled in a course learning about working of AI/ML architecture like CNN, GAN, Transformers etc"
            Icon={CourseLogo}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default MyJourney;