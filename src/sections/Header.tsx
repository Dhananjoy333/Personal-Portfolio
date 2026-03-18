"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", 
      threshold: [0, 0.1],
    };
    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);   
      if (visibleEntry) {
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        if (!isAtBottom) {
          setActive(visibleEntry.target.id);
        }
      }
    }, observerOptions);
    const handleScrollBottom = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActive("contact");
      }
    };
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScrollBottom);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBottom);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full fixed top-3 z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
            
        <a href="#home" className={`nav-item ${active === "home" ? "bg-white text-gray-900" : ""}`}>
          Home
        </a>

        <a href="#projects" className={`nav-item ${active === "projects" ? "bg-white text-gray-900" : ""}`}>
          Projects
        </a>

        <a href="#about" className={`nav-item ${active === "about" ? "bg-white text-gray-900" : ""}`}>
          About
        </a>

        <a href="#contact" className={`nav-item ${active === "contact"? "bg-white text-gray-900 ": ""}`}>
          Contact
        </a>
      </nav>
    </div>
  );
};
