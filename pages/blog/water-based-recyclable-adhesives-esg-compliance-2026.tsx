import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Green Chemistry in Packaging: Sourcing Water-Based Recyclable Adhesives for 2026 ESG Audit Compliance | Saide Packaging</title>
        <meta name="description" content="Technical guide on water-based recyclable adhesives for 2026 ESG audit compliance. Learn about green chemistry in luxury packaging." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Green Chemistry in Packaging: Sourcing Water-Based Recyclable Adhesives for 2026 ESG Audit Compliance
          </h1>
          <p className="text-xl text-gray-600">
            Transitioning from solvent-based to water-based adhesives. How the choice of glue affects the end-of-life recyclability of luxury rigid boxes.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p>
            As we approach the 2026 ESG (Environmental, Social, and Governance) reporting cycle, packaging materials are under intense scrutiny. While much focus is placed on paper and board, the "hidden" component—adhesives—can determine whether a luxury box is truly recyclable or destined for the landfill.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Glue Bonding Strength Formula</h2>
          <p>
            Switching to water-based adhesives requires careful calibration of bonding strength (S_bond) to ensure the paper laminate doesn't peel under varying humidity levels.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8">
            S_bond = (F_peel / W_sample) × C_viscosity
          </div>
          <p>
            Where F_peel is the force required to separate the laminate, W_sample is the width of the bonding area, and C_viscosity is the temperature-dependent viscosity constant of the water-based solution.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Adhesive Compliance Technical Specs</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-3 text-left">Property</th>
                  <th className="border border-gray-200 p-3 text-left">Solvent-Based (Old)</th>
                  <th className="border border-gray-200 p-3 text-left">Water-Based (2026 Spec)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">VOC Content</td>
                  <td className="border border-gray-200 p-3">High (300+ g/L)</td>
                  <td className="border border-gray-200 p-3">Ultra-Low (&lt; 50 g/L)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Recyclability</td>
                  <td className="border border-gray-200 p-3">Interferes with repulping</td>
                  <td className="border border-gray-200 p-3">100% Repulpable</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Curing Time</td>
                  <td className="border border-gray-200 p-3">Fast (2-4 hours)</td>
                  <td className="border border-gray-200 p-3">Medium (6-12 hours)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">ESG Compliance</td>
                  <td className="border border-gray-200 p-3">Non-Compliant</td>
                  <td className="border border-gray-200 p-3">Audit-Ready</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Preparing for the 2026 ESG Audit</h2>
          <p>
            Brands must now provide a Chain of Custody for every material component. By sourcing water-based adhesives, you not only reduce your scope 3 emissions but also ensure that your rigid boxes can be processed in standard municipal recycling facilities without the need for specialized de-inking or chemical separation.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Need 12H Dieline Support?</h3>
            <p className="mb-4">Transitioning to eco-friendly adhesives may require adjustments to your box assembly tolerances. Get a technical dieline update within 12 hours.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Request ESG Consultation
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Secure Your Compliance</h2>
          <InquiryForm productTitle="Eco-Friendly Adhesive Packaging" />
        </div>
      </article>
    </div>
  );
}
