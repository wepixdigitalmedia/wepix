import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check, ArrowRight, Users, Video, BookOpen, ShieldCheck } from "lucide-react";

const includes = [
"Access to WePix’s playbook. SOPs, templates, and all the secrets we use to crush it.",
"Monthly live Q&A with the WePix founders on Skool. Ask anything, get the answers you need.",
"A community of real agency pros. No beginners, no lurkers, just people in the grind.",
"A full library of resources. Campaign breakdowns, client onboarding docs, pricing models, and more.",
"VIP WhatsApp support. Because sometimes you need answers before that 3 PM client call.",
"Ad account teardowns and strategy reviews. Find out what’s broken and how to fix it.",
"Quarterly business reviews. Game plan your agency’s growth with big-picture sessions.",
];

const format = [
  { icon: BookOpen, title: "Skool LMS", desc: "Real-life playbooks and frameworks from WePix to level up your game." },
  { icon: Users, title: "Private Community", desc: "A tight-knit crew of agency owners sharing wins, fails, and all the real strategies." },
  { icon: Video, title: "Monthly Live Q&A", desc: "Get unfiltered access to WePix founders. No boring pre-recorded stuff, just real talk." },
  { icon: ShieldCheck, title: "Application-Based", desc: "We keep it exclusive. Only serious folks in the squad so you get real value." },
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
            Stop Guessing. Get the Playbook That Actually Works!
            </h1>
            <p className="gsap-hero-desc mt-4 text-base text-muted-foreground opacity-0">
            Tired of hearing the same old advice from LinkedIn "gurus"? Get the real deal with WePix’s structured mentorship. We use the exact systems that help us manage ₹2Cr+ in ad spend across 50+ brands. With us, you’re not just getting a course. You’ll get live Q&A sessions, a tight-knit community of entrepreneurs, and direct, hands-on support from the people who’ve built what you're building. Time to stop wasting time and start seeing results. Let's go.
            </p>
            <div className="mt-8">
              <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-[21/9] overflow-hidden">
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
              This is an invite-only program. We keep the crew small so everyone gets the VIP treatment. Apply below and let’s hop on a quick call to see if we vibe and if we’re the right match.
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
