import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import {
  Megaphone,
  Palette,
  Film,
  Check,
  Briefcase,
  Clock,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Calendar,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CourseItem interface - Template definition for academy courses.
 * Any course (current or future) can conform to this schema.
 */
export interface CourseItem {
  id: string;
  title: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline";
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  objective: string;
  skillsCovered: string[];
  careerRoles: string[];
  // Customizable placeholder fields
  duration?: string;
  format?: string;
  level?: string;
  scholarshipAvailable?: boolean;
  imagePlaceholderLabel?: string;
  imageSrcLight?: string;
  imageSrcDark?: string;
  ctaText?: string;
  ctaAction?: "dialog" | "link";
  ctaHref?: string;
}

/**
 * Default new courses data derived from ref_docs.md
 */
export const DEFAULT_NEW_COURSES: CourseItem[] = [
  {
    id: "ai-marketing",
    title: "AI + Marketing",
    badge: "New AI Track",
    badgeVariant: "default",
    icon: Megaphone,
    duration: "10-12 Weeks (Placeholder)",
    format: "Hands-on Live Cohort (Placeholder)",
    level: "Beginner to Advanced",
    scholarshipAvailable: true,
    imagePlaceholderLabel: "AI + Marketing Course Preview",
    objective:
      "Train students to use AI tools and modern digital marketing techniques to plan, create, execute and analyse marketing activities.",
    skillsCovered: [
      "AI tools and prompt engineering for marketing",
      "Content creation and copywriting",
      "Social media strategy and management",
      "Meta Ads and Google Ads fundamentals",
      "Search Engine Optimisation (SEO)",
      "Marketing automation and analytics",
      "Campaign planning and performance analysis",
    ],
    careerRoles: [
      "Digital Marketing Executive",
      "Performance Marketing Associate",
      "SEO Executive",
      "Social Media Executive",
      "Marketing Automation Associate",
    ],
    ctaText: "Apply / Join Waitlist",
    ctaAction: "dialog",
  },
  {
    id: "ai-design",
    title: "AI + Design",
    badge: "Creative Tech Track",
    badgeVariant: "default",
    icon: Palette,
    duration: "8-10 Weeks (Placeholder)",
    format: "Studio & Portfolio Driven (Placeholder)",
    level: "Beginner to Intermediate",
    scholarshipAvailable: true,
    imagePlaceholderLabel: "AI + Design Course Preview",
    objective:
      "Train students to combine AI-powered tools with creative design skills to produce professional visual content and brand communication materials.",
    skillsCovered: [
      "AI-powered image generation",
      "Graphic design fundamentals",
      "Visual communication and typography",
      "Branding and visual identity",
      "Social media creatives and advertisements",
      "AI-assisted design workflows",
      "Creative development and design thinking",
    ],
    careerRoles: [
      "Graphic Designer",
      "Creative Designer",
      "Brand Design Associate",
      "AI Visual Content Creator",
      "Social Media Designer",
    ],
    ctaText: "Apply / Join Waitlist",
    ctaAction: "dialog",
  },
  {
    id: "ai-video-editing",
    title: "AI + Video Editing",
    badge: "Creator Track",
    badgeVariant: "default",
    icon: Film,
    duration: "8-10 Weeks (Placeholder)",
    format: "Live Projects & Viral Formats (Placeholder)",
    level: "Beginner to Advanced",
    scholarshipAvailable: true,
    imagePlaceholderLabel: "AI + Video Editing Course Preview",
    objective:
      "Train students to use AI-powered tools and professional editing techniques to create engaging video content for digital platforms and brands.",
    skillsCovered: [
      "Video editing fundamentals",
      "AI-assisted video generation",
      "Short-form content and reels creation",
      "Video storytelling and sequencing",
      "Motion graphics fundamentals",
      "Audio and visual editing",
      "AI-powered video production workflows",
    ],
    careerRoles: [
      "Video Editor",
      "Reels Editor",
      "Video Content Creator",
      "Motion Graphics Associate",
      "AI Video Production Associate",
    ],
    ctaText: "Apply / Join Waitlist",
    ctaAction: "dialog",
  },
];

export interface NewCoursesSectionProps {
  id?: string;
  tag?: string;
  title?: string;
  description?: string;
  courses?: CourseItem[];
  className?: string;
}

/**
 * Reusable NewCoursesSection Component.
 * Acts as a configurable template to showcase new AI-focused career programs
 * or any upcoming academy courses with standardized metadata, skills, and career roles.
 */
export function NewCoursesSection({
  id = "new-ai-courses",
  tag = "New Specializations",
  title = "AI-Powered Career Programs",
  description = "Future-proof your career with industry-led cohorts that merge generative AI tools with core marketing, design, and video production disciplines.",
  courses = DEFAULT_NEW_COURSES,
  className,
}: NewCoursesSectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20 lg:py-28 border-t border-border bg-muted/10", className)}>
      <div className="container max-w-7xl">
        <SectionHeading tag={tag} title={title} description={description} align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {courses.map((course) => {
            const Icon = course.icon || GraduationCap;
            return (
              <div key={course.id} className="gsap-new-course-card opacity-0 flex">
                <Card className="flex flex-col justify-between w-full rounded-2xl border-border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div>
                    {/* Visual Media / Image Placeholder */}
                    <div className="relative overflow-hidden bg-muted/40 border-b border-border/60">
                      <ImagePlaceholder
                        label={course.imagePlaceholderLabel || `${course.title} Preview`}
                        srcLight={course.imageSrcLight}
                        srcDark={course.imageSrcDark}
                        aspectRatio="video"
                        className="rounded-none border-0"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {course.badge && (
                          <Badge variant={course.badgeVariant || "secondary"} className="shadow-sm backdrop-blur-md font-medium text-xs">
                            {course.badge}
                          </Badge>
                        )}
                        {course.scholarshipAvailable && (
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-md text-xs font-normal border-border gap-1 hidden sm:inline-flex">
                            <Sparkles size={11} className="text-amber-500" />
                            Scholarship Open
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Header: Icon & Title */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 mt-0.5">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                            {course.duration && (
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {course.duration}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Course Objective */}
                      <div className="mt-3 p-3.5 rounded-xl bg-muted/30 border border-border/40">
                        <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                          Objective
                        </p>
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          {course.objective}
                        </p>
                      </div>

                      {/* Skills Covered */}
                      <div className="mt-5">
                        <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2.5 flex items-center gap-1.5">
                          <Check size={14} className="text-emerald-500" />
                          Skills Covered
                        </p>
                        <ul className="space-y-1.5">
                          {course.skillsCovered.map((skill, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Potential Career Roles */}
                      <div className="mt-5 pt-4 border-t border-border/60">
                        <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2.5 flex items-center gap-1.5">
                          <Briefcase size={14} className="text-primary" />
                          Potential Career Roles
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {course.careerRoles.map((role, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80 border border-border/50"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Action Footer */}
                  <div className="p-6 pt-0 mt-2 border-t border-border/40 flex flex-col gap-2">
                    {course.ctaAction === "dialog" ? (
                      <BookingFormDialog
                        triggerLabel={course.ctaText || "Apply / Join Waitlist"}
                        triggerSize="default"
                        triggerClassName="w-full justify-center text-sm font-medium mt-4"
                        showArrow
                      />
                    ) : course.ctaHref ? (
                      <a href={course.ctaHref} className="w-full mt-4">
                        <Button className="w-full justify-center text-sm font-medium gap-2">
                          {course.ctaText || "Learn More"}
                          <ArrowRight size={14} />
                        </Button>
                      </a>
                    ) : (
                      <BookingFormDialog
                        triggerLabel={course.ctaText || "Apply / Join Waitlist"}
                        triggerSize="default"
                        triggerClassName="w-full justify-center text-sm font-medium mt-4"
                        showArrow
                      />
                    )}

                    <div className="flex items-center justify-between text-[11px] text-muted-foreground/70 px-1 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        Next Cohort: Placeholder
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText size={11} />
                        Syllabus on request
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

