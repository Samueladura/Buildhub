// src/pages/About.tsx

import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      title: "Craft",
      desc: "We treat every pixel and line of code as part of a product clients can sell.",
      icon: "handyman",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Clarity",
      desc: "No jargon, no hand-waving. You get a clear plan, weekly demos, and real timelines.",
      icon: "visibility",
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Ownership",
      desc: "We act like an in-house team. One POC, one contract, one commitment to quality.",
      icon: "handshake",
      iconColor: "text-violet-400",
      iconBg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&fit=crop&q=80",
    },
    {
      name: "Marcus Johnson",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&fit=crop&q=80",
    },
    {
      name: "Elena Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&fit=crop&q=80",
    },
    {
      name: "David Kim",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&fit=crop&q=80",
    },
    {
      name: "Aisha Patel",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&fit=crop&q=80",
    },
    {
      name: "Tom Walker",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&fit=crop&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col gap-20 relative">

        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            About Buildhub
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A Freelance Team That
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent"> Ships Real Products</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            We are a tight-knit crew of mobile developers, web developers, UI/UX designers, product managers, and social media managers. We partner with startups and businesses to take ideas from brief to live product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col items-start gap-5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined font-bold text-2xl">flag</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              To make world-class digital products accessible to every founder and business. We combine senior talent, modern tooling, and real accountability so clients get more than deliverables — they get a product they can grow.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col items-start gap-5 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-[0.07]">
              <span className="material-symbols-outlined text-white" style={{ fontSize: "200px" }}>visibility</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center relative z-10">
              <span className="material-symbols-outlined font-bold text-2xl">lightbulb</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight relative z-10">Our Vision</h2>
            <p className="text-slate-100 leading-relaxed text-sm relative z-10">
              To become the most trusted freelance product team for startups and growing brands. We believe the best work happens when talented people work together without overhead.
            </p>
          </div>
        </div>

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

        <div className="flex flex-col gap-10 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">The Team</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Meet the people who build your product.
              </h2>
            </div>
            <Link
              to="/contact"
              className="border border-slate-200 hover:border-blue-500/40 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              Work With Us
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col gap-2 group">
                <div className="overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 group-hover:border-blue-500/25 shadow-sm aspect-[3/4] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-bold text-blue-600/70 tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-500/30 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.2),0_32px_64px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 tech-grid-bg opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to build with a team that ships?
            </h2>
            <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
              Tell us about your project. We’ll respond within 24 hours with a plan, timeline, and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-blue-700 text-center font-bold px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Start a Project
              </Link>
              <Link
                to="/products"
                className="border border-white/20 bg-white/8 hover:bg-white/15 text-white text-center font-semibold px-8 py-4 rounded-xl transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
