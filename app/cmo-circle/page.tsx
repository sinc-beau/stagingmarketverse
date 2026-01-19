'use client';

import { Navigation } from '@/components/Navigation';
import { Users, Megaphone, TrendingUp, Heart, ChevronRight, Award, MessageCircle, Edit } from 'lucide-react';
import { useEffect } from 'react';

export default function CMOCirclePage() {
  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "45377644",
          formId: "1bf8db24-f798-4395-8f84-5c10989204b1",
          target: "#hubspot-cmo-circle-form-container",
          region: "na1"
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
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <HeroSection onApplyClick={scrollToApplication} />
        <BenefitsSection />
        <ApplicationSection />
      </main>
    </div>
  );
}

function HeroSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#9333ea_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
          <Award className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-mono text-purple-400 uppercase tracking-wider">Marketverse Executive Council</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
          <span className="block text-white">
            The CMO Circle
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          An exclusive community of marketing leaders shaping the future of growth, demand generation, and go-to-market excellence.
        </p>

        <button
          onClick={onApplyClick}
          className="px-10 py-4 bg-purple-600 text-white font-bold text-lg rounded-xl hover:bg-purple-700 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-500 border border-purple-400/30 inline-flex items-center gap-2"
        >
          APPLY FOR THE COUNCIL
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Megaphone,
      title: 'Amplify Your Point of View',
      description: 'Shape the conversation on brand, demand, product marketing, and GTM. Share what works, cut through the noise.',
      howItWorks: [
        'Contribute to quarterly Field Notes and Playbooks',
        'Help set themes and working session topics',
        'Host lightning talks and executive teach-ins',
        'Join the editorial circle shaping community insights'
      ],
      outcomes: 'Thought leadership bylines, speaking opportunities, featured in Marketverse briefs, ready-to-ship content assets.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Users,
      title: 'Build Relationships with True Peers',
      description: 'A trusted circle of CMOs, VPs, and senior marketers where help travels fast and conversations stay real.',
      howItWorks: [
        'Curated 1:1 introductions tied to your active priorities',
        'Intimate salon dinners and executive roundtables',
        'Private member channels for quick asks and generous offers',
        'Opt-in peer councils for ongoing strategic exchange'
      ],
      outcomes: 'Peers you\'ll actually message next week, faster answers, stronger professional relationships.',
      color: 'from-pink-600 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Grow Personally and Professionally',
      description: 'Lead, teach, and learn while sharpening your craft and expanding your perspective.',
      howItWorks: [
        'Host campaign teardowns or mini strategy labs',
        'Moderate sessions and shape the community agenda',
        'Co-create practical templates others can implement',
        'Take on governance roles and help steer the community'
      ],
      outcomes: 'Speaking credits, portfolio pieces, streamlined processes, playbooks you can use Monday morning.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Heart,
      title: 'Champion the Next Generation',
      description: 'Offer guidance, open doors, and learn from rising marketers. Give and get perspective that keeps you sharp.',
      howItWorks: [
        'Host office hours and career development sessions',
        'Engage in reverse mentoring across specialties',
        'Judge member showcases and growth competitions',
        'Share hiring insights and talent pipeline opportunities'
      ],
      outcomes: 'Meaningful mentee relationships, stronger talent pipeline, lasting industry reputation.',
      color: 'from-cyan-600 to-purple-600'
    }
  ];

  const quickSummary = [
    { icon: MessageCircle, label: 'Connection', desc: 'Real peers and fast intros' },
    { icon: Edit, label: 'Insight', desc: 'Briefs, teardowns, working sessions' },
    { icon: TrendingUp, label: 'Growth', desc: 'Lead sessions, co-create playbooks' },
    { icon: Award, label: 'Stewardship', desc: 'Mentor and shape the community' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <div className="text-xs font-mono text-purple-600 tracking-wider mb-4">MEMBER BENEFITS</div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Why Join the Circle
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Practical value at the core, with connections and opportunities that matter.
          </p>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
                  <benefit.icon className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black rounded-2xl p-8 border-2 border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                  <h4 className="text-lg font-bold text-white mb-4">How it works:</h4>
                  <ul className="space-y-3 mb-6">
                    {benefit.howItWorks.map((item, idx) => (
                      <li key={idx} className="text-white/90 flex items-start text-base">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-lg font-bold text-white mb-3">What you get:</h4>
                    <p className="text-white/90 text-base leading-relaxed">{benefit.outcomes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-black rounded-3xl p-12 border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
              <h3 className="text-4xl font-black text-white text-center mb-16">In Four Beats</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {quickSummary.map((item, index) => (
                  <div
                    key={index}
                    className="text-center group/item"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <item.icon className="text-white w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-2">{item.label}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationSection() {
  return (
    <section id="application" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 text-center">
        <div className="text-xs font-mono text-purple-400 tracking-wider mb-4">JOIN THE CIRCLE</div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Apply for Membership
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Limited memberships available for qualified marketing leaders. Share your background and interests to request consideration.
        </p>

        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
          <div
            id="hubspot-cmo-circle-form-container"
            className="hubspot-form-wrapper"
          />
        </div>

        <p className="text-sm text-slate-500 mt-8">
          Membership is invitation-only and subject to approval by the Council
        </p>
      </div>
    </section>
  );
}
