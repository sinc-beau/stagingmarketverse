import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Marketverse',
  description: 'Terms of Use for Marketverse',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
