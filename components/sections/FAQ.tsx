"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to get a quote?",
    a: "Most users complete the form and receive quotes in under 90 seconds. We only ask for the essential details needed to match you with the best rates from our 30+ carrier network.",
  },
  {
    q: "Is my personal information secure?",
    a: "Absolutely. We use 256-bit SSL encryption — the same standard used by banks — and we never sell your personal data to third parties without your explicit consent.",
  },
  {
    q: "How much can I really save on auto insurance?",
    a: "Our users save an average of $597 per year. Savings vary based on your location, vehicle, and driving history, but the majority of drivers we help find a meaningfully better rate.",
  },
  {
    q: "Do I have to switch insurance companies?",
    a: "Not at all. There is zero obligation. We simply show you your options so you can make an informed decision entirely on your own terms. No pressure, no sales calls unless you request one.",
  },
  {
    q: "Can I get quotes for multiple vehicles?",
    a: "Yes — after your first quote you can add additional vehicles to your profile and compare bundle rates, which often save you even more per vehicle than insuring them separately.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-16 flex-1">
      <div className="h-full">
        <p className="text-[11px] font-700 text-[#1a56db] tracking-widest uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-[26px] font-800 text-gray-900 tracking-tight mb-6">
          Frequently Asked <span className="text-[#1a56db]">Questions</span>
        </h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="text-[14px] font-600 text-gray-800 group-hover:text-[#1a56db] transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === i
                      ? "bg-[#1a56db] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <span className="text-[14px] leading-none font-500">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === i && (
                <p className="text-[13px] text-gray-500 leading-relaxed mt-3 pr-10">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}