"use client";

import { motion } from "framer-motion";

const cards = [
  {
    image: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop')",
    tag: "Average $612 Saved",
    tagColor: "bg-blue-50 text-blue-700",
    title: "Real Savings, Real Fast",
    desc: "Our users save an average of $612 per year by comparing multiple quotes side by side from 30+ top carriers.",
  },
  {
    image: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop')",
    tag: "90-Second Quotes",
    tagColor: "bg-green-50 text-green-700",
    title: "No lengthy forms or phone calls",
    desc: "Get personalized quotes from top insurers in under 2 minutes. No phone calls, no waiting, no pressure.",
  },
  {
    image: "url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023')",
    tag: "100% Fast & Secure",
    tagColor: "bg-orange-50 text-orange-700",
    title: "Your data is always protected",
    desc: "Your information is encrypted with bank-level security. We never sell your personal data to third parties.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="benefits" className="bg-white py-16 px-4 lg:px-10">

        {/* Header */}
        <h2 className="text-[clamp(30px,4vw,40px)] font-semibold text-gray-900 mb-2 tracking-tight text-center">
          Why <span className="text-[#1a56db]">85,000+</span> Drivers Choose Us
        </h2>
        <p className="text-[15px] text-gray-500 mb-10 text-center">
          Finding affordable auto coverage shouldn&apos;t be a hassle. We make it fast, fair, and frustration-free.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300"
            >
              {/* Image area with overlay text */}
              <div 
                className="relative h-48 bg-cover bg-center overflow-hidden group"
                style={{ backgroundImage: card.image }}
              >
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 group-hover:via-black/40 transition-all duration-300"></div>
                
                {/* Zoom effect pseudo-element */}
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300 pointer-events-none" style={{ backgroundImage: card.image }}></div>
                
                {/* Content overlaid on image */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${card.tagColor} inline-block mb-3 w-fit`}>
                    {card.tag}
                  </span>
                  <h3 className="text-[16px] font-bold text-white mb-2 leading-tight">{card.title}</h3>
                </div>
              </div>
              
              {/* Body with description */}
              <div className="p-5 grow">
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}