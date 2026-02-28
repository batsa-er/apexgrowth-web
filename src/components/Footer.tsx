import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#09041A] border-t border-[rgba(192,132,252,0.08)] px-[clamp(24px,5vw,80px)] py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-serif text-[28px] font-bold text-[#F2EEFF] mb-4">
              Apex<span className="text-[#C084FC]">.</span>Growth
            </div>
            <p className="text-[14px] text-[rgba(242,238,255,0.55)] leading-relaxed max-w-sm">
              Revenue architecture for enterprise, fintech, and high-growth companies across Africa and globally.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.12em] uppercase text-[rgba(242,238,255,0.28)]">
              Accra, Ghana · hello@apexgrowth.africa
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C084FC] mb-6">Company</h4>
            <ul className="space-y-3">
              {[['Work', '/work'], ['Services', '/services'], ['About', '/about'], ['Careers', '/about#careers']].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-[13px] text-[rgba(242,238,255,0.55)] hover:text-[#C084FC] transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C084FC] mb-6">Resources</h4>
            <ul className="space-y-3">
              {[['Insights', '/insights'], ['Contact', '/contact'], ['Privacy Policy', '/privacy']].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-[13px] text-[rgba(242,238,255,0.55)] hover:text-[#C084FC] transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(192,132,252,0.08)] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[11px] tracking-[0.08em] text-[rgba(242,238,255,0.28)]">
            © {new Date().getFullYear()} Apex Growth Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[['LinkedIn', 'https://linkedin.com/company/apexgrowthpartners'], ['X / Twitter', 'https://x.com/apexgrowth_af']].map(([l, h]) => (
              <a key={h} href={h} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.12em] uppercase text-[rgba(242,238,255,0.28)] hover:text-[#C084FC] transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
