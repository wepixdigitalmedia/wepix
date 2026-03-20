import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { ArrowRight, Check, ShoppingBag, Palette, Zap, BarChart3, Search, Smartphone, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import shopifyPartnerBadge from "@/assets/shopify-partner.svg";
import { useState } from "react";

const services = [
  { icon: Palette, title: "Custom Theme Development", desc: "Bespoke Shopify themes designed for fashion — not generic templates that look like everyone else's store." },
  { icon: ShoppingBag, title: "Store Setup & Migration", desc: "From WooCommerce, Magento, or scratch — we'll get you on Shopify with zero data loss and zero downtime." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "70%+ of fashion shoppers browse on mobile. Every store we build is optimized for thumb-scrolling conversions." },
  { icon: Search, title: "SEO & Speed Optimization", desc: "Fast-loading pages, clean code, structured data — because Google rankings matter as much as good design." },
  { icon: BarChart3, title: "Conversion Rate Optimization", desc: "Strategic product page layouts, smart upsells, and checkout flows designed to maximize AOV and reduce cart abandonment." },
  { icon: Shield, title: "App Integration & Automation", desc: "Klaviyo, Shiprocket, Razorpay, Gokwik, WhatsApp — we integrate the tools that make your store run on autopilot." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We understand your brand, products, target audience, and revenue goals. No generic questionnaires — a real conversation." },
  { step: "02", title: "Strategy & Wireframing", desc: "Information architecture, user flows, and wireframes tailored to your catalog size and customer journey." },
  { step: "03", title: "Design & Development", desc: "Pixel-perfect design → Shopify Liquid/Hydrogen development. You review, we iterate until it's perfect." },
  { step: "04", title: "Testing & Launch", desc: "Cross-device testing, payment gateway verification, speed audit, and a smooth go-live with post-launch support." },
];

const plans = [
  {
    name: "Starter Store",
    price: "Unlock Price → Contact Us",
    desc: "For new D2C brands launching their first Shopify store.",
    features: [
      "Premium theme customization",
      "Up to 50 product uploads",
      "Mobile-responsive design",
      "Payment gateway setup",
      "Basic SEO setup",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Growth Store",
    price: "Unlock Price → Contact Us",
    badge: "Popular",
    desc: "For brands ready to scale with a conversion-optimized store.",
    features: [
      "Custom theme development",
      "Up to 200 product uploads",
      "Advanced product filtering",
      "Klaviyo/email integration",
      "Speed & SEO optimization",
      "App integrations (up to 5)",
      "4 rounds of revisions",
      "30 days post-launch support",
    ],
  },
  {
    name: "Enterprise Store",
    price: "Unlock Price → Contact Us",
    desc: "For established brands needing a fully custom, high-performance store.",
    features: [
      "Fully custom design & dev",
      "Unlimited product uploads",
      "Custom app development",
      "Multi-currency & language",
      "Advanced analytics setup",
      "Headless/Hydrogen option",
      "Dedicated project manager",
      "90 days post-launch support",
    ],
  },
];

export default function ShopifyService() {
  const portfolioImages = [
    { label: "Fashion Brand Store", src: "/fashion-brand-store.png", alt: "Fashion brand store homepage preview" },
    { label: "D2C Lifestyle Store", src: "/d2c-lifestyle-store.png", alt: "D2C lifestyle store preview" },
    { label: "Premium Apparel Store", src: "/premium-apparel-store.png", alt: "Premium apparel store preview" },
  ];
  const [activePortfolioIndex, setActivePortfolioIndex] = useState<number | null>(null);

  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-service", container, { stagger: 0.08, y: 20 });
    scrollFadeIn(".gsap-step", container, { stagger: 0.1, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="gsap-hero-section py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <img src={shopifyPartnerBadge} alt="Shopify Partner" className="gsap-hero-tag h-10 w-auto mb-6 opacity-0" />
              <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Official Shopify Partner</span>
              <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                Build your premium Shopify store for Fashion & D2C
              </h1>
              <p className="gsap-hero-desc mt-4 text-base text-muted-foreground max-w-2xl opacity-0">
                Beautiful D2C Shopify stores AND high-end model content generated from your raw iPhone shots using <a href="https://wepixstudio.app" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-2 hover:text-primary transition-colors">WePixStudio.App</a> — our proprietary AI tool. From store design to product photography, we handle the full visual stack so your brand looks premium from day one.
              </p>
              <div className="gsap-hero-cta mt-8 flex gap-4 opacity-0">
                <BookingFormDialog triggerLabel="Get a Free Consultation" showArrow />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Services" title="What we build on Shopify" description="Full-service Shopify development tailored for fashion & D2C brands." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((s) => (
                <div key={s.title} className="gsap-service opacity-0">
                  <Card className="h-full border-border">
                    <CardContent className="p-5">
                      <s.icon className="text-foreground mb-2" size={20} />
                      <h3 className="font-display text-sm font-semibold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 border-t border-border">
          <div className="container max-w-3xl">
            <SectionHeading tag="Process" title="How we build your store" align="left" />
            <div className="space-y-4">
              {process.map((p) => (
                <div key={p.step} className="gsap-step flex gap-4 items-start opacity-0">
                  <span className="font-display text-2xl font-bold text-muted-foreground/30 shrink-0 w-10">{p.step}</span>
                  <div>
                    <h3 className="font-display text-base font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <SectionHeading tag="Portfolio" title="Stores we've built" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioImages.map((item, i) => (
                <Card key={item.label} className="border-border overflow-hidden">
                  <button
                    type="button"
                    className="aspect-[3/4] rounded-none border-0 overflow-hidden bg-muted/40 w-full text-left"
                    onClick={() => setActivePortfolioIndex(i)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {activePortfolioIndex !== null && (
          <div
            className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
            onClick={() => setActivePortfolioIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-2xl leading-none"
              onClick={() => setActivePortfolioIndex(null)}
            >
              ×
            </button>
            <button
              type="button"
              className="absolute left-4 text-white text-3xl leading-none"
              onClick={(e) => {
                e.stopPropagation();
                setActivePortfolioIndex((prev) => (prev === null ? 0 : (prev - 1 + portfolioImages.length) % portfolioImages.length));
              }}
            >
              ‹
            </button>
            <img
              src={portfolioImages[activePortfolioIndex].src}
              alt={portfolioImages[activePortfolioIndex].alt}
              className="max-w-full max-h-[90vh] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute right-4 text-white text-3xl leading-none"
              onClick={(e) => {
                e.stopPropagation();
                setActivePortfolioIndex((prev) => (prev === null ? 0 : (prev + 1) % portfolioImages.length));
              }}
            >
              ›
            </button>
          </div>
        )}

        {/* Pricing */}
        <section className="py-16 border-t border-border">
          <div className="container">
            <SectionHeading tag="Pricing" title="Transparent pricing, no surprises" description="Pick a package or get a custom quote. All prices are one-time project fees." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Card className={`h-full border-border flex flex-col ${i === 1 ? "ring-2 ring-primary" : ""}`}>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                        {plan.badge && <Badge className="text-xs bg-primary text-primary-foreground">{plan.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.desc}</p>
                      <ul className="space-y-2 flex-1 mb-5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check size={14} className="text-foreground shrink-0 mt-0.5" /> {f}
                          </li>
                        ))}
                      </ul>
                      <BookingFormDialog triggerLabel="Get Started" triggerVariant={i === 1 ? "default" : "outline"} triggerSize="default" triggerClassName="w-full" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WePixStudio Integration */}
        <section className="py-16 border-t border-border">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs font-medium text-muted-foreground mb-3 px-3 py-1 rounded-full border border-border bg-muted">Powered by WePixStudio</span>
                <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">Your store + AI content. One team.</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Most agencies build your store and leave you scrambling for product photos. We don't. With WePixStudio.App — our proprietary AI tool — we generate high-end model content directly from your raw iPhone shots. No studio, no photographer, no ₹50K per shoot. Just upload your garment photos and get professional, brand-ready lifestyle images in minutes.
                </p>
                <ul className="space-y-2 mb-6">
                  {["AI model photoshoots from raw product images", "Consistent brand aesthetic across 100s of SKUs", "Launch-ready content in minutes, not weeks", "Starting at ₹999/month on WePixStudio.App"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-foreground shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wepixstudio.app/register" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="font-medium gap-2">Try WePixStudio Free <ArrowRight size={16} /></Button>
                </a>
              </div>
              <div className="relative h-[340px] rounded-2xl bg-muted/40 p-4">
                <div className="absolute left-3 bottom-3 w-[46%] rounded-xl border border-border/50 overflow-hidden shadow-sm">
                  <img
                    src="/raw-iphone-shot-2.png"
                    alt="Raw iPhone garment flat lay"
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>
                <div className="absolute right-3 top-3 w-[46%] rounded-xl border border-border/50 overflow-hidden shadow-sm">
                  <img
                    src="/ai-generated-result-1.png"
                    alt="AI-generated fashion model result"
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-3xl text-center">
            <img src={shopifyPartnerBadge} alt="Shopify Partner" className="h-8 w-auto mx-auto mb-4" />
            <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">Official Shopify Partner</h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              As a certified Shopify Partner, we have access to exclusive tools, priority support from Shopify, and deep expertise in the platform. Your store is in safe, certified hands.
            </p>
          </div>
        </section>
      </div>

      <CTABanner
        headline="Ready to build a store that actually sells?"
        subtext="Book a free consultation call. We'll audit your current setup and share a roadmap — no obligations, no pushy sales."
        ctaLabel="Book Free Consultation"
      />
    </Layout>
  );
}
