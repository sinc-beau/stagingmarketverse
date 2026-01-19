'use client';

import { Users, Lightbulb, Shield, Zap } from 'lucide-react';

interface AboutSectionProps {
  onJoinClick?: () => void;
}

export default function AboutSection({ onJoinClick }: AboutSectionProps) {
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
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,_#9333ea_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-0 right-0 w-60 h-60 border-r-2 border-t-2 border-purple-500/20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 border-l-2 border-b-2 border-pink-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_49%,rgba(147,51,234,0.05)_50%,transparent_51%,transparent_100%)] bg-[length:100%_8px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            What is Marketverse?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-semibold leading-relaxed">
            After 10 years of connecting marketing and sales teams with their target accounts, SINC is giving back. Marketverse brings together Growth, Demand Gen, and Field marketers to share insights, strategies, and real-world tactics that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-black rounded-2xl p-8 border-2 border-purple-500/20 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-500">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-pink-500/30" />
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400 rounded-tl" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 relative z-10 border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight relative z-10">
                Content First
              </h3>
              <p className="text-white/70 font-medium leading-relaxed relative z-10">
                Deep-dive insights, case studies, and tactical guides from marketing practitioners.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-black rounded-2xl p-8 border-2 border-pink-500/20 overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_50px_rgba(236,72,153,0.4)] transition-all duration-500">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-pink-500/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-purple-500/30" />
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-pink-400 rounded-tl" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 relative z-10 border border-pink-400/30 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight relative z-10">
                Proven Strategies
              </h3>
              <p className="text-white/70 font-medium leading-relaxed relative z-10">
                Tactics that work today, shared by leaders actively in the arena.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-black rounded-2xl p-8 border-2 border-purple-500/20 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-500">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-pink-500/30" />
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400 rounded-tl" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 relative z-10 border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight relative z-10">
                Community Driven
              </h3>
              <p className="text-white/70 font-medium leading-relaxed relative z-10">
                Built by marketers, for marketers. Real insights from practitioners.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-black rounded-2xl p-8 border-2 border-pink-500/20 overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_50px_rgba(236,72,153,0.4)] transition-all duration-500">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-pink-500/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-purple-500/30" />
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-pink-400 rounded-tl" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 relative z-10 border border-pink-400/30 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight relative z-10">
                Implementation Focused
              </h3>
              <p className="text-white/70 font-medium leading-relaxed relative z-10">
                Skip theory. Get frameworks you can implement this week.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
          <div className="relative bg-black rounded-2xl p-12 border-2 border-purple-500/30 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-all duration-500">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            </div>
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-purple-400 rounded-tl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-pink-400 rounded-br" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                Insights from Marketing Leaders
              </h3>
              <p className="text-lg text-white/90 font-semibold leading-relaxed mb-8">
                Practical insights from Growth, Demand Gen, and Field marketing leaders who are executing today. We're here to give back to the community that trusted us for the past decade.
              </p>
              <button
                onClick={handleJoinClick}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] text-white font-bold rounded-xl hover:bg-right-bottom hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 border border-purple-400/30"
              >
                Join the Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
