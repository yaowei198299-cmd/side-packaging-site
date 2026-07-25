import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Logistics ROI Math: Calculating Freight Savings for Foldable Rigid Designs | Saide Packaging</title>
        <meta name="description" content="Calculate the ROI of collapsible rigid boxes vs non-foldable designs. Learn how structural engineering for custom magnetic boxes slashes air and ocean freight costs." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Logistics ROI Math: Calculating the Freight-Saving Potential of Foldable vs. Non-Foldable Rigid Designs
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Milestone Article 171: How collapsible structural engineering recovers 80% of wasted CBM volume for global e-commerce supply chains.
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <p>
            The biggest cost in <strong>custom mailer boxes</strong> and rigid gift sets isn't the material—it's the air inside them. For brands importing 4x3x1.25" boxes, the transition from fixed-shape to collapsible "foldable" designs represents a massive shift in landed cost efficiency.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Freight ROI Formula</h2>
          <p>
            To evaluate the viability of a design switch, we use the Freight ROI Math to calculate the percentage of shipping cost recovery:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8 text-gray-900">
            ROI_Freight = (V_assembled - V_folded) / V_assembled * 100
          </div>
          <p className="text-sm text-center text-gray-500 italic">
            Where V_assembled is the total shipping volume of fixed rigid boxes and V_folded is the volume of the same unit count in collapsible format.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Spec Table: Volume & Cost Delta (Per 5,000 Units)</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-900">
                <tr>
                  <th className="border border-gray-200 p-4 text-left font-black">Metric</th>
                  <th className="border border-gray-200 p-4 text-left font-black">Non-Foldable (Fixed)</th>
                  <th className="border border-gray-200 p-4 text-left font-black">Foldable (Collapsible)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">Total CBM</td>
                  <td className="border border-gray-200 p-4">12.5 CBM</td>
                  <td className="border border-gray-200 p-4">2.2 CBM</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">Pallet Count</td>
                  <td className="border border-gray-200 p-4">10 Pallets</td>
                  <td className="border border-gray-200 p-4">2 Pallets</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">Ocean Freight Est.</td>
                  <td className="border border-gray-200 p-4">$3,200 (LCL)</td>
                  <td className="border border-gray-200 p-4">$650 (LCL)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            While the unit price of a foldable <strong>magnetic gift box</strong> is slightly higher due to additional adhesive tape and structural creasing, the <strong>80%+ reduction in warehousing and shipping fees</strong> creates a net profit gain for brands scaling their DTC operations.
          </p>
          
          <div className="mt-12 p-8 bg-green-50 border-l-4 border-green-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Optimize Your Landed Cost</h3>
            <p className="mb-4">Stop paying to ship air. Let our engineers audit your box dimensions and provide 12H Dieline Support for a collapsible transition.</p>
            <a href="#inquiry-form" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Get Your ROI Audit
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Calculate Your Savings</h2>
          <InquiryForm productTitle="Foldable Rigid Box ROI Audit" />
        </div>
      </article>
    </div>
  );
}
