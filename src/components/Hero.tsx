// src/components/Hero.tsx

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const sparklineData = [20, 35, 28, 50, 42, 60, 55, 70, 65, 80, 72, 88];

function Sparkline({ data, color = "#3B82F6" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100;
  const h = 28;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-6 overflow-visible">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <circle cx={w} cy={h - ((data[data.length - 1] - min) / range) * h} r="2" fill={color} />
    </svg>
  );
}

function TrafficChart() {
  const data = [45, 52, 48, 65, 58, 72, 68, 80, 75, 88, 82, 95];
  const max = Math.max(...data);
  const w = 280;
  const h = 64;
  const barW = w / data.length;
  const points = data
    .map((v, i) => {
      const x = i * barW + barW / 2;
      const y = h - (v / max) * h;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <div className="relative w-full h-16">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polyline fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
        <polygon fill="url(#chartGrad)" points={areaPoints} />
      </svg>
    </div>
  );
}

function Hero() {
  const [activeSidebar, setActiveSidebar] = useState("Overview");
  const [displayedProjects, setDisplayedProjects] = useState([
    { id: "PRJ-1042", client: "Finova App", service: "Mobile Dev + UI/UX", status: "In Progress", deadline: "2 days", progress: 75 },
    { id: "PRJ-1041", client: "GreenLeaf Co.", service: "Website + Branding", status: "Review", deadline: "Today", progress: 90 },
    { id: "PRJ-1040", client: "HealthPulse", service: "Product Design", status: "In Progress", deadline: "5 days", progress: 45 },
  ]);

  const baseProjects = [
    { id: "PRJ-1042", client: "Finova App", service: "Mobile Dev + UI/UX", status: "In Progress", deadline: "2 days", progress: 75 },
    { id: "PRJ-1041", client: "GreenLeaf Co.", service: "Website + Branding", status: "Review", deadline: "Today", progress: 90 },
    { id: "PRJ-1040", client: "HealthPulse", service: "Product Design", status: "In Progress", deadline: "5 days", progress: 45 },
  ];

  const statusColor = {
    "In Progress": "bg-blue-400/10 text-blue-400 border-blue-400/25",
    Review: "bg-yellow-400/10 text-yellow-400 border-yellow-400/25",
    Done: "bg-green-400/10 text-green-400 border-green-400/25",
  };

  const sidebarItems = [
    { icon: "dashboard", label: "Overview" },
    { icon: "folder_open", label: "Projects" },
    { icon: "group", label: "Clients" },
    { icon: "receipt_long", label: "Invoices" },
    { icon: "bar_chart", label: "Analytics" },
    { icon: "settings", label: "Settings" },
  ];

  useEffect(() => {
    const sidebarInterval = setInterval(() => {
      setActiveSidebar((prev) => {
        const idx = sidebarItems.findIndex((item) => item.label === prev);
        const next = sidebarItems[(idx + 1) % sidebarItems.length];
        return next.label;
      });
    }, 2500);

    const projectInterval = setInterval(() => {
      setDisplayedProjects((prev) =>
        prev.map((p) => ({
          ...p,
          progress: Math.min(100, Math.max(5, p.progress + Math.floor(Math.random() * 7) - 3)),
        }))
      );
    }, 1800);

    return () => {
      clearInterval(sidebarInterval);
      clearInterval(projectInterval);
    };
  }, []);

  const liveProjects = displayedProjects.map((project) => {
    const base = baseProjects.find((b) => b.id === project.id);
    if (!base) return project;
    const daysLeft = project.deadline === "Today" ? 0 : project.deadline === "2 days" ? 2 : 5;
    const eta = new Date(Date.now() + daysLeft * 86400000);
    const timeString = eta.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    return { ...project, eta: timeString };
  });

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
      <div className="absolute inset-0 -z-10 tech-grid-bg opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.10),transparent)]" />
      <div className="absolute top-24 -right-32 w-96 h-96 -z-10 bg-blue-100/60 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 -z-10 bg-cyan-100/40 rounded-full blur-3xl opacity-80" />

      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Available for New Projects
          </div>

          <h1
            className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            We Build Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Products That Ship
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl font-normal">
            A freelance team of mobile developers, web developers, UI/UX designers, product managers, and social media managers. We turn your ideas into polished, client-ready digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="group relative bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-8 py-3.5 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] transition-all active:scale-95 duration-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start a Project
                <span className="material-symbols-outlined text-sm font-bold group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/products"
              className="bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 text-slate-700 hover:text-blue-600 text-center font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-95 duration-200"
            >
              View Our Work
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-2 pt-4 border-t border-slate-100 w-full sm:w-auto">
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
                  alt="Team Member"
                />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                +5
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">50+ Projects Delivered</p>
              <p className="text-xs text-slate-500">across 12 industries</p>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="lg:col-span-7 relative w-full">
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100/80 to-indigo-100/50 rounded-3xl blur-3xl -z-10" />

          <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl shadow-2xl text-slate-300 overflow-hidden select-none ring-1 ring-white/5 text-[11px] font-mono">
            <div className="bg-[#0F1520] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]/80" />
                </div>
                <span className="text-slate-500 text-[10px] ml-2 font-sans font-medium">Studio — Client Dashboard</span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-2.5 py-0.5 text-[10px] text-green-400 font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                LIVE
              </div>
            </div>

            <div className="flex min-h-[240px]">
              <div className="w-12 bg-[#080C14] border-r border-slate-800 flex flex-col items-center py-3 gap-1 shrink-0">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => setActiveSidebar(item.label)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${
                      activeSidebar === item.label
                        ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                        : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
                    }`}
                    title={item.label}
                  >
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                  </div>
                ))}
              </div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="bg-[#0F1520] border-b border-slate-800 px-4 py-2 flex items-center justify-between">
                  <div className="relative">
                    <span className="material-symbols-outlined text-slate-500 text-sm absolute left-2 top-1/2 -translate-y-1/2">search</span>
                    <input
                      type="text"
                      placeholder="Search projects, clients..."
                      className="bg-slate-900/50 border border-slate-700/50 rounded-lg pl-8 pr-3 py-1.5 text-[10px] text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 w-48"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-[9px] font-bold text-white">
                      ST
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Projects", value: "12", trend: "↑ 3", icon: "folder_open", color: "text-blue-400" },
                      { label: "This Month", value: "$24K", trend: "↑ 18%", icon: "payments", color: "text-green-400" },
                      { label: "Client NPS", value: "92", trend: "Top 5%", icon: "thumb_up", color: "text-cyan-400" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#0F1520] border border-slate-800/60 rounded-xl p-3 flex flex-col gap-1.5 hover:border-slate-700 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className={`material-symbols-outlined text-sm ${stat.color}`}>{stat.icon}</span>
                          <span className="text-[9px] text-green-400 font-medium">{stat.trend}</span>
                        </div>
                        <p className="text-slate-500 text-[9px] uppercase tracking-wider font-medium">{stat.label}</p>
                        <p className={`text-base font-bold ${stat.color}`}>{stat.value}</p>
                        <Sparkline data={sparklineData} color={stat.color.includes("blue") ? "#3B82F6" : stat.color.includes("green") ? "#22C55E" : "#06B6D4"} />
                      </div>
                    ))}
                  </div>

                  {/* Revenue Chart */}
                  <div className="bg-[#0F1520] border border-slate-800/60 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Monthly Revenue</p>
                        <p className="text-slate-500 text-[9px] mt-0.5">Client billings across all projects</p>
                      </div>
                      <div className="flex gap-1">
                        {["6M", "1Y"].map((period, i) => (
                          <span key={period} className={`px-2 py-0.5 rounded text-[9px] font-medium ${i === 1 ? "bg-blue-500/15 text-blue-400 border border-blue-500/25" : "text-slate-500 border border-transparent"}`}>{period}</span>
                        ))}
                      </div>
                    </div>
                    <TrafficChart />
                  </div>

                  {/* Active Projects Table */}
                  <div className="bg-[#0F1520] border border-slate-800/60 rounded-xl overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Active Projects</p>
                      <button className="text-[9px] text-blue-400 hover:text-blue-300 font-medium">View all</button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-slate-800/60 text-slate-500 text-[9px] uppercase tracking-wider">
                            <th className="px-4 py-2 font-medium">Project</th>
                            <th className="px-4 py-2 font-medium">Client</th>
                            <th className="px-4 py-2 font-medium">Service</th>
                            <th className="px-4 py-2 font-medium">Status</th>
                            <th className="px-4 py-2 font-medium">Deadline</th>
                            <th className="px-4 py-2 font-medium text-right">Progress</th>
                          </tr>
                        </thead>
                        <tbody className="text-[10px]">
                          {liveProjects.map((project) => (
                            <tr key={project.id} className="border-b border-slate-800/40 last:border-0 hover:bg-slate-800/20 transition-colors">
                              <td className="px-4 py-2.5 font-mono text-blue-400">{project.id}</td>
                              <td className="px-4 py-2.5 text-slate-300">{project.client}</td>
                              <td className="px-4 py-2.5 text-slate-500">{project.service}</td>
                              <td className="px-4 py-2.5">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[9px] font-medium ${statusColor[project.status as keyof typeof statusColor]}`}>
                                  <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: project.status === "In Progress" ? "#60a5fa" : "#facc15" }} />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: project.status === "In Progress" ? "#3b82f6" : "#eab308" }} />
                                  </span>
                                  {project.status}
                                </span>
                              </td>
                              <td className="px-4 py-2.5 text-slate-500">
                                <span className="flex flex-col">
                                  <span>{project.deadline}</span>
                                  <span className="text-[9px] text-slate-600">ETA {project.eta}</span>
                                </span>
                              </td>
                              <td className="px-4 py-2.5 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${project.progress}%` }} />
                                  </div>
                                  <span className="text-slate-400 font-mono w-8 text-right">{project.progress}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-xl hidden md:flex items-center gap-3 ring-1 ring-black/5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
              <span className="material-symbols-outlined text-lg">groups</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Team Size</p>
              <p className="text-sm font-bold text-slate-900">6 Specialists</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white border border-slate-100 rounded-2xl px-3.5 py-2.5 shadow-lg hidden md:flex items-center gap-2 ring-1 ring-black/5">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </div>
            <span className="text-xs font-bold text-slate-800">Open for Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
