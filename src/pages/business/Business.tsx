import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { ArrowRight, Bot, Target, BarChart3, Globe, Monitor, Video, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const services = [
  { icon: Target, title: "Organic Lead Gen", description: "LinkedIn outreach, email campaigns, and content that makes decision-makers actually respond to your DMs. No spammy vibes." },
  { icon: BarChart3, title: "Meta Ads (B2B)", description: "Yes, Meta Ads work for B2B. We've cracked the code on lead gen campaigns that fill your pipeline. Your sales team will love us." },
  { icon: Globe, title: "Google Ads", description: "Search, display, YouTube — we put you exactly where your customers are looking. It's basically being everywhere at once, but on a budget." },
  { icon: Zap, title: "Enterprise Ads", description: "Large-scale campaigns for complex funnels. The kind of stuff that makes spreadsheet lovers weep with joy." },
  { icon: Monitor, title: "Websites", description: "Websites that don't just look pretty but actually convert visitors into customers. Revolutionary concept, we know." },
  { icon: Bot, title: "AI Agents", description: "Custom AI agents that handle customer support, qualify leads, and work 24/7 without asking for a raise. Your new favorite employees." },
  { icon: Video, title: "Video Production", description: "Corporate videos that people actually watch instead of alt-tabbing. Explainers, testimonials, social content — all of it." },
];

export default function Business() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-service-card", container, { stagger: 0.06, y: 25 });
    gsap.fromTo(container.querySelector(".gsap-spotlight"), { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-spotlight"), start: "top 80%", toggleActions: "play none none none" },
    });
    gsap.fromTo(container.querySelector(".gsap-mentorship"), { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-mentorship"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Business</span>
                <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                  B2B growth that your CFO will actually be happy about.
                </h1>
                <p className="gsap-hero-desc mt-5 text-base text-muted-foreground opacity-0">
                  Let's be honest — most B2B marketing is boring enough to cure insomnia. Ours isn't. We bring the same energy we put into fashion brands to the B2B world: killer lead gen, ads that don't feel corporate, websites people actually enjoy visiting, and AI agents that do the work of five interns. All measurable. All ROI-positive. All without the buzzword bingo.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/business/contact" className="gsap-hero-cta opacity-0">
                    <Button size="lg" className="rounded-lg font-medium gap-2">Get Started <ArrowRight size={16} /></Button>
                  </Link>
                  <Link to="/business/ai-agents" className="gsap-hero-cta opacity-0">
                    <Button size="lg" variant="outline" className="rounded-lg font-medium">Explore AI Agents</Button>
                  </Link>
                </div>
              </div>
              <div className="gsap-hero-cta opacity-0 rounded-xl overflow-hidden border border-border shadow-lg">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/21eDkPqQcXCF2sJcyeMn/media/68a62b3d280b9e3bebb53f6c.gif"
                  alt="WePix Business VSL"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <SectionHeading tag="Services" title="7 ways we help B2B companies stop being boring" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((s) => (
                <div key={s.title} className="gsap-service-card opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <s.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-semibold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container gsap-spotlight opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <SectionHeading tag="Spotlight" title="AI Agents: Your team's new best friend" description="Imagine having employees who never sleep, never complain, and qualify leads at 3 AM. That's what our custom-built AI agents do. Support, lead qualification, workflow automation — all trained on YOUR data." align="left" />
                <Link to="/business/ai-agents">
                  <Button size="lg" className="rounded-lg font-medium gap-2">Learn About AI Agents <ArrowRight size={16} /></Button>
                </Link>
              </div>
              <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                <img
                  src="/ai-agent-demo-5.png"
                  alt="AI assistant handing off intelligence to a human"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-3xl text-center gsap-mentorship opacity-0">
            <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-[21/9] mb-10 overflow-hidden">
              <img
                src="/mentorship-session-photo.png"
                alt="Business mentorship session reviewing ad performance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <SectionHeading tag="Premium" title="1:1 Business Mentorship" description="For founders who are done with guesswork. Strategy sessions, accountability, and execution support from people who've actually built stuff." />
            <Link to="/business/mentorship">
              <Button variant="outline" className="rounded-lg font-medium gap-2">Learn More <ArrowRight size={14} /></Button>
            </Link>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to make B2B exciting?" subtext="Let's have a real conversation about your goals. No jargon, no 'synergy' — just results." ctaLabel="Contact Business Team" />
    </Layout>
  );
}
