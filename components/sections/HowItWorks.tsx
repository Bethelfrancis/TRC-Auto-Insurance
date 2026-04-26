const steps = [
  {
    num: "01",
    head: "Enter Your Info",
    desc: "Tell us your ZIP code and a few quick details about your vehicle. The whole thing takes less than 60 seconds.",
  },
  {
    num: "02",
    head: "Compare Rates",
    desc: "We instantly pull personalized quotes from 30+ top-rated insurance companies so you can compare side by side.",
  },
  {
    num: "03",
    head: "Choose & Save",
    desc: "Pick the best rate and switch in minutes. No paperwork, no waiting rooms, no hassle whatsoever.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f5f6fa] py-16 px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <div>
            <p className="text-sm font-semibold text-[#1a56db] tracking-widest uppercase mb-3">
              How it works
            </p>
            <h2 className="text-[clamp(30px,4vw,40px)] font-semibold text-gray-900 tracking-tight">
              Get Your Quote in{" "}
              <span className="text-[#1a56db]">3 Easy Steps</span>
            </h2>
            <p className="text-[15px] text-gray-500 mt-3">
              From info to savings in under 2 minutes — no phone calls, no pressure.
            </p>
          </div>

          {/* Right — steps */}
          <div className="w-full relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 lg:left-7 top-0 h-full w-0.5 bg-gray-200 z-0"></div>

            {/* Steps */}
            <div className="flex flex-col">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="relative flex gap-6 mb-16 last:mb-0"
                >
                  {/* Circular number badge */}
                  <div className="relative z-30 w-14 h-14 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-bold text-lg text-[#1a56db] shrink-0">
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                      {step.head}
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}