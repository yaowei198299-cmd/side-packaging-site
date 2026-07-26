import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>Sustainability ROI: Calculating the Carbon-Offset Value of 100% Recycled PCR Inserts | Saide Packaging</title>
        <meta name="description" content="Technical analysis of carbon-offset ROI for sustainable packaging. Calculate the environmental and financial impact of 100% PCR inserts for B2B brands." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 font-montserrat uppercase">
            Sustainability ROI: Calculating the Carbon-Offset Value of 100% Recycled Post-Consumer Waste (PCR) Inserts
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Article 178: Quantifying the transition from virgin plastics to circular material systems through LCA-driven carbon math.
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <p className="font-inter">
            As global retailers move toward 2026 circularity mandates, <strong>sustainable packaging</strong> is no longer just a marketing claim—it's a financial imperative. By replacing traditional EVA foam with <strong>100% Recycled Post-Consumer Waste (PCR) inserts</strong>, B2B brands can significantly reduce their Scope 3 emissions and avoid upcoming plastic packaging taxes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Carbon Savings Formula</h2>
          <p className="font-inter">
            Our LCA (Life Cycle Assessment) model calculates the net Carbon Savings (C_s) achieved by switching to PCR materials, factoring in energy offsets and waste diversion:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8 text-gray-900 border border-gray-100">
            C_s = (E_v - E_pcr) + (W_d * C_f)
          </div>
          <p className="text-sm text-center text-gray-500 italic font-inter">
            Where E_v is the carbon footprint of virgin material, E_pcr is the footprint of PCR material, W_d is the weight of diverted waste, and C_f is the landfill methane avoidance factor.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Technical Spec: PCR Material ROI Benchmarks</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-900 font-montserrat">
                <tr>
                  <th className="border border-gray-200 p-4 text-left font-black">Material Type</th>
                  <th className="border border-gray-200 p-4 text-left font-black">PCR Content (%)</th>
                  <th className="border border-gray-200 p-4 text-left font-black">Carbon Offset (kg CO2e/unit)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-inter">
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">Recycled Pulp Insert</td>
                  <td className="border border-gray-200 p-4">100% PCR</td>
                  <td className="border border-gray-200 p-4">0.85 kg CO2e</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">PCR Corrugated Tray</td>
                  <td className="border border-gray-200 p-4">70% PCR</td>
                  <td className="border border-gray-200 p-4">0.52 kg CO2e</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">Bio-Based Resin Insert</td>
                  <td className="border border-gray-200 p-4">30% Bio-Content</td>
                  <td className="border border-gray-200 p-4">0.38 kg CO2e</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-inter">
            For <strong>custom mailer boxes</strong> and high-volume <strong>jewelry boxes</strong>, the transition to PCR inserts offers a dual benefit: meeting 2026 circularity metrics and improving the "Green ROI" for shareholders. Saide Packaging's engineering team provides the data transparency needed for verifiable ESG reporting.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2 font-montserrat">Calculate Your Circular Impact</h3>
            <p className="mb-4 font-inter">Need precise carbon-offset data for your 2026 ESG audit? Get expert material ROI analysis and 12H Dieline Support for your sustainable transition.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition font-montserrat uppercase tracking-wider text-sm">
              Request 12H Dieline Support
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter font-montserrat uppercase">Start Your Sustainability Audit</h2>
          <InquiryForm productTitle="Sustainability ROI & PCR Inserts" />
        </div>
      </article>
    </div>
  );
}
