import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, MessageCircle, Clock, Sparkles, BookOpen } from "lucide-react";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";

export default function AcademySuccess() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-step-card", container, { stagger: 0.1, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef} className="min-h-[80vh] flex flex-col justify-center">
        <section className="gsap-hero-section py-14 sm:py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            {/* Success Icon */}
            <div className="gsap-hero-tag opacity-0 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-6 shadow-lg shadow-emerald-500/5">
              <CheckCircle2 size={36} className="sm:size-10 text-emerald-500" />
            </div>

            <div className="gsap-hero-tag opacity-0 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-muted text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Sparkles size={12} className="text-primary" />
                WePix Academy · Application Received
              </span>
            </div>

            <h1 className="gsap-hero-title opacity-0 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Application Submitted Successfully!
            </h1>

            <p className="gsap-hero-desc opacity-0 mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Thank you for applying. For your selected course, our admissions team will connect with you shortly to guide you through the syllabus, schedule, and scholarship eligibility.
            </p>

            {/* Next Steps Timeline */}
            <div className="mt-12 text-left">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4 text-center">
                What Happens Next
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="gsap-step-card opacity-0 rounded-xl border-border bg-card">
                  <CardContent className="p-5 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-xs">
                      01
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground">Profile Review</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Our academic coordinators review your application and background to recommend the best track.
                    </p>
                  </CardContent>
                </Card>

                <Card className="gsap-step-card opacity-0 rounded-xl border-border bg-card">
                  <CardContent className="p-5 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-xs">
                      02
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground">1-on-1 Consultation</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We will reach out via WhatsApp / Email within 24 hours with curriculum details & batch options.
                    </p>
                  </CardContent>
                </Card>

                <Card className="gsap-step-card opacity-0 rounded-xl border-border bg-card">
                  <CardContent className="p-5 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-xs">
                      03
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground">Cohort Onboarding</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Confirm your seat, unlock your orientation kit, and get access to the student community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="gsap-hero-cta opacity-0 mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/academy">
                <Button size="lg" className="w-full sm:w-auto font-medium gap-2">
                  <BookOpen size={16} />
                  Back to Academy
                </Button>
              </Link>

              <a
                href="https://wa.me/919876543210?text=Hi%20WePix%2C%20I%20just%20submitted%20my%20course%20application%20and%20wanted%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                  <MessageCircle size={16} className="text-emerald-500" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            <p className="gsap-hero-cta opacity-0 text-xs text-muted-foreground mt-4">
              Official communication will come from <strong>@wepix.in</strong>. Check your WhatsApp & inbox.
            </p>
          </div>
        </section>
      </div>

      <div className="relative">
        <WhatsAppButton />
      </div>
    </Layout>
  );
}

