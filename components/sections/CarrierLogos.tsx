const carriers = [
  { name: "PROGRESSIVE", style: "italic text-red-400" },
  { name: "GEICO", style: "italic text-blue-400" },
  { name: "Allstate", style: "text-gray-400" },
  { name: "Liberty Mutual", style: "text-gray-400" },
  { name: "TRAVELERS", style: "tracking-widest text-gray-400" },
  { name: "State Farm", style: "text-red-300" },
];

export default function CarrierLogos() {
  return (
    <section className="bg-white border-y border-gray-100 py-5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-[11px] font-600 text-gray-400 tracking-widest uppercase mb-4">
          We aggregate quotes from 30+ leading providers
        </p>
        <div className="flex items-center justify-between flex-wrap gap-6">
          {carriers.map((c) => (
            <span
              key={c.name}
              className={`text-[15px] font-800 opacity-40 select-none ${c.style}`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}