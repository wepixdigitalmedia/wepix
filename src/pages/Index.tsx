import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { TirupurTooltip } from "@/components/shared/TirupurTooltip";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, ShoppingBag, Play, Linkedin, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StackedReels } from "@/components/shared/StackedReels";
import { WistiaLeadForm } from "@/components/shared/WistiaLeadForm";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import velauraLogo from "@/assets/brands/velaura.png";
import pinkstoriesLogo from "@/assets/brands/pinkstories.webp";
import yazhliLogo from "@/assets/brands/yazhli.webp";
import ishikaLogo from "@/assets/brands/ishika.png";
import reviashLogo from "@/assets/brands/reviash.png";
import lemoonLogo from "@/assets/brands/lemoon.png";
import fregorLogo from "@/assets/brands/fregor.png";

const trustedBrands = [
  { name: "Velaura", src: velauraLogo, href: "https://velaura.in/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-auto w-24 md:w-32" },
  { name: "Pink Stories", src: pinkstoriesLogo, href: "https://pinkstories.ae/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-auto w-28 md:w-36" },
  { name: "Yazhli", src: yazhliLogo, href: "https://yazhlicollection.com/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-8 md:h-12 w-auto" },
  { name: "Ishika Trends", src: ishikaLogo, href: "https://ishikatrends.com/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-10 md:h-14 w-auto" },
  { name: "Reviash", src: reviashLogo, href: "https://reviash.com/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-auto w-16 md:w-24" },
  { name: "Lemoon Baby", src: lemoonLogo, href: "https://www.lemoonbaby.in/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-auto w-24 md:w-32" },
  { name: "Fregor", src: fregorLogo, href: "https://fregor.in/?utm_source=wepix.in&utm_medium=partner_logo", className: "h-auto w-16 md:w-24" },
];

function XLogo({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2h3.308l-7.227 8.26L22.825 22h-6.652l-5.21-6.817L4.999 22H1.69l7.73-8.835L1.286 2h6.82l4.71 6.231L18.244 2Zm-1.16 18h1.833L7.112 3.896H5.146L17.084 20Z" />
    </svg>
  );
}

import heroFashionLight from "@/assets/hero-fashion-light.png";
import heroFashionDark from "@/assets/hero-fashion-dark.png";
import academyHeroLight from "@/assets/academy-hero-light.png";
import academyHeroDark from "@/assets/academy-hero-dark.png";
import businessHeroLight from "@/assets/business-hero-light.png";
import businessHeroDark from "@/assets/business-hero-dark.png";
import sourcingHeroLight from "@/assets/sourcing-hero-light.png";
import sourcingHeroDark from "@/assets/sourcing-hero-dark.png";
import founderAbdulImage from "@/assets/founder-abdul.png";
import founderSanthoshImage from "@/assets/founder-santhosh.png";
import founderVigneshImage from "@/assets/founder-vignesh.png";

const brandCards = [
  {
    icon: ShoppingBag,
    title: "Fashion",
    description: "Your clothes deserve better than a boring Instagram grid. We do content, ads, and growth - the whole shebang.",
    href: "/fashion",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Learn Meta Ads from people who've actually burned their own money figuring it out. No cap, just real playbooks.",
    href: "/academy",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "B2B doesn't have to be boring. AI agents, lead gen, and marketing that makes your competitors nervous.",
    href: "/business",
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Sparkles,
    title: "Sourcing",
    description: (<>Straight from <TirupurTooltip />. No middlemen. No nonsense. Just solid quality and fair pricing.</>),
    href: "https://wepixsourcing.com",
    color: "from-orange-500/20 to-orange-500/5"
  }
];

const caseStudies = [
  { brand: "Premium Westernwear", stat: "₹6.9L in 28 days", description: "Sales were all over the place. We built structure. Ads, creatives, and tracking that actually made sense. Now it’s consistent revenue, not random spikes." },
  { brand: "Baby Clothing", stat: "3–4x ROAS. ₹11.7L/month", description: "Good products, no proper system. We built the engine. Content, ads, and tracking. Now doing ₹11L+ consistently." },
  { brand: "Athleisure", stat: "From unstable to ₹14.2L/month", description: "Sales were fluctuating hard. We stabilized the backend and doubled down on winners. Now growth is predictable." }
];

