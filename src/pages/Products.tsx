// src/pages/Products.tsx

import { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [activeTab, setActiveTab] = useState("compute");

  const productsList = {
    compute: {
      title: "Edge Compute",
      badge: "Serverless",
      headline: "Run code close to your users without cold starts.",
      description:
        "Deploy lightweight JS/TS/Wasm functions across our 24 edge regions instantly. Experience automatic horizontal scaling, zero server maintenance, and sub-15ms cold start times.",
      features: [
        "V8 sandbox isolation for absolute security",
        "Supports standard Web APIs and npm modules",
        "Integrated edge Key-Value storage access",
        "CPU allocation autoscales up to 4 Cores per sandbox",
      ],
      stat: "12ms",
      statLabel: "Average Edge Latency",
      color: "from-blue-500 to-indigo-600",
      glowColor: "rgba(59,130,246,0.2)",
      iconColor: "text-blue-400",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    databases: {
      title: "Global Databases",
      badge: "Distributed SQL",
      headline: "Multi-region database replication with active-active setups.",
      description:
        "A distributed relational database engine that scales read/write performance globally. Get automatic cross-region failovers, consistent transactions, and scaling down to zero.",
      features: [
        "Active-active read replication globally",
        "PostgreSQL and MongoDB interface compatibility",
        "Zero-downtime schema migrations",
        "Automatic point-in-time recovery (PITR) backups",
      ],
      stat: "99.999%",
      statLabel: "Database Uptime SLA",
      color: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6,182,212,0.2)",
      iconColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    cdn: {
      title: "Smart CDN & Routing",
      badge: "Edge Delivery",
      headline: "Ultra-fast assets caching and smart traffic routing.",
      description:
        "Deliver static assets and media at lightning-fast speeds. Optimize compression formats on-the-fly and deploy intelligent Anycast DNS mapping for dynamic network routes.",
      features: [
        "Global Anycast DNS resolving under 8ms",
        "Brotli and WebP image optimization on-the-fly",
        "Custom SSL certificate provisioning (Let's Encrypt)",
        "Edge routing rules using wildcard redirects",
      ],
      stat: "24+",
      statLabel: "Anycast Edge Points",
      color: "from-teal-500 to-emerald-600",
      glowColor: "rgba(20,184,166,0.2)",
      iconColor: "text-teal-400",
      badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    },
    cli: {
      title: "CLI & DevTools",
      badge: "Developer Experience",
      headline: "Command-line tools built for rapid iteration loops.",
      description:
        "Test functions locally using exact edge environment matches. Push new versions via Git hooks, stream real-time logs directly to your shell, and analyze bottlenecks using the CLI dashboard.",
      features: [
        "Local sandbox replication offline",
        "CI/CD native GitHub Action runners integration",
        "Real-time console stdout stream filtering",
        "Config file setup via buildhub.yaml files",
      ],
      stat: "4.2s",
      statLabel: "Average Push-to-Live Time",
      color: "from-violet-500 to-purple-600",
      glowColor: "rgba(139,92,246,0.2)",
      iconColor: "text-violet-400",
      badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    },
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col gap-16 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Our Offerings
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Industrial-Grade{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Infrastructure Products
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Purpose-built tools designed to support your application at any scale, with absolute performance and control.
          </p>
        </div>

        {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-2xl max-w-xl mx-auto">
          {Object.keys(productsList).map((key) => {
            const prod = productsList[key as keyof typeof productsList];
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? "bg-blue-600 text-white shadow-[0_2px_12px_rgba(59,130,246,0.3)]"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                }`}
              >
                {prod.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        {(() => {
          const activeProduct = productsList[activeTab as keyof typeof productsList];
          return (
            <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
              {/* Background glow for active tab */}
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{ background: activeProduct.glowColor }}
              />

              {/* Product Info (Left) */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left relative">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${activeProduct.badgeBg}`}>
                  {activeProduct.badge}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activeProduct.headline}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {activeProduct.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
                  {activeProduct.features.map((feature, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 shrink-0">
                        <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                      </div>
                      <span className="text-slate-700 text-xs font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="relative bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] transition-all cursor-pointer"
                  >
                    <span className="relative z-10">Deploy to Edge</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-center font-semibold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>

              {/* Product Stat Visualizer (Right) */}
              <div className="lg:col-span-5 relative w-full h-full min-h-[250px] flex items-center justify-center">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.color} rounded-2xl opacity-8 blur-2xl`}
                />
                <div className="bg-[#060F1E] border border-blue-500/12 rounded-2xl w-full p-8 text-center text-white relative shadow-[0_0_40px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center gap-2 overflow-hidden">
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${activeProduct.glowColor}, transparent 60%)` }}
                  />
                  <span className="text-slate-600 uppercase tracking-widest text-[10px] font-mono relative z-10">
                    Performance Metric
                  </span>
                  <span
                    className={`text-5xl font-extrabold tracking-tight font-mono my-2 relative z-10 ${activeProduct.iconColor}`}
                    style={{ textShadow: `0 0 30px ${activeProduct.glowColor.replace('0.2', '0.6')}` }}
                  >
                    {activeProduct.stat}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider relative z-10">
                    {activeProduct.statLabel}
                  </span>
                  <div className="w-full border-t border-blue-500/10 mt-6 pt-4 flex justify-between text-[10px] font-mono text-slate-600 relative z-10">
                    <span>STATUS: ACTIVE</span>
                    <span>REGION: GLBL</span>
                  </div>
                </div>
              </div>

            </div>
          );
        })()}

        {/* Feature Matrix / Comparison Table */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
          <div className="text-left flex flex-col gap-1">
            <h3 className="text-xl font-extrabold text-slate-900">Comparing Infrastructure Tiers</h3>
            <p className="text-xs text-slate-500 font-mono">Choose the optimal plan for your development needs.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                  <th className="py-4">Tier Feature</th>
                  <th className="py-4">Developer (Free)</th>
                  <th className="py-4 text-blue-400">Pro ($29/mo)</th>
                  <th className="py-4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                <tr className="hover:bg-white/2 transition-colors">
                  <td className="py-4 text-slate-300">Deployments Limit</td>
                  <td className="py-4">3 active projects</td>
                  <td className="py-4 text-blue-400">Unlimited projects</td>
                  <td className="py-4">Unlimited + Custom orgs</td>
                </tr>
                <tr className="hover:bg-white/2 transition-colors">
                  <td className="py-4 text-slate-300">Edge Cold Starts</td>
                  <td className="py-4">&lt; 50ms</td>
                  <td className="py-4 text-blue-400">&lt; 15ms</td>
                  <td className="py-4">0ms (Warm Sandboxes)</td>
                </tr>
                <tr className="hover:bg-white/2 transition-colors">
                  <td className="py-4 text-slate-300">Database Replication</td>
                  <td className="py-4">Single region</td>
                  <td className="py-4 text-blue-400">Dual region failover</td>
                  <td className="py-4">Global active-active</td>
                </tr>
                <tr className="hover:bg-white/2 transition-colors">
                  <td className="py-4 text-slate-300">Custom SSL Domains</td>
                  <td className="py-4">Included</td>
                  <td className="py-4 text-blue-400">Included + Wildcard</td>
                  <td className="py-4">Dedicated IP block support</td>
                </tr>
                <tr className="hover:bg-white/2 transition-colors">
                  <td className="py-4 text-slate-300">Uptime SLA</td>
                  <td className="py-4">Best effort</td>
                  <td className="py-4 text-blue-400">99.9% Uptime</td>
                  <td className="py-4">99.999% Dedicated SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;
