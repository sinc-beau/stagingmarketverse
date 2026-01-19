'use client';

import Link from 'next/link';
import { Calendar, Users, Target, Zap, Sparkles, Shield } from 'lucide-react';

interface EventsShowcaseProps {
  onRequestInvite?: () => void;
}

export default function EventsShowcase({ onRequestInvite }: EventsShowcaseProps) {
  const eventTypes = [
    {
      title: 'Brand & Demand Dinners',
      description: 'Dinners & Virtual Round Tables focused on specific marketing challenges and strategic discussions',
      features: ['Curated guest lists', 'Topic-focused discussions', 'Memorable in-person venues', 'Confidential environment'],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      upcoming: 'Coming Soon',
      icon: Users,
      stats: { attendees: '15-20', format: 'Intimate' }
    },
    {
      title: 'The Marketverse Forum',
      description: 'Our flagship 3-day executive forums bringing together 70+ CMOs and senior marketing leaders',
      features: ['Strategic keynotes', 'Peer roundtables', 'Innovation workshops', 'Executive networking'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      upcoming: 'Marketverse 2026 - October',
      icon: Target,
      stats: { attendees: '70+', format: '3-Day Forum' }
    },
    {
      title: 'Innovation Labs',
      description: 'High-touch experiential evenings where 30-40 marketing leaders connect with peers and council members in cities nationwide',
      features: ['Intimate gatherings', 'Peer connections', 'Council access', 'City-based events'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      upcoming: 'Coming Soon',
      icon: Zap,
      stats: { attendees: '30-40', format: 'Evening Event' }
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex mb-8">
            <div className="p-4 rounded-2xl border-2 border-black shadow-lg">
              <Calendar className="w-8 h-8 text-black" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            Experience Marketverse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple formats designed to meet marketing leaders where they are, with the content they need
          </p>
        </div>

        <div className="space-y-16 mb-20">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                <div className="relative rounded-2xl overflow-hidden border-2 border-black shadow-xl">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/20 z-10" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/20 z-10" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60" />

                  <div className="absolute top-6 right-6">
                    <div className="bg-white rounded-xl p-3 shadow-lg border-2 border-black">
                      <event.icon className="text-black" size={24} />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-bold mb-3 border-2 border-white">
                      {event.upcoming}
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white rounded-xl px-4 py-2 border-2 border-black shadow-lg">
                        <p className="text-gray-600 text-xs font-medium">Attendees</p>
                        <p className="text-black font-bold">{event.stats.attendees}</p>
                      </div>
                      <div className="bg-white rounded-xl px-4 py-2 border-2 border-black shadow-lg">
                        <p className="text-gray-600 text-xs font-medium">Format</p>
                        <p className="text-black font-bold text-sm">{event.stats.format}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg border-2 border-black bg-white flex items-center justify-center shadow-lg">
                    <event.icon className="text-black" size={28} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-black tracking-tight">{event.title}</h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">{event.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {event.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-black" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="h-1 w-20 bg-black rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="relative bg-white rounded-2xl p-12 text-black overflow-hidden border-2 border-black shadow-xl">
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles className="w-6 h-6 text-black" />
                <Shield className="w-6 h-6 text-black" />
                <Zap className="w-6 h-6 text-black" />
              </div>

              <h3 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-tight">
                Marketverse 2026
              </h3>
              <p className="text-xl mb-2 text-black font-bold">October 2026 • Las Vegas, Nevada</p>
              <p className="text-lg mb-8 text-gray-600">M Resort • The premier forum for senior marketing executives</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/marketverse-2026">
                  <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-200 text-lg border-2 border-black">
                    View Full Agenda
                  </button>
                </Link>
                <button
                  onClick={onRequestInvite}
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl border-2 border-black hover:bg-gray-50 transition-all duration-200 text-lg"
                >
                  Request Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
