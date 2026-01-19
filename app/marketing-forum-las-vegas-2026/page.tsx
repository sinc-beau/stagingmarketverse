"use client"

import React, { useState, useEffect } from 'react';
import { TrendingUp, Calendar, MapPin, Users, Lightbulb, Network, Award, ChevronRight, Clock, CheckCircle2, Eye, Activity, Zap, Target, ChevronDown, ChevronLeft } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function VegasForumPage() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

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
          formId: "f815c330-eb18-4538-8e47-a9863ec58058",
          target: "#hubspot-vegas-form-container",
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
        <HeroSection />
        <MarketverseDifferenceSection />
        <ForumRegistrationSection />
        <VenueSection />
        <ExperienceTypesSection />
        <RealTalkSection />
        <WhyAttendSection />
        <AgendaHighlightsSection />
        <NetworkingSection />
        <PartnerSection onOpenModal={() => setIsPartnerModalOpen(true)} />
        <RegistrationSection />
      </main>
      {isPartnerModalOpen && <PartnerModal onClose={() => setIsPartnerModalOpen(false)} />}
    </div>
  );
}

function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,_#9333ea_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[100vw]">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">
                  Marketverse Forum 2026
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text">
                    National Field, Growth,
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text mt-2">
                    and Demand Gen
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
                    Leaders Forum
                  </span>
                </h1>

                <div className="flex flex-col gap-3 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-base font-semibold">October 11-13, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-base font-semibold">M Resort, Las Vegas, NV</span>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  Join 70+ Growth, Demand Gen, and Field Marketing Leaders for three days of strategic insights,
                  tactical sessions, and executive networking at the premier marketing leadership forum.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToRegistration}
                  className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 border border-purple-400/30 flex items-center justify-center gap-2"
                >
                  SECURE YOUR SPOT
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative">
                <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border-2 border-purple-500/30 overflow-hidden">
                  <img
                    src="/mvpanelhero.png"
                    alt="Marketverse Forum Panel Discussion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-purple-400">REGISTRATION OPEN</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 gap-3">
                  <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-purple-400 mb-1">70+</div>
                      <div className="text-[10px] sm:text-xs text-slate-300">Marketing Leaders</div>
                    </div>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm border border-pink-500/30 rounded-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-pink-400 mb-1">48</div>
                      <div className="text-[10px] sm:text-xs text-slate-300">Hours of Networking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyAttendSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reasons = [
    {
      title: 'Strategic Marketing Intelligence',
      description: 'Access cutting-edge growth strategies and demand gen tactics from marketing leaders who are actively driving results in today\'s market.',
      icon: Lightbulb,
    },
    {
      title: 'Executive Networking',
      description: 'Build relationships with vetted peers who understand your challenges. Share strategies and solutions in a confidential, trust-based environment.',
      icon: Network,
    },
    {
      title: 'Actionable Frameworks',
      description: 'Walk away with practical playbooks, tools, and strategies you can implement immediately to accelerate pipeline and drive revenue growth.',
      icon: Award,
    },
    {
      title: 'Peer Learning',
      description: 'Participate in roundtable discussions and problem-solving sessions focused on real-world challenges facing marketing leaders today.',
      icon: Users,
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono text-purple-400 tracking-wider mb-4">WHY ATTEND</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Elevate Your Marketing Strategy
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The Marketverse Forum isn't just another conference. It's where marketing leaders
              come to think critically, share openly, and leave with solutions that matter.
            </p>
            <button
              onClick={scrollToRegistration}
              className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 border border-purple-400/30 flex items-center gap-2"
            >
              REQUEST INVITATION
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-slate-300">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaHighlightsSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const agendaData = [
    {
      day: 'Saturday',
      date: 'October 11, 2025',
      sessions: [
        {
          time: '2:00 - 5:00 PM',
          title: 'FORUM REGISTRATION & WELCOME',
          synopsis: 'Get familiar with fellow attendees and the event layout. Secure your complimentary welcome package and learn how to maximize your forum experience.'
        },
        {
          time: '5:30 - 7:00 PM',
          title: 'MARKETVERSE WELCOME NETWORKING RECEPTION',
          synopsis: 'Connect with your marketing peers over appetizers and cocktails in a relaxed atmosphere.'
        },
        {
          time: '7:00 - 9:00 PM',
          title: 'NETWORKING DINNER',
          synopsis: 'Open seating dinner serving exceptional cuisine and creating opportunities for meaningful peer engagement before Day 1 sessions.'
        }
      ]
    },
    {
      day: 'Sunday',
      date: 'October 12, 2025',
      sessions: [
        {
          time: '7:00 - 7:55 AM',
          title: 'MARKETING LEADERS NETWORKING BREAKFAST',
          synopsis: 'Full breakfast and plenty of coffee to fuel your day!'
        },
        {
          time: '8:05 - 8:55 AM',
          title: 'PANEL - Growth at the Speed of Market',
          synopsis: 'Leading CMOs and VPs of Marketing discuss navigating the dual pressures of growth and efficiency, balancing emerging channels like AI-powered personalization with organizational shifts needed to stay competitive.'
        },
        {
          time: '9:05 - 9:35 AM',
          title: 'Mastering Account-Based Marketing in 2025',
          synopsis: 'Learn how leading B2B companies are leveraging intent data, orchestration, and personalization to drive pipeline from target accounts. Real tactics, real results.'
        },
        {
          time: '9:45 - 10:15 AM',
          title: 'WORKSHOP - Building a High-Performance Demand Engine',
          synopsis: 'A practical blueprint for building and sustaining a demand generation program that drives predictable revenue. Learn to optimize funnels, prioritize channels, and implement scalable growth strategies.'
        },
        {
          time: '10:35 - 11:05 AM',
          title: 'The CMO\'s New Frontier: Navigating AI in Marketing',
          synopsis: 'Examine how AI is transforming marketing - from content creation to predictive analytics. Explore how marketing leaders must evolve from campaign executors to strategic growth architects.'
        },
        {
          time: '11:55 - 12:40 PM',
          title: 'INTERACTIVE SESSION - Pipeline Crisis Simulation',
          synopsis: 'Experience a simulated pipeline shortfall scenario, taking on leadership roles during high-stakes decision-making. Navigate realistic challenges and leave with an actionable growth recovery toolkit.'
        },
        {
          time: '1:40 - 2:10 PM',
          title: 'FIRESIDE CHAT - Marketing ROI: Beyond Attribution',
          synopsis: 'Challenge traditional attribution models and learn how to demonstrate marketing\'s true business impact. Transform the conversation from cost center to revenue driver.'
        },
        {
          time: '3:00 - 3:50 PM',
          title: 'PANEL - Winning the Executive Suite',
          synopsis: 'Learn proven strategies for translating marketing metrics into business outcomes. Frame marketing investments in terms leadership cares about and shift conversations from tactical activities to strategic opportunities.'
        },
        {
          time: '4:40 - 5:30 PM',
          title: 'ROUNDTABLE - Marketing Leaders at the Breaking Point',
          synopsis: 'A candid session confronting the mental and operational toll of marketing leadership. Explore strategies for restoring focus, resilience, and effectiveness while maintaining strategic vision.'
        }
      ]
    },
    {
      day: 'Monday',
      date: 'October 13, 2025',
      sessions: [
        {
          time: '8:00 - 8:50 AM',
          title: 'MARKETING LEADERS NETWORKING BREAKFAST',
          synopsis: 'Full breakfast and plenty of coffee to fuel your final day!'
        },
        {
          time: '9:00 - 9:50 AM',
          title: 'PANEL - Breaking Silos: Should Marketing Report to Revenue?',
          synopsis: 'Seasoned marketing leaders who report outside traditional structures unpack how this shift changes visibility, influence, budget, and business impact. Explore the pros and cons of different reporting structures.'
        },
        {
          time: '10:00 - 10:30 AM',
          title: 'WORKSHOP - Content Strategy That Converts',
          synopsis: 'Move beyond thought leadership to content that actually drives pipeline. Learn frameworks for creating high-intent content that converts prospects at every stage.'
        },
        {
          time: '10:50 - 11:20 AM',
          title: 'WORKSHOP - Mastering Marketing Operations',
          synopsis: 'Learn how modern marketing ops enables growth at scale. Gain insights into tech stack optimization, data governance, and process automation that drives efficiency.'
        },
        {
          time: '11:30 - 12:00 PM',
          title: 'Scaling Field Marketing with Innovation',
          synopsis: 'Explore strategies for keeping field marketing programs aligned with rapid business growth. Adapt event strategies to modern buyer expectations and ensure programs deliver measurable ROI.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <div className="text-xs font-mono text-purple-600 tracking-wider mb-4">THREE DAYS OF IMPACT</div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Detailed Agenda
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            A carefully curated program designed to maximize learning, networking, and actionable outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {agendaData.map((day, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    <span className="text-2xl font-black text-black">{day.day}</span>
                  </div>
                  <p className="text-gray-600">{day.date}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-black transition-transform duration-300 ${
                    expandedDay === day.day ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedDay === day.day && (
                <div className="px-8 pb-8 space-y-6 border-t-2 border-black">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="pt-6">
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="text-sm text-purple-600 font-mono mb-2">{session.time}</div>
                          <h4 className="text-lg font-bold text-black mb-2">{session.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{session.synopsis}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NetworkingSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Curated</div>
                    <div className="text-slate-400">Attendee Selection</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <Network className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Structured</div>
                    <div className="text-slate-400">Networking Sessions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Confidential</div>
                    <div className="text-slate-400">Discussion Environment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-purple-400 tracking-wider mb-4">NETWORKING OPPORTUNITIES</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Connect with Your Peers
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Build lasting relationships with fellow marketing leaders who understand your challenges.
              Every attendee is vetted to ensure productive, high-level conversations.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              From structured roundtables to informal networking sessions, you'll have multiple
              opportunities to connect, share insights, and develop partnerships that extend beyond the forum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VenueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-purple-600 tracking-wider mb-4">VENUE & LOCATION</div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            M Resort
          </h2>
          <p className="text-3xl text-purple-600 font-bold">
            Las Vegas, Nevada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl" />
            <div className="relative h-[500px] bg-white rounded-2xl border-2 border-black overflow-hidden">
              <img
                src="/themresort.png"
                alt="M Resort Las Vegas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Experience world-class hospitality in Las Vegas. The M Resort provides the perfect setting
              for focused collaboration and networking with stunning views and modern amenities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div className="text-gray-700">
                  <strong className="text-black">Prime Location:</strong> Easy access to Las Vegas McCarran International Airport
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div className="text-gray-700">
                  <strong className="text-black">Modern Facilities:</strong> State-of-the-art meeting spaces and technology
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div className="text-gray-700">
                  <strong className="text-black">All-Inclusive:</strong> Accommodations, meals, and activities included
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
          Partnership Inquiry
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Connect with 70+ Growth and Demand Gen Leaders and showcase your solutions.
          Explore sponsorship opportunities that deliver real value and engagement.
        </p>
        <button
          onClick={onOpenModal}
          className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl border-2 border-purple-500 hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
        >
          LEARN ABOUT SPONSORSHIP
        </button>
      </div>
    </section>
  );
}

function ExperienceTypesSection() {
  return (
    <section className="py-24 relative bg-black">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <div className="text-xs font-mono text-purple-400 tracking-wider mb-4">IMMERSIVE EXPERIENCES</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Five Ways to Level Up
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Each forum combines multiple formats to deliver maximum value and actionable intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:row-span-2">
            <div className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative h-full bg-black rounded-2xl p-10 border-2 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.5)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-bl-[3rem] border-l-2 border-b-2 border-purple-500/30" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400 rounded-tl" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-400 rounded-br" />
                <div className="relative h-full flex flex-col">
                  <Eye className="w-14 h-14 text-purple-400 mb-6" />
                  <h3 className="text-4xl font-black text-white mb-4">Strategy Briefings</h3>
                <p className="text-xl text-slate-300 mb-6">
                  Receive cutting-edge marketing strategies directly from CMOs and growth leaders at leading companies.
                </p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-3 text-slate-400">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <span>Growth acceleration tactics</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Activity className="w-5 h-5 text-purple-400" />
                    <span>Real-time campaign insights</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <span>Conversion optimization strategies</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 h-full">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Executive Roundtables</h3>
              <p className="text-slate-300 mb-4">
                Closed-door peer discussions with Fortune 500 marketing leaders.
              </p>
              <div className="text-sm text-blue-400 font-mono">
                → Chatham House Rules Apply
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="group bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 h-full">
              <Zap className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Tactical Workshops</h3>
              <p className="text-slate-300 mb-4">
                Hands-on sessions with take-home playbooks and frameworks.
              </p>
              <div className="text-sm text-yellow-400 font-mono">
                → Immediate Implementation
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-6">
                <Target className="w-12 h-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Strategic Planning</h3>
                  <p className="text-slate-300 mb-4">
                    Executive sessions on emerging channels and marketing investments.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Executive Alignment</span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">ROI Frameworks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-6">
                <Activity className="w-12 h-12 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Live Case Studies</h3>
                  <p className="text-slate-300 mb-4">
                    Real campaign breakdowns with results and lessons learned.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Growth Campaigns</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">ABM Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealTalkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Nycole Walsh',
      title: 'Senior Manager, Digital Marketing and Revenue | Head of Research',
      company: 'Kickstand',
      content: `Y'all, I go to a lot of conferences. Some are networking frenzies, some are content firehoses. Some are…well, let's just say "good for the lanyard collection." But Marketverse really stuck the landing.

SINC USA brought together a truly curated group of senior marketers, kept us all in one place (Lost Pines in Austin, 10/10 no notes), and had everyone on the same content track. Which meant — for once — you didn't need to play Where's Waldo to meet people. You met everyone. And they were AWESOME. Like, "I want to be in a group chat with these people forever" awesome.

The content? No pitches, no vendor booths. Just actual insight. I walked away from every session with something actionable, useful, or slightly mind-blowing.`,
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7391237384924745728'
    },
    {
      name: 'Sheena Hakimian',
      title: 'Sr. Director Consumer Digital Marketing',
      company: 'Conde Nast',
      content: `I'm still buzzing from this week's Marketverse event in Austin!

Huge thank you to the entire SINC USA team for creating such a fun, collaborative, and engaging experience…and for inviting me to be part of it!

Over three days, I got to connect with 68 incredible marketers from across the country, and I'm walking away with new ideas, friendships, and a deeper sense of community (who doesn't need that these days?!).`,
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7391159904889180160'
    },
    {
      name: 'Melita Romero',
      title: 'Director Digital Marketing and Demand Gen',
      company: 'Williams Lea',
      content: `Marketing invites a lot of opinions, so it's an absolute treat to spend time with and learn from people who genuinely master the craft -- those who don't just talk theory, but deliver tangible results.

I thoroughly enjoyed the two days at Marketverse, gaining valuable insight from real-world use cases and candid discussions.`,
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7390052344136314880'
    },
    {
      name: 'Kirsten Anderson',
      title: 'Sr. Director Marketing Operations',
      company: 'Mercy Corps',
      content: `Earlier this week I attended Marketverse, hosted by SINC USA. It was a thoughtfully curated event that led to meaningful conversations with marketers from across the country, and from a wide variety of sectors.

The thing we had in common: shared challenges, shared frameworks, and lots of questions about AI and the future of marketing.

I left the event invigorated, feeling validated, and with many new friends from across the country.`,
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7390050614577152000'
    },
    {
      name: 'James McGill',
      title: 'CMO',
      company: 'Teradyne Robotics',
      content: `What an incredible experience presenting at SINC USA Marketverse 2025!

It was an honor to engage with a room full of talented individuals on my passion: cultivating high-performance teams that can thrive in complexity.

We covered a lot, from redefining customer-centricity for complex tech journeys to fostering real collaboration that (finally) breaks down silos. The energy and questions were fantastic.`,
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7389697804182601728'
    },
    {
      name: 'Rachel Kiwior',
      title: 'Director of Marketing',
      company: 'J.T. & Margaret Talkington College of Visual & Performing Arts',
      content: `What an incredible experience at my second Marketverse event hosted by SINC USA!

Thoughtfully curated sessions led to meaningful conversations with marketers from all over the country.

The SINC team gave us a true Texas experience with our favorite longhorn, Brisket, some amazing and thought provoking speakers, and new friends who understand the day to day challenges and successes of an ever changing marketing landscape.`,
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7389696009905430531'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            The Real Talk
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unfiltered experiences from marketing leaders who joined the conversation
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {visibleTestimonials.map((testimonial, idx) => {
              const actualIndex = currentIndex + idx;
              return (
                <div
                  key={actualIndex}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedTestimonial(actualIndex)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                  <div className="relative bg-white border-2 border-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-8 h-8 text-black mb-4 flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    <div className="relative flex-1 mb-6">
                      <p className="text-gray-700 leading-relaxed font-medium line-clamp-6">
                        {testimonial.content}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    </div>

                    <div className="mt-auto pt-4 border-t-2 border-black">
                      <h3 className="text-lg font-black text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-bold text-gray-700 mt-1">
                        {testimonial.title}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>

                    <button className="mt-4 text-sm text-black font-bold hover:underline text-left">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className="p-3 rounded-xl border-2 border-black bg-white hover:bg-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-black group-hover:text-white" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * 3)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === idx
                      ? 'w-8 bg-black'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial set ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              disabled={currentIndex + 3 >= testimonials.length}
              className="p-3 rounded-xl border-2 border-black bg-white hover:bg-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-black group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {selectedTestimonial !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white rounded-2xl border-2 border-black max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 p-2 rounded-xl border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-12 h-12 text-black mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="text-gray-700 text-lg leading-relaxed font-medium mb-8 whitespace-pre-line">
              {testimonials[selectedTestimonial].content}
            </div>

            <div className="pt-6 border-t-2 border-black">
              <h3 className="text-2xl font-black text-black mb-2">
                {testimonials[selectedTestimonial].name}
              </h3>
              <p className="text-base font-bold text-gray-700 mb-1">
                {testimonials[selectedTestimonial].title}
              </p>
              <p className="text-base text-gray-600 font-medium mb-6">
                {testimonials[selectedTestimonial].company}
              </p>

              {testimonials[selectedTestimonial].linkedinUrl && (
                <a
                  href={testimonials[selectedTestimonial].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
                >
                  <span>View on LinkedIn</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function MarketverseDifferenceSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-purple-600 tracking-wider mb-4">THE MARKETVERSE DIFFERENCE</div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            What You Can Expect
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Three days that will change how you approach marketing leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white border-2 border-black rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">3 Days of Intensive Learning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Packed with insights from marketing leaders who deliver real-world experience, not theory. Every session is designed to give you actionable takeaways you can implement immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">Learn from Those Who've Been There</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We know marketing leaders learn best from experience. We put you in a room with people who live and breathe what you do, so you can learn from their victories and mistakes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">Community-Driven Agenda</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We respect your time and develop the agenda from the ground up based on community feedback and what you're experiencing. Every topic is chosen because our network said it matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">Vetted Solution Providers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every vendor presentation is carefully curated to ensure relevance to the challenges our community faces. We select speakers based on their ability to provide real value, not their budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-8">
            <div className="bg-white border-2 border-black rounded-3xl p-12">
              <div className="text-center space-y-8">
                <Network className="w-20 h-20 text-purple-600 mx-auto" />
                <h3 className="text-3xl font-black text-black">
                  The Marketverse Promise
                </h3>
                <p className="text-lg text-gray-700">
                  Every forum delivers real solutions to real problems from real leaders who've been in your shoes.
                </p>

                <div className="grid grid-cols-2 gap-6 py-8 border-y-2 border-black">
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-2">72</div>
                    <div className="text-sm text-gray-600">Hours of Content</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-pink-600 mb-2">70+</div>
                    <div className="text-sm text-gray-600">Marketing Leaders</div>
                  </div>
                </div>

                <button
                  onClick={scrollToRegistration}
                  className="w-full px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 border border-purple-400/30"
                >
                  Reserve Your Seat
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8">
              <h4 className="text-lg font-bold text-black mb-6">Why Leaders Trust Marketverse</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Chatham House Rules ensure confidentiality</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Every attendee is vetted and verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Limited to marketing leaders only</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">No recording, no press, no public sharing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForumRegistrationSection() {
  return (
    <section id="registration" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,_#9333ea_0%,_transparent_50%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-wider mb-4">SECURE YOUR SEAT</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Register for the Forum
          </h2>
          <p className="text-xl text-slate-300">
            Limited seats available for qualified marketing leaders. Complete the form below to request your invitation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div
            id="hubspot-vegas-form-container"
            className="hubspot-form-wrapper"
          />
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-8 lg:px-16 text-center">
        <div className="mb-8">
          <div className="text-xs font-mono text-purple-400 tracking-wider mb-4">OCTOBER 11-13, 2026</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Your Journey Awaits
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join the most exclusive marketing leadership forum of 2026. Limited seats available for qualified leaders only.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToRegistration}
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 border border-purple-400/30 flex items-center justify-center gap-2"
          >
            SECURE YOUR ACCESS
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-slate-500">
          Registration is invitation-only and subject to approval
        </p>
      </div>
    </section>
  );
}

function PartnerModal({ onClose }: { onClose: () => void }) {
  const modalFormRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.hbspt && modalFormRef.current) {
      modalFormRef.current.innerHTML = '';

      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: "45377644",
          formId: "fc138a7d-0ff8-4f61-8444-7c15704b7417",
          target: "#hubspot-partners-modal-form",
          region: "na1"
        });
      }, 100);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-2xl border-2 border-purple-500/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl border-2 border-white bg-white text-black hover:bg-gray-100 transition-all duration-300 z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Partnership Inquiry
            </h2>
            <p className="text-lg text-white/90 font-semibold">
              Connect with 70+ Growth and Demand Gen Leaders
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 transition duration-500" />

            <div className="relative p-8 bg-black rounded-2xl border-2 border-purple-500/30 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/20" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-500/20" />
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400 rounded-tl" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-400 rounded-br" />

              <div
                id="hubspot-partners-modal-form"
                ref={modalFormRef}
                className="hubspot-form-wrapper"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
