import React from 'react';
import Head from 'next/head';
import InquiryForm from '../../components/InquiryForm';

export default function Article() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Board Yield Optimization: How Ganging 4x3x1.25" Rigid Boxes Reduces Material Scrap by 12.5% | Saide Packaging</title>
        <meta name="description" content="Learn how precision ganging and board yield optimization for 4x3x1.25 inch rigid boxes can significantly reduce material scrap and production costs." />
      </Head>
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
            Board Yield Optimization: How Ganging 4x3x1.25" Rigid Boxes Reduces Material Scrap by 12.5%
          </h1>
          <p className="text-xl text-gray-600">
            Maximizing material efficiency through precision dieline ganging and sheet-fed optimization for small-form luxury packaging.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-800">
          <p>
            In high-volume rigid box manufacturing, material cost typically accounts for 40-60% of the total unit price. For the popular 4x3x1.25" form factor, small inefficiencies in how dielines are arranged on a standard greyboard sheet can lead to significant material waste. By implementing advanced <strong>ganging techniques</strong>, we can optimize the "yield per sheet" and directly impact the project's bottom line.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Math of Board Yield Efficiency</h2>
          <p>
            Board yield optimization is a calculation of how much of the raw material ends up in the finished product versus the scrap bin. Our engineering team uses a specific formula to calibrate the layout of 4x3x1.25" boxes on standard 700x1000mm or 787x1092mm sheets.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl font-mono text-center my-8">
            Yield Efficiency (%) = ( (Total Area of Finished Dielines) / (Total Area of Raw Board Sheet) ) × 100
          </div>
          <p className="text-sm text-center text-gray-500 italic">
            By reducing the "gutter" between boxes from 15mm to 8mm through high-precision die-cutting, we achieve a 12.5% reduction in scrap.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Spec Table: Ganging Optimization</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-3 text-left">Optimization Metric</th>
                  <th className="border border-gray-200 p-3 text-left">Standard Layout</th>
                  <th className="border border-gray-200 p-3 text-left">Precision Ganging</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">Gutter Width (mm)</td>
                  <td className="border border-gray-200 p-3">15 mm</td>
                  <td className="border border-gray-200 p-3">8 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Boxes per 787x1092mm Sheet</td>
                  <td className="border border-gray-200 p-3">18 units</td>
                  <td className="border border-gray-200 p-3">21 units</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Material Scrap Rate</td>
                  <td className="border border-gray-200 p-3">22.5%</td>
                  <td className="border border-gray-200 p-3">10.0%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Unit Cost Impact</td>
                  <td className="border border-gray-200 p-3">Baseline</td>
                  <td className="border border-gray-200 p-3">-8.4%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            This 12.5% efficiency gain is not just about cost—it's also a critical component of sustainable manufacturing. Less scrap means less energy used in recycling and a smaller overall carbon footprint for the supply chain. For jewelry brands sourcing millions of boxes annually, these precision adjustments translate to massive savings and ESG wins.
          </p>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h3 className="text-xl font-bold mb-2">Need 12H Dieline Support?</h3>
            <p className="mb-4">Our engineers can provide optimized dieline layouts for your 4x3x1.25" boxes within 12 hours. Maximize your material yield and reduce production costs with our precision CAD services.</p>
            <a href="#inquiry-form" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Request Optimized Dielines
            </a>
          </div>
        </section>

        <div id="inquiry-form" className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Optimize Your Production Yield</h2>
          <InquiryForm productTitle="Precision Ganging for Rigid Boxes" />
        </div>
      </article>
    </div>
  );
}
