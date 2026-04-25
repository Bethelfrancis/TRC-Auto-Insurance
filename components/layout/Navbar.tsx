"use client";

import Link from "next/link";
import { useState } from "react";
import QuoteModal from "@/components/ui/QuoteModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
            <span className="text-[15px] font-extrabold text-gray-900 tracking-tight">
              Auto<span className="text-[#1a56db]">Shield</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#benefits" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Benefits
            </Link>
            <Link href="#how-it-works" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
              How it works
            </Link>
            <Link href="#testimonials" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Testimonials
            </Link>
            <Link href="#contacts" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Contacts
            </Link>
          </div>

          {/* CTA — opens modal */}
          <div className="hidden md:block">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#f97316] text-white text-[13px] font-bold px-5 py-2.5 rounded-lg hover:bg-[#ea6c0a] transition-colors"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            <Link href="#benefits" className="text-[14px] text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Benefits</Link>
            <Link href="#how-it-works" className="text-[14px] text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>How it works</Link>
            <Link href="#testimonials" className="text-[14px] text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Testimonials</Link>
            <Link href="#contacts" className="text-[14px] text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Contacts</Link>
            {/* Mobile CTA also opens modal */}
            <button
              onClick={() => { setMenuOpen(false); setModalOpen(true); }}
              className="bg-[#f97316] text-white text-[13px] font-bold px-5 py-2.5 rounded-lg text-center"
            >
              Get Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* Modal rendered outside nav to avoid z-index issues */}
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}