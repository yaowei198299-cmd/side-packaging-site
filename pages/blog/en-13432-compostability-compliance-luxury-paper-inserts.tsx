import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Compostability Compliance: Navigating EN 13432 Standards for Sustainable Luxury Paper Inserts | Saide Packaging</title>
        <meta name="description" content="A technical guide to EN 13432 standards for biodegradable packaging and how to ensure compostability compliance for luxury paper inserts." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Compostability Compliance: Navigating EN 13432 Standards for Sustainable Luxury Paper Inserts
          </h1>
          <p className="text-xl text-gray-600">
            Meeting the rigorous requirements of European biodegradation standards to ensure 100% plastic-free luxury packaging.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p>
            As global environmental regulations tighten, luxury brands are transitioning from traditional plastic and foam inserts to sustainable paper-based alternatives. However, simply being "paper" does not guarantee compostability. To meet the <strong>EN 13432 standard</strong>, packaging components must undergo rigorous testing to prove they break down safely in industrial composting environments.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The EN 13432 Technical Framework</h2>
          <p>
            EN 13432 is the harmonized European standard for packaging recoverable through composting and biodegradation. For a paper insert to be certified, it must satisfy four main criteria: biodegradation, disintegration, absence of negative effects on the composting process, and low levels of heavy metals.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8">
            Biodegradation Rate (%) = (CO2_test / CO2_theoretical) × 100
          </div>
          <p className="text-sm text-center text-gray-500 italic">
            Certification requires reaching 90% biodegradation within 6 months under controlled composting conditions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Compliance Checklist for Sustainable Inserts</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-3 text-left">Requirement</th>
                  <th className="border border-gray-200 p-3 text-left">Test Metric</th>
                  <th className="border border-gray-200 p-3 text-left">Compliance Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">Biodegradability</td>
                  <td className="border border-gray-200 p-3">CO2 Evolution</td>
                  <td className="border border-gray-200 p-3">90% in {"<"} 180 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Disintegration</td>
                  <td className="border border-gray-200 p-3">Fragment Size ({">"}2mm)</td>
                  <td className="border border-gray-200 p-3">{"<"} 10% after 12 weeks</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Ecotoxicity</td>
                  <td className="border border-gray-200 p-3">Plant Growth Test</td>
                  <td className="border border-gray-200 p-3">{">"} 90% of control</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Heavy Metals</td>
                  <td className="border border-gray-200 p-3">ICP-MS Analysis</td>
                  <td className="border border-gray-200 p-3">Below EN 13432 Annex A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            At Saide Packaging, we specialize in engineering high-end paper inserts that use FSC-certified fibers and biodegradable soy-based inks. Our 4x3x1.25" jewelry box inserts are designed to provide the same protective qualities as foam while ensuring full compliance with EN 13432, allowing brands to confidently communicate their sustainability commitments.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Need 12H Dieline Support?</h3>
            <p className="mb-4">Get sustainable, EN 13432-compliant dieline designs for your paper inserts within 12 hours. We help you transition to plastic-free packaging without sacrificing structural integrity.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Design My Sustainable Inserts
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Transition to Eco-Friendly Packaging</h2>
          <InquiryForm productTitle="Sustainable EN 13432 Paper Inserts" />
        </div>
      </article>
    </div>
  );
}
