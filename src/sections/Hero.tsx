"use client";
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import { HeroUiSkills } from "@/components/HeroUiSkills";
import { motion } from "framer-motion";

// 1. Define the orchestration rules
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each element appearing
      delayChildren: 0.3,   // Initial wait before the first element pops in
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export const HeroSection = () => {
  return(
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage?.src})`
        }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-8 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-5 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
              <div className='size-2 rounded-full bg-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-10 text-emerald-300/20'/>
        </HeroOrbit>       
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
              <StarIcon className='size-12 text-emerald-300'/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
              <StarIcon className='size-8 text-emerald-300'/>
        </HeroOrbit>        
        <HeroOrbit size={620} rotation={-5} shouldOrbit orbitDuration='42s'>
              <div className='size-2 rounded-full bg-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
              <SparkleIcon className='size-14 text-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
              <div className='size-3 rounded-full bg-emerald-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
              <StarIcon className='size-28 text-emerald-300'/>
        </HeroOrbit>              
      </div>
      <div className="container">
      {/* 2. Wrap the entire content in one motion.div */}
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        
        {/* 1. Status & Image */}
        <motion.div variants={heroItemVariants} className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt="person peeking" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping'></div>
            </div>
            <div className='text-sm font-semibold'>Available for new projects</div>
          </div>
        </motion.div>

        <div className='max-w-lg mx-auto'>
          {/* 2. Main Title */}
          <motion.h1 variants={heroItemVariants} className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Hey, I&#39;m a developer Dhananjoy
          </motion.h1>

          {/* 3. Skills */}
          <motion.h1 variants={heroItemVariants} className='font-serif text-3xl md:text-3xl text-center mt-8 tracking-wide'>
            <HeroUiSkills/>
          </motion.h1>

          {/* 4. Description */}
          <motion.p variants={heroItemVariants} className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project
          </motion.p>
        </div>

        {/* 5. CTA Buttons */}
        <motion.div variants={heroItemVariants} className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <a href="#projects">
            <button className='cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors'>
              <span className='font-semibold'>Explore My Work</span>
              <ArrowDown className="size-4"/>
            </button>
          </a>
          <a href="#contact">
            <button className='cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-200 transition-all active:scale-95'>
              <span>👋</span>
              <span className='font-semibold'>Let&apos;s Connect</span>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};
