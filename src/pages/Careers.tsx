import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Rocket, DollarSign, Heart, Award, Clock, Briefcase } from "lucide-react";

const subTabs = [
  { label: "Why Join WePix", href: "#why-join" },
  { label: "Culture", href: "#culture" },
  { label: "Open Positions", href: "#positions" },
  { label: "Pay and Perks", href: "#perks" },
  { label: "Handbook", href: "/handbook", external: true },
  { label: "People", href: "/people", external: true },
  { label: "Manifesto", href: "/manifesto", external: true },
];

const culturePrinciples = [
  { icon: Shield, title: "Ownership", desc: "Everyone takes responsibility for their work. If something breaks, we fix it. If something can be improved, we improve it." },
  { icon: BookOpen, title: "Learning", desc: "Staying curious about tools, platforms, and ideas. Whether it is new advertising strategies, AI workflows, or marketing systems, learning is part of the job." },
  { icon: Rocket, title: "Momentum", desc: "Shipping work instead of endlessly discussing ideas. The team focuses on testing ideas and iterating quickly. Progress over perfection." },
];

const mediaWallItems = [
  "Team party", "Office brainstorming", "Campaign review",
  "Late night builds", "Team celebration", "Workshop day",
  "Product shoot day", "Creative chaos", "Launch day",
];

const jobs = [
  {
    title: "Performance Marketer",
    desc: "Responsible for launching and optimizing paid advertising campaigns across Meta and Google platforms. Focus on testing creatives, analyzing performance metrics, and scaling profitable campaigns.",
  },
  {
    title: "Social Media Manager",
    desc: "Responsible for managing brand presence on social platforms, planning content strategies, analyzing trends, and collaborating with creative teams.",
  },
  {
    title: "Shopify Developer",
    desc: "Responsible for building Shopify storefronts that convert visitors into customers. Includes theme customization, performance optimization, and marketing integrations.",
  },
  {
    title: "Video Editor",
    desc: "Responsible for producing performance ads, reels, and branded content with strong storytelling and pacing.",
  },
];

const perks = [
  { icon: DollarSign, title: "Compensation", desc: "WePix rewards people who produce results. Growth inside the company is tied to performance and skill development." },
  { icon: Award, title: "Share Options (ESOPs)", desc: "Long term contributors may receive equity participation opportunities as the company expands." },
  { icon: Heart, title: "Benefits", desc: "Employees gain exposure to real business growth systems and work directly with founders and entrepreneurs." },
  { icon: Clock, title: "Time Off", desc: "Employees receive structured leave policies and flexibility when personal situations require time away." },
];

export default function Careers() {
  return (
    <Layout>
      {/* Sub-tab navigation */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center gap-1 overflow-x-auto py-2">
          {subTabs.map((tab) =>
            tab.external ? (
              <Link
                key={tab.label}
                to={tab.href}
                className="px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {tab.label}
              </Link>
            ) : (
              <a
                key={tab.label}
                href={tab.href}
                className="px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {tab.label}
              </a>
            )
          )}
        </div>
      </div>

      {/* Why Join WePix */}
      <section id="why-join" className="py-20 md:py-28 scroll-mt-32">
        <div className="container">
          <SectionHeading tag="Careers" title="Why Join WePix" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div
              className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src="/careers-team-collaboration.png"
                alt="WePix team collaboration"
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>Working at WePix is not about finishing tasks inside a rigid agency system. It is about building real digital systems that help businesses grow.</p>
              <p>The company was founded by Abdul Navas and Santhosh with a belief that businesses deserve better growth systems than generic marketing services.</p>
              <p>WePix works closely with founders and brands to build digital infrastructure that produces measurable results.</p>
              <p>Joining the team means stepping into a fast moving environment where ownership is expected and ideas are encouraged.</p>
              <p>If you notice a problem you are expected to solve it. If you discover an opportunity you are encouraged to explore it.</p>
              <p className="font-medium text-foreground">This environment is built for builders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="py-20 bg-muted/50 scroll-mt-32">
        <div className="container">
          <SectionHeading tag="Culture" title="The Way We Work" description="The culture at WePix is built around three principles." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {culturePrinciples.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <p.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Media Wall */}
          <div className="mt-16">
            <h3 className="font-display text-xl font-semibold text-center mb-8">Life at WePix</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {mediaWallItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  {item === "Team party" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-team-party.png"
                        alt="Team party at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Office brainstorming" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-office-brainstorming.png"
                        alt="Office brainstorming session at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Campaign review" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-campaign-review.png"
                        alt="Campaign review meeting at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Late night builds" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-late-night-builds.png"
                        alt="Late night builds team selfie"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Team celebration" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-team-celebration.png"
                        alt="Team celebration at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Workshop day" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-workshop-day.png"
                        alt="Workshop day at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Product shoot day" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-product-shoot-day.png"
                        alt="Product shoot day at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Creative chaos" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-creative-chaos.png"
                        alt="Creative chaos at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Launch day" ? (
                    <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-launch-day.png"
                        alt="Launch day at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder label={item} aspectRatio="video" className="rounded-xl" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 md:py-28 scroll-mt-32">
        <div className="container">
          <SectionHeading tag="Open Positions" title="Join the team" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card className="h-full border-border/50">
                  {job.title === "Performance Marketer" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video border-dashed border-border bg-muted/40 flex items-center justify-center">
                      <img
                        src="/performance-marketer-hero.png"
                        alt="Performance marketing dashboards for Meta and Google ads"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : job.title === "Shopify Developer" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video border-dashed border-border bg-muted/40 flex items-center justify-center">
                      <img
                        src="/shopify-developer-hero-3.png"
                        alt="Shopify storefronts across devices with winter collection"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : job.title === "Social Media Manager" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video border-dashed border-border bg-muted/40 flex items-center justify-center">
                      <img
                        src="/social-media-manager-hero.png"
                        alt="Social media manager dashboard with multiple platforms"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : job.title === "Video Editor" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 border-b-2 overflow-hidden aspect-video border-dashed border-border bg-muted/40 flex items-center justify-center">
                      <img
                        src="/video-editor-hero.png"
                        alt="Video editor creative workspace interface"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder label={job.title} aspectRatio="video" className="rounded-t-xl rounded-b-none border-0 border-b-2" />
                  )}
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{job.desc}</p>
                    <a href="mailto:hr@wepix.in">
                      <Button size="sm" className="font-display font-medium">Apply Now</Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay and Perks */}
      <section id="perks" className="py-20 bg-muted/50 scroll-mt-32">
        <div className="container">
          <SectionHeading tag="Pay and Perks" title="What you get" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <perk.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground">{perk.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
