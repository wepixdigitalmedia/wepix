import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

export default function Privacy() {
  return (
    <Layout>
      <section className="container py-10 md:py-16 lg:py-20">
        <SectionHeading tag="Legal" title="Privacy Policy" description="Last updated: March 2026" />

        <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground text-sm leading-relaxed">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">1. Information We Collect</h3>
            <p>We collect personal information you voluntarily provide when you contact us, subscribe to our newsletter, fill out forms, or engage with our services. This may include your name, email address, phone number, company name, and project details.</p>
            <p className="mt-2">We also automatically collect certain technical data such as IP address, browser type, device information, and usage patterns through cookies and similar technologies.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide, operate, and maintain our services</li>
              <li>To communicate with you about projects, updates, and promotions</li>
              <li>To improve our website, services, and user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To send periodic emails and marketing communications (with opt-out)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">3. Data Sharing & Third Parties</h3>
            <p>We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our business (e.g., analytics, email services, hosting), subject to confidentiality agreements. We may also disclose information when required by law.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">4. Cookies</h3>
            <p>Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. For more details, see our <a href="/cookie" className="text-foreground underline underline-offset-2 hover:opacity-80">Cookie Policy</a>.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">5. Data Security</h3>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">6. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at <a href="mailto:hello@wepix.in" className="text-foreground underline underline-offset-2 hover:opacity-80">hello@wepix.in</a>.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">7. Contact</h3>
            <p>For privacy-related inquiries, reach us at <a href="mailto:hello@wepix.in" className="text-foreground underline underline-offset-2 hover:opacity-80">hello@wepix.in</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
