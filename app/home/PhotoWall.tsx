'use client';

import { Zap } from 'lucide-react';

const photos = [
  { src: '/conversionhouse2.png', alt: 'Conversion House Event' },
  { src: '/mvpanel3.png', alt: 'Marketverse Panel Discussion' },
  { src: '/mvpanel2.png', alt: 'Panel Speakers' },
  { src: '/mvpanel.png', alt: 'Expert Panel' },
  { src: '/chcandid2.png', alt: 'Networking Moment' },
  { src: '/chcandid1.png', alt: 'Event Candid' },
  { src: '/mvcandid2.png', alt: 'Marketverse Gathering' },
  { src: '/mvcandid3.png', alt: 'Community Connection' },
  { src: '/mvcandid.png', alt: 'Event Atmosphere' },
  { src: '/chwinners.png', alt: 'Award Winners' }
];

export default function PhotoWall() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-white" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-cyan-500" />
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
              Energy Captured
            </h2>
            <Zap className="w-6 h-6 text-cyan-500" />
          </div>
          <p className="text-lg text-gray-600">
            Moments from the Marketverse experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative h-full border-2 border-black bg-white overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />

                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
