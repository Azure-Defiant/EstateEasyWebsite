import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-gray-700 text-4xl font-light mb-16 text-center">Why Choose Estate Easy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group p-8 border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-gray-600 text-xl font-medium mb-3">3D Virtual Tours</h3>
            <p className="text-gray-600 leading-relaxed">Experience every detail of your future home from anywhere in the world.</p>
          </div>

          <div className="group p-8 border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-gray-600 text-xl font-medium mb-3">Premium Properties</h3>
            <p className="text-gray-600 leading-relaxed">Access to an exclusive collection of luxury properties in prime locations.</p>
          </div>

          <div className="group p-8 border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-gray-600 text-xl font-medium mb-3">Expert Guidance</h3>
            <p className="text-gray-600 leading-relaxed">Dedicated team of professionals to guide you through every step.</p>
          </div>
        </div>
      </div>
    </section>
  );
}