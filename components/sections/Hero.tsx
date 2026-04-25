export default function Hero() {
  return (
    <section id="quote" className="bg-white pt-14 pb-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — Copy */}
          <div className="pb-2 lg:pb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 text-[11px] font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] inline-block" />
              81,528 drivers saved this month
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(28px,6vw,42px)] leading-[1.1] font-extrabold text-gray-900 mb-4 tracking-tight">
              Save Big on{" "}
              <span className="text-[#1a56db]">Auto Insurance</span>{" "}
              in 90 Seconds
            </h1>

            {/* Subtext */}
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6 max-w-md">
              Compare free quotes from top providers in 90 seconds. Find the
              coverage you need at a price you&apos;ll love.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10 mb-6">
              <div>
                <div className="text-[26px] sm:text-[28px] font-extrabold text-gray-900 leading-none">
                  $597
                </div>
                <div className="text-[12px] text-gray-400 mt-1">
                  Avg. Annual Savings
                </div>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <div className="text-[26px] sm:text-[28px] font-extrabold text-gray-900 leading-none">
                  4.9
                </div>
                <div className="text-[12px] text-gray-400 mt-1">
                  Customer Satisfaction
                </div>
              </div>
            </div>

            {/* Trust card */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3.5 mb-5">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex text-amber-400 text-base leading-none">★★★★★</div>
                <span className="text-sm font-bold text-gray-900">4.9/5</span>
                <span className="text-xs text-gray-400">by 50,000+ drivers</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Trusted by drivers across the U.S.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-green-700 font-medium">
                <span>🔒</span>
                <span>256-bit SSL Secure</span>
              </div>
            </div>

            {/* Trust pills */}
            <div className="flex items-center gap-4 flex-wrap">
              {["Takes 90 seconds", "100% free & secure", "No obligations"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — visual panel only (no form) */}
          <div className="hidden lg:flex w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl items-center justify-center overflow-hidden">
            <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
              <rect x="20" y="38" width="180" height="38" rx="10" fill="#1e40af" opacity="0.9" />
              <rect x="42" y="18" width="110" height="30" rx="12" fill="#2563eb" />
              <rect x="50" y="22" width="44" height="22" rx="5" fill="#93c5fd" opacity="0.85" />
              <rect x="104" y="22" width="40" height="22" rx="5" fill="#93c5fd" opacity="0.85" />
              <circle cx="60" cy="78" r="14" fill="#1e293b" />
              <circle cx="60" cy="78" r="7" fill="#64748b" />
              <circle cx="158" cy="78" r="14" fill="#1e293b" />
              <circle cx="158" cy="78" r="7" fill="#64748b" />
              <rect x="176" y="44" width="20" height="12" rx="4" fill="#fbbf24" opacity="0.9" />
              <rect x="22" y="44" width="16" height="10" rx="3" fill="#f87171" opacity="0.7" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
