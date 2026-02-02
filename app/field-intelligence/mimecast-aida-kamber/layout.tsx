import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aida Kamber, Mimecast VP of Growth: Human-Centric Growth in the Age of AI | Marketverse',
  description: 'Mimecast VP of Growth Aida Kamber shares insights on building global growth engines, LLM visibility, multi-threading buying groups, and scaling AI-powered personalization across enterprise security.',
  keywords: 'Aida Kamber, Mimecast growth marketing, AI marketing, LLM visibility, multi-threading, buying groups, UserGems, 6sense, account-based marketing, demand generation, B2B marketing leadership',
  openGraph: {
    title: 'Aida Kamber, Mimecast VP of Growth: Human-Centric Growth in the Age of AI',
    description: 'Mimecast VP of Growth Aida Kamber on building global growth engines, LLM visibility, multi-threading buying groups, and scaling AI-powered personalization.',
    type: 'article',
    url: 'https://marketverse.org/field-intelligence/mimecast-aida-kamber',
    siteName: 'Marketverse',
    locale: 'en_US',
    images: [
      {
        url: 'https://marketverse.org/mimecast-aida-kamber-og.png',
        secureUrl: 'https://marketverse.org/mimecast-aida-kamber-og.png',
        width: 1200,
        height: 630,
        alt: 'Aida Kamber, Vice President of Growth at Mimecast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aida Kamber, Mimecast VP of Growth: Human-Centric Growth in the Age of AI',
    description: 'Mimecast VP of Growth Aida Kamber on building global growth engines, LLM visibility, multi-threading buying groups, and scaling AI-powered personalization.',
    images: ['https://marketverse.org/mimecast-aida-kamber-og.png'],
  },
};

export default function MimecastInterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
