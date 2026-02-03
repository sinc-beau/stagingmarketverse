'use client';

import { FileText, Terminal, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContentSeries() {
  const contentTypes = [
    {
      id: 'mimecast-aida-kamber',
      badge: 'Strategy Archive',
      title: 'Human-Centric Growth in the Age of AI: What Mimecast\'s Aida Kamber Is Building for 2026',
      description: 'An interview with Aida Kamber, Vice President of Growth at Mimecast',
      details: '',
      gradient: 'from-purple-600 via-pink-600 to-purple-600',
      borderColor: 'border-purple-500/30',
      shadowColor: 'rgba(168,85,247,0.3)',
      badgeColor: 'border-purple-500/50',
      dotColor: 'bg-purple-400',
      textColor: 'text-purple-300',
      accentColor: 'text-purple-400',
      image: '/humangrowthaiworld.png',
      href: '/field-intelligence/mimecast-aida-kamber',
      icon: TrendingUp
    },
    {
      id: 'aerospike-gaurav-deshpande',
      badge: 'Executive Briefing',
      title: 'From Predictive AI to Human-Guided Scale: Inside Aerospike\'s Global Marketing Strategy',
      description: 'A conversation with Gaurav Deshpande, Chief Marketing Officer at Aerospike',
      details: '',
      gradient: 'from-cyan-600 via-purple-600 to-cyan-600',
      borderColor: 'border-cyan-500/30',
      shadowColor: 'rgba(6,182,212,0.3)',
      badgeColor: 'border-cyan-500/50',
      dotColor: 'bg-cyan-400',
      textColor: 'text-cyan-300',
      accentColor: 'text-cyan-400',
      image: '/aerospike-gaurav-deshpande.webp',
      href: '/field-intelligence/aerospike-gaurav-deshpande',
      icon: FileText
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#ec4899_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-20 left-0 w-px h-40 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse" />
        <div className="absolute top-20 right-0 w-px h-40 bg-gradient-to-b from-transparent via-pink-500/50 to-transparent animate-pulse" />
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_49%,rgba(147,51,234,0.1)_50%,transparent_51%,transparent_100%)] bg-[length:100%_4px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-black border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">System Archives</span>
              <Zap className="w-4 h-4 text-pink-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight relative">
            <span className="relative inline-block">
              Field Intelligence
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-semibold">
            Unfiltered insights from leaders who are doing the work
          </p>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contentTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Link key={type.id} href={type.href} className="group relative block">
                <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500`} />
                <div className={`relative bg-black rounded-2xl border-2 ${type.borderColor} shadow-[0_0_50px_${type.shadowColor}] group-hover:shadow-[0_0_80px_${type.shadowColor}] transition-all duration-500 h-full flex flex-col overflow-hidden`}>
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${type.gradient} border border-white/20 shadow-lg`}>
                        <div className={`w-2 h-2 rounded-full bg-white`} />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{type.badge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {type.title}
                    </h3>

                    <p className="text-base text-white/70 mb-6 flex-grow">
                      {type.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm font-bold text-white/80">Read Interview</span>
                      <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
