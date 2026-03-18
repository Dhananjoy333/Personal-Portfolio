"use client"; 
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const HeroUiSkills = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 50,
      backSpeed: 50,      
      backDelay: 1000,    
      loop: true,         
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="font-serif text-emerald-300">
      <span ref={el} />
    </div>
  );
};