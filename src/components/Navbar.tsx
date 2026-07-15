// src/components/Navbar.tsx

import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-semibold transition-all duration-200 py-1 ${
      isActive
        ? "text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_20px_rgba(0,0,0,0.06)] h-16"
          : "bg-white/80 backdrop-blur-md h-20"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-desktop flex items-center justify-between h-full">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <img
              src={logo}
              alt="Buildhub Logo"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
            />
          </div>
          <span
            className="font-extrabold tracking-tight text-slate-900 text-lg leading-none"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Build<span className="text-blue-600">hub</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/products", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="relative bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 shadow-[0_2px_12px_rgba(59,130,246,0.35)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.45)] cursor-pointer overflow-hidden group">
            <span className="relative z-10">Start a Project</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <button
          className="md:hidden w-9 h-9 flex flex-col gap-1.5 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3 shadow-lg">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/products", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex gap-3 pt-2 border-t border-slate-100">
            <Link to="/contact" className="flex-1 bg-blue-600 text-white text-center text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
