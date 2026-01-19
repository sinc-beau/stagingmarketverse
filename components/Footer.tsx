'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black text-white">MARKETVERSE</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Access content, insights, and strategies from marketing leaders who are actively executing in Growth, Demand Gen, and Field Marketing.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/marketing-forum-las-vegas-2026" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Marketverse Forum
                </Link>
              </li>
              <li>
                <Link href="/cmo-circle" className="text-gray-400 hover:text-white transition-colors text-sm">
                  CMO Circle
                </Link>
              </li>
              <li>
                <Link href="/sponsor-marketing-events" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/field-intelligence" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Knowledge
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Marketverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
