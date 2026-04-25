export default function CTACard() {
  return (
    <div className="bg-[#1a56db] rounded-2xl p-8 text-white flex flex-col items-center text-center h-full justify-center">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.06-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
        </svg>
      </div>

      <h3 className="text-[18px] font-700 mb-2">Prefer talking to a human?</h3>
      <p className="text-[13px] opacity-75 leading-relaxed mb-6 max-w-55">
        Our licensed agents are standing by to help you find the best coverage at the lowest price.
      </p>

      <div className="text-[26px] font-800 mb-1">1-800-045-1864</div>
      <div className="text-[11px] opacity-60 mb-6">Available Mon–Fri, 8am–8pm EST</div>

      <a
        href="tel:18000451864"
        className="w-full bg-[#f97316] text-white text-[14px] font-700 py-3 rounded-xl hover:bg-[#ea6c0a] transition-colors text-center block"
      >
        Call a Free Agent Now
      </a>

      <p className="text-[11px] opacity-50 mt-4">
        Speak with a licensed agent · No obligation
      </p>
    </div>
  );
}