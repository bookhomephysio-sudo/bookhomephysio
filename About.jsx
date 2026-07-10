import React, { useState } from "react";
import { HeartPulse, ShieldCheck, Cpu, Sparkles, MapPin, ArrowUpRight, Quote } from "lucide-react";

const tokens = {
  ink: "#14231D",
  inkSoft: "#4B5D57",
  paper: "#F7F5EF",
  paperDeep: "#EFEBE0",
  brand: "#0F6E56",
  brandDeep: "#0A4A3A",
  brandLight: "#E7F2EE",
  gold: "#B8791E",
  clay: "#B14B32",
  line: "#DCE3DF",
};

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
    .bhp-about { font-family: 'Inter', sans-serif; color: ${tokens.ink}; background: ${tokens.paper}; }
    .bhp-about h1, .bhp-about h2, .bhp-about h3, .bhp-about .display { font-family: 'Fraunces', serif; }
    .bhp-about .mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.04em; }
    .stamp { position: relative; }
    .stamp::before {
      content: '';
      position: absolute; inset: 0;
      border: 1.5px solid currentColor;
      border-radius: 999px;
      opacity: 0.35;
      transform: rotate(-3deg);
    }
  `}</style>
);

export default function AboutPage() {
  const [activeStamp, setActiveStamp] = useState(0);

  const stamps = [
    { year: "2022", label: "Registered", detail: "BHP Healthcare Pvt. Ltd. incorporated in Chandigarh" },
    { year: "2023", label: "500 sessions", detail: "First milestone across Tricity households" },
    { year: "2024", label: "NCR launch", detail: "Extended coverage to Delhi NCR" },
    { year: "2025", label: "12,000+ visits", detail: "Therapist network grown to 40+ clinicians" },
  ];

  const trustSignals = [
    { icon: ShieldCheck, title: "Verified clinicians", body: "Every therapist holds a BPT/MPT degree and is checked against the State Physiotherapy Council register before their first home visit." },
    { icon: HeartPulse, title: "Clinical protocols", body: "Assessment, treatment, and discharge follow written protocols reviewed by our founding physiotherapists — not left to individual judgement." },
    { icon: Cpu, title: "Background checks", body: "Identity and address verification, plus a police-verification document, on file for every therapist before onboarding." },
  ];

  return (
    <div className="bhp-about min-h-screen">
      <Fonts />

      {/* HERO — Mission & story */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>About BookHomePhysio</div>
        <h1 className="display mt-4 text-5xl md:text-6xl leading-tight max-w-3xl" style={{ fontWeight: 500 }}>
          We built the clinic to come to you.
        </h1>
        <p className="mt-6 max-w-2xl text-lg" style={{ color: tokens.inkSoft }}>
          BookHomePhysio started with a simple frustration: a founder's father, recovering from a knee replacement,
          spent more energy getting to the clinic than he did on the exercises themselves. So we rebuilt the visit —
          same clinical rigour, delivered at the patient's own front door, across the Tricity and Delhi NCR.
        </p>
      </section>

      {/* WHY HOME PHYSIO */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="display text-3xl" style={{ fontWeight: 500 }}>Why treatment at home works better</h2>
          <p className="mt-4" style={{ color: tokens.inkSoft }}>
            Recovery is not just about the exercises — it's about doing them consistently, in the environment where
            you actually live. A clinic session ends at the door. A home session doesn't.
          </p>
        </div>
        <div className="space-y-5">
          {[
            ["No travel strain", "Post-surgical and elderly patients avoid the exact exertion — stairs, car transfers, waiting rooms — that a clinic visit demands."],
            ["Real-world correction", "Therapists watch you climb your own stairs and get out of your own bed, and correct the movement where it actually happens."],
            ["Family involved", "Caregivers learn the exercises and precautions alongside the patient, so support continues between visits."],
          ].map(([title, body], i) => (
            <div key={i} className="flex gap-4 pb-5" style={{ borderBottom: i < 2 ? `1px solid ${tokens.line}` : "none" }}>
              <div className="mono text-sm pt-1" style={{ color: tokens.gold }}>0{i + 1}</div>
              <div>
                <div className="font-semibold" style={{ fontSize: "1.05rem" }}>{title}</div>
                <div className="mt-1 text-sm" style={{ color: tokens.inkSoft }}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INFO */}
      <section style={{ background: tokens.brandDeep }} className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="mono text-xs uppercase opacity-60">Registered as</div>
            <div className="display text-2xl mt-2">BHP Healthcare Pvt. Ltd.</div>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              A private limited company registered in India, operating BookHomePhysio as its home physiotherapy
              service brand.
            </p>
          </div>
          <div>
            <div className="mono text-xs uppercase opacity-60">Headquartered in</div>
            <div className="display text-2xl mt-2 flex items-center gap-2"><MapPin size={20} /> Chandigarh, IN</div>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              Serving the Tricity (Chandigarh, Mohali, Panchkula) and Delhi NCR through a network of on-ground
              physiotherapists.
            </p>
          </div>
          <div>
            <div className="mono text-xs uppercase opacity-60">Operating since</div>
            <div className="display text-2xl mt-2">2022</div>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              Three years of home visits, from single-session sports strains to multi-month neurological
              rehabilitation plans.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM / FOUNDER */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="display text-3xl" style={{ fontWeight: 500 }}>Led by clinicians, not just operators</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Founding Physiotherapist", role: "Co-founder & Clinical Director", bio: "MPT (Ortho), 12+ years in post-surgical rehab. Writes and audits every treatment protocol on the platform." },
            { name: "Co-founder", role: "Operations", bio: "Built the therapist scheduling and verification system that gets a clinician to your door within the promised window." },
            { name: "Clinical Advisory Panel", role: "3 senior physiotherapists", bio: "Independent review of complex cases — neurological and post-operative — before treatment plans are finalised." },
          ].map((p, i) => (
            <div key={i} className="p-6 rounded-2xl" style={{ background: tokens.brandLight, border: `1px solid ${tokens.line}` }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: tokens.brand, color: "white" }}>
                <HeartPulse size={20} />
              </div>
              <div className="mt-4 font-semibold">{p.name}</div>
              <div className="mono text-xs mt-1" style={{ color: tokens.brand }}>{p.role}</div>
              <p className="mt-3 text-sm" style={{ color: tokens.inkSoft }}>{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS & TRUST — signature ledger element */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="display text-3xl" style={{ fontWeight: 500 }}>Certifications & trust signals</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {trustSignals.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}` }}>
              <t.icon size={22} style={{ color: tokens.brand }} />
              <div className="mt-3 font-semibold">{t.title}</div>
              <p className="mt-2 text-sm" style={{ color: tokens.inkSoft }}>{t.body}</p>
            </div>
          ))}
        </div>

        {/* ledger strip — signature element */}
        <div className="mt-12 rounded-2xl p-8" style={{ background: tokens.paperDeep }}>
          <div className="mono text-xs uppercase mb-6" style={{ color: tokens.inkSoft }}>Our record, stamped</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stamps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStamp(i)}
                className="stamp text-left p-4 rounded-full"
                style={{
                  color: activeStamp === i ? tokens.clay : tokens.inkSoft,
                  background: activeStamp === i ? "white" : "transparent",
                  cursor: "pointer",
                }}
              >
                <div className="mono text-xs">{s.year}</div>
                <div className="font-semibold text-sm mt-1" style={{ color: tokens.ink }}>{s.label}</div>
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: tokens.inkSoft }}>{stamps[activeStamp].detail}</p>
        </div>
      </section>

      {/* AUTOMATION TECH TRANSPARENCY */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8" style={{ border: `1px solid ${tokens.line}` }}>
          <div className="md:w-1/3">
            <Sparkles size={22} style={{ color: tokens.gold }} />
            <h2 className="display text-2xl mt-3" style={{ fontWeight: 500 }}>Where automation touches your visit</h2>
          </div>
          <div className="md:w-2/3 space-y-4 text-sm" style={{ color: tokens.inkSoft }}>
            <p>
              We use software to match you with a nearby available therapist, send appointment reminders, and route
              session notes to your file. None of it decides your treatment.
            </p>
            <p>
              Every exercise plan, dosage adjustment, and discharge decision is made by a licensed physiotherapist —
              the same one who's in the room, or a supervising clinician reviewing their notes. Automation handles
              logistics; people handle care.
            </p>
            <div className="flex items-center gap-2 mono text-xs pt-2" style={{ color: tokens.brand }}>
              <ArrowUpRight size={14} /> Full data & privacy practices available on request
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16" style={{ background: tokens.brand }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Quote size={20} className="text-white opacity-60" />
            <div className="display text-2xl md:text-3xl text-white mt-2" style={{ fontWeight: 500 }}>
              Recovery goes better when it happens at home.
            </div>
          </div>
          <button
            className="px-7 py-3.5 rounded-full font-semibold whitespace-nowrap"
            style={{ background: "white", color: tokens.brandDeep }}
          >
            Book a home visit
          </button>
        </div>
      </section>
    </div>
  );
}
