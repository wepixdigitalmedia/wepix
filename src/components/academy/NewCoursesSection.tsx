import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { AICourseApplicationDialog } from "@/components/academy/AICourseApplicationDialog";
import { ArrowRight, Megaphone, Palette, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useGSAP, scrollFadeIn } from "@/hooks/useGSAP";

export interface AICourseItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  href: string;
  imgPlaceholderLabel: string;
  srcLight?: string;
  srcDark?: string;
}

export const AI_COURSES: AICourseItem[] = [
  {
    icon: Megaphone,
    title: "AI + Marketing",
    description:
      "Train to use AI tools and modern digital marketing techniques to plan, create, execute and analyse marketing activities. Master prompt engineering, SEO, and Meta/Google Ads.",
    href: "/academy/ai-marketing",
    imgPlaceholderLabel: "AI + Marketing course preview",
    srcLight: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Marketing.webp",
    srcDark: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Marketing%20DK.webp",
  },
  {
    icon: Palette,
    title: "AI + Design",
    description:
      "Combine AI-powered tools with creative design skills to produce professional visual content, branding identities, social media creatives, and commercial brand assets.",
    href: "/academy/ai-design",
    imgPlaceholderLabel: "AI + Design course preview",
    srcLight: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Design.webp",
    srcDark: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Design%20DK.webp",
  },
  {
    icon: Film,
    title: "AI + Video Editing",
    description:
      "Use AI-powered tools and professional editing techniques to create engaging video content, viral reels, video sequencing, and end-to-end production pipelines.",
    href: "/academy/ai-video-editing",
    imgPlaceholderLabel: "AI + Video Editing course preview",
    srcLight: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Video.webp",
    srcDark: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Video%20DK.webp",
  },
];

const DEFAULT_HERO_IMAGE = "https://ik.imagekit.io/wpxassets/wepix%20academy/Academy%20banner%20image.webp";

interface NewCoursesSectionProps {
  className?: string;
  heroImage?: string;
  heroImageLight?: string;
  heroImageDark?: string;
}

/**
 * Reusable AI Courses Section
 * - Hero visual block: Left image, Right content
 * - Course cards block: 3-column grid for desktop following the exact UI of previous course cards
 */
export function NewCoursesSection({
  className,
  heroImage = DEFAULT_HERO_IMAGE,
  heroImageLight,
  heroImageDark,
}: NewCoursesSectionProps) {
  const sectionRef = useGSAP((container) => {
    scrollFadeIn(".gsap-ai-hero-el", container, { stagger: 0.1, y: 25 });
    scrollFadeIn(".gsap-new-course-card", container, { stagger: 0.12, y: 30 });
  });

  return (
    <section ref={sectionRef} className={cn("py-12 md:py-20 lg:py-28 border-t border-border", className)}>
      {/* 1. Hero visual: Left Image, Right Content */}
      <div className="container mb-14 md:mb-20 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Image / Visual */}
          <div className="gsap-ai-hero-el opacity-0 rounded-xl overflow-hidden aspect-video sm:aspect-[4/3] lg:aspect-square bg-muted/40 border border-border/60">
            {heroImageLight && heroImageDark ? (
              <>
                <img
                  src={heroImageLight}
                  alt="WePix AI Academy"
                  className="w-full h-full object-cover dark:hidden"
                  loading="lazy"
                />
                <img
                  src={heroImageDark}
                  alt="WePix AI Academy"
                  className="hidden w-full h-full object-cover dark:block"
                  loading="lazy"
                />
              </>
            ) : heroImage ? (
              <img
                src={heroImage}
                alt="WePix AI Academy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <ImagePlaceholder
                label="AI Academy Hero Visual"
                aspectRatio="square"
                className="w-full h-full rounded-none border-0"
              />
            )}
          </div>

          {/* Right: Content */}
          <div>
            <span className="gsap-ai-hero-el inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">
              WePix AI Academy
            </span>
            <h2 className="gsap-ai-hero-el font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
              Master Generative AI for Modern Marketing, Design & Video
            </h2>
            <p className="gsap-ai-hero-el mt-5 text-base text-muted-foreground opacity-0">
              Tools like ChatGPT, Midjourney, and AI video suites are redefining the creative landscape. But tools without strategy produce mediocre work. Our AI specialization cohorts train you to integrate AI workflows into high-impact digital marketing, brand design, and video production — so you build real portfolios and land high-demand commercial roles.
            </p>

            <div className="gsap-ai-hero-el mt-8 flex flex-col sm:flex-row sm:items-center gap-6 opacity-0 border-t border-border/50 pt-6 max-w-md">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                  Admissions
                </p>
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Scholarships Open
                </p>
              </div>
              <AICourseApplicationDialog
                courseName="AI Specialization Cohort"
                triggerLabel="Apply for AI Cohort"
                showArrow
                triggerSize="lg"
                triggerClassName="font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Course Cards: 3 grid for desktop, matching existing offerings UI */}
      <div className="container">
        <SectionHeading
          tag="AI Career Tracks"
          title="Programs to build your AI advantage"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {AI_COURSES.map((course) => (
            <div key={course.title} className="gsap-new-course-card opacity-0">
              <Link to={course.href}>
                <Card className="h-full hover:shadow-md transition-all rounded-xl border-border group overflow-hidden">
                  <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-video rounded-none border-0 overflow-hidden">
                    {course.srcLight && course.srcDark ? (
                      <>
                        <img
                          src={course.srcLight}
                          alt={course.title}
                          className="w-full h-full object-cover dark:hidden"
                          loading="lazy"
                        />
                        <img
                          src={course.srcDark}
                          alt={course.title}
                          className="hidden w-full h-full object-cover dark:block"
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <ImagePlaceholder
                        label={course.imgPlaceholderLabel}
                        aspectRatio="video"
                        className="rounded-none border-0 border-b"
                      />
                    )}
                  </div>
                  <CardContent className="p-6">
                    <course.icon className="text-foreground mb-4" size={24} />
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
