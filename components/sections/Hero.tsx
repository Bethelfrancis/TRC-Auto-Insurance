import Image from "next/image";

export default function Hero() {
  return (
    <section id="quote" className="flex lg:flex-row flex-col gap-8 lg:gap-12 items-center justify-between h-full lg:h-screen bg-white md:pt-27 pt-22 pb-16 px-4 lg:px-10">

          {/* Left — Copy */}
          <div className="w-full lg:w-[60%] pb-2 lg:pb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a56db]/15 text-[#1a56db] text-[11px] font-semibold px-3 py-1.5 rounded-full mb-5 border border-[#1a56db]-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a56db]/90 inline-block" />
              81,528 drivers saved this months
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(38px,6vw,52px)] leading-[1.1] font-extrabold text-gray-900 mb-5 tracking-tight max-w-160">
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
              <div className="w-px h-10 bg-gray-300" />
              <div>
                <div className="flex items-center text-[26px] sm:text-[28px] font-extrabold text-gray-900 leading-none gap-1">
                  4.9
                  <div className="flex text-amber-400 text-base leading-none">★</div>
                </div>
                <div className="text-[12px] text-gray-400 mt-1">
                  Customer Satisfaction
                </div>
              </div>
            </div>

            {/* Trust pills */}
            <div className="flex items-center gap-4 flex-wrap">
              {["Takes 90 seconds", "100% free & secure", "No obligations"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-sm text-gray-400 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — visual panel with image */}
          <div className="flex w-full lg:w-[50%] h-110 lg:h-100 rounded-2xl items-center justify-center overflow-hidden">
            <Image
              src="/images/car.jpg"
              alt="Car driving lifestyle"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

    </section>
  );
}
