const reviews = [
  {
    initials: "JL",
    name: "Jessica L.",
    location: "California",
    text: "I was paying $240/month. After comparing quotes it dropped to $161. Same coverage, way less money. Could not believe how easy it was.",
    saved: "$948/yr",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    initials: "DK",
    name: "David K.",
    location: "Florida",
    text: "The whole thing was genuinely 90 seconds. Got 6 real quotes side by side and picked the best one. No pressure from anyone.",
    saved: "$612/yr",
    avatarBg: "bg-green-100 text-green-700",
  },
  {
    initials: "AR",
    name: "Amanda R.",
    location: "New York",
    text: "Switched from my old provider immediately after seeing the comparison. The savings were real and the agent was incredibly helpful.",
    saved: "$780/yr",
    avatarBg: "bg-orange-100 text-orange-700",
  },
];

export default function Reviews() {
  return (
    <section id="testimonials" className="bg-[#f5f6fa] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Big rating card */}
          <div className="bg-[#1a56db] rounded-2xl p-7 text-white">
            <p className="text-[11px] font-700 tracking-widest uppercase opacity-70 mb-4">
              What users are saying
            </p>
            <div className="text-[60px] font-800 leading-none">4.9</div>
            <div className="text-yellow-300 text-lg mt-2 mb-1">★★★★★</div>
            <p className="text-[12px] opacity-60 mb-6">
              Based on 14,200+ verified reviews
            </p>

            <div className="border-t border-white/20 pt-5">
              <p className="text-[14px] leading-relaxed opacity-90 italic">
                &ldquo;I stopped guessing and started saving. AutoShield found me $876
                in annual savings I didn&apos;t know existed.&rdquo;
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-700">
                    MP
                  </div>
                  <div>
                    <div className="text-[13px] font-600">Marco Pierre</div>
                    <div className="text-[11px] opacity-60">Texas</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[22px] font-800 text-yellow-300">$876</div>
                  <div className="text-[11px] opacity-60">yearly savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-2xl border border-gray-100 p-5"
              >
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-700 ${r.avatarBg}`}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-600 text-gray-900">
                        {r.name}
                      </div>
                      <div className="text-[11px] text-gray-400">{r.location}</div>
                    </div>
                  </div>
                  <span className="bg-green-50 text-green-700 text-[12px] font-700 px-3 py-1 rounded-full">
                    Saved {r.saved}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}