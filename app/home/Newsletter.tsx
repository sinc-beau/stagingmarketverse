'use client';

import { ArrowRight, Check, Zap, Terminal } from 'lucide-react';
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

export interface NewsletterModalRef {
  openModal: () => void;
}

interface NewsletterProps {
  showModal?: boolean;
}

const Newsletter = forwardRef<NewsletterModalRef, NewsletterProps>(({}, ref) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const modalFormContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setIsModalOpen(true)
  }));

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        // Inline form at bottom
        if (formContainerRef.current) {
          window.hbspt.forms.create({
            portalId: '45377644',
            formId: '8c406883-84ce-4343-94fd-1f65237ff091',
            region: 'na1',
            target: '#hubspot-form-container',
            css: ''
          });
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (isModalOpen && window.hbspt && modalFormContainerRef.current) {
      // Clear any existing form in modal
      if (modalFormContainerRef.current) {
        modalFormContainerRef.current.innerHTML = '';
      }

      // Create form in modal
      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: '45377644',
          formId: '8c406883-84ce-4343-94fd-1f65237ff091',
          region: 'na1',
          target: '#hubspot-modal-form-container',
          css: ''
        });
      }, 100);
    }
  }, [isModalOpen]);

  return (
    <section id="newsletter-section" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,_#9333ea_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute bottom-0 left-1/4 w-px h-40 bg-gradient-to-t from-transparent via-purple-500/50 to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-px h-40 bg-gradient-to-t from-transparent via-pink-500/50 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_49%,rgba(147,51,234,0.05)_50%,transparent_51%,transparent_100%)] bg-[length:100%_6px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-purple-400/30">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-black border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Newsletter Subscribe</span>
              <Zap className="w-4 h-4 text-pink-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative">
            <span className="relative inline-block">
              Get the Inside Track
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-sm" />
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-semibold leading-relaxed">
            Strategic insights, speaker announcements, and exclusive content for marketing leaders.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 transition duration-500" />

              <div className="relative p-8 bg-black rounded-2xl border-2 border-purple-500/30 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/20" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-500/20" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400 rounded-tl" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-400 rounded-br" />

                <div
                  id="hubspot-form-container"
                  ref={formContainerRef}
                  className="hubspot-form-wrapper"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              No spam, ever
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Unsubscribe anytime
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-black rounded-2xl border-2 border-purple-500/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
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
                  Join Marketverse
                </h2>
                <p className="text-lg text-white/90 font-semibold">
                  Get strategic insights and exclusive content for marketing leaders.
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
                    id="hubspot-modal-form-container"
                    ref={modalFormContainerRef}
                    className="hubspot-form-wrapper"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

Newsletter.displayName = 'Newsletter';

export default Newsletter;
