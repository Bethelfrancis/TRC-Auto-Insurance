import Link from "next/link";

const columns = [
  {
    title: "AutoShield",
    links: [
      { label: "Company Info", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Enterprise API", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#contacts" },
      { label: "Live Chat", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Do Not Sell My Info", href: "#" },
      { label: "TCPA Consent", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Compare Rates", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Sitemap", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-gray-900 text-gray-400 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-700 text-white mb-4">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[12px] text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-gray-600">
            © 2025 TRC Global / AutoShield. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600 max-w-md leading-relaxed text-right">
            AutoShield is not an insurance company. TRC Global connects consumers
            with licensed insurance agents. Results vary by individual. Coverage
            and rates subject to carrier approval. Not available in all states.
          </p>
        </div>
      </div>
    </footer>
  );
}