'use client';

import { Eye, Briefcase, Building, Target } from 'lucide-react';

interface WhoYoullReachSectionProps {
  onOpenModal: () => void;
}

export default function WhoYoullReachSection({ onOpenModal }: WhoYoullReachSectionProps) {
  return (
    <section className="py-32 px-6 bg-white" id="audience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase text-purple-600">
            <Eye className="w-3 h-3" />
            TARGET AUDIENCE
            <Eye className="w-3 h-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            WHO YOU'LL{' '}
            <span style={{
              background: 'linear-gradient(to right, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              REACH
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with decision-makers actively shaping marketing strategy and driving growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-purple-200 transition-all duration-300">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-100 to-pink-100"
              >
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">CMO/VP Marketing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                C-suite marketing leaders with decision-making authority and strategic influence over marketing initiatives and budget.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-pink-200 transition-all duration-300">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-pink-100 to-purple-100"
              >
                <Building className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">Demand Gen Leaders</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                VP+ growth executives driving pipeline generation, ABM programs, and revenue acceleration strategies.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 group-hover:border-purple-200 transition-all duration-300">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-100 to-pink-100"
              >
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">Field Marketing Directors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Regional and field marketing leaders executing high-impact events, campaigns, and local market strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
          <div className="relative bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-black mb-2">80%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">C-Level & VP+</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black mb-2">$100M+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Avg Company Revenue</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black mb-2">B2B Tech</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Primary Focus</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black mb-2">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 text-white font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-right-bottom shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-400/30"
          >
            <span>Connect With Decision Makers</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
