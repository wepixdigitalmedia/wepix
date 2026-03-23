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
import { ArrowRight, Sparkles, GraduationCap, Briefcase, ShoppingBag, Play, Linkedin, Instagram, Twitter } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StackedReels } from "@/components/shared/StackedReels";
import { WistiaLeadForm } from "@/components/shared/WistiaLeadForm";
import { useTypewriter } from "@/hooks/useTypewriter";
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

import heroFashionImage from "@/assets/hero-fashion.png";
import academyHeroImage from "@/assets/academy-hero.png";
import businessHeroImage from "@/assets/business-hero.png";
import sourcingHeroImage from "@/assets/sourcing-hero.png";
import founderAbdulImage from "@/assets/founder-abdul.png";
import founderSanthoshImage from "@/assets/founder-santhosh.png";
import founderVigneshImage from "@/assets/founder-vignesh.png";

const brandCards = [
  {
    icon: ShoppingBag,
    title: "Fashion",
    description: "Your clothes deserve better than a boring Instagram grid. We do content, ads, and growth — the whole shebang.",
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
    description: (<>Straight from <TirupurTooltip /> — the garment capital. Quality fabrics, honest pricing, no middleman drama.</>),
    href: "https://wepixsourcing.com",
    color: "from-orange-500/20 to-orange-500/5"
  }
];

const caseStudies = [
  { brand: "Taasza", stat: "3x ROAS in 60 days", description: "They came to us with zero online presence and a prayer. We gave them a Shopify store, fire content, and Meta Ads that actually slapped. Two months later? ₹5L/month rolling in." },
  { brand: "BoonBabies", stat: "₹10L+ monthly revenue", description: "A kids' fashion brand with adorable products but zero marketing game. We built everything from scratch — branding, content, store, ads. Now their DMs are busier than a Mumbai local train." },
  { brand: "Nutmeg", stat: "2.5x revenue growth", description: "Premium menswear brand that was criminally underperforming online. We repositioned them, created chef's-kiss content, and doubled their digital presence. The founder literally sent us biryani." }
];

