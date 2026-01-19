'use client';

import { Award, Eye, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface WhyPartnerSectionProps {
  onOpenModal: () => void;
}

export default function WhyPartnerSection({ onOpenModal }: WhyPartnerSectionProps) {
  const valueProps = [
    {
      icon: Eye,
      title: 'VISIBILITY',
      description: 'Connect with CMOs and marketing leaders shaping growth strategy.'
    },
    {
      icon: Lightbulb,
      title: 'THOUGHT LEADERSHIP',
      description: 'Position your team as trusted marketing innovation advisors.'
    },
    {
      icon: Target,
      title: 'TARGETED REACH',
      description: 'Engage the right marketing executives with curated messaging.'
    },
    {
      icon: TrendingUp,
      title: 'PIPELINE GROWTH',
      description: 'Build relationships that drive measurable marketing outcomes.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase text-purple-600">
            <Award className="w-3 h-3" />
            VALUE PROPOSITION
            <Award className="w-3 h-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            WHY{' '}
            <span style={{
              background: 'linear-gradient(to right, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              PARTNER
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            When you partner with MarketVerse, you're helping shape the future of B2B marketing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100"
                >
                  <prop.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-base font-bold text-black mb-3 uppercase tracking-wider">
                  {prop.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-gray-50 border-2 border-gray-200 rounded-2xl px-8 py-6">
              <p className="text-lg text-gray-600 max-w-3xl">
                Join the exclusive ecosystem where <span className="text-black font-bold">marketing technology providers</span> connect
                with <span className="text-black font-bold">marketing decision-makers</span> to shape the future of
                <span className="text-purple-600 font-bold"> B2B growth</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 text-white font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-right-bottom shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-purple-400/30"
          >
            <span>Build Your Marketing Pipeline</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
