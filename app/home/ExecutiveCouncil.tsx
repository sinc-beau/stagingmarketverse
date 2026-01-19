'use client';

import { Users, ArrowRight } from 'lucide-react';

export default function ExecutiveCouncil() {

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#9333ea_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_49%,rgba(147,51,234,0.05)_50%,transparent_51%,transparent_100%)] bg-[length:100%_8px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black border border-purple-500/50 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Executive Council</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            The CMO Circle
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto font-semibold leading-relaxed mb-4">
            Marketverse is led by marketing leaders nationwide, helping steer content, shape agendas, and drive the future of marketing excellence.
          </p>

          <div className="inline-block px-6 py-3 bg-purple-500/20 border-2 border-purple-400/50 rounded-xl">
            <p className="text-lg font-bold text-purple-300 uppercase tracking-wider">
              Members Being Announced Soon
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="relative inline-block group/cta">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-40 group-hover/cta:opacity-60 transition duration-500" />
            <button className="relative px-10 py-5 bg-black text-white font-bold rounded-2xl border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] flex items-center gap-3 group">
              <span className="text-lg">Join the Executive Council</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
