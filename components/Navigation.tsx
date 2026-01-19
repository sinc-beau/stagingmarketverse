'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

declare global {
  interface Window {
    hbspt: any;
  }
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalFormRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen && window.hbspt && modalFormRef.current) {
      modalFormRef.current.innerHTML = '';

      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: '45377644',
          formId: '8c406883-84ce-4343-94fd-1f65237ff091',
          region: 'na1',
          target: '#nav-newsletter-modal-form',
          css: ''
        });
      }, 100);
    }
  }, [isModalOpen]);

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-black text-white">MARKETVERSE</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors font-bold"
            >
              Home
            </Link>
            <Link
              href="/marketing-forum-las-vegas-2026"
              className="text-slate-300 hover:text-white transition-colors font-bold"
            >
              Marketverse Forum (Oct 11-13)
            </Link>
            <Link
              href="/cmo-circle"
              className="text-slate-300 hover:text-white transition-colors font-bold"
            >
              CMO Circle
            </Link>
            <Link
              href="/sponsor-marketing-events"
              className="text-slate-300 hover:text-white transition-colors font-bold"
            >
              Partners
            </Link>
            <Link
              href="/field-intelligence"
              className="text-slate-300 hover:text-white transition-colors font-bold"
            >
              Knowledge
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-slate-300 hover:text-white transition-colors font-bold py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/marketing-forum-las-vegas-2026"
              className="block text-slate-300 hover:text-white transition-colors font-bold py-2"
              onClick={() => setIsOpen(false)}
            >
              Marketverse Forum (Oct 11-13)
            </Link>
            <Link
              href="/cmo-circle"
              className="block text-slate-300 hover:text-white transition-colors font-bold py-2"
              onClick={() => setIsOpen(false)}
            >
              CMO Circle
            </Link>
            <Link
              href="/sponsor-marketing-events"
              className="block text-slate-300 hover:text-white transition-colors font-bold py-2"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/field-intelligence"
              className="block text-slate-300 hover:text-white transition-colors font-bold py-2"
              onClick={() => setIsOpen(false)}
            >
              Knowledge
            </Link>
          </div>
        </div>
      )}

      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="fixed inset-0 z-[101] p-4 overflow-y-auto pointer-events-none">
            <div className="min-h-full flex items-center justify-center pointer-events-none">
              <div
                className="bg-black rounded-2xl border-2 border-purple-500/30 max-w-2xl w-full relative pointer-events-auto my-8"
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
                      id="nav-newsletter-modal-form"
                      ref={modalFormRef}
                      className="hubspot-form-wrapper"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      )}
    </nav>
  );
}
