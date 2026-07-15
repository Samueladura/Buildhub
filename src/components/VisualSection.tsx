// src/components/VisualSection.tsx

import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

function VisualSection() {
  const { ref: leftRef, inView: leftIn } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef, inView: rightIn } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div
          ref={leftRef}
          className={`lg:col-span-6 grid grid-cols-12 gap-4 relative reveal-left ${leftIn ? "in-view" : ""}`}
        >
          <div className="col-span-7 bg-white border border-slate-100 rounded-2xl p-5 shadow-md flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-700">Design System</span>
              <span className="text-[10px] text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded font-mono">v2.0</span>
            </div>
            <div className="flex gap-2">
              {["#3B82F6", "#06B6D4", "#8B5CF6", "#EC4899"].map((c) => (
                <div key={c} className="h-8 flex-1 rounded-lg" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p className="text-[10px] text-slate-500">Scalable component library with 48+ reusable UI elements.</p>
          </div>

          <div className="col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between items-start text-white min-h-[140px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined animate-float" style={{ animationDuration: "4s" }}>smartphone</span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Platform</p>
              <p className="text-sm font-bold tracking-tight text-white">iOS + Android</p>
            </div>
          </div>

          <div className="col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 shadow-[0_0_32px_rgba(59,130,246,0.3),0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-between items-start text-white min-h-[140px] hover:shadow-[0_0_48px_rgba(59,130,246,0.45)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-cyan-400/15 blur-xl" />
            <h4 className="text-3xl font-extrabold tracking-tight relative z-10 text-glow-blue">48+</h4>
            <div className="relative z-10">
              <p className="text-[10px] uppercase font-bold tracking-wider opacity-90">Projects Shipped</p>
              <p className="text-[9px] opacity-60 font-mono">Since 2021</p>
            </div>
          </div>

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
              <span className="material-symbols-outlined text-blue-400 text-3xl font-bold animate-float shadow-[0_0_16px_rgba(59,130,246,0.5)]" style={{ animationDuration: "3s" }}>public</span>
              <span className="font-bold text-[10px] text-slate-400 font-mono tracking-widest uppercase">Clients in 12 Countries</span>
            </div>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`lg:col-span-6 flex flex-col gap-6 items-start text-left reveal-right ${rightIn ? "in-view" : ""}`}
        >
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">How We Work</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            From Idea to Live Product
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> in Weeks, Not Months</span>
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-xl">
            We move fast without cutting corners. Our tight-knit team collaborates daily, so you get a finished product that meets every requirement — on time and on budget.
          </p>

          <ul className="flex flex-col gap-4">
            {[
              { label: "Discovery call and detailed project brief", delay: "delay-100" },
              { label: "Design mockups and interactive prototypes", delay: "delay-200" },
              { label: "Agile sprints with weekly client demos", delay: "delay-300" },
              { label: "QA, launch, and post-delivery support", delay: "delay-400" },
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

          <Link
            to="/contact"
            className="mt-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm inline-flex items-center gap-2 cursor-pointer group"
          >
            Start Your Project
            <span className="material-symbols-outlined text-sm text-blue-600 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default VisualSection;
