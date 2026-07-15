// src/pages/Products.tsx

import { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [activeTab, setActiveTab] = useState("mobile");

  const servicesList = {
    mobile: {
      title: "Mobile Development",
      badge: "iOS & Android",
      headline: "Native and cross-platform mobile apps built to convert.",
      description:
        "We design and build mobile experiences that users return to. From React Native to Flutter and native Swift/Kotlin, we choose the right stack for your timeline.",
      features: [
        "Cross-platform and native development",
        "App Store and Play Store launch support",
        "Offline-first architecture and push notifications",
        "Performance testing and crash analytics setup",
      ],
      stat: "4.8",
      statLabel: "Average App Store Rating",
      color: "from-blue-500 to-indigo-600",
      glowColor: "rgba(59,130,246,0.2)",
      iconColor: "text-blue-400",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    web: {
      title: "Web Development",
      badge: "Modern Stack",
      headline: "Fast, SEO-friendly websites and web apps.",
      description:
        "We build with React, Next.js, and modern CMS tools. Whether it’s a marketing site, SaaS dashboard, or e-commerce store, we deliver performance and scalability.",
      features: [
        "Next.js and React best practices",
        "Headless CMS and API integrations",
        "SEO, Core Web Vitals, and analytics",
        "Hosting, CI/CD, and maintenance",
      ],
      stat: "< 1s",
      statLabel: "Average Page Load Time",
      color: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6,182,212,0.2)",
      iconColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    design: {
      title: "UI/UX Design",
      badge: "Product Design",
      headline: "Interfaces that feel obvious and look premium.",
      description:
        "We start with user research and wireframes, then move to high-fidelity designs and interactive prototypes. The result is a design system your team can actually use.",
      features: [
        "User flows, wireframes, and prototypes",
        "Design systems and component libraries",
        "Usability testing and iteration",
        "Handoff-ready specs for developers",
      ],
      stat: "92",
      statLabel: "Average Client NPS Score",
      color: "from-violet-500 to-purple-600",
      glowColor: "rgba(139,92,246,0.2)",
      iconColor: "text-violet-400",
      badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    },
    growth: {
      title: "Product & Growth",
      badge: "Go-To-Market",
      headline: "Strategy, launches, and content that drive adoption.",
      description:
        "Product management and social media strategy under one roof. We define roadmaps, plan sprints, and build launch campaigns so your product gets noticed.",
      features: [
        "Product roadmaps and sprint planning",
        "Content strategy and brand voice",
        "Social media and community management",
        "Analytics, KPIs, and growth loops",
      ],
      stat: "3x",
      statLabel: "Average Launch Engagement Lift",
      color: "from-amber-500 to-orange-600",
      glowColor: "rgba(245,158,11,0.2)",
      iconColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col gap-14 relative">

        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Our Services
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Everything you need to
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent"> launch and grow</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            One team covering mobile, web, design, product, and growth. Pick what you need, or let us handle the full build.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-2xl max-w-3xl mx-auto">
          {Object.keys(servicesList).map((key) => {
            const service = servicesList[key as keyof typeof servicesList];
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? "bg-blue-600 text-white shadow-[0_2px_12px_rgba(59,130,246,0.3)]"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                }`}
              >
                {service.title}
              </button>
            );
          })}
        </div>

        {(() => {
          const activeService = servicesList[activeTab as keyof typeof servicesList];
          return (
            <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{ background: activeService.glowColor }}
              />

              <div className="lg:col-span-7 flex flex-col items-start gap-5 text-left relative">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${activeService.badgeBg}`}>
                  {activeService.badge}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activeService.headline}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {activeService.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
                  {activeService.features.map((feature, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 shrink-0">
                        <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                      </div>
                      <span className="text-slate-700 text-xs font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="relative bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] transition-all cursor-pointer"
                  >
                    <span className="relative z-10">Book a Call</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    to="/about"
                    className="border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-center font-semibold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-full min-h-[240px] flex items-center justify-center">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${activeService.color} rounded-2xl opacity-8 blur-2xl`}
                />
                <div className="bg-[#060F1E] border border-blue-500/12 rounded-2xl w-full p-8 text-center text-white relative shadow-[0_0_40px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center gap-2 overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${activeService.glowColor}, transparent 60%)` }}
                  />
                  <span className="text-slate-600 uppercase tracking-widest text-[10px] font-mono relative z-10">
                    Client Result
                  </span>
                  <span
                    className={`text-5xl font-extrabold tracking-tight font-mono my-2 relative z-10 ${activeService.iconColor}`}
                    style={{ textShadow: `0 0 30px ${activeService.glowColor.replace('0.2', '0.6')}` }}
                  >
                    {activeService.stat}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider relative z-10">
                    {activeService.statLabel}
                  </span>
                  <div className="w-full border-t border-blue-500/10 mt-6 pt-4 flex justify-between text-[10px] font-mono text-slate-600 relative z-10">
                    <span>STATUS: DELIVERED</span>
                    <span>TEAM: BUILDUP</span>
                  </div>
                </div>
              </div>

            </div>
          );
        })()}

        <div className="bg-white border border-slate-100 rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
          <div className="text-left flex flex-col gap-1">
            <h3 className="text-xl font-extrabold text-slate-900">How we engage</h3>
            <p className="text-xs text-slate-500 font-mono">Flexible collaboration models for different stages and team needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Fixed Project",
                desc: "Defined scope and timeline, delivered as a complete package. Best for MVPs, websites, and app launches.",
                features: ["Clear deliverables", "Milestone-based delivery", "Ideal for launches"],
              },
              {
                name: "Retainer",
                desc: "Ongoing design, development, and growth support. Best for startups with continuous product work.",
                features: ["Dedicated team slots", "Priority support", "Regular check-ins"],
                highlighted: true,
              },
              {
                name: "Co-Founder Mode",
                desc: "Embedded product partner for early-stage founders. We act like part of your core team.",
                features: ["Roadmap ownership", "Investor-ready demos", "Long-term partnership"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col gap-4 border ${
                  plan.highlighted
                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                    : "bg-white border-slate-200 text-slate-700"
                }`}
              >
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>{plan.name}</p>
                </div>
                <p className={`text-xs leading-relaxed ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>{plan.desc}</p>
                <ul className="flex flex-col gap-2 mt-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-medium">
                      <span className={`material-symbols-outlined text-sm ${plan.highlighted ? "text-blue-200" : "text-blue-500"}`}>check</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-auto text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${
                    plan.highlighted
                      ? "bg-white text-blue-700 hover:bg-blue-50"
                      : "border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  Talk to us
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;
