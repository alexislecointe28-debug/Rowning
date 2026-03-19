import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A]">

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 overflow-hidden">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image src="/photo-unl-seance.jpg" alt="RoWning AUNL Lyon" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/30" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

          <div className="relative max-w-6xl mx-auto w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#E63000]/40 bg-[#E63000]/10 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-black text-brand uppercase tracking-widest">Labellisé RoWning · FFA</span>
            </div>

            <h1 className="text-[clamp(72px,13vw,160px)] font-black leading-[0.88] tracking-tight uppercase mb-8">
              Circuit<br />
              training<br />
              <span className="text-brand">sur ergo.</span>
            </h1>

            <div className="flex flex-wrap items-end gap-12">
              <p className="font-body text-lg text-[#B0ADA8] leading-relaxed max-w-sm">
                1 heure. 10 personnes. Un effort réel encadré par un préparateur physique et rameur de compétition. À Lyon.
              </p>
              <div className="flex gap-4">
                <Link href="/#entreprise" className="bg-brand text-white font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-700 transition-colors">
                  Offre entreprise
                </Link>
                <Link href="/#concept" className="border border-[#333] text-[#F0EDE8] font-black text-sm uppercase tracking-widest px-8 py-4 hover:border-[#666] transition-colors">
                  Découvrir
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-16 pt-10 border-t border-[#1a1a1a] flex-wrap">
              {[
                ['10', 'Pers. max / séance'],
                ['1h', 'Format dense'],
                ['3×12\'', 'Circuits RoWning'],
                ['FFA', 'Labellisé'],
              ].map(([n, l]) => (
                <div key={n}>
                  <div className="text-4xl font-black text-brand tracking-tight">{n}</div>
                  <div className="font-body text-xs text-[#888580] mt-1 tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCEPT */}
        <section id="concept" className="py-24 px-6 border-t border-[#111]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Le concept</p>
              <h2 className="text-5xl font-black uppercase leading-tight mb-6">
                Un effort vrai.<br /><span className="text-brand">Pas du yoga.</span>
              </h2>
              <p className="font-body text-[#A8A5A0] leading-relaxed mb-8">
                Le RoWning c&apos;est trois circuits de 12 minutes combinant mouvements sur et autour du rameur. Cardio, force, coordination. Encadré par un coach préparateur physique et rameur de compétition Masters Elite.
              </p>
              <p className="font-body text-[#A8A5A0] leading-relaxed">
                Pas besoin de savoir ramer. L&apos;ergomètre est accessible à tous les niveaux dès la première séance.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                ['3×12\'', 'Circuits d\'effort', 'Alternance ergo / renforcement. 45s effort / 15s transition.'],
                ['Watts ciblés', 'Intensité mesurée', 'Des repères chiffrés pour chaque exercice. Vous progressez, ça se voit.'],
                ['86% muscles', 'Corps complet', 'Jambes, dos, bras, abdos — l\'ergomètre sollicite tout sans impact articulaire.'],
                ['Coach dédié', 'Préparateur physique FFA', 'Rameur Masters Elite. Il sait ce que transpirer veut dire.'],
              ].map(([tag, title, desc]) => (
                <div key={title} className="flex gap-5 p-5 border border-[#1a1a1a] hover:border-[#E63000]/30 transition-colors">
                  <div className="text-brand font-black text-sm uppercase tracking-wide min-w-[90px]">{tag}</div>
                  <div>
                    <div className="font-black text-base uppercase mb-1">{title}</div>
                    <div className="font-body text-sm text-[#9A9590]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTOS */}
        <section className="px-6 pb-24 border-t border-[#111]">
          <div className="max-w-6xl mx-auto pt-24">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image src="/photo-unl-coach.jpg" alt="Coach RoWning AUNL" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs font-black text-white uppercase tracking-widest">Le coach</div>
              </div>
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image src="/photo-unl-ergo.jpg" alt="Ergomètres Concept2 AUNL" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs font-black text-white uppercase tracking-widest">La salle</div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTREPRISE */}
        <section id="entreprise" className="py-24 px-6 border-t border-[#111] bg-[#0D0D0D]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Offre entreprise</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-5xl font-black uppercase leading-tight mb-6">
                  Vos équipes méritent<br /><span className="text-brand">mieux que le yoga.</span>
                </h2>
                <p className="font-body text-[#A8A5A0] leading-relaxed mb-8">
                  Un créneau dédié le midi, rien que pour votre équipe. Une heure de circuit training sur ergo — vos collaborateurs reviennent concentrés, pas endormis.
                </p>
                <div className="flex flex-col gap-2 mb-10">
                  {[
                    'Créneau exclusif midi · 10 salariés max',
                    '4 séances garanties par mois',
                    'Coach dédié — préparateur physique FFA',
                    'Espace entreprise privé en ligne',
                    'Rapport PDF mensuel automatique au RH',
                    'Séance d\'inauguration offerte',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 font-body text-sm text-[#999]">
                      <span className="text-brand font-black">→</span> {item}
                    </div>
                  ))}
                </div>
                <div className="border border-[#1a1a1a] p-6">
                  <div className="text-5xl font-black tracking-tight mb-1">200€</div>
                  <div className="font-body text-sm text-[#888580]">par mois · créneau dédié · 4 séances</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-black text-[#777472] uppercase tracking-widest mb-2">Ce que vous obtenez</p>
                {[
                  ['📸', 'Galerie photos privée', 'Chaque séance immortalisée. Vos équipes repartent avec des souvenirs concrets.'],
                  ['📊', 'Stats & progression', 'Watts moyens, participation, évolution mensuelle. Chiffré, pas du ressenti.'],
                  ['📄', 'Rapport PDF mensuel', 'Envoyé le 1er du mois à votre RH — sans rien demander. Bilan QVT clé en main.'],
                  ['🏆', 'Classement interne', 'Vos collaborateurs se challengent entre eux. L\'émulation naturelle.'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="flex gap-4 p-5 border border-[#1a1a1a] hover:border-[#E63000]/30 transition-colors">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <div className="font-black text-sm uppercase mb-1">{title}</div>
                      <div className="font-body text-xs text-[#9A9590] leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EN 3 ÉTAPES */}
        <section className="py-24 px-6 border-t border-[#111]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Mise en place</p>
            <h2 className="text-5xl font-black uppercase mb-12">Opérationnel en 48h.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                ['01', 'Prise de contact', 'Un échange de 30 minutes pour caler le créneau et créer votre espace entreprise.'],
                ['02', 'Séance d\'inauguration', 'On offre la première séance à votre équipe. Photo de groupe à la clé.'],
                ['03', 'Lancement', 'Vos salariés reçoivent leur accès. Vous recevez le rapport le 1er du mois.'],
              ].map(([n, title, desc]) => (
                <div key={n} className="p-8 border border-[#1a1a1a] relative">
                  <div className="text-[80px] font-black text-[#1a1a1a] leading-none absolute top-4 right-6 select-none">{n}</div>
                  <div className="relative">
                    <div className="font-black text-xl uppercase mb-3">{title}</div>
                    <div className="font-body text-sm text-[#9A9590] leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 border-t border-[#111] bg-[#0D0D0D]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Contact</p>
              <h2 className="text-5xl font-black uppercase leading-tight mb-6">
                Prenons<br /><span className="text-brand">30 minutes.</span>
              </h2>
              <p className="font-body text-[#A8A5A0] leading-relaxed mb-8">
                Un échange rapide pour comprendre vos besoins et vous présenter concrètement l&apos;offre. Séance d&apos;inauguration offerte pour votre équipe.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ['Email', 'alexis@aunl-rowning.fr'],
                  ['Lieu', 'AUNL — bord de Saône, Lyon'],
                  ['Label', 'RoWning® · FFA'],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 items-center border border-[#1a1a1a] px-5 py-3">
                    <span className="text-xs font-black text-[#777472] uppercase tracking-widest min-w-[50px]">{label}</span>
                    <span className="font-body text-sm text-[#999]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#111] px-6 py-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span className="font-body text-xs text-[#666360]">© 2025 Alexis — RoWning AUNL Lyon</span>
            <span className="font-body text-xs text-[#666360]">Labellisé RoWning® · FFA</span>
          </div>
        </footer>

      </main>
    </>
  )
}

function ContactForm() {
  return (
    <form className="flex flex-col gap-4" action="mailto:alexis@aunl-rowning.fr">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-black text-[#777472] uppercase tracking-widest mb-1.5 block">Prénom</label>
          <input type="text" placeholder="Marie" className="w-full bg-[#111] border border-[#222] px-4 py-3 text-sm font-body text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label className="text-xs font-black text-[#777472] uppercase tracking-widest mb-1.5 block">Nom</label>
          <input type="text" placeholder="Dupont" className="w-full bg-[#111] border border-[#222] px-4 py-3 text-sm font-body text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-brand" />
        </div>
      </div>
      <div>
        <label className="text-xs font-black text-[#777472] uppercase tracking-widest mb-1.5 block">Entreprise</label>
        <input type="text" placeholder="Acme Corp" className="w-full bg-[#111] border border-[#222] px-4 py-3 text-sm font-body text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-brand" />
      </div>
      <div>
        <label className="text-xs font-black text-[#777472] uppercase tracking-widest mb-1.5 block">Email</label>
        <input type="email" placeholder="marie@acme.fr" className="w-full bg-[#111] border border-[#222] px-4 py-3 text-sm font-body text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-brand" />
      </div>
      <div>
        <label className="text-xs font-black text-[#777472] uppercase tracking-widest mb-1.5 block">Message</label>
        <textarea rows={3} placeholder="On a une équipe de 8 personnes, on cherche un créneau le mardi midi..." className="w-full bg-[#111] border border-[#222] px-4 py-3 text-sm font-body text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-brand resize-none" />
      </div>
      <button type="submit" className="w-full bg-brand text-white font-black text-sm uppercase tracking-widest py-4 hover:bg-brand-700 transition-colors">
        Envoyer →
      </button>
      <p className="text-xs font-body text-[#777472] text-center">Réponse sous 24h · Séance inauguration offerte</p>
    </form>
  )
}
