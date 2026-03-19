import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Check, Star, ArrowRight } from "lucide-react";

const curriculum = [
  { module: "Module 1", title: "Meta Ads Fundamentals", topics: "Account structure, pixel setup, conversion API, campaign objectives — all the boring-but-essential stuff that 90% of people skip (and then wonder why their ads don't work)" },
  { module: "Module 2", title: "Audience Strategy", topics: "Custom audiences, lookalikes, interest stacking, exclusions — basically how to find YOUR people in a sea of 3 billion Facebook users" },
  { module: "Module 3", title: "Creative That Converts", topics: "Ad formats, hooks, UGC, carousel strategy, video ads — the art and science of making people stop scrolling and start buying" },
  { module: "Module 4", title: "Campaign Architecture", topics: "CBO vs ABO, testing frameworks, scaling strategies — the nerdy structural stuff that separates pros from amateurs" },
  { module: "Module 5", title: "Funnel Building", topics: "Awareness → consideration → conversion — how to take someone from 'who are you?' to 'take my money!' in a systematic way" },
  { module: "Module 6", title: "Analytics & Optimization", topics: "Reading data, attribution models, ROAS optimization — because the dashboard is trying to tell you a story, and most people can't read it" },
  { module: "Module 7", title: "Scaling Playbook", topics: "Horizontal scaling, vertical scaling, creative refresh cycles — how to go from ₹1K/day to ₹1L/day without everything breaking" },
  { module: "Module 8", title: "Advanced Strategies", topics: "Dynamic creative, catalog ads, Advantage+ campaigns, AI tools — the cutting-edge stuff we're testing RIGHT NOW with our own brands" },
];

const faqs = [
  { q: "Is this course for beginners?", a: "Yes AND no. If you're a complete beginner, we start from absolute zero — pixel setup, account structure, everything. If you're already running ads, skip to the advanced modules. The course is structured so you can jump to whatever level you're at. No judgement either way." },
  { q: "How long do I have access?", a: "Literally forever. Lifetime access with continuous updates. When Meta changes their algorithm (which they do every Tuesday, apparently), we update the course. You never pay again." },
  { q: "Is there a community?", a: "Oh yes. Private Skool community with daily discussions, campaign reviews, meme sharing (okay, some memes), and real-time help from people who actually run ads for a living." },
  { q: "What if I'm not in fashion?", a: "The strategies work for ANY D2C brand — skincare, food, accessories, home decor, you name it. The frameworks are universal. Fashion is just our specialty because we're extra." },
  { q: "Is there a refund policy?", a: "7-day money-back guarantee, no questions asked. If you don't love it, we'll refund you and recommend someone else's course (just kidding, we won't recommend anyone else, but we'll refund you)." },
];

export default function MetaAdsCourse() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-mod", container, { stagger: 0.06, y: 20 });
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div ref={containerRef}>
          <WhatsAppButton />

          <section className="gsap-hero-section py-24 md:py-36 border-b border-border">
            <div className="container max-w-3xl text-center">
              <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Academy</span>
              <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Meta Ads Mastery Course</h1>
              <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground max-w-xl mx-auto opacity-0">The complete, no-BS playbook on running profitable Meta Ads. Built from years of actually running campaigns (and losing money, so you don't have to).</p>
              <div className="gsap-hero-cta mt-8 flex flex-col items-center gap-4 opacity-0">
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="text-foreground" />)}</div>
                <BookingFormDialog triggerLabel="Enroll Now" showArrow triggerClassName="px-8 text-base" />
              </div>
              <div className="mt-10 max-w-2xl mx-auto">
                <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                  <img
                    src="/ai-mentorship-hero.png"
                    alt="Course preview hero showing smart systems for brand growth"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Tired of wasting money on ads that get zero results?</h2>
              <p className="mt-6 text-lg text-muted-foreground">You've watched all the YouTube videos. You've tried boosting posts. You've even asked that one friend who 'knows digital marketing.' And your ROAS is still looking sadder than a Monday morning. This course fixes that. For real this time.</p>
              <div className="mt-10">
                <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-[21/9] overflow-hidden">
                  <img
                    src="/ad-dashboard-before-after.png"
                    alt="Ad dashboard showing wasted effort and campaign loss"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/30">
            <div className="container max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-center mb-10">What You Get (it's a LOT)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {["8 in-depth modules (no filler, no fluff)", "Lifetime access + continuous updates", "Private Skool community (500+ marketers)", "Real campaign breakdowns (our actual campaigns)", "Templates & frameworks (steal our homework)", "Direct instructor access (yes, really)", "Weekly live Q&A sessions", "7-day money-back guarantee (zero risk)"].map((item) => (
                  <div key={item} className="flex items-start gap-3"><Check className="text-foreground shrink-0 mt-0.5" size={18} /><p>{item}</p></div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-center mb-10">The Curriculum</h2>
              <div className="space-y-3">
                {curriculum.map((mod) => (
                  <div key={mod.module} className="gsap-mod opacity-0">
                    <Card className="rounded-xl border-border">
                      <CardContent className="p-5">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{mod.module}</span>
                        <h3 className="font-display text-base font-semibold mt-1">{mod.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{mod.topics}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/30">
            <div className="container max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-center mb-10">Got Questions? We got answers.</h2>
              <Accordion type="single" collapsible>
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="border-t border-border py-24">
            <div className="container text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Stop guessing. Start scaling. Join the club.</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">Hundreds of marketers and brand owners have transformed their ad game with this course. Your turn.</p>
              <div className="mt-8">
                <BookingFormDialog triggerLabel="Enroll Now" showArrow triggerClassName="px-8 text-base" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
