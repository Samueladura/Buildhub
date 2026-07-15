// src/components/Features.tsx

import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

function Features() {
  const { ref: headerRef, inView: headerIn } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsIn } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: stripRef, inView: stripIn } = useInView<HTMLDivElement>();

  const featureList = [
    {
      icon: "bolt",
      title: "Lightning Speed",
      description:
        "Deploy complex microservices in seconds. Our global edge network ensures zero-latency performance for your users anywhere on the planet.",
      linkText: "Learn more",
      to: "/products",
      iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      accentGlow: "rgba(59,130,246,0.12)",
      borderAccent: "hover:border-blue-500/30",
      delay: "delay-100",
    },
    {
      icon: "shield_lock",
      title: "Rock-Solid Reliability",
      description:
        "99.99% uptime guaranteed. Built-in redundancy and automated failovers keep your services running even during massive traffic spikes.",
      linkText: "View SLAs",
      to: "/products",
      iconBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      accentGlow: "rgba(6,182,212,0.12)",
      borderAccent: "hover:border-cyan-500/30",
      delay: "delay-200",
    },
    {
      icon: "trending_up",
      title: "Infinite Scalability",
      description:
        "From startup to enterprise. Our auto-scaling clusters expand and contract dynamically based on real-time demand metrics.",
      linkText: "Read Case Studies",
      to: "/about",
      iconBg: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
      accentGlow: "rgba(139,92,246,0.12)",
      borderAccent: "hover:border-violet-500/30",
      delay: "delay-300",
    },
  ];

  return (
    <section className="py-28 bg-[#F8FAFC] border-t border-slate-100/80 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(59,130,246,0.05),transparent)]" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mx-auto mb-16 flex flex-col gap-3 text-center reveal ${headerIn ? "in-view" : ""}`}
        >
          <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-1">
            Why Buildhub
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Precision-Engineered
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Infrastructure</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-base">
            We provide the industrial-grade tools you need to move faster without breaking things.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featureList.map((feature, i) => (
            <div
              key={i}
              className={`reveal ${feature.delay} ${cardsIn ? "in-view" : ""} relative group bg-white border border-slate-100 hover:border-blue-100 p-8 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left gap-6 overflow-hidden cursor-default`}
              style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)` }}
            >
              {/* Hover glow in corner */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-[100px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-2xl"
                style={{ background: `radial-gradient(circle, ${feature.accentGlow} 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined font-bold text-2xl">
                  {feature.icon}
                </span>
              </div>

              {/* Title & Description */}
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

              {/* Link */}
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

        {/* Bottom trust strip */}
        <div
          ref={stripRef}
          className={`reveal delay-200 ${stripIn ? "in-view" : ""} mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-slate-400 font-medium`}
        >
          {[
            { icon: "verified_user", label: "SOC 2 Type II Certified" },
            { icon: "lock", label: "End-to-End Encrypted" },
            { icon: "public", label: "GDPR Compliant" },
            { icon: "support_agent", label: "24/7 Expert Support" },
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
