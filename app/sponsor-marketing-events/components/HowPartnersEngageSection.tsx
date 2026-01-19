'use client';

import { Activity, Star, Zap, MessageSquare, Network, CheckCircle, Lightbulb } from 'lucide-react';

export default function HowPartnersEngageSection() {
  const engagementLevels = [
    {
      icon: Star,
      title: 'STRATEGIC PARTNERSHIP',
      description: 'Full partnership with year-round engagement',
      features: [
        'Annual thought leadership programs',
        'Executive advisory access',
        'Custom marketing research',
        'Premium brand positioning'
      ],
      iconColor: '#a855f7'
    },
    {
      icon: Zap,
      title: 'EVENT SPONSORSHIP',
      description: 'Sponsor specific forums and content series',
      features: [
        'Forum & event sponsorship',
        'Speaking opportunities',
        'Content distribution',
        'Lead generation programs'
      ],
      iconColor: '#ec4899'
    },
    {
      icon: MessageSquare,
      title: 'CONTENT COLLABORATION',
      description: 'Co-create thought leadership pieces',
      features: [
        'Research reports & studies',
        'Webinar hosting',
        'Panel participation',
        'Case study development'
      ],
      iconColor: '#a855f7'
    },
    {
      icon: Network,
      title: 'COMMUNITY ACCESS',
      description: 'Join CMO Circle and exclusive briefings',
      features: [
        'CMO roundtables',
        'Executive networking',
        'Demo presentations',
        'Solution showcases'
      ],
      iconColor: '#ec4899'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black" id="engagement">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase text-purple-400">
            <Activity className="w-3 h-3" />
            ENGAGEMENT MODEL
            <Activity className="w-3 h-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            HOW PARTNERS{' '}
            <span style={{
              background: 'linear-gradient(to right, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ENGAGE
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            Partnerships focus on delivering value—not pushing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {engagementLevels.map((level, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white/5 border-2 border-white/10 rounded-2xl p-8 group-hover:border-white/20 transition-all duration-300">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20"
                >
                  <level.icon className="w-7 h-7" style={{ color: level.iconColor }} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
                  {level.title}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {level.description}
                </p>

                <div className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: level.iconColor }} />
                      <span className="text-xs text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition duration-500" />
          <div className="relative bg-white/5 border-2 border-purple-500/50 rounded-3xl p-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Value-First Approach</h3>
                <Lightbulb className="w-6 h-6 text-pink-400" />
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
                Every touchpoint is built around valuable, solution-oriented content that positions your team as trusted marketing advisors and growth partners.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-base font-bold text-purple-400 mb-2">PROBLEM-FOCUSED</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Address marketing challenges</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-bold text-white mb-2">CURATED AUDIENCE</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Targeted CMO/VP invitations</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-bold text-pink-400 mb-2">THOUGHT LEADERSHIP</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Marketing innovation expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
