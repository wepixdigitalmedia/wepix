import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

export default function Terms() {
  return (
    <Layout>
      <section className="container py-10 md:py-16 lg:py-20">
        <SectionHeading tag="Legal" title="Terms of Service" description="Last updated: March 2026" />

        <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground text-sm leading-relaxed">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
            <p>By accessing or using WePix services, website, or any associated platforms, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">2. Services</h3>
            <p>WePix Digital Media LLP provides digital marketing, e-commerce development, branding, content creation, and related consulting services. Specific deliverables, timelines, and fees are outlined in individual project agreements or proposals.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">3. Intellectual Property</h3>
            <p>All content, designs, code, and materials created by WePix remain the intellectual property of WePix until full payment is received, unless otherwise stated in a written agreement. Clients receive a license to use deliverables upon full payment.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">4. Client Responsibilities</h3>
            <p>Clients are responsible for providing accurate information, timely feedback, and necessary access to platforms. Delays caused by the client may affect project timelines and are not the responsibility of WePix.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">5. Payment Terms</h3>
            <p>Payment terms are specified in individual project proposals. Late payments may incur additional charges. WePix reserves the right to pause or terminate services for outstanding invoices.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">6. Limitation of Liability</h3>
            <p>WePix shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid for the specific service in question.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">7. Termination</h3>
            <p>Either party may terminate a service agreement with 30 days written notice. WePix reserves the right to terminate services immediately in case of breach of these terms.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">8. Governing Law</h3>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Tirupur, Tamil Nadu.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">9. Contact</h3>
            <p>For questions about these terms, contact us at <a href="mailto:hello@wepix.in" className="text-foreground underline underline-offset-2 hover:opacity-80">hello@wepix.in</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
