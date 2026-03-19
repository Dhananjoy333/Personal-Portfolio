import goCart from "@/assets/images/goCart.png";
import worldQuiz from "@/assets/images/worldQuiz.png"
import devEvent from "@/assets/images/devEvent.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
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

const portfolioProjects = [
  {
    title: "Go Cart",
    year: "2022",
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Neondb", icon: Neon },
      { name: "Clerk", icon: Clerk },
    ],
    results: [
      { title: "Multi-Vendor e-commerce website" },
      { title: "Customer-Facing Storefront" },
      { title: "Vendor Dashboards" },
      { title: "Admin Panel" },
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
    year: "2021",
    techStack: [
      { name: "React.Js", icon: ReactJsIcon },
      { name: "Css3", icon: CssIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Neon", icon: Neon },
      { name: "Clerk", icon: Clerk },
    ],
    results: [
      { title: "Multiple quiz game modes" },
      { title: "Global leaderboard system" },
      { title: "User authentication with Clerk" },
      { title: "Personal high score tracking" },
    ],
    hosts: [
      { name: "Netlify", role: "Frontend", icon: Netlify },
      { name: "Render", role: "Backend", icon: Render },
    ],
    link: "https://worldquiiz.netlify.app/",
    github: "https://github.com/Dhananjoy333/World-Quiz",
    image: worldQuiz,
  },
  {
    title: "Dev Events",
    year: "2021",
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "MongoDB", icon: MongodbIcon },
    ],
    results: [
      { title: "Discover developer events happening near you" },
      { title: "Events are tailored based on your city for better relevance." },
      { title: "Users can easily apply/register for events directly from the platform" },
    ],
    hosts: [
      { name: "Vercel", role: "Fullstack", icon: VercelIcon },
    ],
    link: "https://dev-events-pink.vercel.app/",
    github: "https://github.com/Dhananjoy333/Dev_Events",
    image: devEvent,
  },
];

export const ProjectsSection = () => {
  return(
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader 
        eyebrow="Real-World Results" 
        title="Featured Projects"
        description="See how I transformed concepts into engaging digital experiences."/>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project , projectIndex) => (
            <Card
             key={project.title} 
             className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
             style={{
              top: `calc(64px + ${projectIndex * 40}px)`
             }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech) => (
                        <div 
                          key={tech.name} 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                        >
                          <tech.icon className="size-5" />
                          <span className="text-xs font-semibold text-white/70">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-white/20">&bull;</span>
                    <span className="uppercase tracking-widest text-sm font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map( (result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50"> 
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3">
                    <span className="text-sm text-white/40 font-medium">Deployment:</span>
                    <div className="flex flex-wrap gap-3">
                      {project.hosts.map((host) => (
                        <div 
                          key={host.name} 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                        >
                          <host.icon className="size-4 text-emerald-300" />
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-white/30 leading-none">
                              {host.role}
                            </span>
                            <span className="text-xs font-semibold text-white/80">
                              {host.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <button className="bg-white text-gray-950 h-12 w-full md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/90 transition-all">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4"/>
                      </button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <button className="border border-white/20 text-white h-12 w-full md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
                        <GithubIcon className="size-5" /> 
                        <span>Github Repo</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};
