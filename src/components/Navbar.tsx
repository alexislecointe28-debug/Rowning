import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-[#0A0A0A] border-b border-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/aunl-logo.png" alt="AUNL" width={32} height={40} className="h-9 w-auto" />
          <div>
            <div className="text-lg font-black tracking-tight leading-none text-[#F0EDE8] uppercase">RoWning</div>
            <div className="text-[10px] text-[#888] tracking-widest uppercase font-body">by Alexis · AUNL Lyon</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '/#concept', label: 'Concept' },
            { href: '/#entreprise', label: 'Entreprises' },
            { href: '/#tarifs', label: 'Tarifs' },
            { href: '/#contact', label: 'Contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-body text-[#AAAAAA] hover:text-[#F0EDE8] transition-colors tracking-wide">
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="bg-brand text-white text-sm font-black px-5 py-2.5 uppercase tracking-wider hover:bg-brand-700 transition-colors">
          Nous contacter
        </Link>
      </div>
    </nav>
  )
}
