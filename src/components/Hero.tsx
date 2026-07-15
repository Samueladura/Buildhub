// src/components/Hero.tsx

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36 bg-white">
      {/* Tech grid background */}
      <div className="absolute inset-0 -z-10 tech-grid-bg opacity-60" />

      {/* Deep radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.10),transparent)]" />

      {/* Side orbs */}
      <div className="absolute top-24 -right-32 w-96 h-96 -z-10 bg-blue-100/60 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 -z-10 bg-cyan-100/40 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Subtle scan line effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-float-slow" style={{ top: "30%" }} />
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-7">

          {/* Badge */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            V2.0 Now Live — Zero Downtime Deploy
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up delay-200 text-[2.75rem] sm:text-5xl lg:text-[3.75rem] font-black text-slate-900 leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Build the Future
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              with Buildhub
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up delay-300 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl font-normal">
            The developer platform for teams who ship fast. Deploy, scale, and monitor your infrastructure across 24 global edge regions with sub-15ms latency and 99.99% uptime SLA.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="group relative bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-8 py-3.5 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] transition-all active:scale-95 duration-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Free
                <span className="material-symbols-outlined text-sm font-bold group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/products"
              className="bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 text-slate-700 hover:text-blue-600 text-center font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-95 duration-200"
            >
              View Documentation
            </Link>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-up delay-500 flex items-center gap-4 mt-2 pt-4 border-t border-slate-100 w-full sm:w-auto">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm hover:scale-110 transition-transform duration-200"
                  style={{ zIndex: 3 - i }}
                  src={src}
                  alt="Developer Avatar"
                />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                +99
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">5,000+ teams</p>
              <p className="text-xs text-slate-500">building on Buildhub today</p>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="lg:col-span-6 relative w-full animate-fade-right delay-300">
          {/* Glow behind card */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100/80 to-indigo-100/50 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />

          {/* Floating card */}
          <div className="animate-float-slow" style={{ animationDuration: "7s" }}>
            {/* Main Dashboard Card */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-xl text-slate-700 overflow-hidden text-xs font-mono select-none ring-1 ring-black/5">
              {/* Window Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/90" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
                  <span className="w-3 h-3 rounded-full bg-green-500/90" />
                  <span className="text-slate-500 text-[10px] ml-3 font-sans font-medium">buildhub — deploy panel</span>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-2.5 py-0.5 text-[10px] text-green-400 font-bold shadow-[0_0_8px_rgba(34,197,94,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Dashboard Workspace */}
              <div className="p-5 flex flex-col gap-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Avg Latency", value: "12ms", sub: "↓ 4% vs last hr", subColor: "text-green-400" },
                    { label: "Reliability", value: "99.99%", sub: "Uptime active", subColor: "text-green-400" },
                    { label: "Edge Regions", value: "24 / 24", sub: "All Healthy", subColor: "text-slate-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-slate-100 p-3 rounded-xl flex flex-col gap-1 hover:border-blue-200 transition-colors duration-200 group">
                      <span className="text-slate-600 text-[9px] uppercase tracking-wider">{stat.label}</span>
                      <span className="text-white text-sm font-bold group-hover:text-blue-600 transition-colors">{stat.value}</span>
                      <span className={`text-[9px] ${stat.subColor}`}>{stat.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-bold tracking-wider uppercase">Global Ingress Traffic</span>
                    <span className="text-slate-600">Updated 10s ago</span>
                  </div>
                  <div className="h-24 w-full flex items-end justify-between gap-1 pt-2 relative">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.05]">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="border-b border-blue-400 w-full" />
                      ))}
                    </div>
                    {[40, 55, 48, 70, 65, 80, 50, 75, 95].map((h, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-t transition-all duration-500 ${
                          i === 8
                            ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
                            : i >= 6
                            ? "bg-blue-500/40"
                            : "bg-blue-500/15"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Shell */}
                <div className="bg-white border border-slate-100 p-3.5 rounded-xl flex flex-col gap-1.5 text-[11px]">
                  <div className="flex gap-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-white">buildhub deploy --prod --region=global</span>
                  </div>
                  <div className="text-slate-500">⚡ Analyzing bundle size...</div>
                  <div className="text-green-400">✓ Bundle compressed (3.1 MB → 0.9 MB)</div>
                  <div className="text-slate-300">✓ Uploading to 24 edge nodes... Done (0.8s)</div>
                  <div className="text-blue-400 font-bold">✓ Deploy successful → https://app.buildhub.net/live</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-xl hidden md:flex items-center gap-3 ring-1 ring-black/5 animate-float" style={{ animationDelay: "0.5s", animationDuration: "4s" }}>
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
              <span className="material-symbols-outlined text-lg">network_check</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Edge Nodes</p>
              <p className="text-sm font-bold text-slate-900">24 Regions Active</p>
            </div>
          </div>

          {/* Second floating badge */}
          <div className="absolute -top-4 -right-4 bg-white border border-slate-100 rounded-2xl px-3.5 py-2.5 shadow-lg hidden md:flex items-center gap-2 ring-1 ring-black/5 animate-float" style={{ animationDelay: "1.5s", animationDuration: "5s" }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <span className="text-xs font-bold text-slate-800">All Systems Nominal</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
