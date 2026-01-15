import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] py-24 sm:py-32 md:py-40 text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
          Weilin Wang
        </h1>
        <p className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-700">
          Energy & Environmental Data Analyst
        </p>
        <p className="font-sans text-lg sm:text-xl text-[var(--accent)] font-medium">
          Python · GIS · Energy Systems
        </p>
        <p className="font-sans text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Turning complex energy & spatial data into decisions
        </p>
      </div>

{/* Updated to trigger a fresh build */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/materials/documents/my_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-[var(--foreground)] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          📄 Download Résumé
        </Link>
        <Link
          href="#projects"
          className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-[var(--foreground)] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          💼 View Projects
        </Link>
        <Link
          href="https://www.linkedin.com/in/wang-weilin/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-[var(--foreground)] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          🔗 LinkedIn
        </Link>
        <Link
          href="mailto:ww229@duke.edu"
          className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-[var(--foreground)] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          ✉️ Email
        </Link>
      </div>
    </section>
  );
};

export default Hero;