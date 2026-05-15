import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

export default function CookiePolicy() {
  return (
    <Layout>
      <section className="container py-10 md:py-16 lg:py-20">
        <SectionHeading tag="Legal" title="Cookie Policy" description="Last updated: March 2026" />

        <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground text-sm leading-relaxed">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">1. What Are Cookies</h3>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you interact with the site, and improve your overall experience.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">2. Types of Cookies We Use</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website using tools like Google Analytics.</li>
              <li><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance across platforms.</li>
              <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and choices to provide a personalized experience.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">3. How to Manage Cookies</h3>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling certain cookies may affect website functionality.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">4. Third-Party Cookies</h3>
            <p>Some cookies are placed by third-party services that appear on our pages, such as Google Analytics, Meta Pixel, and embedded content providers. We do not control these cookies and recommend reviewing the respective third-party privacy policies.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">5. Consent</h3>
            <p>By continuing to use our website, you consent to the use of cookies as described in this policy. You can withdraw consent at any time by adjusting your browser settings.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">6. Contact</h3>
            <p>For questions about our cookie practices, contact us at <a href="mailto:hello@wepix.in" className="text-foreground underline underline-offset-2 hover:opacity-80">hello@wepix.in</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
