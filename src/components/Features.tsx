// src/components/Features.tsx

import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

function Features() {
  const { ref: headerRef, inView: headerIn } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsIn } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: stripRef, inView: stripIn } = useInView<HTMLDivElement>();

  const featureList = [
    {
      icon: "smartphone",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps built with React Native, Flutter, and Swift. From MVP to App Store launch.",
      linkText: "See our apps",
      to: "/products",
      iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      accentGlow: "rgba(59,130,246,0.12)",
      borderAccent: "hover:border-blue-500/30",
      delay: "delay-100",
    },
    {
      icon: "language",
      title: "Web Development",
      description:
        "High-performance websites and web apps using React, Next.js, and modern frameworks. SEO-friendly and blazing fast.",
      linkText: "View case studies",
      to: "/about",
      iconBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      accentGlow: "rgba(6,182,212,0.12)",
      borderAccent: "hover:border-cyan-500/30",
      delay: "delay-200",
    },
    {
      icon: "palette",
      title: "UI/UX Design",
      description:
        "User research, wireframing, and pixel-perfect interfaces. We design experiences users love and stakeholders trust.",
      linkText: "View designs",
      to: "/products",
      iconBg: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
      accentGlow: "rgba(139,92,246,0.12)",
      borderAccent: "hover:border-violet-500/30",
      delay: "delay-300",
    },
    {
      icon: "productivity",
      title: "Product Management",
      description:
        "Roadmaps, sprint planning, and feature prioritization. We align technical execution with your business goals.",
      linkText: "Learn more",
      to: "/about",
      iconBg: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      accentGlow: "rgba(245,158,11,0.12)",
      borderAccent: "hover:border-amber-500/30",
      delay: "delay-100",
    },
    {
      icon: "campaign",
      title: "Social Media & Growth",
      description:
        "Content strategy, community management, and performance marketing. We help you acquire and retain users at scale.",
      linkText: "See results",
      to: "/products",
      iconBg: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
      accentGlow: "rgba(244,63,94,0.12)",
      borderAccent: "hover:border-rose-500/30",
      delay: "delay-200",
    },
    {
      icon: "rocket_launch",
      title: "End-to-End Delivery",
      description:
        "One team, one contract, one deadline. We handle everything from ideation to deployment and post-launch support.",
      linkText: "Start a project",
      to: "/contact",
      iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      accentGlow: "rgba(16,185,129,0.12)",
      borderAccent: "hover:border-emerald-500/30",
      delay: "delay-300",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-100/80 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(59,130,246,0.05),transparent)]" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative">
        <div
          ref={headerRef}
          className={`max-w-2xl mx-auto mb-14 flex flex-col gap-3 text-center reveal ${headerIn ? "in-view" : ""}`}
        >
          <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-1">
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            One Team. Every Skill.
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Zero Handoffs.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-base">
            We are a full-stack freelance team. You get senior-level execution across every discipline without managing multiple vendors.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureList.map((feature, i) => (
            <div
              key={i}
              className={`reveal ${feature.delay} ${cardsIn ? "in-view" : ""} relative group bg-white border border-slate-100 hover:border-blue-100 p-7 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left gap-5 overflow-hidden cursor-default`}
              style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)` }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-[100px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-2xl"
                style={{ background: `radial-gradient(circle, ${feature.accentGlow} 0%, transparent 70%)` }}
              />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined font-bold text-2xl">
                  {feature.icon}
                </span>
              </div>

              <div className="flex flex-col gap-2.5 flex-1">
                <h3
                  className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <Link
                to={feature.to}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-cyan-300 transition-colors group/link"
              >
                {feature.linkText}
                <span className="material-symbols-outlined text-[16px] font-bold group-hover/link:translate-x-1 transition-transform duration-200">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div
          ref={stripRef}
          className={`reveal delay-200 ${stripIn ? "in-view" : ""} mt-14 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-slate-400 font-medium`}
        >
          {[
            { icon: "verified_user", label: "100% Client Satisfaction" },
            { icon: "lock", label: "NDA Protected" },
            { icon: "schedule", label: "On-Time Delivery" },
            { icon: "support_agent", label: "Dedicated Project Manager" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200 cursor-default group">
              <span className="material-symbols-outlined text-blue-500/60 group-hover:text-blue-400 text-base transition-colors">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
