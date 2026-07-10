import React, { useState } from "react";
import { Bone, Brain, Users, Dumbbell, Baby, Flame, Clock, IndianRupee, CheckCircle2, ChevronDown } from "lucide-react";

const tokens = {
  ink: "#14231D",
  inkSoft: "#4B5D57",
  paper: "#F7F5EF",
  brand: "#0F6E56",
  brandDeep: "#0A4A3A",
  brandLight: "#E7F2EE",
  gold: "#B8791E",
  line: "#DCE3DF",
};

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
    .bhp-services { font-family: 'Inter', sans-serif; color: ${tokens.ink}; background: ${tokens.paper}; }
    .bhp-services h1, .bhp-services h2, .bhp-services .display { font-family: 'Fraunces', serif; }
    .bhp-services .mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.04em; }
  `}</style>
);

const SERVICES = [
  {
    id: "ortho",
    icon: Bone,
    name: "Orthopedic Rehab",
    tagline: "Post-surgical recovery, joint replacements, fractures",
    conditions: ["Total knee / hip replacement", "Fracture recovery post-cast removal", "ACL / ligament reconstruction", "Spinal surgery rehab", "Frozen shoulder"],
    approach: "Sessions begin with a range-of-motion and strength assessment against your surgeon's protocol. Your therapist builds a week-by-week progression — gait training, strength work, scar mobilisation — and adjusts it against how you're actually recovering, not a fixed template.",
    duration: "45–60 min",
    sessions: "8–24 sessions typical, protocol-dependent",
    price: "From ₹899 / session",
  },
  {
    id: "neuro",
    icon: Brain,
    name: "Neurological Rehab",
    tagline: "Stroke, Parkinson's, spinal cord injury",
    conditions: ["Post-stroke hemiplegia", "Parkinson's disease", "Spinal cord injury", "Peripheral nerve palsy", "Multiple sclerosis"],
    approach: "Long-horizon, home-based neuro rehab focuses on functional tasks — transfers, balance, gait — practiced in the patient's real environment. Our neuro-trained therapists coordinate with your treating neurologist and adjust the plan at scheduled review points.",
    duration: "45–60 min",
    sessions: "Ongoing, reviewed every 4 weeks",
    price: "From ₹1,199 / session",
  },
  {
    id: "geriatric",
    icon: Users,
    name: "Geriatric Care",
    tagline: "Fall prevention, mobility, age-related decline",
    conditions: ["Balance & fall-risk", "General deconditioning", "Osteoarthritis management", "Post-hospitalisation weakness", "Home safety assessment"],
    approach: "A gentler pace, built around what keeps an older adult independent — safe transfers, stair confidence, grip and balance work — with a home safety review included in the first session (loose rugs, lighting, grab-rail placement).",
    duration: "30–45 min",
    sessions: "Flexible — one-off review or ongoing plan",
    price: "From ₹799 / session",
  },
  {
    id: "sports",
    icon: Dumbbell,
    name: "Sports Injury",
    tagline: "Sprains, strains, return-to-play",
    conditions: ["Ankle & knee sprains", "Muscle strains & tears", "Tendinopathy", "Return-to-sport conditioning", "Overuse injuries"],
    approach: "Assessment identifies the injury and, just as importantly, the movement pattern that caused it. Plans move through pain control, loading, and sport-specific conditioning, with clear return-to-play criteria agreed up front.",
    duration: "45 min",
    sessions: "4–10 sessions typical",
    price: "From ₹999 / session",
  },
  {
    id: "postnatal",
    icon: Baby,
    name: "Post-Natal Recovery",
    tagline: "Pelvic floor, core recovery, C-section rehab",
    conditions: ["C-section scar & core recovery", "Pelvic floor rehabilitation", "Diastasis recti", "Postural correction (feeding/lifting)", "Return-to-exercise planning"],
    approach: "Sessions at home mean no travel in the early postpartum weeks. A female physiotherapist leads pelvic floor and core assessment, with a graded return-to-activity plan built around your delivery type and recovery pace.",
    duration: "45 min",
    sessions: "6–12 sessions typical",
    price: "From ₹899 / session",
  },
  {
    id: "pain",
    icon: Flame,
    name: "Pain Management",
    tagline: "Chronic back, neck, and joint pain",
    conditions: ["Chronic low back pain", "Cervical (neck) pain", "Sciatica", "Fibromyalgia support", "Postural pain (desk-related)"],
    approach: "Focus on identifying mechanical and lifestyle contributors — desk setup, sleep posture, movement habits — alongside hands-on treatment and a home exercise plan designed to reduce flare-ups, not just treat the current one.",
    duration: "45 min",
    sessions: "6–8 sessions, reviewed thereafter",
    price: "From ₹899 / session",
  },
];

function ServiceDetail({ s }) {
  return (
    <div className="grid md:grid-cols-5 gap-8 py-12">
      <div className="md:col-span-2">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: tokens.brand }}>
          <s.icon size={22} color="white" />
        </div>
        <h3 className="display text-3xl mt-4" style={{ fontWeight: 500 }}>{s.name}</h3>
        <p className="mt-2" style={{ color: tokens.inkSoft }}>{s.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2"><Clock size={15} style={{ color: tokens.gold }} /> {s.duration}</div>
          <div className="flex items-center gap-2"><IndianRupee size={15} style={{ color: tokens.gold }} /> {s.price}</div>
        </div>
        <div className="mt-2 text-sm" style={{ color: tokens.inkSoft }}>{s.sessions}</div>
      </div>

      <div className="md:col-span-3 grid sm:grid-cols-2 gap-8">
        <div>
          <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>Conditions we treat</div>
          <ul className="mt-3 space-y-2">
            {s.conditions.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: tokens.brand }} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>How the plan works</div>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: tokens.inkSoft }}>{s.approach}</p>
          <button
            className="mt-5 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: tokens.brandDeep, color: "white" }}
          >
            Book {s.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [open, setOpen] = useState("ortho");

  return (
    <div className="bhp-services min-h-screen">
      <Fonts />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">
        <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>Services</div>
        <h1 className="display mt-4 text-5xl md:text-6xl leading-tight max-w-3xl" style={{ fontWeight: 500 }}>
          Six specialties. One therapist, at your door.
        </h1>
        <p className="mt-6 max-w-2xl text-lg" style={{ color: tokens.inkSoft }}>
          Every plan is built by a licensed physiotherapist matched to your condition — not a generic routine.
          Select a specialty below for the full detail: what we treat, how sessions are structured, and pricing.
        </p>
      </section>

      {/* SPECIALTY NAV */}
      <div className="sticky top-0 z-10 border-y" style={{ background: tokens.paper, borderColor: tokens.line }}>
        <div className="max-w-5xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-1 py-3">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setOpen(s.id)}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-colors"
                style={{
                  background: open === s.id ? tokens.brand : "transparent",
                  color: open === s.id ? "white" : tokens.inkSoft,
                }}
              >
                <s.icon size={14} /> {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FULL DETAIL SECTIONS */}
      <div className="max-w-5xl mx-auto px-6 divide-y" style={{ borderColor: tokens.line }}>
        {SERVICES.map((s) => (
          <div key={s.id} id={s.id} style={{ display: open === s.id ? "block" : "none" }}>
            <ServiceDetail s={s} />
          </div>
        ))}
      </div>

      {/* Book CTA per service — global closing strip */}
      <section className="py-16 mt-8" style={{ background: tokens.brandDeep }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <div className="display text-2xl md:text-3xl" style={{ fontWeight: 500 }}>Not sure which specialty fits?</div>
            <p className="mt-2 opacity-80 max-w-md text-sm">
              Tell us the condition on WhatsApp — we'll match you with the right therapist before you book.
            </p>
          </div>
          <button className="px-7 py-3.5 rounded-full font-semibold whitespace-nowrap" style={{ background: "white", color: tokens.brandDeep }}>
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}
