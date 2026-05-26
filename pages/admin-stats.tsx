import React from 'react';
import Head from 'next/head';

const DashboardPage = () => {
  const stats = [
    { label: "Total Impressions", value: "994", growth: "+12%", color: "text-blue-600" },
    { label: "Total Clicks", value: "3", growth: "Stable", color: "text-green-600" },
    { label: "Avg. Position", value: "10.6", growth: "Top 10 Near", color: "text-purple-600" },
    { label: "Indexed Pages", value: "14", growth: "Started", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <Head>
        <title>Intelligent Operations Dashboard | Saide Packaging</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase">Intelligent Stats Center</h1>
            <p className="text-gray-500 font-medium">Real-time Digital Asset Growth Monitoring</p>
          </div>
          <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-blue-600">
            ● SYSTEM ACTIVE: GEO AGENT RUNNING
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{s.label}</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-black ${s.color}`}>{s.value}</span>
                <span className="text-xs font-bold text-gray-400">{s.growth}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Progress */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-black uppercase mb-6 tracking-tight">Content Asset Inventory</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2 uppercase tracking-tighter">
                  <span>SEO Articles (Tier 2/3)</span>
                  <span>37 / 100</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[37%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2 uppercase tracking-tighter">
                  <span>Industry Solutions</span>
                  <span>6 / 6</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2 uppercase tracking-tighter">
                  <span>GEO Schema Deployment</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-black uppercase mb-6 tracking-tight text-blue-400">Agent Activity Log</h3>
            <div className="space-y-4 font-mono text-[11px] leading-relaxed opacity-80">
              <p><span className="text-blue-400">[2026-05-20]</span> Deployed ES & AR Language Channels.</p>
              <p><span className="text-blue-400">[2026-05-20]</span> Deployed GEO-Optimized JSON-LD.</p>
              <p><span className="text-blue-400">[2026-05-20]</span> Published Technical Whitepaper.</p>
              <p><span className="text-blue-400">[2026-05-20]</span> Scraped 50 US/CA Lead leads.</p>
              <p className="animate-pulse text-green-400">{" >> ANALYZING MARKET TRENDS..."}</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          Private Monitoring Interface · Side Packaging HK Limited · Internal Use Only
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
