import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { TirupurTooltip } from "@/components/shared/TirupurTooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const values = [
  { icon: Target, title: "Execution Over Theory", description: "We've burnt our own money on bad ads. We've stayed up at 3 AM optimizing campaigns. We teach and deliver from experience, not from a textbook we read once." },
  { icon: Lightbulb, title: "Innovation First", description: "While other agencies are still figuring out Reels, we're already using AI tools, testing new platforms, and breaking things. We adopt what works before it becomes a LinkedIn thought leader cliche." },
  { icon: Users, title: "Client as Partner", description: "We don't do 'vendor relationships.' You're part of the crew. We celebrate your wins, stress about your numbers, and argue about your brand colors at 11 PM. That's just how we roll." },
  { icon: Heart, title: "Built in திருப்பூர்", description: "Born in the textile capital of India. We understand manufacturing margins, seasonal inventory nightmares, and the beautiful chaos of the garment industry. It's in our DNA." },
];

const timeline = [
  { year: "2016", event: "Abdul started his first brand — Drooling Baby. A kids' fashion label born out of passion and zero marketing knowledge. Spoiler: it didn't go as planned. But every failure was a lesson disguised as a loss." },
  { year: "2017", event: "Drooling Baby hit its first wall. Sales weren't moving, ads weren't working, and the 'boost post' button was doing absolutely nothing. Abdul started studying digital marketing obsessively — YouTube university, late nights, and a lot of chai." },
  { year: "2018", event: "Second attempt. Pivoted the brand, tried new strategies, burned more money on ads. Failed again. But this time, the lessons were deeper — understanding margins, customer psychology, and why most agencies deliver garbage." },
  { year: "2019", event: (<>The penny dropped. After years of trial-and-error, Abdul cracked the code on what actually works in fashion marketing. Started helping other <TirupurTooltip /> brands informally. People noticed. The demand was real.</>)  },
  { year: "2020", event: "COVID hit, but online D2C exploded. Abdul went all-in on helping fashion brands sell online — content, ads, Shopify stores. The results spoke louder than any pitch deck ever could." },
  { year: "2021", event: "Built WePixStudio — an AI-powered content tool — because hiring photographers for 200 SKUs is insane. Also started building the team. No more one-man-army." },
  { year: "2022", event: "December 10th — WePix Digital Media LLP was officially born. What started as one guy failing with a baby brand became a registered company with a real team, real clients, and a real mission. The grind became a business." },
  { year: "2023", event: "Expanded to Bangalore. Launched the Academy because people kept DM-ing 'bro teach me Meta Ads.' Business vertical went live. 50+ brands served. The snowball was rolling." },
  { year: "2024", event: "AI Agents division created. Managed ₹2Cr+ in ad spend. Built systems and SOPs that actually scale. At this point, we're basically a tech company that happens to be really good at marketing." },
  { year: "2025", event: (<>Opened operations in Chennai and UAE. Launched the Digital Store, Mentorship program, and the Handbook. WePix stopped being a '<TirupurTooltip /> agency' and became a pan-India digital media group.</>)  },
  { year: "2026", event: "3 years and 5 months since Day 1. Countless lessons, ups, downs, sleepless nights, and celebrations. We've been broke, been blessed, and been everything in between. And we're just getting started. The best chapters haven't been written yet." },
];

export default function About() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(
      container.querySelectorAll(".gsap-timeline-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: container.querySelector(".gsap-timeline-section"), start: "top 75%", toggleActions: "play none none none" },
      }
    );
    scrollFadeIn(".gsap-value-card", container, { stagger: 0.1, y: 30 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-[0.8125rem] font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">About Us</span>
                <h1 className="gsap-hero-title font-display text-2xl md:text-3xl lg:text-[2.75rem] xl:text-5xl font-semibold leading-[1.15] opacity-0">
                  Two guys from <TirupurTooltip /> who got tired of trash marketing and decided to fix it.
                </h1>
                <p className="gsap-hero-desc mt-5 text-[0.9375rem] text-muted-foreground leading-relaxed opacity-0">
                  WePix started because we were frustrated. Frustrated with agencies charging lakhs for mediocre work. Frustrated with marketers who couldn't tell the difference between reach and revenue.
                </p>
              </div>
              <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-square gsap-hero-cta opacity-0 overflow-hidden">
                <img
                  src="/about-team-photo.png"
                  alt="Team photo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Gallery */}
        <section className="py-16 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImagePlaceholder label="Office life 1" aspectRatio="square" />
              <ImagePlaceholder label="Office life 2" aspectRatio="square" />
              <ImagePlaceholder label="Team meeting" aspectRatio="square" />
              <ImagePlaceholder label="Behind the scenes" aspectRatio="square" />
            </div>
            <div className="mt-6 text-center">
              <Link to="/people">
                <Button variant="outline" className="font-display font-medium gap-2">
                  Meet the Full Team <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="gsap-timeline-section py-24 border-t border-border">
          <div className="container max-w-3xl">
            <SectionHeading tag="Our Journey" title="The plot so far" align="left" />
            <div className="space-y-0">
              {timeline.map((item) => (
                <div key={item.year} className="gsap-timeline-item flex gap-6 py-5 border-b border-border last:border-0 opacity-0">
                  <span className="font-display text-lg font-semibold text-foreground shrink-0 w-14">{item.year}</span>
                  <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Culture" title="Things we'd fight for" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="gsap-value-card opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <v.icon className="text-foreground mb-3" size={24} />
                      <h3 className="font-display text-base font-semibold">{v.title}</h3>
                      <p className="text-[0.8125rem] text-muted-foreground mt-2 leading-relaxed">{v.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <SectionHeading tag="Offices" title="Where the magic happens" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="rounded-xl border-border overflow-hidden">
                <ImagePlaceholder label="Tirupur office photo" aspectRatio="video" className="rounded-none border-0 border-b-2" />
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold"><TirupurTooltip />, Tamil Nadu</h3>
                  <p className="text-[0.8125rem] text-muted-foreground">HQ — Where it all started (and where the best filter coffee is)</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-border overflow-hidden">
                <ImagePlaceholder label="Bangalore office photo" aspectRatio="video" className="rounded-none border-0 border-b-2" />
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold">Bangalore, Karnataka</h3>
                  <p className="text-[0.8125rem] text-muted-foreground">Business & B2B division (the fancy one)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Wanna be part of the story?" subtext="We're always looking for brands that are done with mediocre marketing and ready to build something people actually care about." ctaLabel="Get in Touch" />
    </Layout>
  );
}
