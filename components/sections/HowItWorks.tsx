const steps = [
  {
    icon: "📋",
    iconBg: "bg-blue-50",
    number: "01",
    title: "Enter Your Info",
    desc: "Tell us your ZIP code and a few quick details about your vehicle. The whole thing takes less than 60 seconds.",
  },
  {
    icon: "🔍",
    iconBg: "bg-green-50",
    number: "02",
    title: "Compare Rates",
    desc: "We instantly pull personalized quotes from 30+ top-rated insurance companies so you can compare side by side.",
  },
  {
    icon: "✅",
    iconBg: "bg-orange-50",
    number: "03",
    title: "Choose & Save",
    desc: "Pick the best rate and switch in minutes. No paperwork, no waiting rooms, no hassle whatsoever.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <div>
            <p className="text-[11px] font-700 text-[#1a56db] tracking-widest uppercase mb-3">
              How it works
            </p>
            <h2 className="text-[30px] font-800 text-gray-900 tracking-tight">
              Get Your Quote in{" "}
              <span className="text-[#1a56db]">3 Easy Steps</span>
            </h2>
            <p className="text-[15px] text-gray-500 mt-3">
              From info to savings in under 2 minutes — no phone calls, no pressure.
            </p>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col divide-y divide-gray-100">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <div className={`${step.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <span className="text-[11px] font-700 text-gray-300 block mb-1">
                    Step {step.number}
                  </span>
                  <h3 className="text-[15px] font-700 text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
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