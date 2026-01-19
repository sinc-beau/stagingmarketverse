import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gaurav Deshpande, Aerospike CMO: Real-Time Data, AI/ML Inference & Global Marketing Strategy | Marketverse',
  description: 'Aerospike CMO Gaurav Deshpande shares insights on powering predictive AI at scale, driving 60% revenue from AI/ML workloads, and building a global marketing engine for enterprise real-time data platforms.',
  keywords: 'Gaurav Deshpande, Aerospike CMO, real-time data platform, AI ML inference, predictive AI, machine learning at scale, enterprise marketing, account-based marketing, demand generation, B2B marketing leadership',
  openGraph: {
    title: 'Gaurav Deshpande, Aerospike CMO: Real-Time Data, AI/ML Inference & Global Marketing',
    description: 'Aerospike CMO Gaurav Deshpande on powering predictive AI at scale, driving 60% revenue from AI/ML workloads, and building a global marketing engine.',
    type: 'article',
    url: 'https://marketverse.org/field-intelligence/aerospike-gaurav-deshpande',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/gauravdeshpandeinterviewog.png',
        secureUrl: 'https://marketverse.org/gauravdeshpandeinterviewog.png',
        width: 1200,
        height: 630,
        alt: 'Gaurav Deshpande, Chief Marketing Officer at Aerospike',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Deshpande, Aerospike CMO: Real-Time Data, AI/ML Inference & Global Marketing',
    description: 'Aerospike CMO Gaurav Deshpande on powering predictive AI at scale, driving 60% revenue from AI/ML workloads, and building a global marketing engine.',
    images: ['https://marketverse.org/gauravdeshpandeinterviewog.png'],
  },
};

export default function AerospikeInterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
