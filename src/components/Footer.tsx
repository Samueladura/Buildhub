// src/components/Footer.tsx

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#040810] text-slate-500 pt-16 pb-8 border-t border-blue-500/10 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        
        {/* Info Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-blue-500/20 rounded-full" />
              <img
                src={logo}
                alt="Buildhub Logo"
                className="h-8 w-auto relative drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
              />
            </div>
            <span
              className="text-xl font-extrabold text-white"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            >
              Build<span className="text-blue-400">hub</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Empowering developers with industrial-grade infrastructure and visionary tools since 2024.
          </p>
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 bg-green-500/8 border border-green-500/15 rounded-full px-3 py-1.5 w-fit shadow-[0_0_12px_rgba(34,197,94,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
            <span className="text-xs font-semibold text-green-400">All systems operational</span>
          </div>
        </div>

        {/* Platform Column */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Platform</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors duration-200">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-400 transition-colors duration-200">Products</Link></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Security</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Enterprise</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Company</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Partners</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Connect</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="mailto:hello@buildhub.io" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-mono text-xs">
                hello@buildhub.io
              </a>
            </li>
            <li className="flex gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 hover:bg-blue-500/15 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200">
                <span className="material-symbols-outlined text-sm">globe</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 hover:bg-blue-500/15 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200">
                <span className="material-symbols-outlined text-sm">code</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 hover:bg-blue-500/15 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200">
                <span className="material-symbols-outlined text-sm">chat_bubble</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 gap-4 relative">
        <div className="font-mono">
          © 2024 Buildhub Technologies Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Status</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
