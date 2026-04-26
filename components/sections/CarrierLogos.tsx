"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const carriers = [
  { name: "PROGRESSIVE", style: "italic text-red-800" },
  { name: "GEICO", style: "italic text-blue-800" },
  { name: "Allstate", style: "text-gray-800" },
  { name: "Liberty Mutual", style: "text-gray-800" },
  { name: "TRAVELERS", style: "tracking-widest text-gray-800" },
  { name: "State Farm", style: "text-red-800" },
  { name: "PROGRESSIVE", style: "italic text-red-800" },
  { name: "GEICO", style: "italic text-blue-800" },
  { name: "Allstate", style: "text-gray-800" },
  { name: "Liberty Mutual", style: "text-gray-800" },
  { name: "TRAVELERS", style: "tracking-widest text-gray-800" },
  { name: "State Farm", style: "text-red-800" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CarrierLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(1);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let position = 0;
    const animate = () => {
      position -= speedRef.current;
      if (position <= -element.scrollWidth / 2) position = 0;
      element.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-[#f5f6fa] py-8 px-4 lg:px-10 overflow-hidden"
    >
      <p className="text-center text-2xl font-600 text-gray-600 tracking-widest mb-8">
        We aggregate quotes from 30+ leading providers
      </p>
      
      <div 
        ref={scrollRef}
        onMouseEnter={() => speedRef.current = 1}
        onMouseLeave={() => speedRef.current = 2}
        className="flex w-max gap-12 py-8"
      >
        {carriers.concat(carriers).map((c, index) => (
          <span
            key={index + c.name}
            className={`text-lg font-800 opacity-40 select-none font-semibold whitespace-nowrap transition-all duration-300 hover:opacity-100 hover:-translate-y-1 hover:scale-105 cursor-pointer ${c.style}`}
          >
            {c.name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}