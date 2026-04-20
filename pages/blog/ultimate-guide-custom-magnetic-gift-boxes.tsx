import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const MinimalPost = () => {
  return (
    <div className="p-20">
      <Link href="/blog">← Back to Blog</Link>
      <h1 className="text-4xl font-black mt-10">The Ultimate Guide to Custom Magnetic Gift Boxes</h1>
      <p className="mt-5 text-xl">We are currently updating this guide with more luxury insights. Please check back in a few minutes.</p>
      <p className="mt-5">In the meantime, you can explore our other <Link href="/blog" className="text-blue-600 underline">Packaging Guides</Link>.</p>
    </div>
  );
};

export default MinimalPost;
