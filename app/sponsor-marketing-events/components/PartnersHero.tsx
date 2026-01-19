'use client';

import { Handshake, ArrowRight, Target } from 'lucide-react';

interface PartnersHeroProps {
  onOpenModal: () => void;
  onScrollToTiers: () => void;
}

export default function PartnersHero({ onOpenModal, onScrollToTiers }: PartnersHeroProps) {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#9333ea_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />

        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '10%', top: '15%', animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '25%', top: '35%', animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '40%', top: '25%', animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '60%', top: '45%', animationDelay: '1.5s', animationDuration: '4.5s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '75%', top: '20%', animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '85%', top: '60%', animationDelay: '2.5s', animationDuration: '3.5s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '20%', top: '70%', animationDelay: '0.8s', animationDuration: '4.2s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '50%', top: '80%', animationDelay: '1.2s', animationDuration: '3.8s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '70%', top: '75%', animationDelay: '1.8s', animationDuration: '4.5s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '15%', top: '50%', animationDelay: '2.2s', animationDuration: '3.2s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '90%', top: '40%', animationDelay: '0.3s', animationDuration: '4.8s' }} />
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ background: 'rgba(168,85,247,0.4)', left: '35%', top: '10%', animationDelay: '2.7s', animationDuration: '3.3s' }} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center bg-black border border-purple-500/50 text-purple-300 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Handshake className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-2 sm:mr-3" />
              STRATEGIC PARTNERSHIPS
              <Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-2 sm:ml-3" />
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">PARTNER WITH</span>
              <span className="block mt-1 sm:mt-2">
                <span className="inline-block" style={{
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  MARKETVERSE
                </span>
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Connect with CMOs, VPs of Marketing, and demand gen leaders through solution-oriented content and exclusive community experiences.
              Build your pipeline with strategic partnerships that accelerate your market reach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto my-8 sm:my-12 px-4 sm:px-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black border border-purple-500/30 rounded-xl p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">1,000+</div>
                  <div className="text-[10px] sm:text-xs text-purple-300 font-semibold uppercase tracking-wider">Marketing Leaders</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black border border-pink-500/30 rounded-xl p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-black text-purple-400 mb-1">4</div>
                  <div className="text-[10px] sm:text-xs text-pink-300 font-semibold uppercase tracking-wider">Partnership Tiers</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black border border-purple-500/30 rounded-xl p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-[10px] sm:text-xs text-purple-300 font-semibold uppercase tracking-wider">Value Focused</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center px-4 sm:px-0">
              <button
                onClick={onOpenModal}
                className="group px-10 py-5 text-white font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl tracking-wider uppercase bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-right-bottom border border-purple-400/30"
              >
                <span className="flex items-center justify-center gap-2">
                  REQUEST INFO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
