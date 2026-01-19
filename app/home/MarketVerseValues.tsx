'use client';

import { Shield, Heart, Zap, Globe, Sparkles, Users, Target, Award } from 'lucide-react';
import { useState } from 'react';

interface MarketVerseValuesProps {
  onJoinClick?: () => void;
}

export default function MarketVerseValues({ onJoinClick }: MarketVerseValuesProps) {
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
  const values = [
    {
      icon: Shield,
      title: 'Trust & Confidentiality',
      description: 'Safe spaces for honest conversations about challenges, failures, and strategic pivots',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Authentic Connections',
      description: 'Meaningful relationships built on shared experiences and mutual respect',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Actionable Innovation',
      description: 'Practical insights and strategies you can implement immediately in your organization',
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'Inclusive Excellence',
      description: 'Diverse perspectives from marketing leaders across industries, company sizes, and backgrounds',
      color: 'green'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40" />
      <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-transparent to-black/20" />
      <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-transparent to-black/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white text-sm font-bold mb-6 border-2 border-black">
            <Sparkles className="w-4 h-4" />
            <span>What Drives Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every Marketverse experience and create an environment where marketing leaders thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-black hover:border-gray-400 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-black/10" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-black/10" />
              <div className="w-14 h-14 mx-auto mb-6 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <value.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-black text-black mb-4 tracking-tight text-center">
                {value.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-center">
                {value.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-black rounded-2xl p-12 border-2 border-black relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-60" />

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Users className="w-8 h-8 text-white" />
                <Target className="w-8 h-8 text-white" />
                <Award className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                Join a Community That Lives These Values
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Every Marketverse event, conversation, and connection is built on these foundations.
                Join marketing leaders who believe that trust, authenticity, innovation, and inclusion
                aren't just buzzwords—they're the keys to transformational leadership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleJoinClick}
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 border-2 border-white"
                >
                  Request Invitation
                </button>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