const testimonials = [
  {
    name: "Arjun R",
    role: "Founder, Chennai",
    quote:
      "Within 2 months, Wepix helped us scale from inconsistent sales to ₹4L/month. Their approach to fashion marketing is very practical and result-driven.",
  },
  {
    name: "Nithya S",
    role: "Co-Founder, Coimbatore",
    quote:
      "We were stuck at low ROAS, but after working with Wepix, it improved to 3.8x. They clearly understand how to scale D2C brands.",
  },
  {
    name: "Praveen K",
    role: "Founder, Bangalore",
    quote:
      "Wepix helped us cross ₹8L/month with structured ads and better creatives. The difference was visible within weeks.",
  },
  {
    name: "Karthik V",
    role: "Founder, Madurai",
    quote:
      "Their strategy is very clear and focused. No random experiments, everything is backed by data and results.",
  },
  {
    name: "Divya M",
    role: "Brand Owner, Kochi",
    quote:
      "What I liked most is their deep understanding of fashion audiences. Targeting and creatives were perfectly aligned.",
  },
  {
    name: "Aishwarya R",
    role: "Founder, Hyderabad",
    quote:
      "The content quality from Wepix Studio completely changed our brand image. It now looks premium and professional.",
  },
  {
    name: "Sanjay P",
    role: "Co-Founder, Tiruppur",
    quote:
      "Their creatives alone improved our conversion rate. Clean, aesthetic, and exactly what our brand needed.",
  },
  {
    name: "Manoj Kumar",
    role: "Founder, Salem",
    quote:
      "Very easy team to work with. Quick response, clear communication, and strong execution.",
  },
  {
    name: "Rahul S",
    role: "Founder, Erode",
    quote:
      "We've worked with other agencies before, but Wepix is the only one that delivered consistent results.",
  },
  {
    name: "Keerthana R",
    role: "Co-Founder, Trichy",
    quote:
      "Wepix feels like an extended team. They took complete ownership and helped us scale without confusion.",
  },
];

