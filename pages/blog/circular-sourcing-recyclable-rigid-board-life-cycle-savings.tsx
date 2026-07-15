import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Circular Sourcing: 100% Recyclable Rigid Board for 2026 Brands | Saide Packaging</title>
        <meta name="description" content="Learn how to calculate the life-cycle savings of 100% recyclable rigid board. A guide for 2026 brands focusing on circular sourcing and ESG compliance." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Circular Sourcing: Calculating the Life-Cycle Savings of 100% Recyclable Rigid Board for 2026 Brands
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Sustainability is now a financial imperative. We break down the math behind recycled rigid board to prove that circular sourcing delivers long-term brand equity and cost reduction.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p>
            As we approach 2026, global packaging regulations are shifting from "recommended" to "mandatory" recycled content. Circular sourcing—the practice of using materials that can be infinitely re-integrated into the production cycle—is the cornerstone of modern ESG strategy. For rigid box packaging, this means transitioning to 100% PCW (Post-Consumer Waste) greyboard.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">The Life-Cycle Cost (LCC) Formula</h2>
          <p>
            True packaging costs extend beyond the unit price. A Life-Cycle Cost analysis includes procurement, logistics, and the eventual disposal or recovery of the material. By using recyclable board, brands can offset Extended Producer Responsibility (EPR) fees.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8 text-blue-900 border border-gray-200">
            LCC = C<sub>p</sub> + C<sub>l</sub> + C<sub>d</sub> - (Y<sub>yield</sub> * P<sub>recycled</sub>)
          </div>
          <p className="text-sm text-gray-500 italic text-center">
            Where C<sub>p</sub> = Procurement, C<sub>l</sub> = Logistics, C<sub>d</sub> = Disposal/EPR, Y<sub>yield</sub> = Recyclable material yield, and P<sub>recycled</sub> = Value of recovered material.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Technical Spec Table: Recyclable Rigid Board vs. Virgin Board</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 p-3 text-left">Attribute</th>
                  <th className="border border-gray-200 p-3 text-left">100% Recycled Rigid Board</th>
                  <th className="border border-gray-200 p-3 text-left">Standard Virgin Board</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3 font-semibold">Post-Consumer Waste %</td>
                  <td className="border border-gray-200 p-3">100% (PCW)</td>
                  <td className="border border-gray-200 p-3">0%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-semibold">FSC/GRS Compliance</td>
                  <td className="border border-gray-200 p-3">Full Traceability</td>
                  <td className="border border-gray-200 p-3">Variable</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-semibold">Fiber Recovery Rate</td>
                  <td className="border border-gray-200 p-3">94.2% High-Yield</td>
                  <td className="border border-gray-200 p-3">70-80%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-semibold">Carbon Footprint Reduction</td>
                  <td className="border border-gray-200 p-3">~40% Lower (CO2e)</td>
                  <td className="border border-gray-200 p-3">Baseline</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Recyclability in the 4x3x1.25" Format</h2>
          <p>
            Small-format boxes like the 4x3x1.25" size are ideal candidates for 100% recycled materials because their structural requirements can be easily met with modern, high-density greyboard processing. By eliminating plastic laminates and using water-based inks, these boxes become fully curbside recyclable, aligning your brand with the circular economy.
          </p>
          
          <div className="mt-12 p-8 bg-green-50 border-l-8 border-green-600 rounded-r-xl">
            <h3 className="text-2xl font-bold mb-2 text-green-900">Future-Proof Your Packaging</h3>
            <p className="mb-6 text-green-800">Ensure your sustainable designs are production-ready. We provide 12H Dieline Support for all eco-friendly rigid box projects to optimize material yield and minimize waste.</p>
            <a href="#inquiry-form" className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition shadow-md">
              Get Eco-Dieline Support
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter text-gray-900">Sustainable Sourcing Consultation</h2>
          <InquiryForm productTitle="Recyclable Rigid Board Box" />
        </div>
      </article>
    </div>
  );
}
