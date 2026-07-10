import React, { useState } from "react";
import {
  User, Stethoscope, ShieldCheck, Mail, MapPin, Clock, Calendar, ChevronRight,
  Activity, CheckCircle2, Circle, FileText, TrendingUp, Users, IndianRupee, Star,
} from "lucide-react";

const tokens = {
  ink: "#14231D",
  inkSoft: "#4B5D57",
  paper: "#F7F5EF",
  paperDeep: "#EFEBE0",
  brand: "#0F6E56",
  brandDeep: "#0A4A3A",
  brandLight: "#E7F2EE",
  gold: "#B8791E",
  goldLight: "#F5E9D3",
  clay: "#B14B32",
  line: "#DCE3DF",
};

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
    .bhp-portals { font-family: 'Inter', sans-serif; color: ${tokens.ink}; background: ${tokens.paper}; }
    .bhp-portals h1, .bhp-portals h2, .bhp-portals .display { font-family: 'Fraunces', serif; }
    .bhp-portals .mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.04em; }
    .bhp-portals input { font-family: 'Inter', sans-serif; width: 100%; padding: 11px 14px; border-radius: 10px; border: 1px solid ${tokens.line}; background: white; outline: none; }
    .bhp-portals input:focus { border-color: ${tokens.brand}; }
    .punch { border-left: 2px dashed ${tokens.line}; }
  `}</style>
);

const ROLES = [
  { id: "patient", label: "Patient", icon: User, color: tokens.brand },
  { id: "therapist", label: "Therapist", icon: Stethoscope, color: tokens.gold },
  { id: "admin", label: "Admin", icon: ShieldCheck, color: tokens.brandDeep },
];

function PatientPortal() {
  const [step, setStep] = useState(2);
  const steps = ["Condition", "Address", "Slot", "Confirm"];
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Booking flow */}
      <div className="p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
        <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>Booking flow</div>
        <div className="flex items-center gap-2 mt-4">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                style={{ background: i <= step ? tokens.brand : tokens.line, color: i <= step ? "white" : tokens.inkSoft }}
              >
                {i < step ? <CheckCircle2 size={14} /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className="flex-1 h-0.5" style={{ background: i < step ? tokens.brand : tokens.line }} />}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4 text-sm font-medium">{steps[step]}</div>
        <div className="mt-3 space-y-3">
          {step === 2 && (
            <>
              <div className="text-sm" style={{ color: tokens.inkSoft }}>Available slots — tomorrow, Sector 21 Panchkula</div>
              {["8:00 AM – 9:00 AM", "11:00 AM – 12:00 PM", "5:00 PM – 6:00 PM"].map((slot, i) => (
                <button key={i} className="w-full text-left p-3 rounded-xl text-sm flex justify-between items-center" style={{ border: `1px solid ${i === 1 ? tokens.brand : tokens.line}`, background: i === 1 ? tokens.brandLight : "white" }}>
                  {slot} {i === 1 && <CheckCircle2 size={15} style={{ color: tokens.brand }} />}
                </button>
              ))}
            </>
          )}
        </div>
        <button onClick={() => setStep((s) => Math.min(s + 1, 3))} className="mt-5 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-1" style={{ background: tokens.brandDeep, color: "white" }}>
          Continue <ChevronRight size={14} />
        </button>
      </div>

      {/* Session tracker */}
      <div className="p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
        <div className="mono text-xs uppercase" style={{ color: tokens.brand }}>Session tracker</div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold display">7 / 12</div>
            <div className="text-xs" style={{ color: tokens.inkSoft }}>Ortho — knee replacement plan</div>
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: tokens.brandLight }}>
            <Activity size={22} style={{ color: tokens.brand }} />
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full" style={{ background: tokens.line }}>
          <div className="h-2 rounded-full" style={{ width: "58%", background: tokens.brand }} />
        </div>
        <div className="mt-5 space-y-2">
          {[
            { d: "Mon, 7 Jul", t: "Completed — ROM improved to 100°" },
            { d: "Thu, 10 Jul", t: "Completed — gait training, minimal support" },
            { d: "Sun, 13 Jul", t: "Upcoming — strength progression" },
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              {r.t.startsWith("Upcoming") ? <Circle size={14} className="mt-0.5" style={{ color: tokens.gold }} /> : <CheckCircle2 size={14} className="mt-0.5" style={{ color: tokens.brand }} />}
              <div><span className="font-medium">{r.d}</span> — <span style={{ color: tokens.inkSoft }}>{r.t.replace(/^(Completed|Upcoming) — /, "")}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TherapistPortal() {
  const [loggedIn, setLoggedIn] = useState(true);
  const jobs = [
    { patient: "R. Kapoor", area: "Sector 8, Chandigarh", time: "9:00 AM", type: "Ortho — Session 4", status: "upcoming" },
    { patient: "S. Malhotra", area: "DLF Phase 3, Gurugram", time: "11:30 AM", type: "Neuro — Session 12", status: "upcoming" },
    { patient: "A. Sethi", area: "Sector 20, Panchkula", time: "2:00 PM", type: "Sports Injury — Session 2", status: "done" },
  ];

  if (!loggedIn) {
    return (
      <div className="max-w-sm mx-auto p-8 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
        <div className="mono text-xs uppercase" style={{ color: tokens.gold }}>Therapist login</div>
        <h3 className="display text-2xl mt-3" style={{ fontWeight: 500 }}>Enter your email</h3>
        <p className="mt-2 text-sm" style={{ color: tokens.inkSoft }}>We'll send a magic link — no password needed.</p>
        <input placeholder="you@example.com" className="mt-4" />
        <button onClick={() => setLoggedIn(true)} className="mt-4 w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2" style={{ background: tokens.gold, color: "white" }}>
          <Mail size={15} /> Send magic link
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Job list — dispatch board */}
      <div className="p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
        <div className="mono text-xs uppercase" style={{ color: tokens.gold }}>Today's jobs</div>
        <div className="mt-4 space-y-3">
          {jobs.map((j, i) => (
            <div key={i} className="punch pl-4 py-2 flex items-start justify-between gap-3">
              <div>
                <div className="font-medium text-sm">{j.patient}</div>
                <div className="text-xs mt-0.5" style={{ color: tokens.inkSoft }}>{j.type}</div>
                <div className="flex items-center gap-1 text-xs mt-1" style={{ color: tokens.inkSoft }}>
                  <MapPin size={11} /> {j.area}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="mono text-xs font-medium">{j.time}</div>
                <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block" style={{ background: j.status === "done" ? tokens.brandLight : tokens.goldLight, color: j.status === "done" ? tokens.brandDeep : tokens.gold }}>
                  {j.status === "done" ? "Completed" : "Upcoming"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Session log form */}
      <div className="p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
        <div className="mono text-xs uppercase" style={{ color: tokens.gold }}>Session log — A. Sethi</div>
        <div className="mt-4 space-y-3 text-sm">
          <div>
            <label className="text-xs font-medium" style={{ color: tokens.inkSoft }}>Pain score (0–10)</label>
            <input placeholder="3" className="mt-1" />
          </div>
          <div>
            <label className="text-xs font-medium" style={{ color: tokens.inkSoft }}>Exercises completed</label>
            <input placeholder="Ankle circles ×3, resisted eversion ×15" className="mt-1" />
          </div>
          <div>
            <label className="text-xs font-medium" style={{ color: tokens.inkSoft }}>Notes for next session</label>
            <input placeholder="Progress to single-leg balance work" className="mt-1" />
          </div>
        </div>
        <button className="mt-5 w-full py-3 rounded-full text-sm font-semibold" style={{ background: tokens.brandDeep, color: "white" }}>
          Submit session log
        </button>
      </div>
    </div>
  );
}

function AdminPortal() {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) {
    return (
      <div className="max-w-sm mx-auto p-8 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
        <div className="mono text-xs uppercase" style={{ color: tokens.brandDeep }}>Admin login</div>
        <h3 className="display text-2xl mt-3" style={{ fontWeight: 500 }}>Sign in</h3>
        <input placeholder="Email" className="mt-4" />
        <input placeholder="Password" type="password" className="mt-3" />
        <button onClick={() => setLoggedIn(true)} className="mt-4 w-full py-3 rounded-full text-sm font-semibold" style={{ background: tokens.brandDeep, color: "white" }}>
          Sign in
        </button>
      </div>
    );
  }

  const stats = [
    { label: "Sessions today", value: "38", icon: Calendar },
    { label: "Active therapists", value: "22", icon: Stethoscope },
    { label: "Revenue (MTD)", value: "₹4.2L", icon: IndianRupee },
    { label: "Avg. rating", value: "4.8", icon: Star },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="p-5 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
            <s.icon size={16} style={{ color: tokens.brandDeep }} />
            <div className="text-2xl font-semibold display mt-2">{s.value}</div>
            <div className="text-xs mt-1" style={{ color: tokens.inkSoft }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
          <div className="mono text-xs uppercase" style={{ color: tokens.brandDeep }}>Live visit queue</div>
          <div className="mt-4 space-y-3">
            {[
              ["R. Kapoor", "T. Sharma", "Sector 8, Chandigarh", "In progress"],
              ["S. Malhotra", "N. Grewal", "DLF Phase 3, Gurugram", "En route"],
              ["A. Sethi", "T. Sharma", "Sector 20, Panchkula", "Scheduled"],
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between text-sm pb-3" style={{ borderBottom: i < 2 ? `1px solid ${tokens.line}` : "none" }}>
                <div>
                  <div className="font-medium">{r[0]}</div>
                  <div className="text-xs" style={{ color: tokens.inkSoft }}>Therapist: {r[1]} · {r[2]}</div>
                </div>
                <div className="text-xs px-2.5 py-1 rounded-full" style={{ background: tokens.brandLight, color: tokens.brandDeep }}>{r[3]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ border: `1px solid ${tokens.line}`, background: "white" }}>
          <div className="mono text-xs uppercase" style={{ color: tokens.brandDeep }}>Therapist utilisation</div>
          <div className="mt-4 space-y-3">
            {[["Tricity team", 82], ["NCR team", 71]].map(([name, pct], i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1"><span>{name}</span><span>{pct}%</span></div>
                <div className="h-2 rounded-full" style={{ background: tokens.line }}>
                  <div className="h-2 rounded-full" style={{ width: `${pct}%`, background: tokens.brandDeep }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortalsPage() {
  const [role, setRole] = useState("patient");
  const active = ROLES.find((r) => r.id === role);

  return (
    <div className="bhp-portals min-h-screen">
      <Fonts />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <div className="mono text-xs uppercase" style={{ color: tokens.brandDeep }}>Portals</div>
        <h1 className="display mt-4 text-5xl md:text-6xl leading-tight max-w-3xl" style={{ fontWeight: 500 }}>
          One dispatch board, three views.
        </h1>
        <p className="mt-6 max-w-2xl text-lg" style={{ color: tokens.inkSoft }}>
          Patients track their plan, therapists run their day, and admins watch the whole operation move — in real time.
        </p>
      </section>

      {/* Role switcher */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex gap-2 p-1.5 rounded-full w-fit" style={{ background: tokens.paperDeep }}>
          {ROLES.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className="px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
              style={{ background: role === r.id ? r.color : "transparent", color: role === r.id ? "white" : tokens.inkSoft }}
            >
              <r.icon size={15} /> {r.label}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-10">
        {role === "patient" && <PatientPortal />}
        {role === "therapist" && <TherapistPortal />}
        {role === "admin" && <AdminPortal />}
      </section>

      <section className="py-14" style={{ background: tokens.brandDeep }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="display text-2xl md:text-3xl" style={{ fontWeight: 500 }}>
            Front-end preview — connect your booking system to go live.
          </div>
          <div className="text-sm opacity-70 flex items-center gap-2"><FileText size={14} /> Placeholder data shown throughout</div>
        </div>
      </section>
    </div>
  );
}
