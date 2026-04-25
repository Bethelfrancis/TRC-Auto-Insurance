"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("name") || "there";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 via-white to-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md text-center"
      >
        {/* Animated checkmark circle */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100"
        >
          <svg
            className="h-12 w-12 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Headline */}
        <h1 className="mb-3 text-[clamp(26px,5vw,36px)] font-extrabold tracking-tight text-gray-900">
          You&apos;re all set, {firstName}! 🎉
        </h1>

        {/* Subtext */}
        <p className="mb-8 text-[16px] leading-relaxed text-gray-500">
          A licensed agent will contact you within{" "}
          <span className="font-semibold text-gray-700">5 minutes</span> with
          personalized coverage options and savings estimates.
        </p>

        {/* What happens next card */}
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-widest text-[#1a56db]">
            What happens next
          </p>
          <ul className="space-y-3">
            {[
              { icon: "📞", text: "An agent calls you within 5 minutes" },
              { icon: "💬", text: "They walk you through your best options" },
              { icon: "✅", text: "You choose the plan that fits your budget" },
            ].map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="text-xl leading-none">{icon}</span>
                <span className="text-[14px] text-gray-600">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct call box */}
        <div className="mb-6 rounded-2xl bg-[#f5f6fa] border border-gray-100 p-5">
          <p className="mb-1 text-sm text-gray-400">Or call us directly:</p>
          <a
            href="tel:18000451864"
            className="text-[28px] font-extrabold text-[#1a56db] hover:text-[#0d47a1] transition-colors"
          >
            1-800-045-1864
          </a>
          <p className="mt-1 text-xs text-gray-400">
            Available Mon–Fri, 8am–8pm EST
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block rounded-xl bg-gradient-to-r from-[#f97316] to-[#fb923c] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-100 transition-all hover:from-[#ea6c0a] hover:to-[#f97316] hover:shadow-xl"
        >
          Get Another Quote
        </Link>

        {/* Trust footer */}
        <p className="mt-6 text-xs text-gray-400">
          🔒 No obligation · Licensed agents only · 100% secure
        </p>
      </motion.div>
    </div>
  );
}
