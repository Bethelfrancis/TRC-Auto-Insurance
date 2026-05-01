"use client";

import Link from "next/link";
import { useState } from "react";
import QuoteModal from "@/components/ui/QuoteModal";

export default function Navbar() {
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
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#1a56db] text-white text-base font-bold px-5 py-2.5 rounded-lg hover:bg-[#1349be] transition-colors cursor-pointer"
          >
            Get Free Quote
          </button>
        </div>


      </nav>

      {/* Modal rendered outside nav to avoid z-index issues */}
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}