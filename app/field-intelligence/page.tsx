'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Zap, FileText, Users, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function FieldIntelligencePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <DescriptionSection />
      <ContentTypesSection />
      <NewsletterSection />
    </div>
  );
}

function HeroSection() {
  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#ec4899_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center py-20 z-10">
        <div className="inline-block mb-8">
          <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-black border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Field Knowledge</span>
            <Zap className="w-4 h-4 text-pink-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight relative">
          <span className="relative inline-block">
            Field Intelligence
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-bold mb-12">
          Unfiltered insights from leaders who are doing the work
        </p>

        <div className="relative group inline-block mb-8 max-w-4xl">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
          <div className="relative bg-black rounded-2xl p-8 border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">Latest Interview</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 text-left">
              Human-Centric Growth in the Age of AI
            </h3>
            <p className="text-lg text-white/80 mb-6 text-left">
              A conversation with Aida Kamber, VP of Growth at Mimecast, on building global growth engines, LLM visibility, multi-threading buying groups, and scaling AI-powered personalization.
            </p>
            <a
              href="/field-intelligence/mimecast-aida-kamber"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300"
            >
              <span>Read Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DescriptionSection() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            What We're Building
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real insights from real leaders, packaged for maximum impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
              Interview Leaders
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We're going out and conducting interviews with marketing leaders who are actively executing in Growth, Demand Gen, and Field Marketing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-pink-500 transition-all duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
              Capture Insights
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our goal is to capture their real-world insights, strategies, and tactical approaches focused on the topics that matter most.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300">
            <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
              Easy to Digest
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Unfiltered perspectives packaged for quick consumption, from leaders who are doing the work every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentTypesSection() {
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
      badgeColor: 'border-purple-500/50 text-purple-300',
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
      badgeColor: 'border-pink-500/50 text-pink-300',
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
      badgeColor: 'border-cyan-500/50 text-cyan-300',
      accentColor: 'text-cyan-400',
      icon: FileText
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            <span className="relative inline-block">
              Content Series
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Three distinct series delivering tactical insights from marketing leaders
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {contentTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={type.id} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500`} />
                <div className={`relative bg-black rounded-2xl p-8 border-2 ${type.borderColor} shadow-[0_0_50px_${type.shadowColor}] group-hover:shadow-[0_0_80px_${type.shadowColor}] transition-all duration-500 h-full flex flex-col`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-bl-[2rem] border-l-2 border-b-2 border-purple-500/30" />
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400 rounded-tl" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-400 rounded-br" />

                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border ${type.badgeColor} mb-4 shadow-[0_0_15px_${type.shadowColor}] w-fit`}>
                    <div className={`w-2 h-2 rounded-full ${type.accentColor.replace('text-', 'bg-')} animate-pulse`} />
                    <span className="text-xs font-semibold uppercase tracking-wider">{type.badge}</span>
                  </div>

                  <div className="mb-4">
                    <Icon className={`w-12 h-12 ${type.accentColor} mb-4`} />
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

                  {type.id === 'strategy-archives' ? (
                    <div className="space-y-3">
                      <a
                        href="/field-intelligence/mimecast-aida-kamber"
                        className="relative group/inner block"
                      >
                        <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-xl blur opacity-30 group-hover/inner:opacity-60 transition duration-500`} />
                        <div className={`relative bg-gradient-to-r ${type.gradient} rounded-xl p-4 border ${type.borderColor} group-hover/inner:scale-105 transition-transform duration-300`}>
                          <p className="text-sm text-white font-bold text-center flex items-center justify-center gap-2">
                            Mimecast: Aida Kamber
                            <ArrowRight className="w-4 h-4 group-hover/inner:translate-x-1 transition-transform" />
                          </p>
                        </div>
                      </a>
                      <a
                        href="/field-intelligence/aerospike-gaurav-deshpande"
                        className="relative group/inner block"
                      >
                        <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-xl blur opacity-30 group-hover/inner:opacity-60 transition duration-500`} />
                        <div className={`relative bg-gradient-to-r ${type.gradient} rounded-xl p-4 border ${type.borderColor} group-hover/inner:scale-105 transition-transform duration-300`}>
                          <p className="text-sm text-white font-bold text-center flex items-center justify-center gap-2">
                            Aerospike: Gaurav Deshpande
                            <ArrowRight className="w-4 h-4 group-hover/inner:translate-x-1 transition-transform" />
                          </p>
                        </div>
                      </a>
                    </div>
                  ) : (
                    <div className="relative group/inner">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-xl blur opacity-30 group-hover/inner:opacity-60 transition duration-500`} />
                      <div className={`relative bg-black/50 rounded-xl p-4 border ${type.borderColor}`}>
                        <p className="text-xs text-white/60 text-center font-medium">
                          Content coming December 5, 2025
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const formRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '45377644',
          formId: '8c406883-84ce-4343-94fd-1f65237ff091',
          region: 'na1',
          target: '#field-intelligence-newsletter-form',
          css: ''
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="newsletter-section" className="py-32 bg-white relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Stay Informed</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            <span className="relative inline-block">
              Get Notified About New Interviews
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Be the first to read unfiltered insights from marketing leaders. New interviews released regularly.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />

          <div className="relative p-8 bg-black rounded-2xl border-2 border-purple-500/30 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.3)] hover:shadow-[0_0_80px_rgba(168,85,247,0.5)] transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/40" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-500/40" />

            <div
              id="field-intelligence-newsletter-form"
              ref={formRef}
              className="hubspot-form-wrapper"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
