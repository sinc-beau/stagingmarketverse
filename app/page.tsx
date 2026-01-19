'use client';

import { useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import Hero from './home/Hero';
import AudienceSection from './home/AudienceSection';
import AboutSection from './home/AboutSection';
import ContentSeries from './home/ContentSeries';
import EventsShowcase from './home/EventsShowcase';
import ExecutiveCouncil from './home/ExecutiveCouncil';
import Testimonials from './home/Testimonials';
import PhotoWall from './home/PhotoWall';
import MarketVerseValues from './home/MarketVerseValues';
import Newsletter, { NewsletterModalRef } from './home/Newsletter';

export default function Home() {
  const newsletterRef = useRef<NewsletterModalRef>(null);

  const openModal = () => {
    newsletterRef.current?.openModal();
  };

  return (
    <>
      <Navigation />
      <main className="pt-16">
      <Hero onJoinClick={openModal} />
      <AudienceSection />
      <ExecutiveCouncil />
      <Testimonials />
      <PhotoWall />
      <AboutSection onJoinClick={openModal} />
      <EventsShowcase />
      <ContentSeries />
      <MarketVerseValues onJoinClick={openModal} />
      <Newsletter ref={newsletterRef} />
      </main>
    </>
  );
}
