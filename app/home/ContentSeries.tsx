'use client';

import { FileText, Terminal, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContentSeries() {
  const contentTypes = [
    {
      id: 'strategy-archives',
      badge: 'Executive Series',
      title: 'Strategy Archives',
      description: 'Interviews with demand and growth leaders',
      details: 'Short-form interviews with Demand Gen leaders and CMOs sharing what\'s working right now. Unfiltered perspectives on strategies, tactics, and real results.',
      gradient: 'from-purple-600 via-pink-600 to-purple-600',
      borderColor: 'border-purple-500/30',
      shadowColor: 'rgba(168,85,247,0.3)',
      badgeColor: 'border-purple-500/50',
      dotColor: 'bg-purple-400',
      textColor: 'text-purple-300',
      accentColor: 'text-purple-400',
      icon: TrendingUp
    },
    {
      id: 'field-intel-reports',
      badge: 'Practitioner Series',
      title: 'Field Intel Reports',
      description: 'Interviews with field marketing leaders',
      details: 'Real stories and hard-won lessons from field marketing professionals in the trenches. Practical insights on events, ABM campaigns, and regional execution.',
      gradient: 'from-pink-600 via-purple-600 to-pink-600',
      borderColor: 'border-pink-500/30',
      shadowColor: 'rgba(236,72,153,0.3)',
      badgeColor: 'border-pink-500/50',
      dotColor: 'bg-pink-400',
      textColor: 'text-pink-300',
      accentColor: 'text-pink-400',
      icon: Users
    },
    {
      id: 'executive-briefings',
      badge: 'C-Suite Series',
      title: 'Executive Briefings',
      description: 'C-Suite content from CMOs of leading B2B tech companies',
      details: 'Strategic insights and forward-thinking perspectives from CMOs at the helm of leading B2B technology companies. High-level vision, market trends, and the future of marketing.',
      gradient: 'from-cyan-600 via-purple-600 to-cyan-600',
      borderColor: 'border-cyan-500/30',
      shadowColor: 'rgba(6,182,212,0.3)',
      badgeColor: 'border-cyan-500/50',
      dotColor: 'bg-cyan-400',
      textColor: 'text-cyan-300',
      accentColor: 'text-cyan-400',
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

        <div className="grid lg:grid-cols-3 gap-8">
          {contentTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div key={type.id} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse`} />
                <div className={`relative bg-black rounded-2xl p-8 border-2 ${type.borderColor} shadow-[0_0_50px_${type.shadowColor}] group-hover:shadow-[0_0_80px_${type.shadowColor}] transition-all duration-500 h-full flex flex-col`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-bl-[2rem] border-l-2 border-b-2 border-purple-500/30" />
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400 rounded-tl" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-400 rounded-br" />

                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border ${type.badgeColor} mb-4 shadow-[0_0_15px_${type.shadowColor}] w-fit`}>
                    <div className={`w-2 h-2 rounded-full ${type.dotColor} animate-pulse`} />
                    <span className={`text-xs font-semibold ${type.textColor} uppercase tracking-wider`}>{type.badge}</span>
                    <div className={`w-2 h-2 rounded-full ${type.dotColor} animate-pulse`} style={{ animationDelay: '0.5s' }} />
                  </div>

                  <div className="mb-4">
                    <Icon className={`w-12 h-12 ${type.accentColor}`} />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight relative">
                    <span className="relative inline-block">
                      {type.title}
                      <div className={`absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r ${type.gradient}`} />
                    </span>
                  </h3>

                  <p className="text-base text-white/80 font-semibold mb-4">
                    {type.description}
                  </p>

                  <p className="text-sm text-white/70 leading-relaxed mb-6 flex-grow">
                    {type.details}
                  </p>

                  <Link href="/field-intelligence">
                    <Button className={`w-full bg-gradient-to-r ${type.gradient} bg-[length:200%_100%] hover:bg-right-bottom hover:shadow-[0_0_30px_${type.shadowColor}] hover:scale-105 text-white font-bold rounded-lg h-12 transition-all duration-500 border border-purple-400/30`}>
                      Explore Series
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
