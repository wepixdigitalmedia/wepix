import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { useGSAP, heroReveal } from "@/hooks/useGSAP";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BusinessContact() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Business Inquiries</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Let’s Take Your Business to the Next Level. (Cue the Epic Soundtrack)</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Need AI agents, lead gen, or a complete marketing makeover? Forget the formalities. No "let me check with the team" nonsense. Just share your goals, and we’ll tell you how we’ll get there together.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">Book a Strategy Call</h2>
                <p className="text-muted-foreground mb-6">30-minute consultation with our business team. We'll listen to your challenges, share some initial ideas, and figure out if we're the right fit. Think of it as speed dating, but for business growth.</p>
                <BookingFormDialog triggerLabel="Schedule Your Call" triggerClassName="w-full" showArrow />
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Phone size={16} /> +91 98765 43210</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Mail size={16} /> business@wepix.in</div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin size={16} className="shrink-0 mt-0.5" /><p>WePix Business, Bangalore, Karnataka</p></div>
                </div>
              </div>
              <Card className="rounded-xl border-border">
                <CardContent className="p-6">
                  <h2 className="font-display text-2xl font-semibold mb-4">Send a Brief</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="What should we call you?" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="company">Company</Label><Input id="company" placeholder="Your company name" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="email">Work Email</Label><Input id="email" type="email" placeholder="you@company.com" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="service">Service of Interest</Label><Input id="service" placeholder="e.g., AI Agents, Lead Gen, All of it" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="message">Tell us about your goals</Label><Textarea id="message" placeholder="What are you trying to achieve? The more detail, the better our first conversation will be!" rows={4} className="mt-1 rounded-lg" /></div>
                    <Button type="submit" className="w-full rounded-lg font-medium">Submit Brief</Button>
                    <p className="text-xs text-muted-foreground text-center">This form is for display only. For faster responses, use the booking link!</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
