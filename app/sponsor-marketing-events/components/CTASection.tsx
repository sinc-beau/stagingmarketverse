'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface CTASectionProps {
  onOpenModal: () => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
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
          formId: "fc138a7d-0ff8-4f61-8444-7c15704b7417",
          target: "#hubspot-partners-form-container",
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
    <section className="py-32 px-6 bg-black relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#ec4899_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
          <div className="relative bg-black border-2 border-purple-500/50 rounded-3xl p-12">
            <h3 className="text-4xl font-black text-white mb-6">
              READY TO{' '}
              <span style={{
                background: 'linear-gradient(to right, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                PARTNER
              </span>?
            </h3>

            <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Connect with us to explore partnership opportunities and start engaging with the marketing leaders
              driving growth and innovation in B2B tech.
            </p>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 lg:p-12 mb-8">
              <div
                id="hubspot-partners-form-container"
                className="hubspot-form-wrapper"
              />
            </div>

            <p className="text-white/40 text-xs uppercase tracking-wider">
              Partnership opportunities reviewed within 48 hours • Custom solutions available
            </p>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-xl font-bold text-white mb-2">1,000+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Marketing Leaders</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-2">Year-Round</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Engagement</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-2">100%</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Value Focused</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-white/40 uppercase tracking-wider">Powered By</span>
                <img
                  src="https://sincusa.com/wp-content/uploads/2025/04/Component-1.svg"
                  alt="SINC"
                  className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
