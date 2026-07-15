// src/pages/About.tsx

import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      title: "Speed",
      desc: "Rapid deployment without compromising code integrity or security protocols.",
      icon: "bolt",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Precision",
      desc: "Every pixel and line of code is measured against the highest standards of quality.",
      icon: "center_focus_strong",
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Integrity",
      desc: "We build with transparency, ensuring our partners always know the foundation they're on.",
      icon: "handshake",
      iconColor: "text-violet-400",
      iconBg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&fit=crop&q=80",
    },
    {
      name: "Marcus Thorne",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&fit=crop&q=80",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&fit=crop&q=80",
    },
    {
      name: "David Kim",
      role: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&fit=crop&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col gap-24 relative">

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Established 2026
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Architecting the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Digital Backbone
            </span>{" "}
            of Tomorrow
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Buildhub is more than a platform. We are a collective of engineers, designers, and visionaries dedicated to providing the tools that high-growth startups need to scale without friction.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Mission Card */}
          <div className="bg-white border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-sm flex flex-col items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined font-bold text-2xl">flag</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              To empower every developer with industrial-grade infrastructure and elegant design systems that transform complex workflows into intuitive experiences. We bridge the gap between technical agility and corporate reliability.
            </p>
            <a
              href="#"
              className="mt-4 text-xs font-bold text-blue-400 tracking-widest uppercase inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              Engineering Excellence
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </a>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-900 border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-sm flex flex-col items-start gap-6 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined font-bold text-2xl">visibility</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Our Vision</h2>
            <p className="text-slate-100 leading-relaxed text-sm">
              To become the universal standard for digital production, where the barrier between a brilliant idea and a scaled product is reduced to zero.
            </p>
            <a
              href="#"
              className="mt-4 text-xs font-bold text-blue-400 tracking-widest uppercase inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              Est. 2026 Vision Plan
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </a>
          </div>

        </div>

        {/* Values Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-slate-200/60">
          {values.map((v, i) => (
            <div key={i} className="flex gap-4 items-start group">
              <div className={`p-2.5 rounded-xl border ${v.iconBg} flex items-center justify-center ${v.iconColor} shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined font-bold text-xl">{v.icon}</span>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h4 className="font-bold text-slate-800 text-base">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="flex flex-col gap-12 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">The Architects</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Meet the visionary minds driving Buildhub's innovation.
              </h2>
            </div>
            <a
              href="#"
              className="border border-slate-200 hover:border-blue-500/40 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              Join Our Team
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Members grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 group-hover:border-blue-500/25 shadow-sm aspect-square transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-blue-600/70 tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About CTA Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-500/30 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.2),0_32px_64px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 tech-grid-bg opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to build the next big thing?
            </h2>
            <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
              Join the thousands of teams scaling their vision with Buildhub's precision-engineered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-blue-700 text-center font-bold px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Get Started Free
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 bg-white/8 hover:bg-white/15 text-white text-center font-semibold px-8 py-4 rounded-xl transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