const Index = () => {
  const { displayText, showCursor } = useTypewriter();
  const [vslOpen, setVslOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground relative overflow-hidden">
        <div className="container relative py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>

              <span className="inline-block text-[0.6875rem] font-display font-semibold uppercase tracking-[0.15em] text-primary mb-6">
                Digital Media Group
              </span>
              <div className="min-h-[8rem] md:min-h-[8rem] lg:min-h-[7.5rem] w-full">
                <h1 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] break-words hyphens-none">
                  We don't just run ads.{" "}
                  <span className="text-gradient">{displayText}</span>
                  <span className={`inline-block w-[3px] h-[0.85em] bg-foreground ml-0.5 align-middle rounded-sm transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`} />
                </h1>
              </div>
              <p className="mt-5 text-[0.9375rem] md:text-base text-hero-foreground/60 leading-relaxed">
                Picture this: you've got an amazing product, but your marketing looks like it was done by your cousin's friend who "knows Canva." Yeah, we fix that. Fashion, education, business — one crew that handles everything so you can stop losing sleep over your Instagram reach.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/fashion">
                  <Button size="lg" className="font-display font-medium text-base gap-2">
                    Explore WePix <ArrowRight size={18} />
                  </Button>
                </Link>
                <BookingFormDialog
                  triggerLabel="Book a Free Strategy Call"
                  triggerClassName="font-display font-medium text-base bg-primary text-primary-foreground hover:bg-primary/90"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-3xl overflow-hidden border border-border shadow-lg relative aspect-video bg-transparent"
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/86i9yszwdd?autoPlay=false&videoFoam=true&playbar=false&fullscreenButton=false&volumeControl=false&smallPlayButton=true&wistiaLogo=false&seo=false"
                title="WePix Strategy Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-[101%] h-[101%] -ml-[0.5%] -mt-[0.5%] border-none bg-transparent"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={50} suffix="+" label="Brands Who Trust Us" />
          <AnimatedCounter end={2} suffix="Cr+" prefix="INR " label="Ad Spend We've Managed" />
          <AnimatedCounter end={10} suffix="K+" label="Creatives Crafted" />
          <AnimatedCounter end={3} suffix="x" label="Avg. ROAS (yeah, really)" />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 border-b border-border overflow-hidden">
        <div className="container">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground text-center mb-8">Trusted by brands like</p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee gap-8 md:gap-16 w-max items-center">
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
                  className={`object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${brand.className || "h-8 md:h-12 w-auto max-w-[140px] md:max-w-[180px]"}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Navigator */}
      <section className="py-16 md:py-28 lg:py-32">
        <div className="container">
          <SectionHeading
            tag="What We Do"
            title="Four verticals. One obsession."
            description="We're not your average agency that slaps a logo on everything and calls it a day. WePix runs four distinct verticals — each with its own team, strategy, and unhealthy amount of passion. Think of us as the Avengers of marketing, minus the capes (okay, sometimes capes)." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                          src={heroFashionImage}
                          alt="Fashion marketing visuals"
                          className="w-full h-full object-cover transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    {card.title === "Academy" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={academyHeroImage}
                          alt="Academy learning visuals"
                          className="w-full h-full object-cover transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    {card.title === "Business" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={businessHeroImage}
                          alt="Business and growth visuals"
                          className="w-full h-full object-cover transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    {card.title === "Sourcing" && (
                      <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                        <img
                          src={sourcingHeroImage}
                          alt="Sourcing visuals"
                          className="w-full h-full object-cover transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
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
      <section className="py-16 md:py-28 bg-muted/50">
        <div className="container">
          <SectionHeading
            tag="Results"
            title="Real brands. Real money. Real stories."
            description="We don't do vanity metrics. Nobody cares about your 'reach' when you can't pay rent. Here's what happened when brands stopped settling for mid agencies and trusted us with their growth." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) =>
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="h-full border-border/50">
                  {study.brand === "Taasza" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video bg-muted/40">
                      <img
                        src="/taasza-results.png"
                        alt="Taasza performance dashboard"
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
                  <CardContent className="p-6">
                    <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.15em] text-primary">{study.brand}</span>
                    <p className="font-display text-xl font-semibold mt-2">{study.stat}</p>
                    <p className="text-[0.8125rem] text-muted-foreground mt-3 leading-relaxed">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-10">
            <Link to="/fashion/case-studies">
              <Button variant="outline" className="font-display font-medium gap-2">
                View All Case Studies <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionHeading
            tag="How We Scale"
            title="Our 4 Secret Pillars"
            description="Explore the four secret pillars essential for scaling your brand. From nailing your foundations and tracking, to deploying our MCS framework and driving profitable traffic, each pillar is designed to systematically grow your revenue, margins, and brand equity."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                label: "Pillar 1",
                title: "Brand & Offer Foundations",
                body: "Dial in your positioning, pricing, and creative direction so your brand actually stands for something in the market.",
              },
              {
                label: "Pillar 2",
                title: "Tracking & Infrastructure",
                body: "Clean tracking, dashboards, and systems so every rupee spent can be traced back to revenue — in real time.",
              },
              {
                label: "Pillar 3",
                title: "Content & Acquisition",
                body: "Scroll-stopping creatives, high-converting funnels, and media buying that makes paid traffic your growth engine.",
              },
              {
                label: "Pillar 4",
                title: "Retention & Scale",
                body: "Email, remarketing, and offer stacking to increase LTV, stabilize cash flow, and scale without burning out your brand.",
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
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <SectionHeading tag="Our Philosophy" title="We have opinions. Strong ones." />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed -mt-6">
            "We don't believe in cookie-cutter marketing. We don't believe in 'just boost the post bro.' We believe in building brands that people genuinely care about — the kind where customers slide into your DMs saying 'I NEED this.' We wrote a whole manifesto about it because we're dramatic like that."
          </p>
          <Link to="/manifesto">
            <Button variant="outline" className="mt-8 font-display font-medium gap-2">
              Read the Manifesto <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-28 bg-muted/50">
        <div className="container">
          <SectionHeading tag="The Crew" title="Built by doers, not PowerPoint warriors." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Abdul",
                role: "Founder & CEO, Fashion brand expert and growth consultant",
                bio: (<>Grew up in <TirupurTooltip /> (The garment capital) breathing cotton and hustle. Broke out of the traditional textile matrix to build a digital empire because seeing fire products with trash marketing physically hurt him. Superpower? Scaling D2C fashion brands from 'who?' to sold-out faster than a sneaker drop. Oh, and his ROAS predictions? Lowkey psychic.</>),
                photo: founderAbdulImage,
                social: {
                  linkedin: "https://www.linkedin.com/in/abdulnavas/",
                  instagram: "https://instagram.com/talkswithabdul",
                  x: "https://x.com/talkswithabdul",
                },
              },
              {
                name: "Santhosh",
                role: "Co-Founder & CFO - Finance Controller, Principal Consultant for Brands",
                bio: "The guy holding the bag (in a good way). While Abdul is out plotting world domination, Santhosh is the one making sure the math actually maths. Budgets, scaling cash flow, financial ops — he guards the treasury like it's his life. He literally loves Excel sheets more than most people love their pets. Total goat at keeping the agency and our clients highly profitable.",
                photo: founderSanthoshImage,
                social: {
                  linkedin: "https://linkedin.com/in/santhosh-wepix",
                  instagram: "https://instagram.com/wepix",
                  x: "https://x.com/wepix",
                },
              },
              {
                name: "Vignesh",
                role: "COO at WePix Business (Lead Gen Expert)",
                bio: "Basically the cheat code for B2B growth. Vignesh doesn't just 'generate leads,' he builds absolute machines that make your sales team sweat trying to keep up. While everyone else is crying over algorithm changes, he's out here securing the bag for clients using high-level systems that actually convert. The definition of 'talk is cheap, show me the leads.'",
                social: {
                  linkedin: "https://linkedin.com/company/wepix",
                  instagram: "https://instagram.com/wepix",
                  x: "https://x.com/wepix",
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
                <CardContent className="p-8">
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
                      <Twitter size={18} className="text-[#000000]" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="mt-10 text-center">
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
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeading tag="Insights" title="Founder Content and Insights" />

          {/* Instagram Reels */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
            <div className="text-center mb-10">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-primary mb-2 block">Testimonials</span>
              <h3 className="font-display text-xl font-semibold">What People Say About Working With Us</h3>
              <p className="text-muted-foreground text-[0.9375rem] leading-relaxed mt-2 max-w-xl mx-auto">Feedback from founders, brands, and companies who have worked with the WePix team.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Card key={n} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {n === 1 ? (
                        <div className="rounded-full w-12 h-12 shrink-0 overflow-hidden border border-border/40 bg-muted/40">
                          <img
                            src="/testimonial-profile-1.png"
                            alt="Client profile"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : n === 2 ? (
                        <div className="rounded-full w-12 h-12 shrink-0 overflow-hidden border border-border/40 bg-muted/40">
                          <img
                            src="/testimonial-profile-2.png"
                            alt="Client profile"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : n === 3 ? (
                        <div className="rounded-full w-12 h-12 shrink-0 overflow-hidden border border-border/40 bg-muted/40">
                          <img
                            src="/testimonial-profile-3.png"
                            alt="Client profile"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder label={`Profile ${n}`} aspectRatio="square" className="rounded-full w-12 h-12 shrink-0" />
                      )}
                      <div>
                        <h4 className="font-display text-[0.8125rem] font-semibold">Client Name</h4>
                        <p className="text-[0.6875rem] text-muted-foreground">Role, Company</p>
                      </div>
                    </div>
                    <p className="text-[0.8125rem] text-muted-foreground italic leading-relaxed">"Testimonial text about the experience working with WePix and the results achieved."</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-[0.6875rem] text-muted-foreground mt-6">Powered by <a href="https://sayabout.us" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sayabout.us</a></p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to stop winging it?"
        subtext="Book a free strategy call. No pitch decks, no corporate jargon, no 'let me circle back' — just a real conversation about your brand over virtual chai."
        ctaLabel="Book a Free Call"
      />
    </Layout>
  );
};

export default Index;
