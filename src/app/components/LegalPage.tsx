interface LegalPageProps {
  page: 'privacy' | 'terms' | 'security';
}

export function LegalPage({ page }: LegalPageProps) {
  return (
    <section className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {page === 'privacy' && <PrivacyPolicy />}
        {page === 'terms' && <TermsOfService />}
        {page === 'security' && <SecurityPage />}
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            Inception Forge LLC ("we," "us," or "our") operates inceptionforge.com and related products. This Privacy Policy explains how we collect, use, and protect your information when you use our websites and services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p className="mb-3"><strong className="text-white">Account Information:</strong> When you create an account, we collect your name, email address, and password.</p>
          <p className="mb-3"><strong className="text-white">Usage Data:</strong> We collect information about how you interact with our services, including pages visited and features used.</p>
          <p className="mb-3"><strong className="text-white">Device Information:</strong> We collect device type, browser type, and IP address for analytics and security purposes.</p>
          <p><strong className="text-white">Payment Information:</strong> Payment processing is handled by third-party processors. We do not store credit card numbers on our servers.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your questions and customer service requests</li>
            <li>Detect and prevent fraudulent or unauthorized activity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">4. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with third-party service providers who help us operate our services (e.g., hosting, payment processing). These providers are only given access to the information they need to perform their services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
          <p>
            We use cookies to maintain sessions and remember preferences. You can control cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or export your personal data. To exercise these rights, contact us at the email below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">8. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on our website with a revised "Last updated" date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at: <a href="mailto:admin@inceptionforge.com" className="text-orange-500 hover:text-orange-400">admin@inceptionforge.com</a>
          </p>
        </div>
      </div>
    </>
  );
}

function TermsOfService() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using any services provided by Inception Forge LLC ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">2. Description of Services</h2>
          <p>
            Inception Forge provides software-as-a-service (SaaS) products including Sticky Notez, Log & Lock, and other tools as they become available. Services may be updated, modified, or discontinued at our discretion.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">3. Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate information when creating an account and notify us of any unauthorized use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use our services for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
            <li>Interfere with or disrupt the performance of our services</li>
            <li>Reverse engineer or disassemble any part of our services</li>
            <li>Resell or redistribute our services without authorization</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">5. Payment and Billing</h2>
          <p>
            Some services require a paid subscription. By subscribing, you agree to pay the applicable fees. Subscriptions automatically renew unless cancelled before the renewal date. Refunds are handled on a case-by-case basis.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned by Inception Forge LLC and protected by applicable intellectual property laws. You retain ownership of content you create using our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Inception Forge LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">8. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
          <p>
            We may suspend or terminate your access to our services for violation of these terms. You may terminate your account at any time by contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Changes will be posted on our website. Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
          <p>
            Questions about these Terms of Service? Contact us at: <a href="mailto:admin@inceptionforge.com" className="text-orange-500 hover:text-orange-400">admin@inceptionforge.com</a>
          </p>
        </div>
      </div>
    </>
  );
}

function SecurityPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Security</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Our Approach</h2>
          <p>
            We take the protection of your data seriously and follow industry best practices to keep your information safe.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Data Protection</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data is encrypted in transit using HTTPS</li>
            <li>Passwords are securely hashed and never stored in plain text</li>
            <li>Services are hosted on reputable cloud infrastructure</li>
            <li>Regular backups to prevent data loss</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Application Security</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Protection against common web vulnerabilities (XSS, CSRF, injection attacks)</li>
            <li>Rate limiting on authentication endpoints</li>
            <li>Regular dependency updates and security patching</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Data Privacy</h2>
          <p>
            We collect only the data necessary to provide our services and never sell personal data to third parties. See our <span className="text-orange-500">Privacy Policy</span> for full details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Reporting Vulnerabilities</h2>
          <p>
            If you discover a security issue in any of our products, please report it to: <a href="mailto:admin@inceptionforge.com" className="text-orange-500 hover:text-orange-400">admin@inceptionforge.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
