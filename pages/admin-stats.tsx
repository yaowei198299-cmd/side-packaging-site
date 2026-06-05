import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { supabase } from '../lib/supabase';

const DashboardPage = () => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    { label: "Total Impressions", value: "994", growth: "+12%", color: "text-blue-600" },
    { label: "Total Clicks", value: "3", growth: "Stable", color: "text-green-600" },
    { label: "Avg. Position", value: "10.6", growth: "Top 10 Near", color: "text-purple-600" },
    { label: "New Inquiries", value: "0", growth: "Real-time", color: "text-orange-600" }
  ]);

  useEffect(() => {
    async function fetchInquiries() {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('inquiries')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(20);

        if (error) throw error;
        setInquiries(data || []);
        
        // Update New Inquiries stat
        const newStats = [...stats];
        newStats[3].value = (data?.length || 0).toString();
        setStats(newStats);

      } catch (err) {
        console.error('Error fetching inquiries:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchInquiries();
  }, []);

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

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
            <div className="space-y-4 font-mono text-[11px] leading-relaxed ">
              <p><span className="text-blue-400">[2026-06-05]</span> Database Integrated - Ready.</p>
              <p><span className="text-blue-400">[2026-06-05]</span> Localized content deployed.</p>
              <p className="animate-pulse text-green-400">MONITORING DB ENTRIES...</p>
            </div>
          </div>
        </div>

        {/* Inquiry List Section */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black uppercase tracking-tight">Recent Inquiries</h3>
              {loading && <span className="text-xs font-bold text-blue-500 animate-pulse uppercase">Refreshing...</span>}
           </div>

           {!process.env.NEXT_PUBLIC_SUPABASE_URL ? (
             <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl text-orange-700 text-sm font-medium">
                ⚠️ Database not connected. Please set <strong>NEXT_PUBLIC_SUPABASE_URL</strong> in Vercel.
             </div>
           ) : inquiries.length === 0 ? (
             <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest text-sm">
                No inquiries found yet.
             </div>
           ) : (
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400">
                         <th className="pb-4 px-4">Date</th>
                         <th className="pb-4 px-4">Contact</th>
                         <th className="pb-4 px-4">Company</th>
                         <th className="pb-4 px-4">Requirement</th>
                         <th className="pb-4 px-4">Status</th>
                      </tr>
                   </thead>
                   <tbody>
                      {inquiries.map((inq, idx) => (
                        <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                           <td className="py-5 px-4">
                              <span className="text-xs font-bold text-gray-500">{new Date(inq.created_at).toLocaleDateString()}</span>
                           </td>
                           <td className="py-5 px-4">
                              <p className="text-sm font-black text-gray-900">{inq.name}</p>
                              <p className="text-[10px] font-bold text-gray-400">{inq.email}</p>
                           </td>
                           <td className="py-5 px-4">
                              <p className="text-xs font-bold text-gray-600">{inq.company || 'N/A'}</p>
                              <p className="text-[10px] font-bold text-gray-400 uppercase">{inq.country}</p>
                           </td>
                           <td className="py-5 px-4">
                              <p className="text-xs font-bold text-gray-700 truncate max-w-[200px]">{inq.message}</p>
                              <p className="text-[10px] font-bold text-blue-600 uppercase">Qty: {inq.quantity}</p>
                           </td>
                           <td className="py-5 px-4">
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[9px] font-black uppercase tracking-widest">Received</span>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
           )}
        </div>

        <footer className="mt-24 text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          Private Monitoring Interface · Side Packaging HK Limited · Internal Use Only
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
