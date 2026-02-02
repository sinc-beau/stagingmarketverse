'use client';

import { ArrowRight, Users, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onJoinClick?: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const handleJoinClick = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      const element = document.getElementById('newsletter-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://45377644.fs1.hubspotusercontent-na1.net/hubfs/45377644/Marketverse/marketverse-hero-background.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 scanline pointer-events-none" />
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-purple-500/30" />
        <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-pink-500/30" />
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-pink-500/30" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-purple-500/30" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-white tracking-tighter glitch-text">
            MARKETVERSE
          </h1>

          <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-semibold leading-relaxed px-4">
            Access content, insights, and strategies from marketing leaders who are actively executing in Growth, Demand Gen, and Field Marketing
          </p>

          <div className="flex justify-center items-center gap-4 pt-8 flex-wrap">
            <button
              onClick={handleJoinClick}
              className="group px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border-2 border-white"
            >
              <span>Join Marketverse</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-12 sm:pt-16 max-w-5xl mx-auto px-2">
            <div className="relative group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white flex items-center justify-center relative z-10">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <div className="text-white relative z-10">
                <div className="text-xl sm:text-2xl font-black tracking-tight">Real-World</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium mt-1">Practitioner Content</div>
              </div>
            </div>

            <div className="relative group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-pink-500 transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white flex items-center justify-center relative z-10">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <div className="text-white relative z-10">
                <div className="text-xl sm:text-2xl font-black tracking-tight">Actionable</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium mt-1">Strategic Insights</div>
              </div>
            </div>

            <div className="relative group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white flex items-center justify-center relative z-10">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <div className="text-white relative z-10">
                <div className="text-xl sm:text-2xl font-black tracking-tight">Community</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium mt-1">Driven Resources</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
