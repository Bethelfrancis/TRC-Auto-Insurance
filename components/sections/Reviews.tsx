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
  {
    initials: "AR",
    name: "Amanda T.",
    location: "New York",
    text: "Switched from my old provider immediately after seeing the comparison. The savings were real and the agent was incredibly helpful.",
    saved: "$780/yr",
    avatarBg: "bg-orange-100 text-orange-700",
  }
];

export default function Reviews() {
  return (
    <section id="testimonials" className="bg-white py-16 px-4 lg:px-10">
      <h2 className="text-[clamp(30px,4vw,40px)] font-semibold text-gray-900 mb-2 tracking-tight text-center">
        See What Our <span className="text-[#1a56db]">Users Are Saying</span>
      </h2>
      <p className="text-[15px] text-gray-500 mb-10 text-center">
        Finding affordable auto coverage shouldn&apos;t be a hassle. We make it fast, fair, and frustration-free.
      </p>

      <div className="flex lg:flex-row flex-col items-start gap-6 mt-20">
        {/* Big rating card */}
        <div className="w-full lg:w-[50%] bg-[#1a56db] rounded-2xl p-7 text-white h-full">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="w-full bg-white rounded-2xl border border-gray-100 p-5"
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
    </section>
  );
}