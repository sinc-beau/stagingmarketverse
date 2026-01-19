'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import PartnersHero from './components/PartnersHero';
import WhyPartnerSection from './components/WhyPartnerSection';
import WhoYoullReachSection from './components/WhoYoullReachSection';
import PartnershipTiersSection from './components/PartnershipTiersSection';
import HowPartnersEngageSection from './components/HowPartnersEngageSection';
import CTASection from './components/CTASection';

export default function PartnersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <PartnersHero
        onOpenModal={handleScrollToForm}
        onScrollToTiers={handleScrollToForm}
      />
      <WhyPartnerSection onOpenModal={handleScrollToForm} />
      <WhoYoullReachSection onOpenModal={handleScrollToForm} />
      <HowPartnersEngageSection />
      <PartnershipTiersSection onOpenModal={handleScrollToForm} />
      <CTASection onOpenModal={handleScrollToForm} />
    </div>
  );
}
