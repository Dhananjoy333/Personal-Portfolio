"use client";

import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  score?: string;
  description: string;
  Icon: StaticImageData | string;
  isSpecial?: boolean;
}

const TimelineItem = ({
  date,
  title,
  subtitle,
  score,
  description,
  Icon,
  isSpecial = false,
}: TimelineItemProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(31, 41, 55, 0.5)",
        color: "#fff",
        boxShadow: "none",
        border: "1px solid rgba(110, 231, 183, 0.1)",
        borderRadius: "1rem",
        textAlign: "left",
        padding: "1.5rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(31, 41, 55, 0.5)",
      }}
      date={date}
      iconStyle={{
        background: isSpecial ? "#10b981" : "#1f2937",
        color: "#fff",
        boxShadow: "0 0 0 4px rgba(110, 231, 183, 0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-gray-900">
          <Image
            src={Icon}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-serif text-xl text-emerald-300">{title}</h3>
        <h4 className="text-sm text-white/70 mt-1 italic">{subtitle}</h4>

        {score && (
          <span className="inline-block mt-2 bg-emerald-500/20 text-emerald-300 text-xs px-2 py-1 rounded-full border border-emerald-500/30">
            Score: {score}
          </span>
        )}

        <p className="text-sm text-white/60 mt-4">{description}</p>
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;