// src/components/CTA.tsx

import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        
        {/* Dark CTA Container */}
        <div className="relative bg-[#080F1A] border border-white/8 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden shadow-2xl">
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

          {/* Tech grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none tech-grid-bg"
          />

          {/* Gradient border line at top */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300 tracking-widest uppercase shadow-[0_0_16px_rgba(59,130,246,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              No Credit Card Required
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to transform your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(59,130,246,0.3)]">
                development workflow?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
              Join over 5,000 forward-thinking companies already using Buildhub to scale their dreams. Start for free — no credit card required.
            </p>
            
            {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
              <Link
                to="/contact"
                className="relative bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-8 py-4 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Start Building Now
              </Link>
              <Link
                to="/contact"
                className="border border-white/15 bg-white/5 hover:bg-white/10 text-white text-center font-semibold px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Subtle trust note */}
            <p className="text-xs text-slate-600 mt-1 font-mono">
              Free forever plan · No setup fees · Deploy in under 60s
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;
