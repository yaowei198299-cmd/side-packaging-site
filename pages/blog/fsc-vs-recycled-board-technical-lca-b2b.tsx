import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>FSC vs. Recycled Board: A Technical Life-Cycle Analysis (LCA) for B2B Procurement Teams | Saide Packaging</title>
        <meta name="description" content="A technical comparison of FSC-certified virgin fiber versus 100% recycled board through Life-Cycle Analysis (LCA) for sustainable B2B packaging." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            FSC vs. Recycled Board: A Technical Life-Cycle Analysis (LCA) for B2B Procurement Teams
          </h1>
          <p className="text-xl text-gray-600">
            Decoding the carbon footprint of sustainable materials to meet 2026 B2B ESG compliance standards.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p>
            For B2B procurement teams, the choice between FSC-certified virgin fiber and 100% recycled board (PCW) is no longer just about price. As ESG reporting becomes mandatory, a <strong>Technical Life-Cycle Analysis (LCA)</strong> is required to justify material selection. While FSC ensures responsible forest management, recycled fiber often provides a lower initial carbon footprint, though with different structural properties.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The LCA Carbon Math</h2>
          <p>
            To accurately compare materials, Saide's engineering team uses a comprehensive LCA formula that accounts for the entire journey from fiber sourcing to factory gate.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8">
            Total CO2e = (M_fiber × EF_fiber) + (E_prod × EF_energy) + (T_trans × EF_trans)
          </div>
          <p>
            Where M_fiber is material mass, E_prod is energy consumed during production, and T_trans represents transportation distance. EF denotes the specific Emission Factors for each category.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Material Sustainability Matrix</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-3 text-left">Metric</th>
                  <th className="border border-gray-200 p-3 text-left">FSC Virgin Fiber</th>
                  <th className="border border-gray-200 p-3 text-left">100% Recycled PCW</th>
                  <th className="border border-gray-200 p-3 text-left">ESG Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">Carbon Index (GWP)</td>
                  <td className="border border-gray-200 p-3">1.2 kg CO2e/kg</td>
                  <td className="border border-gray-200 p-3">0.7 kg CO2e/kg</td>
                  <td className="border border-gray-200 p-3">Recycled Wins</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Fiber Length</td>
                  <td className="border border-gray-200 p-3">Long (High Strength)</td>
                  <td className="border border-gray-200 p-3">Short (Lower Tensile)</td>
                  <td className="border border-gray-200 p-3">FSC for Durability</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Water Usage</td>
                  <td className="border border-gray-200 p-3">Higher (Pulping)</td>
                  <td className="border border-gray-200 p-3">Lower (Re-pulping)</td>
                  <td className="border border-gray-200 p-3">Recycled Wins</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Choosing the right material requires balancing the low-carbon benefits of recycled fiber with the structural integrity of FSC virgin board, especially for complex designs like 4x3x1.25" magnetic closures. Saide provides detailed LCA reports for every custom order, empowering your brand with the data needed for corporate transparency.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Need 12H Dieline Support?</h3>
            <p className="mb-4">Our engineers can adjust dielines to account for the different thickness and tensile properties of recycled fiber. Get your technical CAD files in just 12 hours.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Request Sustainability Consultation
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Start Your LCA Audit</h2>
          <InquiryForm productTitle="LCA Sustainable Packaging" />
        </div>
      </article>
    </div>
  );
}
