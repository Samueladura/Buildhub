// src/pages/Contact.tsx

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "mobile",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Thanks! We'll review your project details and get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", service: "mobile", message: "" });
    }, 1200);
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 hover:border-blue-300 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors font-medium font-mono";

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col gap-14 relative">

        <div className="text-left flex flex-col gap-4">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Start a Project</span>
          <h1
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-2xl leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Tell us about your
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent"> next product</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
            Share your idea and timeline. We’ll respond within 24 hours with a tailored plan, team suggestion, and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

            {status.type && (
              <div
                className={`mb-6 p-4 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {status.type === "success" ? "check_circle" : "error"}
                </span>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, and any specific requirements..."
                  rows={5}
                  className={inputClass + " resize-none"}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer max-w-xs overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Project Brief
                      <span className="material-symbols-outlined text-sm font-bold">send</span>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5 text-left w-full">

            <div className="bg-white border border-slate-100 p-7 rounded-3xl shadow-sm flex flex-col gap-6">
              <h3 className="font-bold text-slate-800 text-lg">Contact Information</h3>

              <div className="flex flex-col gap-5">

                <div className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined font-bold text-lg">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email us</p>
                    <a href="mailto:hello@buildhub.io" className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors font-mono">
                      hello@buildhub.io
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined font-bold text-lg">groups</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Team Availability</p>
                    <p className="text-sm font-semibold text-slate-800">
                      Open for new projects
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined font-bold text-lg">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Response Time</p>
                    <p className="text-sm font-semibold text-slate-800">
                      Within 24 hours
                    </p>
                  </div>
                </div>

              </div>

              <div className="border-t border-slate-100 pt-5 flex flex-col gap-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Follow Our Work</span>
                <div className="flex gap-3">
                  {["globe", "code", "chat_bubble", "photo_camera"].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200"
                    >
                      <span className="material-symbols-outlined text-sm">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md text-white h-48 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_0.8px,transparent_0.8px)] bg-[size:10px_10px] opacity-30" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(59,130,246,0.12),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-32 h-32 rounded-full border border-blue-500/15 animate-ping" style={{ animationDuration: "2.5s" }} />
                <div className="absolute w-16 h-16 rounded-full border border-blue-400/25" />
                <div className="absolute w-8 h-8 rounded-full border border-blue-400/15" />
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.9)] z-10" />
              </div>
              <div className="absolute bottom-4 left-4 z-10 flex flex-col text-left">
                <span className="font-mono text-[9px] uppercase text-blue-400 tracking-wider">Studio</span>
                <span className="font-bold text-sm tracking-tight">Available Worldwide</span>
              </div>
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-2.5 py-1">
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-mono text-green-400"> accepting projects</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
