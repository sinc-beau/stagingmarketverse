import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Marketverse',
  description: 'Privacy Policy for Marketverse',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