const Index = () => {
  const { displayText, showCursor } = useTypewriter();
  const [vslOpen, setVslOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground relative overflow-hidden">
        <div className="container relative py-8 sm:py-12 md:py-20 lg:py-28 xl:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>

              <span className="inline-block text-[0.6875rem] font-display font-semibold uppercase tracking-[0.15em] text-primary mb-4 md:mb-6">
                Digital Media Group
              </span>
              <div className="min-h-[5.5rem] sm:min-h-[6.5rem] md:min-h-[8rem] lg:min-h-[7.5rem] w-full">
                <h1 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] break-words hyphens-none">
                  We don't just run ads.{" "}
                  <span className="text-gradient">{displayText}</span>
                  <span className={`inline-block w-[3px] h-[0.85em] bg-foreground ml-0.5 align-middle rounded-sm transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`} />
                </h1>
              </div>
              <p className="mt-4 md:mt-5 text-[0.9375rem] md:text-base text-hero-foreground/60 leading-relaxed">
              Most brands are invisible online and they don't even know it. We fix that. From Meta ads to content to full brand strategy, we make sure your brand shows up, stands out, and brings back real results. One team. Every platform. No cap.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-10">
                <Link to="/fashion">
                  <Button size="lg" className="font-display font-medium text-base gap-2">
                    Explore WePix <ArrowRight size={18} />
                  </Button>
                </Link>
                <BookingFormDialog
                  triggerLabel="Let's Fix My Marketing"
                  triggerClassName="font-display font-medium text-base bg-primary text-primary-foreground hover:bg-primary/90"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-lg relative aspect-video bg-black/5 max-w-full"
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/86i9yszwdd?autoPlay=false&videoFoam=true&playbar=false&fullscreenButton=false&volumeControl=false&smallPlayButton=true&wistiaLogo=false&seo=false"
                title="WePix Strategy Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-none bg-transparent"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-14 lg:py-20 border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-8">
          <AnimatedCounter end={50} suffix="+" label="Brands Who Trust Us" />
          <AnimatedCounter end={2} suffix="Cr+" prefix="INR " label="Ad Spend We've Managed" />
          <AnimatedCounter end={10} suffix="K+" label="Creatives Crafted" />
          <AnimatedCounter end={3} suffix="x" label="Avg. ROAS (yeah, really)" />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 md:py-14 lg:py-20 border-b border-border overflow-hidden">
        <div className="container">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground text-center mb-5 md:mb-8">Trusted by brands like</p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee gap-6 sm:gap-8 md:gap-16 w-max items-center">
            {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, i) => (
              <a
                key={i}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 dark:invert dark:hover:invert-0 transition-all duration-300 ${brand.className || "h-8 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Navigator */}
      <section className="py-8 md:py-16 lg:py-28 xl:py-32">
        <div className="container">
          <SectionHeading
            tag="What We Do"
            title="Four verticals. One obsession."
            description="We're not your average agency that slaps a logo on everything and calls it a day. WePix runs four distinct verticals, each with its own team, strategy, and unhealthy amount of passion. Think of us as the Avengers of marketing, minus the capes (okay, sometimes capes)." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {brandCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={card.href}>
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                    {card.title === "Fashion" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={heroFashionLight}
                          alt="Fashion marketing visuals"
                          className="w-full h-full object-cover transition-all duration-500 dark:hidden"
                          loading="lazy"
                        />
                        <img
                          src={heroFashionDark}
                          alt="Fashion marketing visuals"
                          className="hidden w-full h-full object-cover transition-all duration-500 dark:block"
                          loading="lazy"
                        />
                      </div>
                    )}
                    {card.title === "Academy" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={academyHeroLight}
                          alt="Academy learning visuals"
                          className="w-full h-full object-cover transition-all duration-500 dark:hidden"
                          loading="lazy"
                        />
                        <img
                          src={academyHeroDark}
                          alt="Academy learning visuals"
                          className="hidden w-full h-full object-cover transition-all duration-500 dark:block"
                          loading="lazy"
                        />
                      </div>
                    )}
                    {card.title === "Business" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={businessHeroLight}
                          alt="Business and growth visuals"
                          className="w-full h-full object-cover transition-all duration-500 dark:hidden"
                          loading="lazy"
                        />
                        <img
                          src={businessHeroDark}
                          alt="Business and growth visuals"
                          className="hidden w-full h-full object-cover transition-all duration-500 dark:block"
                          loading="lazy"
                        />
                      </div>
                    )}
                    {card.title === "Sourcing" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={sourcingHeroLight}
                          alt="Sourcing visuals"
                          className="w-full h-full object-cover transition-all duration-500 dark:hidden"
                          loading="lazy"
                        />
                        <img
                          src={sourcingHeroDark}
                          alt="Sourcing visuals"
                          className="hidden w-full h-full object-cover transition-all duration-500 dark:block"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="p-5 sm:p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                        <card.icon className="text-foreground" size={24} />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{card.title}</h3>
                      <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{card.description}</p>
                      <div className="mt-4 flex items-center text-[0.8125rem] font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight size={14} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-8 md:py-16 lg:py-24 xl:py-28 bg-muted/50">
        <div className="container">
          <SectionHeading
            tag="Results"
            title="Real brands. Real money. Real stories."
            description="We don't do vanity metrics. Nobody cares about your 'reach' when you can't pay rent. Here's what happened when brands stopped settling for mid agencies and trusted us with their growth." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {caseStudies.map((study, i) =>
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="h-full border-border/50">
                  {study.brand === "Premium Westernwear" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                      <img
                        src="/ethnic-wear-results.png"
                        alt="Case study performance dashboard"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : study.brand === "Baby Clothing" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                      <img
                        src="/baby-clothing-results.png"
                        alt="Baby Clothing performance dashboard"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : study.brand === "Athleisure" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                      <img
                        src="/athleisure-results.png"
                        alt="Athleisure performance dashboard"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : study.brand === "BoonBabies" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                      <img
                        src="/boonbabies-results.png"
                        alt="BoonBabies performance dashboard"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : study.brand === "Nutmeg" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                      <img
                        src="/nutmeg-results.png"
                        alt="Nutmeg performance dashboard"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder label={`${study.brand} results`} aspectRatio="video" className="rounded-t-xl rounded-b-none border-0 border-b-2" />
                  )}
                  <CardContent className="p-5 sm:p-6">
                    <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.15em] text-primary">{study.brand}</span>
                    <p className="font-display text-xl font-semibold mt-2">{study.stat}</p>
                    <p className="text-[0.8125rem] text-muted-foreground mt-3 leading-relaxed">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-7 md:mt-10">
            <Link to="/fashion/case-studies">
              <Button variant="outline" className="font-display font-medium gap-2">
                View All Case Studies <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-8 md:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="container">
          <SectionHeading
            tag="How We Scale"
            title="Our 4 Secret Pillars"
            description="We're not your average agency that slaps a logo on everything and calls it a day. WePix runs four distinct verticals, each with its own team, strategy, and unhealthy amount of passion. Think of us as the Avengers of marketing, minus the capes (okay, sometimes capes)."
          />

          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                label: "Pillar 1",
                title: "Build a Brand That Actually Hits",
                body: "Stop guessing. We lock in your positioning, pricing, and vibe so your brand stands out and people get it instantly.",
              },
              {
                label: "Pillar 2",
                title: "Know Where Every Rupee Goes",
                body: "No more blind spending. Clean tracking, clear dashboards, and systems that show what’s working and what’s wasting money.",
              },
              {
                label: "Pillar 3",
                title: "Turn Content Into Sales Machines",
                body: "Content that grabs attention. Funnels that convert. Ads that actually bring in buyers, not just views.",
              },
              {
                label: "Pillar 4",
                title: "Make More From What You Already Have",
                body: "Emails, remarketing, smart offers. More repeat buyers, better cash flow, and growth that doesn’t break your brand.",
              },
            ].map((pillar, i) => {
              const isActive = activePillar === i;
              return (
                <motion.button
                  key={pillar.label}
                  type="button"
                  onClick={() => setActivePillar(activePillar === i ? null : i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="text-left"
                >
                  <div
                    className={`relative h-full rounded-[2rem] border overflow-hidden transition-colors duration-400 ${
                      isActive ? "bg-foreground text-background border-foreground/70" : "bg-muted/70 border-border/60"
                    }`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-6 transition-opacity duration-400 ${
                        isActive ? "opacity-0" : "opacity-100 bg-gradient-to-r from-primary/18 via-primary/6 to-transparent"
                      }`}
                    />
                    <div className="relative flex flex-col justify-between h-full p-5 md:p-6 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[0.75rem] font-semibold tracking-[0.12em] uppercase">
                          <span className={isActive ? "text-primary-foreground/80" : "text-muted-foreground"}>
                            {pillar.label}
                          </span>
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full border text-[0.7rem] leading-none transition-colors duration-300 ${
                              isActive
                                ? "border-background/80 bg-background/15 text-background"
                                : "border-border/80 bg-background/40 text-muted-foreground"
                            }`}
                          >
                            +
                          </span>
                        </div>
                        <h3
                          className={`font-display text-lg md:text-xl font-semibold leading-snug ${
                            isActive ? "" : "text-foreground"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <motion.p
                          className={`text-[0.8125rem] leading-relaxed ${
                            isActive ? "text-primary-foreground/85" : "text-muted-foreground"
                          }`}
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            height: isActive ? "auto" : 0,
                            marginTop: isActive ? 4 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {pillar.body}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manifesto Teaser */}
      <section className="py-8 md:py-14 lg:py-20">
        <div className="container max-w-3xl text-center">
          <SectionHeading tag="Our Philosophy" title="We have opinions. Strong ones." className="!mb-6 md:!mb-10" />
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mt-1 md:mt-0">
            We’re not into copy-paste marketing or “just boost the post, bro” strategies. We build brands people actually care about. The kind where customers jump into your DMs saying, “I need this.” We think differently. We build differently.<br></br> <b>Yeah, we even wrote a whole manifesto about it. Because why not?</b>
          </p>
          <Link to="/manifesto">
            <Button variant="outline" className="mt-6 md:mt-8 font-display font-medium gap-2">
              Read the Manifesto <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="py-8 md:py-16 lg:py-24 xl:py-28 bg-muted/50">
        <div className="container">
          <SectionHeading tag="The Crew" title="Built by people who execute, not just present." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                name: "Abdul",
                role: "Founder & CEO",
                bio: (<>
                Fashion Brand Expert & Growth Consultant Grew up in <TirupurTooltip /> where fabric and ambition go hand in hand. Watched incredible products die because of bad marketing and decided that had to stop. Today he turns D2C fashion brands from hidden gems into sold out stories. Numbers, strategy, growth, he feels it before the data even shows it.</>),
                photo: founderAbdulImage,
                social: {
                  linkedin: "https://www.linkedin.com/in/abdulnavas/",
                  instagram: "https://www.instagram.com/abdul_navas/ ",
                  x: "https://x.com/talkswithabdul",
                },
              },
              {
                name: "Santhosh",
                role: "Co-Founder & CFO",
                bio: "Principal Brand Consultant Every rupee has a job and he makes sure it does it well. Santhosh keeps the financial engine running clean so the team can focus on delivering results. Budgets balance, cash flows right, and clients stay profitable. The kind of person who finds problems in the numbers before they become actual problems.",
                photo: founderSanthoshImage,
                social: {
                  linkedin: "https://www.linkedin.com/in/santhosh-wepix/",
                  instagram: "https://www.instagram.com/santhosh_wepix/",
                  x: "https://x.com/",
                },
              },
              {
                name: "Vignesh",
                role: "Chief Operating Officer",
                bio: "Lead Gen Expert He does not chase leads. He builds systems that attract the right people, warm them up, and hand them over ready to buy. While others are figuring out what went wrong, Vignesh already has the next pipeline full and moving. Results first, talk later.",
                social: {
                  linkedin: "https://www.linkedin.com/in/vigneshbalakrishna/",
                  instagram: "https://www.instagram.com/it_wasnt_me_vicky/",
                  x: "https://x.com/rockvignesh123",
                },
                photo: founderVigneshImage,
              }
            ].map((founder) =>
              <Card key={founder.name} className="border-border/50 overflow-hidden">
                {founder.photo ? (
                  <div className="aspect-square w-full overflow-hidden border-0 border-b-2">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    label={`${founder.name} photo`}
                    aspectRatio="square"
                    className="rounded-none border-0 border-b-2"
                  />
                )}
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold">{founder.name}</h3>
                  <p className="text-[0.8125rem] text-primary font-medium mt-1">{founder.role}</p>
                  <p className="text-[0.8125rem] text-muted-foreground mt-3 leading-relaxed">{founder.bio}</p>
                  <div className="mt-4">
                    <Link
                      to={
                        founder.name.includes("Abdul")
                          ? "/abdul"
                          : founder.name.includes("Santhosh")
                          ? "/santhosh"
                          : "/vignesh"
                      }
                      className="inline-flex items-center text-[0.8125rem] font-medium text-primary hover:text-primary/80"
                    >
                      Know more about {founder.name.split(" ")[0]} <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={founder.social?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} LinkedIn`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                    >
                      <Linkedin size={18} className="text-[#0A66C2]" />
                    </a>
                    <a
                      href={founder.social?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} Instagram`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                    >
                      <Instagram size={18} className="text-[#E4405F]" />
                    </a>
                    <a
                      href={founder.social?.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} X`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                    >
                      <XLogo size={18} className="text-black dark:text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="mt-8 md:mt-10 text-center">
            <p className="text-[0.875rem] md:text-base text-muted-foreground mb-4">
              “Agencies show you decks. Our crew shows you dashboards that actually move.”
            </p>
            <Link to="/people">
              <Button variant="outline" className="font-display font-medium gap-2">
                Meet the entire crew <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Content and Insights */}
      <section className="py-8 md:py-14 lg:py-20">
        <div className="container">
          <SectionHeading tag="Insights" title="Founder Content and Insights" />

          {/* Instagram Reels */}
          <div className="max-w-5xl mx-auto mb-10 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
              <div className="flex justify-center lg:justify-start">
                <StackedReels />
              </div>
              <div>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-primary mb-2 block">Instagram Reels</span>
                <h3 className="font-display text-xl font-semibold mb-3">From the Founder</h3>
                <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">Short form insights and behind the scenes content from Abdul Navas and the WePix team about building brands, experiments, marketing strategies, and business growth.</p>
                <div className="flex gap-3 mt-4">
                  <a href="https://instagram.com/abdul_navas" target="_blank" rel="noopener noreferrer" className="text-[0.8125rem] text-primary hover:underline">@abdul_navas</a>
                  <a href="https://instagram.com/wepixindia" target="_blank" rel="noopener noreferrer" className="text-[0.8125rem] text-primary hover:underline">@wepixindia</a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-primary mb-2 block">Testimonials</span>
              <h3 className="font-display text-xl font-semibold">What People Say About Working With Us</h3>
              <p className="text-muted-foreground text-[0.9375rem] leading-relaxed mt-2 max-w-xl mx-auto">Feedback from founders, brands, and companies who have worked with the WePix team.</p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full px-0 sm:px-6 md:px-10"
            >
              <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-4">
                {testimonials.map((testimonial) => {
                  const initials = testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (
                    <CarouselItem key={testimonial.name} className="pl-3 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full border-border/50">
                        <CardContent className="p-5 sm:p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-full w-12 h-12 shrink-0 border border-border/40 bg-muted/40 flex items-center justify-center">
                              <span className="text-[0.75rem] font-semibold text-foreground">{initials}</span>
                            </div>
                            <div>
                              <h4 className="font-display text-[0.8125rem] font-semibold">{testimonial.name}</h4>
                              <p className="text-[0.6875rem] text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                          <p className="text-[0.8125rem] text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-0 md:-left-2 h-7 w-7 sm:h-8 sm:w-8" />
              <CarouselNext className="right-1 sm:right-0 md:-right-2 h-7 w-7 sm:h-8 sm:w-8" />
            </Carousel>
            {/* <p className="text-center text-[0.6875rem] text-muted-foreground mt-6">Powered by <a href="https://sayabout.us" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sayabout.us</a></p> */}
          </div>
        </div>
      </section>

      <CTABanner
        headline="You don’t need more ideas. You need direction."
        subtext="Let’s get on a call and figure out what actually moves your brand forward."
        ctaLabel="Book a Free Call"
      />
    </Layout>
  );
};

export default Index;
