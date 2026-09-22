import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import {
  Calendar,
  Clock,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Video,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { AI_MASTERCLASS_URL } from "@/components/shared/MasterclassPopup";

const pastWebinars = [
  { title: "Build Your Fashion Brand Online (Batch 5)", date: "19th Sep 2026", attendees: "150+ Founders" },
  { title: "Meta Ads in 2024: What Actually Works (and what's just hype)", date: "March 2024", attendees: "250+" },
  { title: "Content Strategy for D2C Fashion Brands That Don't Want to Be Boring", date: "February 2024", attendees: "180+" },
  { title: "From ₹0 to ₹10L/month: A Real Case Study (with real numbers)", date: "January 2024", attendees: "300+" },
  { title: "AI Tools Every Marketer Should Be Using (Before Your Competitors Do)", date: "December 2023", attendees: "200+" },
];

const founderStories = [
  {
    name: "Sathya",
    role: "Founder",
    stat: "Crossed ₹20+ Lakhs/mo",
    quote:
      "Before working with Abdul, we were mainly selling through Instagram DMs and struggling to scale beyond small monthly orders. Abdul helped us structure our brand properly with a Shopify store, content strategy, and Meta ads funnel. Within a short period, our brand crossed ₹20+ Lakhs in online sales.",
  },
  {
    name: "Fina",
    role: "Founder & CEO",
    stat: "Crossed ₹10+ Lakhs/mo",
    quote:
      "We had good products but our online sales were inconsistent. Abdul helped us understand product positioning, pricing strategy, and how to use content with ads effectively. Once we implemented the system, the brand crossed ₹10 Lakhs in online sales.",
  },
  {
    name: "Nilasheenee",
    role: "Entrepreneur",
    stat: "Crossed ₹10+ Lakhs/mo",
    quote:
      "Our biggest challenge was turning followers into actual customers. Abdul helped us build a structured sales system combining content, Shopify conversion, and Meta ads. After implementing the strategies, Pearloze crossed ₹10+ Lakhs in online sales.",
  },
];

export default function Webinar() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-masterclass-card", container, { stagger: 0.1, y: 25 });
    scrollFadeIn(".gsap-testimonial-card", container, { stagger: 0.1, y: 25 });
    scrollFadeIn(".gsap-past-webinar", container, { stagger: 0.08, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Original Clean Hero Section with Speaker Image */}
        <section className="gsap-hero-section py-10 sm:py-14 md:py-24 lg:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">
              Live Masterclasses
            </span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0 tracking-tight leading-[1.15]">
              Free Live Sessions. Real Insights. No Pitch Decks.
            </h1>
            <p className="gsap-hero-desc mt-4 text-base sm:text-lg text-muted-foreground opacity-0 leading-relaxed">
              Every session, we go live to break down real campaigns, share what’s actually working, and answer your questions. No fluff, just straight-up value. Join, learn, and leave with more knowledge and real systems than you came with.
            </p>
            <div className="mt-8 sm:mt-10 rounded-2xl overflow-hidden aspect-video border border-border shadow-md bg-muted/40">
              <img
                src="/webinar-speaker-photo-2.png"
                alt="Live workshop on building scalable brand systems by Abdul Navas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Live & Upcoming Masterclass Section - Clean, Focused, Minimal */}
        <section id="masterclasses" className="py-12 md:py-20 lg:py-24 border-t border-border bg-muted/30">
          <div className="container max-w-4xl">
            <SectionHeading
              tag="Upcoming Masterclass"
              title="Build Your First AI Employee"
              description="Direct 3-hour hands-on live session with Abdul Navas. Taught in Tamil (தமிழ்), backed by real live automations and production systems."
            />

            <div className="mt-8 max-w-3xl mx-auto">
              {/* Featured Card: AI Employee Masterclass (10 Oct) */}
              <div className="gsap-masterclass-card opacity-0">
                <Card className="rounded-2xl border-border bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    {/* Top Status Header */}
                    <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-500/10 via-primary/5 to-transparent border-b border-border flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                          <Sparkles size={12} />
                          Batch 1 · Upcoming Live
                        </span>
                        <Badge variant="outline" className="text-xs font-semibold">
                          AI Systems
                        </Badge>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Tamil (தமிழ்) Live
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Calendar size={15} className="text-blue-500" /> 10th October 2026
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={15} className="text-blue-500" /> 7:00 PM IST (3 hrs)
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                          Build Your First AI Employee
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base mt-2 leading-relaxed">
                          Stop treating AI like a chatbot. Turn AI into a 24/7 autonomous employee that checks ad ROAS daily, reconciles Razorpay payments, and automates your business briefings.
                        </p>
                      </div>

                      {/* 3 Clean Hooked Points */}
                      <div className="space-y-3 pt-2 text-sm sm:text-base">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                          <span><strong>AI Assistant vs Employee:</strong> Give AI a single responsibility, real data, and automated schedules.</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                          <span><strong>Ad Doctor & Payment Tracker:</strong> Automatically catch performance anomalies and cash leaks.</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                          <span><strong>Free Templates:</strong> Complete AI Employee Setup Framework & Reusable Prompts included.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA Footer */}
                  <div className="p-6 sm:p-8 pt-4 border-t border-border/70 bg-muted/20 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl font-bold text-foreground">₹1,999</span>
                        <span className="text-sm text-muted-foreground line-through">₹4,999</span>
                      </div>
                      <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-0 text-xs font-semibold">
                        60% OFF Early Cohort Pass
                      </Badge>
                    </div>

                    <a
                      href={AI_MASTERCLASS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button size="lg" className="w-full gap-2 font-medium bg-foreground text-background hover:bg-foreground/90">
                        Reserve Your Seat (₹1,999) <ExternalLink size={16} />
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Stories & Real Results */}
        <section className="py-12 md:py-20 border-t border-border bg-background">
          <div className="container max-w-5xl">
            <SectionHeading
              tag="Founder Wins"
              title="What founders say after working with Abdul"
              description="Real feedback from founders who implemented these structured sales & automation frameworks."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {founderStories.map((story) => (
                <div key={story.name} className="gsap-testimonial-card opacity-0">
                  <Card className="h-full rounded-2xl border-border bg-card flex flex-col justify-between p-6">
                    <CardContent className="p-0 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-amber-500 text-sm">★★★★★</span>
                        <Badge variant="secondary" className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                          {story.stat}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "{story.quote}"
                      </p>
                    </CardContent>
                    <div className="pt-4 border-t border-border mt-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-foreground text-background font-bold flex items-center justify-center text-xs">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{story.name}</p>
                        <p className="text-xs text-muted-foreground">{story.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Your Mentor */}
        <section className="py-12 md:py-20 border-t border-border bg-muted/20">
          <div className="container max-w-4xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-border shadow-md bg-muted/20">
                    <img
                      src="/mentor-abdul.jpg"
                      alt="Abdul Navas - Founder of WePix"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold mt-4">Abdul Navas</h3>
                  <p className="text-xs text-muted-foreground">Founder & Lead Strategist, WePix</p>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">Meet Your Mentor</span>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    Learn from someone actively managing live systems.
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Abdul Navas is a brand consultant and the founder of WePix Digital Media based in Tiruppur. He works directly with brand owners and startups to build scalable online businesses using structured systems combining Shopify, Meta ads, and AI automation.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground"><TrendingUp size={14} className="text-brand" /> ₹2Cr+ Managed Ad Spend</span>
                    <span className="flex items-center gap-1.5 text-foreground"><Award size={14} className="text-brand" /> 50+ Brands Scaled</span>
                    <span className="flex items-center gap-1.5 text-foreground"><Users size={14} className="text-brand" /> 500+ Community Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Sessions Archive */}
        <section className="py-12 md:py-20 border-t border-border bg-background">
          <div className="container max-w-4xl">
            <SectionHeading tag="Archive" title="Past Live Breakdowns & Recordings" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {pastWebinars.map((w) => (
                <div key={w.title} className="gsap-past-webinar opacity-0">
                  <Card className="h-full rounded-xl border-border bg-card">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                        <Video size={14} className="text-foreground" />
                        <span>{w.date} · {w.attendees}</span>
                      </div>
                      <h4 className="font-display text-sm font-semibold">{w.title}</h4>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner
        headline="Ready to build your first AI employee?"
        subtext="Secure your seat in the live masterclass and walk away with ready-to-use systems, prompts, and templates."
        ctaLabel="Reserve Seat for 10th Oct (₹1,999)"
        ctaHref={AI_MASTERCLASS_URL}
        useDialog={false}
      />
    </Layout>
  );
}
