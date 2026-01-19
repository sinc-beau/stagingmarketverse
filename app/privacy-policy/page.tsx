import { Navigation } from '@/components/Navigation';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: November 21, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Marketverse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-bold text-black mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Express interest in obtaining information about us or our services</li>
                <li>Participate in activities on the website</li>
                <li>Contact us</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The personal information we collect may include: name, email address, company name, job title, and other similar contact data.
              </p>

              <h3 className="text-xl font-bold text-black mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Access times</li>
                <li>Pages viewed directly before and after accessing the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To improve, personalize, and expand our website and services</li>
                <li>To understand and analyze how you use our website and services</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you for customer service, updates, and marketing purposes</li>
                <li>To send you emails and newsletters</li>
                <li>To prevent fraudulent transactions and protect against criminal activity</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>With Service Providers:</strong> We may share your information with third-party service providers that perform services on our behalf</li>
                <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use cookies and similar tracking technologies to access or store information. Cookies are small data files stored on your device. We use cookies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Keep you signed in</li>
                <li>Understand and save your preferences for future visits</li>
                <li>Compile aggregate data about site traffic and interactions</li>
                <li>Improve our website and services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure of your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Third-Party Websites</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
