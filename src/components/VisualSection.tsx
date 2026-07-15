// src/components/VisualSection.tsx

import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

function VisualSection() {
  const { ref: leftRef, inView: leftIn } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, inView: rightIn } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Visual Grid */}
        <div
          ref={leftRef}
          className={`lg:col-span-6 grid grid-cols-12 gap-4 relative reveal-left ${leftIn ? "in-view" : ""}`}
        >
          {/* Top-Left Card: Analytics Chart */}
          <div className="col-span-7 bg-white border border-slate-100 rounded-2xl p-5 shadow-md flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-700">CPU Usage</span>
              <span className="text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded font-mono">Normal</span>
            </div>
            <div className="h-24 w-full flex items-end justify-between pt-2 gap-1">
              {[20, 40, 35, 60, 90, 75, 45, 30, 50].map((h, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 hover:scale-y-110 origin-bottom ${
                    i === 4
                      ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                      : i === 5
                      ? "bg-blue-400/60"
                      : i >= 3
                      ? "bg-slate-600/40"
                      : "bg-slate-700/30"
                  }`}
                  style={{ height: `${h}%`, width: "8px" }}
                />
              ))}
            </div>
          </div>

          {/* Top-Right Card: Cloud Native */}
          <div className="col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between items-start text-white min-h-[140px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined animate-float" style={{ animationDuration: "4s" }}>cloud_done</span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Arch</p>
              <p className="text-sm font-bold tracking-tight text-white">Cloud Native</p>
            </div>
          </div>

          {/* Bottom-Left Card: 99% */}
          <div className="col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 shadow-[0_0_32px_rgba(59,130,246,0.3),0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-between items-start text-white min-h-[140px] hover:shadow-[0_0_48px_rgba(59,130,246,0.45)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-cyan-400/15 blur-xl" />
            <h4 className="text-3xl font-extrabold tracking-tight relative z-10 text-glow-blue">99%</h4>
            <div className="relative z-10">
              <p className="text-[10px] uppercase font-bold tracking-wider opacity-90">Efficiency Increase</p>
              <p className="text-[9px] opacity-60 font-mono">Infrastructure optimization</p>
            </div>
          </div>

          {/* Bottom-Right Card: Globe */}
          <div className="col-span-7 bg-[#FAFBFD] border border-slate-100 rounded-2xl p-5 shadow-md flex items-center justify-center min-h-[140px] relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <svg
              className="absolute inset-0 w-full h-full text-blue-500/15 pointer-events-none animate-spin-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="30" ry="10" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="10" ry="30" strokeWidth="0.5" />
            </svg>
            <div className="text-center z-10 flex flex-col gap-1 items-center">
              <span className="material-symbols-outlined text-blue-400 text-3xl font-bold animate-float shadow-[0_0_16px_rgba(59,130,246,0.5)]" style={{ animationDuration: "3s" }}>language</span>
              <span className="font-bold text-[10px] text-slate-400 font-mono tracking-widest uppercase">Global Nodes Connected</span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Checklist */}
        <div
          ref={rightRef}
          className={`lg:col-span-6 flex flex-col gap-6 items-start text-left reveal-right ${rightIn ? "in-view" : ""}`}
        >
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">Platform Architecture</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Designed for the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Next Generation
            </span>{" "}
            of Apps
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-xl">
            We've abstracted the complexity of traditional server management. Focus on your business logic while we handle the heavy lifting of orchestration, security, and global distribution.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-4">
            {[
              { label: "One-click global deployments across 24 regions", delay: "delay-100" },
              { label: "Automatic SSL and zero-day security patching", delay: "delay-200" },
              { label: "Predictable, transparent usage-based pricing", delay: "delay-300" },
            ].map(({ label, delay }, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 reveal ${delay} ${rightIn ? "in-view" : ""}`}
              >
                <div className="w-5 h-5 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center text-green-400 shrink-0">
                  <span className="material-symbols-outlined text-xs font-bold">check</span>
                </div>
                <span className="text-slate-700 text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="mt-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm inline-flex items-center gap-2 cursor-pointer group"
          >
            Start Free Trial
            <span className="material-symbols-outlined text-sm text-blue-600 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default VisualSection;
