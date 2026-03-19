import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { ArrowRight, Camera, Rocket, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const services = [
  { icon: Rocket, title: "Kickstarter Program", description: "60 days. Zero to selling. We build your store, shoot your products, run your ads, and hold your hand through the whole thing. It's like a bootcamp, but for your brand.", href: "/fashion/kickstarter", img: "Kickstarter program" },
  { icon: Camera, title: "WePixStudio", description: "AI-powered content creation that makes your ₹500 product look like it belongs in Vogue. Seriously, your competitors will be confused.", href: "/fashion/wepixstudio", img: "WePixStudio demo" },
  { icon: BarChart3, title: "Meta Ads Management", description: "Full-funnel ad management powered by our MCS Framework. We don't just run ads — we build a system that prints money (legally).", href: "/fashion/book", img: "Ads dashboard" },
];

const mcsSteps = [
  { step: "M", title: "Media", description: "Where to show up, who to target, and how much to spend without crying. Platform strategy that actually makes sense." },
  { step: "C", title: "Creative", description: "The stuff that makes people stop scrolling. UGC, product shoots, carousel ads — content so good people screenshot it." },
  { step: "S", title: "Strategy", description: "Full-funnel thinking: from 'who are you?' to 'take my money!' — awareness, consideration, conversion, retention." },
  { step: "4", title: "Iterate", description: "Weekly data reviews because ads aren't a 'set it and forget it' crockpot. We optimize obsessively." },
];

export default function Fashion() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-service-card", container, { stagger: 0.1, y: 30 });
    gsap.fromTo(
      container.querySelectorAll(".gsap-mcs-step"),
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)",
        scrollTrigger: { trigger: container.querySelector(".gsap-mcs-section"), start: "top 75%", toggleActions: "play none none none" },
      }
    );
    gsap.fromTo(container.querySelector(".gsap-problem"), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-problem"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Fashion</span>
                <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                  Your product is fire. Your marketing? Let's talk about that.
                </h1>
                <p className="gsap-hero-desc mt-5 text-base text-muted-foreground opacity-0">
                  Here's the thing — you've spent months perfecting your designs, sourcing the best fabric, getting the stitching just right. And then your marketing is... a Canva template with Comic Sans vibes? Nah fam. We help D2C fashion brands create content that stops thumbs, run ads that convert wallets, and build a brand that people actually want to wear.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/fashion/kickstarter" className="gsap-hero-cta opacity-0">
                    <Button size="lg" className="rounded-lg font-medium gap-2">Start with Kickstarter <ArrowRight size={16} /></Button>
                  </Link>
                  <span className="gsap-hero-cta opacity-0">
                    <BookingFormDialog triggerLabel="Book a Call" triggerVariant="outline" />
                  </span>
                </div>
              </div>
              <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-square gsap-hero-cta opacity-0 overflow-hidden">
                <img
                  src="/fashion-hero.png"
                  alt="Fashion e-commerce hero visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fashion Portfolio Strip */}
        <section className="py-12 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {Array.from({ length: 6 }).map((_, i) => {
                if (i === 0) {
                  return (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden"
                    >
                      <img
                        src="/velaura-work-1.png"
                        alt="Velaura saree collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                if (i === 1) {
                  return (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden"
                    >
                      <img
                        src="/velaura-work-2.png"
                        alt="Velaura saree collection 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                if (i === 2) {
                  return (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden"
                    >
                      <img
                        src="/pearloze-work-3.png"
                        alt="Pearloze fashion brand layout"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                if (i === 3) {
                  return (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden"
                    >
                      <img
                        src="/travel-drops-work-6.png"
                        alt="Travel drops collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                if (i === 4) {
                  return (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden"
                    >
                      <img
                        src="/yazhli-work-5.png"
                        alt="Yazhli festive collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                if (i === 5) {
                  return (
                    <div
                      key={i}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden"
                    >
                      <img
                        src="/ankarkali-work-6.png"
                        alt="Anarkali / sharara collection"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                return <ImagePlaceholder key={i} label={`Work ${i + 1}`} aspectRatio="portrait" />;
              })}
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl text-center gsap-problem opacity-0">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">You've got a killer product. So why isn't anyone buying?</h2>
            <p className="mt-6 text-lg text-muted-foreground">Because in 2024, having great products isn't enough. You need scroll-stopping content, ads that don't look like ads, a store that converts, and a strategy that doesn't involve praying to the algorithm gods. That's literally what we do — and we're embarrassingly good at it.</p>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Services" title="Everything your fashion brand needs (and then some)" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((s) => (
                <div key={s.title} className="gsap-service-card opacity-0">
                  <Link to={s.href}>
                    <Card className="h-full hover:shadow-md transition-all rounded-xl border-border group overflow-hidden">
                      {s.title === "Kickstarter Program" ? (
                        <div className="aspect-video rounded-none border-0 border-b-2 overflow-hidden bg-muted/40">
                          <img
                            src="/kickstarter-program.png"
                            alt="Kickstarter program strategy visual"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : s.title === "WePixStudio" ? (
                        <div className="aspect-video rounded-none border-0 border-b-2 overflow-hidden bg-muted/40">
                          <img
                            src="/wepixstudio-hero.png"
                            alt="WePix AI Studio"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : s.title === "Meta Ads Management" ? (
                        <div className="aspect-video rounded-none border-0 border-b-2 overflow-hidden bg-muted/40">
                          <img
                            src="/meta-ads-dashboard.png"
                            alt="Meta ads dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder label={s.img} aspectRatio="video" className="rounded-none border-0 border-b-2" />
                      )}
                      <CardContent className="p-6">
                        <s.icon className="text-foreground mb-4" size={24} />
                        <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={14} className="ml-1" /></div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gsap-mcs-section py-24">
          <div className="container">
            <SectionHeading tag="Our Secret Sauce" title="The MCS Framework" description="Media, Creative, Strategy — and never-ending iteration. This is the system behind every successful campaign we've ever run." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {mcsSteps.map((step) => (
                <div key={step.step} className="gsap-mcs-step text-center opacity-0">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {step.step === "M" ? (
                      <img
                        src="/mcs-media-icon.png"
                        alt="Media step icon"
                        className="w-8 h-8 object-contain"
                      />
                    ) : step.step === "C" ? (
                      <img
                        src="/mcs-creative-icon.png"
                        alt="Creative step icon"
                        className="w-8 h-8 object-contain"
                      />
                    ) : step.step === "S" ? (
                      <img
                        src="/mcs-strategy-icon.png"
                        alt="Strategy step icon"
                        className="w-8 h-8 object-contain"
                      />
                    ) : step.step === "4" ? (
                      <img
                        src="/mcs-iterate-icon.png"
                        alt="Iterate step icon"
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="font-display text-xl font-semibold">{step.step}</span>
                    )}
                  </div>
                  <h3 className="font-display text-base font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to make your fashion brand unforgettable?" subtext="Book a free strategy call. We'll roast your current marketing (lovingly) and show you what's possible." ctaLabel="Book a Free Call" />
    </Layout>
  );
}
