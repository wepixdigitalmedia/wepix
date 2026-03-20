import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check, ArrowRight, Users, Video, BookOpen, ShieldCheck } from "lucide-react";

const includes = [
  "Access to WePix's internal frameworks — the exact SOPs, templates, and strategies we use daily",
  "Monthly live Q&A sessions with WePix founders on Skool — ask anything, get real answers",
  "Curated community of agency operators — no beginners, no lurkers, just people in the trenches",
  "Resource library with campaign breakdowns, client onboarding docs, and pricing models",
  "Priority WhatsApp support — because sometimes you need an answer before your client call",
  "Ad account teardowns and strategy reviews — we'll tell you what's broken and how to fix it",
  "Quarterly business reviews — big picture planning sessions for your agency growth",
];

const format = [
  { icon: BookOpen, title: "Skool LMS", desc: "Structured learning modules with WePix's actual playbooks and frameworks." },
  { icon: Users, title: "Private Community", desc: "Curated group of agency owners sharing wins, losses, and real strategies." },
  { icon: Video, title: "Monthly Live Q&A", desc: "Direct access to WePix founders. No pre-recorded fluff — live and unfiltered." },
  { icon: ShieldCheck, title: "Application-Based", desc: "Selective by design. We keep the group small so every member gets real value." },
];

export default function Mentorship() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-item"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-list"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-20 md:py-28">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Mentorship</span>
            <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
              Stop figuring it out alone. Get the playbook WePix actually uses.
            </h1>
            <p className="gsap-hero-desc mt-4 text-base text-muted-foreground opacity-0">
              For agency owners who are done with generic advice and LinkedIn gurus. This is a structured mentorship built around WePix's real internal frameworks — the same systems we use to manage ₹2Cr+ in ad spend across 50+ brands. Live Q&A sessions, a private community of operators, and hands-on support from people who've actually built what you're building.
            </p>
            <div className="mt-8">
              <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-[21/9] overflow-hidden">
                <img
                  src="/business-mentorship-session.png"
                  alt="Mentorship session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="font-display text-xl md:text-2xl font-semibold mb-6">Format</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {format.map((f) => (
                <Card key={f.title} className="border-border/50">
                  <CardContent className="p-5 flex gap-3 items-start">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                      <f.icon size={16} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">{f.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="font-display text-xl md:text-2xl font-semibold mb-6">What's Included</h2>
            <div className="space-y-3 mb-10 gsap-list">
              {includes.map((item) => (
                <div key={item} className="gsap-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={16} />
                  <p className="text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-display text-lg font-semibold mb-2">How to Join</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This is an application-based program — selective by design. We keep the group intentionally small so every member gets real, personalized attention. Apply below and we'll schedule a quick fit call to see if we're the right match.
              </p>
              <BookingFormDialog triggerLabel="Apply for Mentorship" showArrow />
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Serious about scaling your agency?" subtext="Limited spots. Application-based. For agency owners who want real frameworks, not motivational quotes." ctaLabel="Apply Now" />
    </Layout>
  );
}
