import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { ArrowRight, GraduationCap, Video, Users, Check, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";
import { KickstartEnrollButton } from "@/components/academy/KickstartEnrollButton";

const offerings = [
  { icon: Rocket, title: "WePix Kickstart Course", description: "The flagship program. Build, launch, and scale your D2C fashion brand with the complete system - store, content, Meta Ads, and scaling. ₹79,999.", href: "/academy/kickstart-course", img: "Kickstart course" },
  { icon: GraduationCap, title: "Meta Ads Mastery Course", description: "Learn the real way to run profitable Meta Ads. This isn't some textbook theory. We’re talking about actual experience from running real campaigns. No fluff, just results.", href: "/academy/meta-ads-course", img: "Course preview" },
  { icon: Video, title: "Live Masterclass", description: "Get direct access to weekly live sessions where we break down what’s working right now. We’ll answer all your burning questions and share the most actionable tips in real-time.", href: "/academy/webinar", img: "Webinar screenshot" },
  { icon: Users, title: "Skool Community", description: "Join a group of 500+ marketers and brand owners where we share wins, losses, and everything in between. It’s like a group chat, but full of knowledge and support.", href: "/academy/community", img: "Community screenshot" },
];

const whoItsFor = [
  "Founders tired of paying agencies and ready to run your own ads (trust us, smart move)",
  "Marketing managers who wanna level up their Meta Ads game before your boss catches you just boosting posts",
  "Freelancers who want to offer legit ad services and actually get results (not just talk)",
  "Agency owners scaling their ad teams but need a solid framework (no more “quick-fix” YouTube hacks)",
  "Anyone who’s stared at their ad dashboard and thought, “Wait, what are these numbers even telling me?”",
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
        <section className="gsap-hero-section py-10 sm:py-14 md:py-28 lg:py-36">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Academy</span>
                <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                Learn from People Actually Running the Ads, Not People Talking About Them
                </h1>
                <p className="gsap-hero-desc mt-5 text-base text-muted-foreground opacity-0">
                Here’s the deal: most marketing courses are by people who make bank off the course itself. Ours is different. We’re managing crores in ad spend every month, running legit campaigns for real brands. And we’re giving you the full scoop, mistakes, wins, and all the stuff no one tells you on YouTube.
                </p>

                <div className="gsap-hero-cta mt-8 flex flex-col sm:flex-row sm:items-center gap-6 opacity-0 border-t border-border/50 pt-6 max-w-md">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">Course Fee</p>
                    <p className="font-display text-3xl md:text-4xl font-bold text-foreground">₹79,999</p>
                  </div>
                  <KickstartEnrollButton label="Enroll Now - Start Scaling" />
                </div>
              </div>
              <div className="gsap-hero-cta opacity-0 rounded-xl overflow-hidden aspect-square bg-muted/40">
                <img
                  src="/academy-hero-instructor-2-light.png"
                  alt="WePix Academy instructor with brand-building tools"
                  className="w-full h-full object-cover dark:hidden"
                  loading="lazy"
                />
                <img
                  src="/academy-hero-instructor-2-dark.png"
                  alt="WePix Academy instructor with brand-building tools"
                  className="hidden w-full h-full object-cover dark:block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 lg:py-24 border-t border-border">
          <div className="container">
            <SectionHeading tag="What We Offer" title="Programs to level up your game" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {offerings.map((o) => (
                <div key={o.title} className="gsap-offering-card opacity-0">
                  <Link to={o.href}>
                    <Card className="h-full hover:shadow-md transition-all rounded-xl border-border group overflow-hidden">
                      {o.img === "Kickstart course" ? (
                        <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video rounded-none border-0 overflow-hidden">
                          <img
                            src="/kickstarter-program-light.png"
                            alt="WePix Kickstart Course preview"
                            className="w-full h-full object-cover dark:hidden"
                            loading="lazy"
                          />
                          <img
                            src="/kickstarter-program-dark.png"
                            alt="WePix Kickstart Course preview"
                            className="hidden w-full h-full object-cover dark:block"
                            loading="lazy"
                          />
                        </div>
                      ) : o.img === "Course preview" ? (
                        <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video rounded-none border-0 overflow-hidden">
                          <img
                            src="/meta-ads-course-light.png"
                            alt="Meta Ads Mastery Course preview"
                            className="w-full h-full object-cover dark:hidden"
                            loading="lazy"
                          />
                          <img
                            src="/meta-ads-course-dark.png"
                            alt="Meta Ads Mastery Course preview"
                            className="hidden w-full h-full object-cover dark:block"
                            loading="lazy"
                          />
                        </div>
                      ) : o.img === "Webinar screenshot" ? (
                        <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video rounded-none border-0 overflow-hidden">
                          <img
                            src="/academy-webinar-light.png"
                            alt="Live Webinars preview"
                            className="w-full h-full object-cover dark:hidden"
                            loading="lazy"
                          />
                          <img
                            src="/academy-webinar-dark.png"
                            alt="Live Webinars preview"
                            className="hidden w-full h-full object-cover dark:block"
                            loading="lazy"
                          />
                        </div>
                      ) : o.img === "Community screenshot" ? (
                        <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video rounded-none border-0 overflow-hidden">
                          <img
                            src="/academy-skool-light.png"
                            alt="Skool Community preview"
                            className="w-full h-full object-cover dark:hidden"
                            loading="lazy"
                          />
                          <img
                            src="/academy-skool-dark.png"
                            alt="Skool Community preview"
                            className="hidden w-full h-full object-cover dark:block"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder label={o.img} aspectRatio="video" className="rounded-none border-0 border-b-2" />
                      )}
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

        <section className="py-10 md:py-16 lg:py-24 bg-muted/30">
          <div className="container max-w-3xl gsap-checklist">
            <SectionHeading tag="Is this for you?" title="Is This You? You’re in the Right Place!" align="left" />
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

        <section className="py-10 md:py-16 lg:py-24">
          <div className="container max-w-5xl">
            <SectionHeading tag="Student Wins" title="What our students are saying" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="rounded-xl border-border overflow-hidden">
                  {i === 0 || i === 1 || i === 2 ? (
                    <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video rounded-none border-0 overflow-hidden">
                      <iframe
                        src={
                          i === 0
                            ? "https://www.loom.com/embed/b6079dabb5e2432fab89cc87c38d7311?sid=3331d3a5-0299-4a22-a34e-34e902d2f5a9"
                            : i === 1
                              ? "https://www.loom.com/embed/e540819463034fec930b1e8a49500875?sid=f922beb6-2ec5-45f8-9069-5bb2386a9211"
                              : "https://www.loom.com/embed/87769751460e48c1ae14e3578d463337?sid=b4054c28-543f-4fa6-83f0-f8b87c3f8189"
                        }
                        title={`Student testimonial ${i + 1}`}
                        className="w-full h-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={`Student testimonial ${i + 1}`}
                      aspectRatio="video"
                      className="rounded-none border-0 border-b-2"
                    />
                  )}
                  {/* <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Student testimonial coming soon</p>
                  </CardContent> */}
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
