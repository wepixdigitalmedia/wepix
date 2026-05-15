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
import { useState } from "react";

const services = [
  { icon: Rocket, title: "Kickstarter Program", description: "60 days. Zero to selling. We build your store, shoot your products, run your ads, and hold your hand through the whole thing. It's like a bootcamp, but for your brand.", href: "/fashion/kickstarter", img: "Kickstarter program" },
  { icon: Camera, title: "WePixStudio", description: "AI-powered content creation that makes your ₹500 product look like it belongs in Vogue. Seriously, your competitors will be confused.", href: "/fashion/wepixstudio", img: "WePixStudio demo" },
  { icon: BarChart3, title: "Meta Ads Management", description: "We don’t just run ads. We make them hit. Full funnel systems that turn clicks into cash and scale without chaos.", href: "/fashion/book", img: "Ads dashboard" },
];

const mcsSteps = [
  { step: "M", title: "Media", description: "Right people. Right targeting. No wasted spend." },
  { step: "C", title: "Creative", description: "Content that stops the scroll and makes people care." },
  { step: "S", title: "Strategy", description: "Clear journey from first click to checkout." },
  { step: "4", title: "Iterate", description: "We track, tweak, and improve every single week." },
];

export default function Fashion() {
  const portfolioImages = [
    { src: "/velaura-work-1.png", alt: "Velaura saree collection" },
    { src: "/velaura-work-2.png", alt: "Velaura saree collection 2" },
    { src: "/pearloze-work-3.png", alt: "Pearloze fashion brand layout" },
    { src: "/travel-drops-work-6.png", alt: "Travel drops collection" },
    { src: "/yazhli-work-5.png", alt: "Yazhli festive collection" },
    { src: "/ankarkali-work-6.png", alt: "Anarkali / sharara collection" },
  ];
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

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
        <section className="gsap-hero-section py-10 sm:py-14 md:py-28 lg:py-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Fashion</span>
                <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                  You nailed the product. Now let's nail the marketing!
                </h1>
                <p className="gsap-hero-desc mt-5 text-base text-muted-foreground opacity-0">
                Every stitch, every fabric, every detail, you got it right. So why is your marketing still looking like a 2015 Facebook post? We help D2C fashion brands show up loud, sell hard, and build a brand that people actually talk about.
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
              <div className="rounded-xl bg-muted/40 flex items-center justify-center aspect-square gsap-hero-cta opacity-0 overflow-hidden">
                <img
                  src="/fashion-hero-light.png"
                  alt="Fashion e-commerce hero visual"
                  className="w-full h-full object-cover dark:hidden"
                />
                <img
                  src="/fashion-hero-dark.png"
                  alt="Fashion e-commerce hero visual"
                  className="hidden w-full h-full object-cover dark:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fashion Portfolio Strip */}
        <section className="py-12 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {portfolioImages.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  className="rounded-xl bg-muted/40 flex items-center justify-center aspect-[3/4] overflow-hidden text-left"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
            onClick={() => setActiveImageIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-2xl leading-none"
              onClick={() => setActiveImageIndex(null)}
            >
              ×
            </button>
            <button
              type="button"
              className="absolute left-4 text-white text-3xl leading-none"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === null ? 0 : (prev - 1 + portfolioImages.length) % portfolioImages.length));
              }}
            >
              ‹
            </button>
            <img
              src={portfolioImages[activeImageIndex].src}
              alt={portfolioImages[activeImageIndex].alt}
              className="max-w-full max-h-[90vh] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute right-4 text-white text-3xl leading-none"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === null ? 0 : (prev + 1) % portfolioImages.length));
              }}
            >
              ›
            </button>
          </div>
        )}

        <section className="py-10 md:py-16 lg:py-24 border-t border-border">
          <div className="container max-w-3xl text-center gsap-problem opacity-0">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">You've got a killer product. So why isn't anyone buying?</h2>
            <p className="mt-6 text-lg text-muted-foreground">Because in today’s world, having a dope product isn’t enough. You need content that grabs attention, ads that don't scream “ads,” a store that actually converts, and a strategy that doesn’t depend on algorithm luck. That's literally our thing, and we're lowkey smashing it.</p>
          </div>
        </section>

        <section className="py-10 md:py-16 lg:py-24 bg-muted/30">
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
                            src="/kickstarter-program-light.png"
                            alt="Kickstarter program strategy visual"
                            className="w-full h-full object-cover dark:hidden"
                          />
                          <img
                            src="/kickstarter-program-dark.png"
                            alt="Kickstarter program strategy visual"
                            className="hidden w-full h-full object-cover dark:block"
                          />
                        </div>
                      ) : s.title === "WePixStudio" ? (
                        <div className="aspect-video rounded-none border-0 border-b-2 overflow-hidden bg-muted/40">
                          <img
                            src="/wepixstudio-hero-light.png"
                            alt="WePix AI Studio"
                            className="w-full h-full object-cover dark:hidden"
                          />
                          <img
                            src="/wepixstudio-hero-dark.png"
                            alt="WePix AI Studio"
                            className="hidden w-full h-full object-cover dark:block"
                          />
                        </div>
                      ) : s.title === "Meta Ads Management" ? (
                        <div className="aspect-video rounded-none border-0 border-b-2 overflow-hidden bg-muted/40">
                          <img
                            src="/meta-ads-dashboard-light.png"
                            alt="Meta ads dashboard"
                            className="w-full h-full object-cover dark:hidden"
                          />
                          <img
                            src="/meta-ads-dashboard-dark.png"
                            alt="Meta ads dashboard"
                            className="hidden w-full h-full object-cover dark:block"
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

        <section className="gsap-mcs-section py-10 md:py-16 lg:py-24">
          <div className="container">
            <SectionHeading tag="Our Secret Sauce" title="The MCS Framework" description="Media. Creative. Strategy. Then we keep pushing till it works. This is how every campaign we run turns into real results." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {mcsSteps.map((step) => (
                <div key={step.step} className="gsap-mcs-step text-center opacity-0">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {step.step === "M" ? (
                      <img
                        src="/mcs-media-icon.png"
                        alt="Media step icon"
                        className="w-8 h-8 object-contain dark:invert"
                      />
                    ) : step.step === "C" ? (
                      <img
                        src="/mcs-creative-icon.png"
                        alt="Creative step icon"
                        className="w-8 h-8 object-contain dark:invert"
                      />
                    ) : step.step === "S" ? (
                      <img
                        src="/mcs-strategy-icon.png"
                        alt="Strategy step icon"
                        className="w-8 h-8 object-contain dark:invert"
                      />
                    ) : step.step === "4" ? (
                      <img
                        src="/mcs-iterate-icon.png"
                        alt="Iterate step icon"
                        className="w-8 h-8 object-contain dark:invert"
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

      <CTABanner headline="Your brand deserves attention. Let’s get it." subtext="We’ll review your marketing, spot the gaps, and map out what actually moves the needle." ctaLabel="Book a Free Call" />
    </Layout>
  );
}
