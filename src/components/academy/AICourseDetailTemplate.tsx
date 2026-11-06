import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Briefcase,
  Clock,
  Sparkles,
  GraduationCap,
  Calendar,
  Layers,
  Award,
  Users,
} from "lucide-react";

export interface AICourseDetailData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  objective: string;
  overview: string;
  skillsCovered: string[];
  careerRoles: string[];
  duration?: string;
  format?: string;
  level?: string;
  scholarshipNotice?: string;
  heroPlaceholderLabel?: string;
  heroImageLight?: string;
  heroImageDark?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface AICourseDetailTemplateProps {
  course: AICourseDetailData;
}

export function AICourseDetailTemplate({ course }: AICourseDetailTemplateProps) {
  const Icon = course.icon;

  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-skill-item", container, { stagger: 0.06, y: 20 });
    scrollFadeIn(".gsap-career-card", container, { stagger: 0.08, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className="gsap-hero-section py-10 sm:py-14 md:py-20 lg:py-28">
          <div className="container max-w-6xl">
            <Link
              to="/academy"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> Back to WePix Academy
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="gsap-hero-tag inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1 rounded-full border border-border bg-muted opacity-0">
                    WePix AI Academy · Specialization Track
                  </span>
                </div>

                <h1 className="gsap-hero-title font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] opacity-0">
                  {course.title}
                </h1>

                <p className="gsap-hero-desc mt-4 text-base sm:text-lg text-muted-foreground opacity-0 leading-relaxed">
                  {course.objective}
                </p>

                {/* Course Metadata Strip */}
                <div className="gsap-hero-cta mt-6 p-4 rounded-xl bg-muted/40 border border-border/60 grid grid-cols-2 sm:grid-cols-3 gap-3 opacity-0 text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Duration</span>
                    <span className="font-semibold text-foreground flex items-center gap-1 mt-0.5">
                      <Clock size={13} className="text-primary" /> {course.duration || "10–12 Weeks"}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Mode</span>
                    <span className="font-semibold text-foreground flex items-center gap-1 mt-0.5">
                      <GraduationCap size={13} className="text-primary" /> {course.format || "Live Cohort"}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Scholarship</span>
                    <span className="font-semibold text-foreground flex items-center gap-1 mt-0.5">
                      <Sparkles size={13} className="text-amber-500" /> Available (Merit)
                    </span>
                  </div>
                </div>

                {/* Enrollment & Inquiries CTA */}
                <div className="gsap-hero-cta mt-8 flex flex-col sm:flex-row sm:items-center gap-4 opacity-0 border-t border-border/50 pt-6">
                  <BookingFormDialog
                    triggerLabel="Apply for Scholarship / Cohort"
                    showArrow
                    triggerSize="lg"
                    triggerClassName="font-medium"
                  />
                  <span className="text-xs text-muted-foreground">
                    Next Batch: Admissions Open · Limited Seats
                  </span>
                </div>
              </div>

              {/* Hero Image / Placeholder Visual */}
              <div className="gsap-hero-cta opacity-0 rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] bg-muted/40 border border-border shadow-sm">
                <ImagePlaceholder
                  label={course.heroPlaceholderLabel || `${course.title} Visual Preview`}
                  srcLight={course.heroImageLight}
                  srcDark={course.heroImageDark}
                  aspectRatio="video"
                  className="w-full h-full rounded-none border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Covered Section */}
        <section className="py-12 md:py-20 lg:py-24 border-t border-border bg-muted/20">
          <div className="container max-w-5xl">
            <SectionHeading
              tag="Curriculum Focus"
              title="Skills You Will Cover"
              description="A structured curriculum engineered to take you from foundational fundamentals to production-ready AI workflows."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {course.skillsCovered.map((skill, index) => (
                <div key={index} className="gsap-skill-item opacity-0 flex items-start gap-3.5 p-4 rounded-xl bg-card border border-border">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{skill}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Hands-on execution with modern industry tools and real case studies.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Potential Career Roles Section */}
        <section className="py-12 md:py-20 lg:py-24 border-t border-border">
          <div className="container max-w-5xl">
            <SectionHeading
              tag="Career Pathways"
              title="Roles This Course Trains You For"
              description="Graduate with an actionable, verifiable portfolio that qualifies you for high-growth roles in modern agencies, startups, and brands."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {course.careerRoles.map((role, index) => (
                <Card key={index} className="gsap-career-card opacity-0 rounded-xl border-border bg-card hover:border-primary/40 transition-colors">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-muted text-foreground shrink-0 mt-0.5">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">{role}</h3>
                      <p className="text-xs text-muted-foreground mt-1">High-demand digital & AI career track</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Methodology / Highlights */}
        <section className="py-12 md:py-20 border-t border-border bg-muted/30">
          <div className="container max-w-4xl">
            <div className="p-8 sm:p-10 rounded-2xl border border-border bg-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <Layers size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-base">Real Project Portfolio</h4>
                  <p className="text-xs text-muted-foreground">Build client-grade case studies and commercial assets before graduating.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <Users size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-base">Live Mentorship</h4>
                  <p className="text-xs text-muted-foreground">Direct feedback and weekly teardowns from active marketing and creative directors.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <Award size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-base">Certification & Placement</h4>
                  <p className="text-xs text-muted-foreground">Official WePix Academy certification and access to our hiring partner network.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <WhatsAppButton />
      </div>

      <CTABanner
        headline={`Ready to advance your career with ${course.title}?`}
        subtext="Apply for the upcoming cohort or connect with an admissions counselor to check scholarship eligibility."
        ctaLabel="Apply Now"
        useDialog={true}
      />
    </Layout>
  );
}

