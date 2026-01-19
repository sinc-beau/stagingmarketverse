'use client';

import { Target, TrendingUp } from 'lucide-react';

export default function AudienceSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40" />
      <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-black/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Built for Teams Who Execute
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where field marketers and demand gen leaders solve real problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative bg-white rounded-2xl p-10 border-2 border-black hover:border-emerald-500 transition-all duration-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-black/10" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-black/10" />
            <div className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-l from-black/10 to-transparent" />
            <div className="absolute bottom-1/3 left-0 w-16 h-px bg-gradient-to-r from-black/10 to-transparent" />

            <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-200">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tight">
              Field Marketing Teams
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Navigating the complexities of localized impact, limited resources, and regional execution challenges. Marketverse provides field marketers with proven strategies and peer insights.
            </p>
          </div>

          <div className="group relative bg-white rounded-2xl p-10 border-2 border-black hover:border-blue-500 transition-all duration-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-black/10" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-black/10" />
            <div className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-l from-black/10 to-transparent" />
            <div className="absolute bottom-1/3 left-0 w-16 h-px bg-gradient-to-r from-black/10 to-transparent" />

            <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-200">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tight">
              Demand and Growth Marketing Teams
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Facing rising competition, tighter budgets, and evolving attribution challenges. Marketverse delivers actionable tactics for pipeline generation and campaign optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
