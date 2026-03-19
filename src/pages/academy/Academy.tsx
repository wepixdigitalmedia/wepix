import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { ArrowRight, GraduationCap, Video, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const offerings = [
  { icon: GraduationCap, title: "Meta Ads Mastery Course", description: "The complete, no-BS course on running profitable Meta Ads. Built from thousands of hours of actually running campaigns, not reading about them.", href: "/academy/meta-ads-course", img: "Course preview" },
  { icon: Video, title: "Live Webinars", description: "Weekly live sessions where we break down real campaigns, share what's working RIGHT NOW, and answer your burning questions. Free to attend, packed with value.", href: "/academy/webinar", img: "Webinar screenshot" },
  { icon: Users, title: "Skool Community", description: "500+ marketers and brand owners sharing wins, losses, and everything in between. It's like a group chat, but actually useful.", href: "/academy/community", img: "Community screenshot" },
];

const whoItsFor = [
  "D2C brand founders who are tired of agencies eating their budget and want to run their own ads (smart move btw)",
  "Marketing managers who need to level up their Meta Ads game before their boss notices they've been boosting posts",
  "Freelancers who want to offer ad services to clients and actually deliver results (rare breed)",
  "Agency owners building or scaling their ad teams who need a proven framework (not another YouTube hack)",
  "Anyone who's ever looked at their ad dashboard and thought 'what do these numbers even mean?'",
];

export default function Academy() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-offering-card", container, { stagger: 0.1, y: 30 });
    gsap.fromTo(container.querySelectorAll(".gsap-check-item"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-checklist"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Academy</span>
                <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                  Learn from people who actually run the ads. Not from people who make courses about running ads.
                </h1>
                <p className="gsap-hero-desc mt-5 text-base text-muted-foreground opacity-0">
                  Here's the tea: most marketing courses are taught by people whose main income IS the course. Ours is different. We manage crores in ad spend every month. We run campaigns for real brands. And then we teach you exactly what we learned — mistakes, wins, and all the stuff nobody talks about on YouTube.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/academy/meta-ads-course" className="gsap-hero-cta opacity-0">
                    <Button size="lg" className="rounded-lg font-medium gap-2">Explore the Course <ArrowRight size={16} /></Button>
                  </Link>
                  <Link to="/academy/webinar" className="gsap-hero-cta opacity-0">
                    <Button size="lg" variant="outline" className="rounded-lg font-medium">Join a Free Webinar</Button>
                  </Link>
                </div>
              </div>
              <div className="gsap-hero-cta opacity-0 rounded-xl overflow-hidden aspect-square border-2 border-dashed border-border bg-muted/40">
                <img
                  src="/academy-hero-instructor-2.png"
                  alt="WePix Academy instructor with brand-building tools"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <SectionHeading tag="What We Offer" title="Three ways to level up your game" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {offerings.map((o) => (
                <div key={o.title} className="gsap-offering-card opacity-0">
                  <Link to={o.href}>
                    <Card className="h-full hover:shadow-md transition-all rounded-xl border-border group overflow-hidden">
                      <ImagePlaceholder label={o.img} aspectRatio="video" className="rounded-none border-0 border-b-2" />
                      <CardContent className="p-6">
                        <o.icon className="text-foreground mb-4" size={24} />
                        <h3 className="font-display text-lg font-semibold mb-2">{o.title}</h3>
                        <p className="text-sm text-muted-foreground">{o.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={14} className="ml-1" /></div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container max-w-3xl gsap-checklist">
            <SectionHeading tag="Is this for you?" title="If any of these sound like you, you're in the right place" align="left" />
            <div className="space-y-3">
              {whoItsFor.map((item) => (
                <div key={item} className="gsap-check-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-5xl">
            <SectionHeading tag="Student Wins" title="What our students are saying" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="rounded-xl border-border overflow-hidden">
                  <ImagePlaceholder label={`Student testimonial ${i + 1}`} aspectRatio="video" className="rounded-none border-0 border-b-2" />
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Student testimonial coming soon</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to stop guessing and start scaling?" subtext="Start with our Meta Ads course or hop into a free webinar. Either way, your ads are about to get way better." ctaLabel="Get Started" />
    </Layout>
  );
}
