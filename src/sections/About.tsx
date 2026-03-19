"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import profilePic from "@/assets/images/photo.png";
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { Cardheader } from "@/components/Cardheader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import cv_bg from "@/assets/images/cv_bg.png"
import cv from "@/assets/images/cv.png"
import NextJsIcon from "@/assets/icons/nextjs.svg"
import ReactJsIcon from "@/assets/icons/react_logo.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import PostgresIcon from "@/assets/icons/postgresql.svg"
import MongodbIcon from "@/assets/icons/mongodb.svg"
import Clerk from "@/assets/icons/clerk.svg"
import Neon from "@/assets/icons/neon.svg"
import VercelIcon from "@/assets/icons/vercel.svg"
import Render from "@/assets/icons/render.svg"
import Netlify from "@/assets/icons/netlify.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"

const toolboxItems = [
  {
    title: 'Tailwind CSS',
    iconsType: TailwindIcon,
  },
  {
    title: 'PostgreSQL',
    iconsType: PostgresIcon,
  },
  {
    title: 'MongoDB',
    iconsType: MongodbIcon,
  },
  {
    title: 'ReactJS',
    iconsType: ReactJsIcon,
  },
  {
    title: 'NextJS',
    iconsType: NextJsIcon,
  },
  {
    title: 'Github',
    iconsType: GithubIcon,
  },
  {
    title: 'Clerk',
    iconsType: Clerk,
  },
  {
    title: 'NeonDB',
    iconsType: Neon,
  },
  {
    title: 'Netlify',
    iconsType: Netlify,
  },
  {
    title: 'Render',
    iconsType: Render,
  },
  {
    title: 'Vercel',
    iconsType: VercelIcon,
  },
  {
    title: 'CSS 3',
    iconsType: CssIcon,
  }
]

const hobbies = [
  {
    title: 'Movies',
    emoji: '🍿',
    left: '35%',
    top: '40%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%'
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Reading',
    emoji: '📔',
    left: '45%',
    top: '70%'
  },
]

export const AboutSection = () => {

  const constraintRef = useRef(null);

  return (
  <div className="py-20 lg:py-28 scroll-mt-24" id="about">
    <div className="container">
      <SectionHeader 
      eyebrow="About Me"
      title="A Glimpse into My World"
      description="Learn more about who I am, What I do, and What inspires me."/>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <Cardheader title="My Profile" />
            <div className="w-48 mx-auto mt-2 md:-mt-14">
              <Image src={profilePic} alt="Book cover" className=""/>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <Cardheader title="My Teck Stack" description="Here are the technologies and tools I use to craft exceptional digital experiences."
            className=""/>
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolboxItems} className="mt-6 "
            itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
          </Card>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <Cardheader title="Beyond the Code" description="Explore my interest and hobbies beyond digital realm."
            className="px-6 py-6"/>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div 
                    key={hobby.title} 
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top:hobby.top,
                    }}
                    drag
                    dragConstraints = {constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 ">           
            <Image src={cv_bg} alt="map" className="h-full w-full object-left-top"/>
            <h2 className="font-serif text-lg absolute top-4 left-1/2 -translate-x-1/2 text-white bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
              Download CV
            </h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 \"> 
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
              <a href="" download className="cursor-pointer relative z-30">
                <Image src={cv} alt="cv logo" className="size-20"/>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
  );
};
