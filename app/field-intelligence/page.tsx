'use client';

import React, { useEffect } from 'react';
import { Zap, Mail, ArrowRight, Book } from 'lucide-react';
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
      <MagazineArticlesSection />
      <NewsletterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#ec4899_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center py-20 z-10">
        <div className="inline-block mb-8">
          <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-black border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Book className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Knowledge Archive</span>
            <Zap className="w-4 h-4 text-pink-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight relative">
          <span className="relative inline-block">
            Field Intelligence
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-bold">
          Unfiltered insights from leaders who are doing the work
        </p>
      </div>
    </section>
  );
}


function MagazineArticlesSection() {
  const articles = [
    {
      id: 'mimecast-aida-kamber',
      type: 'Strategy Archive',
      typeColor: 'purple',
      typeGradient: 'from-purple-600 via-pink-600 to-purple-600',
      title: 'Human-Centric Growth in the Age of AI: What Mimecast\'s Aida Kamber Is Building for 2026',
      subtitle: 'An interview with Aida Kamber, Vice President of Growth at Mimecast',
      image: '/humangrowthaiworld.png',
      href: '/field-intelligence/mimecast-aida-kamber'
    },
    {
      id: 'aerospike-gaurav-deshpande',
      type: 'Executive Briefing',
      typeColor: 'cyan',
      typeGradient: 'from-cyan-600 via-purple-600 to-cyan-600',
      title: 'From Predictive AI to Human-Guided Scale: Inside Aerospike\'s Global Marketing Strategy',
      subtitle: 'A conversation with Gaurav Deshpande, Chief Marketing Officer at Aerospike',
      image: '/aerospike-gaurav-deshpande.webp',
      href: '/field-intelligence/aerospike-gaurav-deshpande'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Latest Interviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep conversations with marketing leaders on what's working now
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.href}
              className="group relative block"
            >
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${article.typeGradient} border border-white/20 shadow-lg`}>
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{article.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-black mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {article.title}
                  </h3>

                  <p className="text-base text-gray-600 mb-4">
                    {article.subtitle}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                    <span className="text-sm font-bold text-gray-700">Read Interview</span>
                    <ArrowRight className="w-5 h-5 text-gray-700 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 border-2 border-gray-200 rounded-xl px-8 py-4">
            <p className="text-base text-gray-600 font-medium">
              More interviews coming soon
            </p>
          </div>
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
    <section id="newsletter-section" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Stay Informed</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            <span className="relative inline-block">
              Get Notified About New Interviews
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
