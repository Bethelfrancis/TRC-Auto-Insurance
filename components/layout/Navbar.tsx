"use client";

import Link from "next/link";
import { useState } from "react";
import QuoteModal from "@/components/ui/QuoteModal";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const li = "relative cursor-pointer text-gray-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#1a56db] after:transition-all after:duration-200 hover:after:w-full hover:text-[#1a56db] font-medium text-base"

  return (
    <>
      <nav
        className='fixed w-full top-0 z-30 border-b border-gray/80 bg-background/0 backdrop-blur-2xl'
      >
        <div className="mx-auto flex items-center justify-between px-4 py-3 lg:px-10 lg:py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <div className="w-8 h-8 bg-[#1a56db] rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-3xl font-extrabold ">
              <span className="text-[#1a56db]">TRC</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#benefits" className={`${li}`}>
              Benefits
            </Link>
            <Link href="#how-it-works" className={`${li}`}>
              How it works
            </Link>
            <Link href="#testimonials" className={`${li}`}>
              Testimonials
            </Link>
            <Link href="#contacts" className={`${li}`}>
              Contacts
            </Link>
          </div>

          {/* CTA — opens modal */}
          <div className="hidden md:block">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#1a56db] text-white text--base font-bold px-5 py-2.5 rounded-lg hover:bg-[#1349be] transition-colors cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-500 relative z-50 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-16 left-0 right-0 h-[calc(100vh-64px)] bg-foreground px-6 py-8 flex flex-col justify-between items-center"
            >
              <Link href="#benefits" className="text-[18px] text-gray-900 font-semibold" onClick={() => setMenuOpen(false)}>Benefits</Link>
              <Link href="#how-it-works" className="text-[18px] text-gray-900 font-semibold" onClick={() => setMenuOpen(false)}>How it works</Link>
              <Link href="#testimonials" className="text-[18px] text-gray-900 font-semibold" onClick={() => setMenuOpen(false)}>Testimonials</Link>
              <Link href="#contacts" className="text-[18px] text-gray-900 font-semibold" onClick={() => setMenuOpen(false)}>Contacts</Link>
              <button
                onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                className="bg-[#f97316] text-white text-[16px] font-bold px-5 py-4 mt-4 rounded-xl text-center w-full shadow-lg shadow-orange-100"
              >
                Get Free Quote
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal rendered outside nav to avoid z-index issues */}
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}