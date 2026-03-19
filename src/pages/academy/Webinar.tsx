import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Video, Calendar, ArrowRight } from "lucide-react";

const pastWebinars = [
  { title: "Meta Ads in 2024: What Actually Works (and what's just hype)", date: "March 2024", attendees: "250+" },
  { title: "Content Strategy for D2C Fashion Brands That Don't Want to Be Boring", date: "February 2024", attendees: "180+" },
  { title: "From ₹0 to ₹10L/month: A Real Case Study (with real numbers)", date: "January 2024", attendees: "300+" },
  { title: "AI Tools Every Marketer Should Be Using (Before Your Competitors Do)", date: "December 2023", attendees: "200+" },
];

export default function Webinar() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-webinar", container, { stagger: 0.08, y: 25 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Webinars</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Free live sessions. Real insights. Zero pitch decks.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Every week, we go live and break down real campaigns, share what's actually working, and answer your questions — no holds barred. It's free to attend (yes, actually free, not 'free but we'll upsell you for 45 minutes' free). Just pure value. Join, learn, and leave smarter than you came.</p>
            <div className="mt-10 rounded-xl overflow-hidden aspect-video">
              <img
                src="/webinar-speaker-photo-2.png"
                alt="Live workshop on starting a fashion brand online"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl">
            <Card className="rounded-xl border-border">
              <CardContent className="p-8 text-center">
                <Calendar className="text-foreground mx-auto mb-4" size={28} />
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next Webinar — Live</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mt-3">Scaling Meta Ads: The 2024 Playbook</h2>
                <p className="text-muted-foreground mt-2">Friday, 7 PM IST · Free to Join · Bring snacks and questions</p>
                <div className="mt-6">
                  <BookingFormDialog triggerLabel="Register Now" showArrow />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Past Sessions" title="Missed one? We got you. Recordings available." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pastWebinars.map((w) => (
                <div key={w.title} className="gsap-webinar opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Video className="text-foreground" size={16} />
                        <span className="text-xs text-muted-foreground">{w.date} · {w.attendees} attendees</span>
                      </div>
                      <h3 className="font-display text-base font-semibold">{w.title}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
