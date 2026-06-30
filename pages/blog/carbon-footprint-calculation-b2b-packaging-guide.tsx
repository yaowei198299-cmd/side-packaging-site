import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Carbon Footprint Calculation: A Step-by-Step Guide for B2B Packaging Procurement | Saide Packaging</title>
        <meta name="description" content="A technical guide for B2B procurement teams on calculating the carbon footprint of custom packaging. Learn circular economy metrics and LCA basics." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <div className="text-blue-600 font-bold uppercase tracking-widest mb-4">Article #103</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Carbon Footprint Calculation: A Step-by-Step Guide for B2B Packaging Procurement Teams
          </h1>
          <p className="text-xl text-gray-600">
            Empowering procurement teams with the math needed to meet 2026 ESG compliance. Master the calculation of material and transport emissions.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p>
            As global regulations tighten, B2B packaging procurement teams are now responsible for the Life Cycle Assessment (LCA) of their custom boxes. Calculating the carbon footprint is the first step toward true circular economy integration.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Total Carbon Emission (TCE) Formula</h2>
          <p>
            To accurately report emissions, teams must combine material-level data with logistical distance. We provide our clients with the following engineering formula for TCE.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8">
            TCE = ∑(Material Weight * CO2 Factor) + (Transport Distance * Emission Rate)
          </div>
          <p>
            The CO2 Factor varies significantly between substrates. For example, 100% PCW (Post-Consumer Waste) paper has a factor 40% lower than virgin kraft paper. Precision engineering (like our 4x3x1.25" optimization) reduces the base Material Weight, providing a double benefit: lower cost and lower TCE.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Circular Economy Metrics for Procurement</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-3 text-left">Metric</th>
                  <th className="border border-gray-200 p-3 text-left">Description</th>
                  <th className="border border-gray-200 p-3 text-left">Target (2026 Compliance)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">Recyclability Rate</td>
                  <td className="border border-gray-200 p-3">% of material easily recycled in curbside bins</td>
                  <td className="border border-gray-200 p-3">&gt; 95%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Material Utilization</td>
                  <td className="border border-gray-200 p-3">Ratio of finished box weight to raw sheet weight</td>
                  <td className="border border-gray-200 p-3">&gt; 85%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Landed Carbon ROI</td>
                  <td className="border border-gray-200 p-3">Carbon offset achieved through shipping optimization</td>
                  <td className="border border-gray-200 p-3">Positive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Freight Cost Recovery and Carbon Savings</h2>
          <p>
            There is a direct correlation between freight cost recovery and carbon footprint reduction. By optimizing pallet density—especially for bulk imports of magnetic gift boxes—brands can reduce the number of shipments required, simultaneously lowering landed costs and transport emissions.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Build Your ESG Roadmap</h3>
            <p className="mb-4">Partner with Saide Packaging for data-backed ESG compliance. Get 12H Dieline Support and carbon footprint estimates for your project.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Get an ESG Audit
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Get a Quote for Your Project</h2>
          <InquiryForm productTitle="Carbon Footprint Audit" />
        </div>
      </article>
    </div>
  );
}
