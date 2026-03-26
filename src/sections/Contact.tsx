"use client";
import React, { useState } from 'react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget; 

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully 🚀");
      form.reset(); 
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 scroll-mt-20 px-4" id="contact">
      <div className="container max-w-4xl">
        <div className="relative bg-gray-800/50 border border-emerald-300/10 rounded-3xl overflow-hidden p-8 md:p-12 shadow-2xl">
          
          {/* Background Texture & Gradient */}
          <div 
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none" 
            style={{ backgroundImage: `url(${grainImage?.src})` }}
          />
          <div className="absolute -top-24 -right-24 size-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

          <div className="text-center md:text-left mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Let&apos;s <span className="text-emerald-300">Connect</span>
            </h2>
            <p className="text-white/60 mt-3 text-sm md:text-base">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>        
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="text-sm font-medium text-emerald-300/80 ml-1">First Name</label>
              <input 
                type="text" 
                id="firstname"
                name='first_name' 
                required
                placeholder="Please enter first name"
                className="bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-300/50 transition-colors"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="lastname" className="text-sm font-medium text-emerald-300/80 ml-1">Last Name</label>
              <input 
                type="text" 
                id="lastname" 
                name='last_name'
                required
                placeholder="Please enter last name"
                className="bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-300/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="email" className="text-sm font-medium text-emerald-300/80 ml-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name='user_email'
                required
                placeholder="abc@example.com"
                className="bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-300/50 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-emerald-300/80 ml-1">Your Message</label>
              <textarea 
                id="message" 
                name='message'
                rows={4}
                required
                placeholder="What's on your mind?"
                className="bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-300/50 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="relative group bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-10 py-4 rounded-xl font-bold flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && <ArrowUpRightIcon className="size-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
              </motion.button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};
