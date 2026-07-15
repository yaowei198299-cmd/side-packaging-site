import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Supply Chain Mapping: A B2B Guide to FSC Chain-of-Custody (CoC) Certification | Saide Packaging</title>
        <meta name="description" content="A comprehensive B2B guide to FSC Chain-of-Custody (CoC) certification for global retailers. Learn how to map your supply chain for ESG compliance and sustainable packaging." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Supply Chain Mapping: A B2B Guide to FSC Chain-of-Custody (CoC) Certification for Global Retailers
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Navigating mandatory traceability and Forest Stewardship Council (FSC) compliance in the 2026 global retail landscape.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p className="font-sans">
            As global ESG regulations tighten, B2B procurement teams must look beyond simple "recyclable" labels. <strong>FSC Chain-of-Custody (CoC) certification</strong> has become the gold standard for verifying that paper and wood products originate from responsibly managed forests. For global retailers, mapping the supply chain from forest to final retail shelf is no longer optional—it is a prerequisite for market entry.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Calculating Recycled Content Accuracy</h2>
          <p>
            Under GRS and FSC standards, the calculation of recycled content must be verified through weight-based balance sheets. Procurement teams must audit the weight of recycled fibers against the total material weight to ensure compliance.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8">
            RC% = (W_recycled / W_total) × 100
          </div>
          <p className="text-sm text-center text-gray-500 italic">
            Where RC% is the recycled content percentage, W_recycled is the weight of verified recycled fiber, and W_total is the total weight of the finished board.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Spec Table: FSC/GRS Compliance Framework</h2>
          <div className="overflow-x-auto my-8 font-sans">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider">
                <tr>
                  <th className="border border-gray-200 p-4 text-left font-black">Certification Type</th>
                  <th className="border border-gray-200 p-4 text-left font-black">Verification Scope</th>
                  <th className="border border-gray-200 p-4 text-left font-black">Audit Frequency</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">FSC Mix</td>
                  <td className="border border-gray-200 p-4">Combination of virgin fiber (FSC) and recycled material.</td>
                  <td className="border border-gray-200 p-4">Annual Site Audit</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">FSC Recycled</td>
                  <td className="border border-gray-200 p-4">100% Post-consumer or pre-consumer reclaimed fibers.</td>
                  <td className="border border-gray-200 p-4">Quarterly Mass Balance</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">GRS (Global Recycled Standard)</td>
                  <td className="border border-gray-200 p-4">Traceability of recycled material + social/chemical requirements.</td>
                  <td className="border border-gray-200 p-4">Annual Site Audit</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold text-blue-600">PEFC</td>
                  <td className="border border-gray-200 p-4">Endorsement of national forest certification systems.</td>
                  <td className="border border-gray-200 p-4">Annual Site Audit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            At Saide Packaging, our <strong>12H Dieline Support</strong> includes FSC-certified material mapping. We provide B2B clients with the necessary CoC documentation to ensure their sustainable packaging meets the rigorous audits of the US and EU retail markets.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Need 12H Dieline Support?</h3>
            <p className="mb-4">Accelerate your sustainable packaging pivot with 12-hour CAD dieline support and FSC-certified material consultation. Ensure your B2B supply chain is fully mapped and compliant.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Request ESG Compliance Audit
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Consult on Your Sustainable Packaging Strategy</h2>
          <InquiryForm productTitle="FSC GRS Supply Chain Transparency" />
        </div>
      </article>
    </div>
  );
}
