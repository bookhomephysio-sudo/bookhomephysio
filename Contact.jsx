import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, Send, MessageCircle } from "lucide-react";

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
    .bhp-contact { font-family: 'Inter', sans-serif; color: ${tokens.ink}; background: ${tokens.paper}; }
    .bhp-contact h1, .bhp-contact h2, .bhp-contact .display { font-family: 'Fraunces', serif; }
    .bhp-contact .mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.04em; }
    .bhp-contact input, .bhp-contact textarea {
      font-family: 'Inter', sans-serif;
      width: 100%; padding: 12px 14px; border-radius: 10px;
      border: 1px solid ${tokens.line}; background: white; outline: none;
    }
    .bhp-contact input:focus, .bhp-contact textarea:focus { border-color: ${tokens.brand}; }
  `}</style>
);

const REGIONS = [
  { name: "Chandigarh", x: 130, y: 90, tier: "core" },
  { name: "Mohali", x: 95, y: 115, tier: "core" },
  { name: "Panchkula", x: 165, y: 110, tier: "core" },
  { name: "Zirakpur", x: 140, y: 140, tier: "extended" },
  { name: "New Delhi", x: 320, y: 260, tier: "core" },
  { name: "Gurugram", x: 285, y: 285, tier: "core" },
  { name: "Noida", x: 350, y: 275, tier: "core" },
  { name: "Faridabad", x: 325, y: 305, tier: "extended" },
];

const FAQS = [
  { q: "How soon can a therapist reach me?", a: "In the Tricity and core NCR zones, most first visits are scheduled within 24 hours of booking. Same-day slots are available depending on therapist availability in your area." },
  { q: "Do I need a doctor's prescription?", a: "Not required, but if you have one — post-surgical notes, an MRI report, or a specialist's referral — sharing it helps your therapist build a more precise plan from session one." },
  { q: "What equipment does the therapist bring?", a: "Portable treatment tools: resistance bands, goniometer, TENS unit where needed, and assessment equipment. Anything specific to your case is confirmed when you book." },
  { q: "Can I reschedule or cancel a session?", a: "Yes — reschedule free of charge up to 4 hours before the appointment via WhatsApp or the patient portal. Late cancellations may carry a partial charge." },
  { q: "Is a female therapist available on request?", a: "Yes, especially for post-natal and gynaecological physiotherapy — mention this when booking and we'll match accordingly." },
  { q: "Which areas are outside your coverage right now?", a: "We currently serve the Tricity (Chandigarh, Mohali, Panchkula, Zirakpur) and Delhi NCR (Delhi, Gurugram, Noida, Faridabad). Message us on WhatsApp to check your specific pin code." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="bhp-contact min-h-screen">
      <Fonts />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">
        <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>Contact</div>
        <h1 className="display mt-4 text-5xl md:text-6xl leading-tight max-w-3xl" style={{ fontWeight: 500 }}>
          Talk to us before you book, if you'd like.
        </h1>
        <p className="mt-6 max-w-2xl text-lg" style={{ color: tokens.inkSoft }}>
          Questions about a condition, coverage in your area, or pricing — reach us however's easiest.
        </p>
      </section>

      {/* PHONE + WHATSAPP CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-14 grid md:grid-cols-2 gap-6">
        <a href="tel:+911724567890" className="p-6 rounded-2xl flex items-center gap-4" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: tokens.brandLight }}>
            <Phone size={18} style={{ color: tokens.brand }} />
          </div>
          <div>
            <div className="font-semibold">+91 172 456 7890</div>
            <div className="text-sm" style={{ color: tokens.inkSoft }}>Mon–Sat, 8am–8pm</div>
          </div>
        </a>
        <a href="https://wa.me/911724567890" className="p-6 rounded-2xl flex items-center gap-4" style={{ background: tokens.brand, color: "white" }}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
            <MessageCircle size={18} color="white" />
          </div>
          <div>
            <div className="font-semibold">Chat on WhatsApp</div>
            <div className="text-sm opacity-80">Usually replies within minutes</div>
          </div>
        </a>
      </section>

      {/* EMAIL FORM + ADDRESS */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <h2 className="display text-2xl" style={{ fontWeight: 500 }}>Send us a message</h2>
          {sent ? (
            <div className="mt-6 p-6 rounded-2xl" style={{ background: tokens.brandLight }}>
              <div className="font-semibold" style={{ color: tokens.brandDeep }}>Message sent.</div>
              <p className="mt-1 text-sm" style={{ color: tokens.inkSoft }}>We'll reply to your email within one business day.</p>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Full name" required />
                <input placeholder="Phone number" required />
              </div>
              <input type="email" placeholder="Email address" required />
              <textarea rows={4} placeholder="Tell us what you need" required />
              <button
                type="submit"
                className="px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                style={{ background: tokens.brandDeep, color: "white" }}
              >
                <Send size={15} /> Send message
              </button>
            </form>
          )}
        </div>

        <div className="md:col-span-2">
          <div className="p-6 rounded-2xl h-full" style={{ border: `1px solid ${tokens.line}` }}>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: tokens.brand }} />
              <div>
                <div className="mono text-xs uppercase" style={{ color: tokens.inkSoft }}>Registered office</div>
                <div className="mt-2 text-sm leading-relaxed">
                  BHP Healthcare Pvt. Ltd.<br />
                  SCO 42-43, Sector 8-C<br />
                  Chandigarh, 160009<br />
                  India
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-6">
              <Mail size={18} className="mt-0.5 flex-shrink-0" style={{ color: tokens.brand }} />
              <div>
                <div className="mono text-xs uppercase" style={{ color: tokens.inkSoft }}>Email</div>
                <div className="mt-2 text-sm">hello@bookhomephysio.com</div>
              </div>
            </div>
            {/* Google Maps embed placeholder */}
            <div className="mt-6 rounded-xl h-32 flex items-center justify-center text-xs" style={{ background: tokens.brandLight, color: tokens.inkSoft }}>
              Map embed — Sector 8-C, Chandigarh
            </div>
          </div>
        </div>
      </section>

      {/* REGION COVERAGE MAP */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="display text-3xl" style={{ fontWeight: 500 }}>Where we currently visit</h2>
        <p className="mt-2" style={{ color: tokens.inkSoft }}>Tricity and Delhi NCR — dot size shows visit density.</p>

        <div className="mt-8 rounded-2xl p-6 md:p-10" style={{ background: tokens.brandLight }}>
          <svg viewBox="0 0 420 340" className="w-full max-w-2xl mx-auto">
            <rect x="60" y="60" width="150" height="120" rx="16" fill="white" opacity="0.5" />
            <text x="70" y="52" fontSize="11" fill={tokens.brandDeep} fontFamily="IBM Plex Mono, monospace">TRICITY</text>
            <rect x="250" y="230" width="150" height="100" rx="16" fill="white" opacity="0.5" />
            <text x="260" y="222" fontSize="11" fill={tokens.brandDeep} fontFamily="IBM Plex Mono, monospace">DELHI NCR</text>
            {REGIONS.map((r, i) => (
              <g key={i}>
                <circle cx={r.x} cy={r.y} r={r.tier === "core" ? 8 : 5} fill={r.tier === "core" ? tokens.brand : tokens.gold} opacity="0.85" />
                <text x={r.x} y={r.y - 14} fontSize="11" textAnchor="middle" fill={tokens.ink} fontWeight="500">{r.name}</text>
              </g>
            ))}
          </svg>
          <div className="flex gap-6 justify-center mt-4 text-xs" style={{ color: tokens.inkSoft }}>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style={{ background: tokens.brand }} /> Core coverage</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style={{ background: tokens.gold }} /> Extended coverage</div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="display text-3xl" style={{ fontWeight: 500 }}>Frequently asked</h2>
        <div className="mt-6 divide-y" style={{ borderColor: tokens.line }}>
          {FAQS.map((f, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown
                  size={18}
                  style={{ color: tokens.inkSoft, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}
                />
              </button>
              {openFaq === i && (
                <p className="mt-3 text-sm max-w-2xl" style={{ color: tokens.inkSoft }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
