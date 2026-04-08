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
  { icon: Shield, title: "Own It.", desc: "If something goes wrong, we don’t point fingers – we fix it. If something can be better, we make it better. We take responsibility and lead the way." },
  { icon: BookOpen, title: "Stay Curious.", desc: "We’re always learning. Whether it’s new ad strategies, cutting-edge AI, or marketing systems, we stay on top of it. If you’re not learning, you’re not growing." },
  { icon: Rocket, title: "Make It Happen.", desc: "Ideas are cool, but action is cooler. We focus on getting things done, testing, and iterating quickly. Perfection can wait, progress can’t." },
];

const mediaWallItems = [
  "Team party", "Office brainstorming", "Campaign review",
  "Late night builds", "Team celebration", "Workshop day",
  "Product shoot day", "Creative chaos", "Launch day",
];

const jobs = [
  {
    title: "Performance Marketer",
    desc: "Your mission: Become the hero who launches and optimizes epic Meta and Google campaigns. You’ll test creatives, analyze performance data, and scale profitable campaigns to help brands shine. Get ready to make numbers go up!",
  },
  {
    title: "Social Media Manager",
    desc: "Your mission: Own the social game! Manage our brand's presence across IG, FB, and more. Craft killer content strategies, keep up with trends, and work hand-in-hand with creative squads. Help us stay ahead of the trends, one post at a time!",
  },
  {
    title: "Shopify Developer",
    desc: "Your mission: You’ll be the brain behind building sleek, high-converting Shopify stores. From theme customization to optimizing performance, you’ll make the user experience smooth. Plus, you’ll connect the dots with marketing integrations to get sales flowing!",
  },
  {
    title: "Video Editor",
    desc: "Your mission: Get those creative juices flowing! You’ll craft performance-driven ads, killer Reels, and branded content that speak to the soul. Strong storytelling, pacing, and creativity are your tools to make each video a banger.",
  },
];

const perks = [
  { icon: DollarSign, title: "Compensation", desc: "We reward the doers, the ones who make things happen. Your growth inside WePix is all about the impact you make and how much you level up your skills." },
  { icon: Award, title: "Share Options (ESOPs)", desc: "Get a piece of the pie! Long-term contributors might receive equity as WePix grows. More involvement means more rewards." },
  { icon: Heart, title: "Benefits", desc: "Here’s your backstage pass. Work directly with founders and entrepreneurs. Plus, get that hands-on experience that will shape your growth." },
  { icon: Clock, title: "Time Off", desc: "Because life happens. We’ve got flexible time-off policies so you can take care of personal stuff without worrying about work." },
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
          <SectionHeading tag="Careers" title="WePix: Where Creators Build, Grow, and Thrive" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div
              className="rounded-xl bg-muted/40 flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src="/careers-team-collaboration.jpg"
                alt="WePix team collaboration"
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>At WePix, we don’t just check tasks off a list. We build real digital systems that help businesses grow. It's about crafting smart growth systems, not the typical generic marketing fluff.
              Founded by Abdul Navas and Santhosh, WePix was built on the belief that businesses deserve better than the standard marketing services. We work hand-in-hand with founders and brands to create digital infrastructure that actually delivers results.</p>
              <p>Joining WePix means stepping into a fast-paced world where ownership is key and ideas are welcome. We don’t just expect you to finish tasks, we expect you to make a difference. If you see a problem, solve it. If you spot an opportunity, explore it.</p>
              <p className="font-medium text-foreground">This is a space built for builders. Are you in?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="py-20 bg-muted/50 scroll-mt-32">
        <div className="container">
          <SectionHeading tag="Culture" title="WePix Vibes: Own It, Learn It, Ship It." description="At WePix, we don’t just work – we build, grow, and move fast. Our culture is all about three key things:" />
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
            <h3 className="font-display text-xl font-semibold text-center mb-8">Vibe Check: Life at WePix</h3>
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
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-team-party.png"
                        alt="Team party at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Office brainstorming" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-office-brainstorming.png"
                        alt="Office brainstorming session at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Campaign review" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-campaign-review.png"
                        alt="Campaign review meeting at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Late night builds" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-late-night-builds.png"
                        alt="Late night builds team selfie"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Team celebration" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-team-celebration.png"
                        alt="Team celebration at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Workshop day" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-workshop-day.png"
                        alt="Workshop day at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Product shoot day" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-product-shoot-day.png"
                        alt="Product shoot day at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Creative chaos" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
                      <img
                        src="/careers-creative-chaos.png"
                        alt="Creative chaos at WePix"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : item === "Launch day" ? (
                    <div className="rounded-xl bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video overflow-hidden">
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
                    <div className="rounded-t-xl rounded-b-none border-0 overflow-hidden aspect-video bg-muted/40 flex items-center justify-center">
                      <img
                        src="/performance-marketer-hero.png"
                        alt="Performance marketing dashboards for Meta and Google ads"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : job.title === "Shopify Developer" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 overflow-hidden aspect-video bg-muted/40 flex items-center justify-center">
                      <img
                        src="/shopify-developer-hero-3.png"
                        alt="Shopify storefronts across devices with winter collection"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : job.title === "Social Media Manager" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 overflow-hidden aspect-video bg-muted/40 flex items-center justify-center">
                      <img
                        src="/social-media-manager-hero.png"
                        alt="Social media manager dashboard with multiple platforms"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : job.title === "Video Editor" ? (
                    <div className="rounded-t-xl rounded-b-none border-0 overflow-hidden aspect-video bg-muted/40 flex items-center justify-center">
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
