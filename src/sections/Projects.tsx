"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import goCart from "@/assets/images/goCart.png";
import worldQuiz from "@/assets/images/worldQuiz.png"
import devEvent from "@/assets/images/devEvent.png";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import NextJsIcon from "@/assets/icons/nextjs.svg"
import ReactJsIcon from "@/assets/icons/react_logo.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import PostgresIcon from "@/assets/icons/postgresql.svg"
import Clerk from "@/assets/icons/clerk.svg"
import Neon from "@/assets/icons/neon.svg"
import VercelIcon from "@/assets/icons/vercel.svg"
import Render from "@/assets/icons/render.svg"
import Netlify from "@/assets/icons/netlify.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"
import codebox from "@/assets/images/codebox.png"
import GSAPICON from '@/assets/icons/GSAPIcon.svg'
import horizon from '@/assets/images/horizon.png'

const portfolioProjects = [
  {
    title: "Go Cart",
    year: "2026",
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Neondb", icon: Neon },
      { name: "Clerk", icon: Clerk },
    ],
    results: [
      { title: "Multi-Vendor e-commerce website." },
      { title: "Customer-Facing Storefront." },
      { title: "Vendor Dashboards." },
      { title: "Admin Panel." },
    ],
    hosts: [
      { name: "Vercel", role: "Fullstack", icon: VercelIcon },
    ],
    link: "https://gocart-seven-gold.vercel.app/",
    github: "https://github.com/Dhananjoy333/gocart",
    image: goCart,
  },
  {
    title: "World Quiz",
    year: "2025",
    techStack: [
      { name: "React.Js", icon: ReactJsIcon },
      { name: "Css3", icon: CssIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Neon", icon: Neon },
      { name: "Clerk", icon: Clerk },
    ],
    results: [
      { title: "Multiple quiz game modes." },
      { title: "Global leaderboard system." },
      { title: "User authentication with Clerk." },
      { title: "Personal high score tracking." },
    ],
    hosts: [
      { name: "Netlify", role: "Frontend", icon: Netlify },
      { name: "Render", role: "Backend", icon: Render },
    ],
    link: "https://world-quiz-nu.vercel.app/",
    github: "https://github.com/Dhananjoy333/world_quiz",
    image: worldQuiz,
  },
  {
    title: "Horizon",
    year: "2026",
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "GSAP", icon: GSAPICON },
    ],
    results: [
      { title: "Horizon is a visually immersive website focused on smooth animations, transitions, and interactive storytelling." },
      { title: "Animated Background, Scroll Trigger, Scroll Clip-path" },
      { title: "The project was primarily created to deepen understanding of GSAP and high-end frontend animation techniques." },
    ],
    hosts: [
      { name: "Vercel", role: "Frontend", icon: VercelIcon },
    ],
    link: "https://horizon-five-wine.vercel.app/",
    github: "https://github.com/Dhananjoy333/Horizon",
    image: horizon,
  },
  {
    title: "Code Box",
    year: "2026",
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Neon", icon: Neon },
      { name: "Clerk", icon: Clerk },
    ],
    results: [
      { title: "Modern e-learning platform with pixelated ui." },
      { title: "Multiple Courses and Chapter with each chapters having multiple exercises." },
      { title: "Interactive coding environment powered by Sandpack." },
      { title: "Clean user dashboard with progress accross courses like enrolled courses, exercises completed etc." },
      { title: "Auth and subscription implemented with clerk." }
    ],
    hosts: [
      { name: "Vercel", role: "Fullstack", icon: VercelIcon },
    ],
    link: "https://code-box-sooty.vercel.app/",
    github: "https://github.com/Dhananjoy333/CodeBox",
    image: codebox,
  },
];

// 1. Define Animation Variants for the "Waterfall" effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Time between each child (0.1s)
      delayChildren: 0.2,   // Wait before starting the sequence
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="pb-16 lg:py-24" id="projects">
      <div className="container">
        
        {/* 1. Wrap the Header in a motion.div using the same staggered logic */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Note: If SectionHeader allows you to pass variants inside, do that. 
              Otherwise, wrapping the whole component is the fastest way. */}
          <motion.div variants={itemVariants}>
            <SectionHeader
              eyebrow="Real-World Results"
              title="Featured Projects"
              description="See how I transformed concepts into engaging digital experiences."
            />
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              projectIndex={projectIndex} 
              totalProjects={portfolioProjects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, projectIndex, totalProjects, scrollYProgress }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tilt & Scale Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const targetScale = 1 - ((totalProjects - projectIndex) * 0.05);
  const scale = useTransform(scrollYProgress, [projectIndex / totalProjects, 1], [1, targetScale]);

  return (
    <div className="sticky top-0" style={{ paddingTop: `${projectIndex * 40}px` }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ scale, rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ ease: "easeOut" }}
        className="perspective-1000" 
      >
        <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden relative group">
          
          {/* 2. Apply containerVariants to the Grid */}
          <motion.div 
            className="lg:grid lg:grid-cols-2 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            <div className="lg:pb-16 [transform:translateZ(50px)]">
              {/* 3. Wrap each section in motion and apply itemVariants */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech: any) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <tech.icon className="size-5" />
                      <span className="text-xs font-semibold text-white/70">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <span className="text-white/20">&bull;</span>
                <span className="text-sm font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase tracking-widest">
                  {project.year}
                </span>
              </motion.div>
              
              <motion.h3 variants={itemVariants} className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                {project.title}
              </motion.h3>
              
              <motion.hr variants={itemVariants} className="border-t-2 border-white/5 mt-4 md:mt-5" />
              
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result: any, index: number) => (
                  <motion.li key={index} variants={itemVariants} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6 text-emerald-300/50" />
                    <span>{result.title}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mt-8">
                <a href={project.link} target="_blank" className="w-full md:w-auto">
                  <button className="bg-white text-gray-950 h-12 w-full md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-all active:scale-95">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
                <a href={project.github} target="_blank" className="w-full md:w-auto">
                  <button className="border border-white/20 text-white h-12 w-full md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                    <GithubIcon className="size-5" />
                    <span>Github Repo</span>
                  </button>
                </a>
              </motion.div>
            </div>

            {/* Image side also follows the stagger */}
            <motion.div variants={itemVariants} className="relative [transform:translateZ(80px)]">
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};