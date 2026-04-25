"use client";

import { motion } from "framer-motion";

const cards = [
  {
    emoji: "💰",
    tag: "Average $612 Saved",
    tagColor: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-50",
    title: "Real Savings, Real Fast",
    desc: "Our users save an average of $612 per year by comparing multiple quotes side by side from 30+ top carriers.",
  },
  {
    emoji: "⚡",
    tag: "90-Second Quotes",
    tagColor: "bg-green-50 text-green-700",
    iconBg: "bg-green-50",
    title: "No lengthy forms or phone calls",
    desc: "Get personalized quotes from top insurers in under 2 minutes. No phone calls, no waiting, no pressure.",
  },
  {
    emoji: "🔒",
    tag: "100% Fast & Secure",
    tagColor: "bg-orange-50 text-orange-700",
    iconBg: "bg-orange-50",
    title: "Your data is always protected",
    desc: "Your information is encrypted with bank-level security. We never sell your personal data to third parties.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="benefits" className="bg-[#f5f6fa] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <p className="text-[11px] font-semibold text-[#1a56db] tracking-widest uppercase mb-3">
          Why choose us
        </p>
        <h2 className="text-[30px] font-extrabold text-gray-900 mb-2 tracking-tight">
          Why <span className="text-[#1a56db]">85,000+</span> Drivers Choose Us
        </h2>
        <p className="text-[15px] text-gray-500 mb-10">
          Finding affordable auto coverage shouldn&apos;t be a hassle. We make it fast, fair, and frustration-free.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-default"
            >
              {/* Icon area */}
              <div className={`${card.iconBg} h-36 flex items-center justify-center text-5xl`}>
                {card.emoji}
              </div>
              {/* Body */}
              <div className="p-5">
                <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${card.tagColor} inline-block mb-3`}>
                  {card.tag}
                </span>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}