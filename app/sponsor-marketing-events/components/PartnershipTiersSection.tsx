'use client';

import { Award, Star, Zap, Network, MessageSquare, CheckCircle } from 'lucide-react';

interface PartnershipTiersSectionProps {
  onOpenModal: () => void;
}

export default function PartnershipTiersSection({ onOpenModal }: PartnershipTiersSectionProps) {
  return (
    <section className="py-32 px-6 bg-white" id="partnership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase text-purple-600">
            <Award className="w-3 h-3" />
            PARTNERSHIP TIERS
            <Award className="w-3 h-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            PARTNERSHIP{' '}
            <span style={{
              background: 'linear-gradient(to right, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              LEVELS
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose the partnership level that aligns with your marketing objectives
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-gray-50 border-2 rounded-3xl p-8"
                 style={{ borderColor: 'rgba(168,85,247,0.5)' }}>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600 border border-purple-500">
                <span className="text-xs font-bold text-white">DIAMOND LEVEL</span>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-600 to-pink-600 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">Vanguard Partner</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The flagship sponsorship tier, ensuring category exclusivity and year-round engagement with marketing leaders.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Title Sponsor at all 4 MarketVerse Forums</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">4 Executive Roundtables per quarter (16 annually)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Lead Sponsor of CMO Circle</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Exclusive Field Intelligence content series</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Custom CMO/VP Marketing research study</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Thought leadership content distribution</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Newsletter sponsorship (4x annually)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        <span className="text-sm text-gray-600">Quarterly ROI & pipeline reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500" />
            <div className="relative bg-gray-50 border-2 border-gray-200 rounded-3xl p-8 group-hover:border-gray-300 transition-all">
              <div className="absolute top-4 right-4 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-gray-600">PLATINUM LEVEL</span>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">Innovator Partner</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    High-impact sponsorship for organizations seeking consistent marketing leader engagement and strong visibility.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Featured Sponsor at all 4 MarketVerse Forums</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">2 Executive Roundtables per quarter (8 annually)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">CMO Circle participation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Field Intelligence content placement</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Access to research insights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Content distribution & amplification</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Newsletter sponsorship (2x annually)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Bi-annual ROI reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500" />
            <div className="relative bg-gray-50 border-2 border-gray-200 rounded-3xl p-8 group-hover:border-gray-300 transition-all">
              <div className="absolute top-4 right-4 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-gray-600">GOLD LEVEL</span>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                  <Network className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">Connector Partner</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Entry-level package offering targeted access to marketing leaders with meaningful brand visibility.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Supporting Sponsor at all 4 MarketVerse Forums</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">1 Executive Roundtable per quarter (4 annually)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Content distribution opportunities</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Research highlights access</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Newsletter placement (1x annually)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                        <span className="text-sm text-gray-600">Brand visibility across touchpoints</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500" />
            <div className="relative bg-gray-50 border-2 border-gray-200 rounded-3xl p-8 group-hover:border-gray-300 transition-all">
              <div className="absolute top-4 right-4 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-gray-600">A LA CARTE</span>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">Custom Options</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Flexible sponsorship options. Sponsor individual forums, events, or content series tailored to your needs.
                  </p>

                  <div className="text-center bg-white rounded-xl p-4 border-2 border-gray-200">
                    <p className="text-gray-600 text-sm">
                      Flexible sponsorship options tailored to your specific marketing needs and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 text-white font-bold text-sm rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-right-bottom shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-400/30"
          >
            <span>Explore Partnership Options</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
