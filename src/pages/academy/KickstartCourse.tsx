import { useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { KickstartEnrollButton } from "@/components/academy/KickstartEnrollButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";
import { COURSE_PRICE, ENROLL_URL } from "@/data/kickstartCourseConstants";
import rawContent from "@/data/kickstartCourseContent";
import {
  Check,
  Gift,
  GraduationCap,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  Info,
  Calendar,
  Layers,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import founderAbdulImage from "@/assets/founder-abdul.png";

// Interface Definitions for parsed data
interface Lesson {
  num: string;
  title: string;
  type: string;
  worksheet: string;
  tag: string;
}

interface Module {
  id: string;
  title: string;
  lessonCount: string;
  outcome: string;
  lessons: Lesson[];
}

interface Phase {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

interface ChangelogItem {
  tag: string;
  title: string;
  description: string;
}

interface SupportPillar {
  title: string;
  items: string[];
}

// Parser Function
function parseCurriculum(text: string) {
  const rawLines = text.split(/\r?\n/);
  const lines = rawLines.map(l => l.trim());

  const stats = {
    modules: 0,
    lessons: 0,
    phases: 0,
    templates: ""
  };

  const changelog: ChangelogItem[] = [];
  const phases: Phase[] = [];
  const supportPillars: SupportPillar[] = [];

  let currentPhase: Phase | null = null;
  let currentModule: Module | null = null;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Parse Stats
    if (line === "TOTAL MODULES" && i > 0) {
      stats.modules = parseInt(lines[i - 1]) || 0;
    } else if (line === "TOTAL LESSONS" && i > 0) {
      stats.lessons = parseInt(lines[i - 1]) || 0;
    } else if (line === "PHASES" && i > 0) {
      stats.phases = parseInt(lines[i - 1]) || 0;
    } else if (line === "TEMPLATES" && i > 0) {
      stats.templates = lines[i - 1] || "";
    }

    // Parse Changelog
    if (line === "Version 2.0 - What Changed from Version 1.0") {
      i++;
      while (i < lines.length && !lines[i].startsWith("PHASE 1")) {
        const itemLine = lines[i];
        const isHeaderOrTag = itemLine.startsWith("NEW") ||
          itemLine.startsWith("MERGED") ||
          itemLine.startsWith("FLAGGED") ||
          itemLine.startsWith("PRODUCTION METHOD") ||
          itemLine.startsWith("LESSON FORMAT");

        if (isHeaderOrTag) {
          const parts = itemLine.split(/\s*[-—]\s*/);
          const tag = parts[0].trim();
          const title = parts.slice(1).join(" - ").trim();
          i++;
          let desc = "";
          while (i < lines.length) {
            const nextLine = lines[i];
            const isNextTag = nextLine.startsWith("NEW") ||
              nextLine.startsWith("MERGED") ||
              nextLine.startsWith("FLAGGED") ||
              nextLine.startsWith("PRODUCTION METHOD") ||
              nextLine.startsWith("LESSON FORMAT") ||
              nextLine.startsWith("PHASE 1");
            if (isNextTag) {
              break;
            }
            if (nextLine.length > 0) {
              desc += (desc ? " " : "") + nextLine;
            }
            i++;
          }
          changelog.push({ tag, title, description: desc });
        } else {
          i++;
        }
      }
      continue;
    }

    // Parse Phases
    if (line.startsWith("PHASE ") && line.length <= 8) {
      currentPhase = {
        id: line,
        title: lines[i + 1] || "",
        description: lines[i + 2] || "",
        modules: []
      };
      phases.push(currentPhase);
      i += 3;
      continue;
    }

    // Parse Modules
    if (/^M(10|[1-9])$/.test(line)) {
      currentModule = {
        id: line,
        title: lines[i + 1] || "",
        lessonCount: lines[i + 2] || "",
        outcome: "",
        lessons: []
      };
      if (currentPhase) {
        currentPhase.modules.push(currentModule);
      }
      i += 3;
      continue;
    }

    // Parse Outcomes
    if (line === "MODULE OUTCOME") {
      if (currentModule) {
        currentModule.outcome = lines[i + 1] || "";
      }
      i += 2;
      continue;
    }

    // Parse Lessons Table
    if (line === "#") {
      i += 5; // Skip #, LESSON TITLE, TYPE, WORKSHEET, TAG

      while (i < lines.length) {
        const cell1 = lines[i];
        if (!cell1 || cell1.startsWith("___") || /^M(10|[1-9])$/.test(cell1) || cell1.startsWith("PHASE") || cell1.startsWith("Support Layer")) {
          break;
        }

        if (!cell1.includes(".") && isNaN(parseInt(cell1))) {
          break;
        }

        const num = cell1;
        const title = lines[i + 1] || "";
        const type = lines[i + 2] || "";
        const worksheet = lines[i + 3] || "";
        const tag = lines[i + 4] || "";

        if (currentModule) {
          currentModule.lessons.push({ num, title, type, worksheet, tag });
        }

        i += 5;
      }
      continue;
    }

    // Parse Support Layer
    if (line === "Support Layer - Runs Throughout All Phases") {
      i += 2;
      while (i < lines.length && !lines[i].startsWith("LESSON COUNT SUMMARY")) {
        const pillarLine = lines[i];
        if (pillarLine && !pillarLine.startsWith("→") && !pillarLine.startsWith("___") && pillarLine.trim().length > 0) {
          const title = pillarLine;
          const items: string[] = [];
          i++;
          while (i < lines.length && lines[i].startsWith("→")) {
            items.push(lines[i].replace("→", "").trim());
            i++;
          }
          supportPillars.push({ title, items });
        } else {
          i++;
        }
      }
      continue;
    }

    i++;
  }

  return { stats, changelog, phases, supportPillars };
}

// Local content constants (Testimonials, Mentor, FAQs)
const testimonials = [
  {
    embedUrl: "https://www.loom.com/embed/b6079dabb5e2432fab89cc87c38d7311?sid=3331d3a5-0299-4a22-a34e-34e902d2f5a9",
    title: "Student testimonial 1",
  },
  {
    embedUrl: "https://www.loom.com/embed/e540819463034fec930b1e8a49500875?sid=f922beb6-2ec5-45f8-9069-5bb2386a9211",
    title: "Student testimonial 2",
  },
  {
    embedUrl: "https://www.loom.com/embed/87769751460e48c1ae14e3578d463337?sid=b4054c28-543f-4fa6-83f0-f8b87c3f8189",
    title: "Student testimonial 3",
  },
];

const mentor = {
  title: "Meet Your Mentor",
  name: "N Abdul Navas",
  role: "Founder, WePix Digital Media",
  bio: "Abdul grew up in Tiruppur - India's textile capital - and spent years burning his own money on ads before cracking the code on fashion marketing. He's built WePix into a pan-India digital media group managing ₹2Cr+ in ad spend, and now he's packaging everything he's learned into this course so you don't have to learn the hard way.",
  highlights: [
    "Built and scaled multiple D2C fashion brands from scratch",
    "Managed ad campaigns for 50+ fashion and lifestyle brands",
    "Creator of the MCS framework used across WePix client campaigns",
    "Featured mentor across WePix Academy live sessions and Skool community",
  ],
};

const faqs = [
  {
    q: "Who is this course for?",
    a: "Fashion founders, D2C brand owners, marketing managers, freelancers, and agency owners who want a complete system to launch and scale a fashion brand online using Meta Ads, Shopify, and content strategy.",
  },
  {
    q: "Do I need prior marketing experience?",
    a: "No. We start from foundations and build up. If you've never run an ad before, you'll be set up correctly. If you've run ads but results are inconsistent, we'll fix the gaps in your system.",
  },
  {
    q: "How long do I have access?",
    a: "Lifetime access to all course materials, plus all future updates as we add new modules and refresh content for platform changes.",
  },
  {
    q: "Is this live or self-paced?",
    a: "Both. Core modules are self-paced video lessons you can watch anytime. Live weekly Q&A sessions give you direct access to the WePix team for questions and campaign reviews.",
  },
  {
    q: "Do I need a Shopify store already?",
    a: "No. Module 2 walks you through building your store from scratch. If you already have one, you'll learn how to audit and optimize it for conversions.",
  },
  {
    q: "What's the time commitment?",
    a: "Plan for 5-8 hours per week over 12 weeks to complete modules and implement alongside. Many students go faster; the pace is entirely yours.",
  },
  {
    q: "Is there a refund policy?",
    a: "Due to the digital nature of the course and immediate access to materials, all sales are final. We encourage you to review the curriculum and FAQs before enrolling.",
  },
  {
    q: "How do I enroll and pay?",
    a: "Click any Enroll Now button on this page. You'll be redirected to our secure Razorpay payment page to complete your enrollment at ₹79,999.",
  },
];

// Helper to get color/styling of custom tags
function getTagBadge(tag: string) {
  if (!tag || tag === "—" || tag === "-") return null;
  const cleanTag = tag.trim().toUpperCase();
  if (cleanTag.includes("NEW")) {
    return <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">New</Badge>;
  }
  if (cleanTag.includes("MERGED")) {
    return <Badge className="bg-muted text-muted-foreground border-border font-medium">Merged</Badge>;
  }
  if (cleanTag.includes("EXTENSION")) {
    return <Badge className="bg-primary/5 text-primary border-primary/20 font-medium">Extension</Badge>;
  }
  if (cleanTag.includes("SERVICE BRIDGE")) {
    return <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">Service Bridge</Badge>;
  }
  if (cleanTag.includes("FLAGGED")) {
    return <Badge className="bg-destructive/10 text-destructive border-destructive/20 font-medium">Flagged</Badge>;
  }
  return <Badge variant="outline" className="text-muted-foreground border-border font-medium">{tag}</Badge>;
}

export default function KickstartCourse() {
  // Parse raw text content once via useMemo
  const data = useMemo(() => parseCurriculum(rawContent), []);

  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-fade", container, { stagger: 0.08, y: 28 });
    scrollFadeIn(".gsap-card", container, { stagger: 0.06, y: 24 });
    gsap.fromTo(
      container.querySelectorAll(".gsap-check"),
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-checklist"),
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div>
      <Layout>
        <div ref={containerRef} className="bg-background text-foreground min-h-screen">

          {/* Hero Section */}
          <section className="gsap-hero-section relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32 border-b border-border/40">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(var(--primary) / 0.18), transparent 70%)",
              }}
            />
            <div className="container relative max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
                <div>
                  <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">
                    WePix Academy · Flagship Program
                  </span>
                  <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
                    Build a Profitable Fashion Brand from Scratch Even if You're Starting at Zero
                  </h1>
                  <p className="gsap-hero-desc mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl opacity-0">
                    Learn the exact framework our team uses to manage ₹2Cr+ in Meta ad spend, scale 50+ fashion brands, and build profitable D2C businesses. From branding and product sourcing to Shopify, AI, performance marketing, and scaling, everything you need is inside one flagship program.
                  </p>
                  <p className="gsap-hero-desc mt-3 text-sm font-medium text-primary/80 uppercase tracking-wider opacity-0">
                    Version 2.0 · July 2026 · Restructured and Updated
                  </p>
                  <div className="gsap-hero-cta mt-8 flex flex-col sm:flex-row sm:items-center gap-4 opacity-0">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Course Fee</p>
                      <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{COURSE_PRICE}</p>
                    </div>
                    <KickstartEnrollButton label="Enroll Now - Start Scaling" />
                  </div>
                </div>

                <div className="gsap-hero-cta opacity-0">
                  <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/20">
                    <img
                      src="/meta-ads-course-light.jpg"
                      alt="WePix Kickstart Course preview"
                      className="w-full h-auto object-cover dark:hidden"
                      loading="eager"
                    />
                    <img
                      src="/meta-ads-course-dark.jpg"
                      alt="WePix Kickstart Course preview"
                      className="hidden w-full h-auto object-cover dark:block"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Trust Stats Section */}
          <section className="border-b border-border bg-muted/20 py-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <AnimatedCounter
                  end={data.stats.modules}
                  label="Structured Modules"
                  suffix=""
                />
                <AnimatedCounter
                  end={data.stats.lessons}
                  label="Total Lessons"
                  suffix=""
                />
                <AnimatedCounter
                  end={data.stats.phases}
                  label="Structured Phases"
                  suffix=""
                />
                <AnimatedCounter
                  end={20}
                  label="Templates & Worksheets"
                  suffix="+"
                />
              </div>
            </div>
          </section>

          {/* Version 2.0 Changelog Section */}
          <section className="py-14 md:py-20 lg:py-24 border-b border-border/40">
            <div className="container max-w-5xl mx-auto px-4">
              <SectionHeading
                tag="What's New"
                title="Version 2.0 Updates"
                description="Our curriculum is updated monthly to reflect actual marketing shifts. Here is what has been restructured and added in Version 2.0 (July 2026)."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                {data.changelog.map((item, idx) => {
                  const isNew = item.tag.includes("NEW");
                  const isMerged = item.tag.includes("MERGED");
                  const isFlagged = item.tag.includes("FLAGGED");

                  return (
                    <Card key={idx} className="gsap-card opacity-0 border-border/60 bg-gradient-to-b from-card to-muted/5 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-border group-hover:bg-primary transition-colors duration-300" />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {isNew && <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-medium">New Lesson</Badge>}
                          {isMerged && <Badge variant="outline" className="bg-muted text-muted-foreground border-border font-medium">Merged Module</Badge>}
                          {isFlagged && <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20 font-medium">Framework Flagged</Badge>}
                          {!isNew && !isMerged && !isFlagged && <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-medium">LMS Config</Badge>}
                          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{item.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Interactive Curriculum Section */}
          <section className="py-14 md:py-20 lg:py-24 bg-muted/10 border-b border-border/40">
            <div className="container max-w-6xl mx-auto px-4">
              <SectionHeading
                tag="Curriculum"
                title="Syllabus Breakdown"
                description="10 comprehensive modules structured across 3 phases. Click on each phase to explore lessons, worksheets, and tags."
              />

              <div className="mt-10">
                <Tabs defaultValue="PHASE 1" className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList className="bg-muted border border-border p-1 rounded-xl">
                      {data.phases.map((phase) => (
                        <TabsTrigger
                          key={phase.id}
                          value={phase.id}
                          className="rounded-lg px-4 py-2 text-sm font-semibold tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                        >
                          {phase.id}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {data.phases.map((phase) => (
                    <TabsContent key={phase.id} value={phase.id} className="mt-0 focus-visible:outline-none">
                      <div className="max-w-4xl mx-auto">
                        <div className="mb-6 text-center">
                          <h3 className="font-display text-xl md:text-2xl font-bold">{phase.title}</h3>
                          <p className="text-sm text-muted-foreground mt-2">{phase.description}</p>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                          {phase.modules.map((mod) => (
                            <AccordionItem
                              key={mod.id}
                              value={mod.id}
                              className="border border-border/60 bg-card/40 rounded-xl overflow-hidden px-4 md:px-6"
                            >
                              <AccordionTrigger className="hover:no-underline py-4">
                                <div className="flex items-center gap-4 text-left">
                                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono">
                                    {mod.id}
                                  </span>
                                  <div>
                                    <h4 className="font-display font-bold text-base md:text-lg">{mod.title}</h4>
                                    <span className="text-xs text-muted-foreground font-medium">{mod.lessonCount}</span>
                                  </div>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-6 pt-1">
                                {mod.outcome && (
                                  <div className="mb-6 p-4 rounded-xl border border-primary/20 bg-primary/5 flex gap-3 items-start">
                                    <Info className="text-primary shrink-0 mt-0.5" size={16} />
                                    <div>
                                      <p className="text-xs uppercase tracking-widest text-primary font-bold">Module Outcome</p>
                                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{mod.outcome}</p>
                                    </div>
                                  </div>
                                )}

                                <div className="rounded-lg border border-border overflow-hidden">
                                  <Table>
                                    <TableHeader className="bg-muted/40">
                                      <TableRow className="hover:bg-transparent">
                                        <TableHead className="w-16 font-semibold">#</TableHead>
                                        <TableHead className="font-semibold">Lesson Name</TableHead>
                                        <TableHead className="w-24 font-semibold">Format</TableHead>
                                        <TableHead className="font-semibold">Worksheet / Reference</TableHead>
                                        <TableHead className="w-28 text-right font-semibold">Status</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {mod.lessons.map((lesson, idx) => (
                                        <TableRow key={idx} className="hover:bg-muted/10 border-border/60">
                                          <TableCell className="font-mono text-xs text-muted-foreground">{lesson.num}</TableCell>
                                          <TableCell className="font-medium text-sm sm:text-base">{lesson.title}</TableCell>
                                          <TableCell className="text-xs text-muted-foreground">{lesson.type}</TableCell>
                                          <TableCell className="text-xs text-muted-foreground/80 italic">{lesson.worksheet}</TableCell>
                                          <TableCell className="text-right">{getTagBadge(lesson.tag)}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </section>

          {/* Support Layer Section */}
          <section className="py-14 md:py-20 lg:py-24 border-b border-border/40">
            <div className="container max-w-6xl mx-auto px-4">
              <SectionHeading
                tag="Support Layer"
                title="Parallel Learning Pillars"
                description="Support runs in parallel with every module. This structure is designed to convert knowledge directly into results."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {data.supportPillars.map((pillar, idx) => {
                  const Icon = idx === 0 ? Users : idx === 1 ? Layers : Sparkles;
                  return (
                    <Card key={idx} className="gsap-card opacity-0 border-border/60 bg-gradient-to-b from-card to-muted/5 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-bold mb-4">{pillar.title}</h3>
                        <ul className="space-y-3">
                          {pillar.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <Check size={14} className="text-primary shrink-0 mt-1" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Inclusions & Bonuses */}
          <section className="py-14 md:py-20 lg:py-24 border-b border-border/40">
            <div className="container max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <SectionHeading tag="Inclusions" title="What's Included in Skool" />
                  <div className="gsap-checklist space-y-4 mt-6">
                    <div className="gsap-check flex items-start gap-3 opacity-0">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="text-base text-muted-foreground leading-relaxed">40+ hours of structured video lessons across 10 modules.</p>
                    </div>
                    <div className="gsap-check flex items-start gap-3 opacity-0">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="text-base text-muted-foreground leading-relaxed">Live weekly Q&A sessions with WePix founders and media buyers.</p>
                    </div>
                    <div className="gsap-check flex items-start gap-3 opacity-0">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="text-base text-muted-foreground leading-relaxed">Private Skool community with 500+ marketers and brand owners.</p>
                    </div>
                    <div className="gsap-check flex items-start gap-3 opacity-0">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="text-base text-muted-foreground leading-relaxed">20+ plug-and-play templates, supplier contacts, and ad briefings.</p>
                    </div>
                    <div className="gsap-check flex items-start gap-3 opacity-0">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="text-base text-muted-foreground leading-relaxed">Shopify audit checklist, creative testing matrix, and analytics boards.</p>
                    </div>
                    <div className="gsap-check flex items-start gap-3 opacity-0">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="text-base text-muted-foreground leading-relaxed">Lifetime access to updates as algorithms and platforms evolve.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionHeading tag="Bonuses" title="Exclusive Launch Bonuses" />
                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <Card className="gsap-card opacity-0 border-border/60 bg-gradient-to-r from-card to-muted/5 relative overflow-hidden">
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                          <Gift size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm sm:text-base">D2C Fashion Brand Launch Kit</h4>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[10px] py-0">Worth ₹7,999</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">Shopify checklist, supply networks, supplier contact list, and supplier briefings.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="gsap-card opacity-0 border-border/60 bg-gradient-to-r from-card to-muted/5 relative overflow-hidden">
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                          <Gift size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm sm:text-base">Meta Ads Mastery Templates</h4>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[10px] py-0">Worth ₹4,999</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">12+ hours of campaign structure walkthroughs, briefings, and creatives ready to deploy.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="gsap-card opacity-0 border-border/60 bg-gradient-to-r from-card to-muted/5 relative overflow-hidden">
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                          <Gift size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm sm:text-base">1:1 Campaign Audit Session</h4>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[10px] py-0">Worth ₹15,000</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">Personal ad account review and scaling layout strategy with WePix media buyers.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-14 md:py-20 lg:py-24 border-b border-border/40">
            <div className="container max-w-5xl mx-auto px-4">
              <SectionHeading tag="Student Wins" title="What our students are saying" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {testimonials.map((t) => (
                  <Card key={t.embedUrl} className="gsap-card opacity-0 rounded-xl border-border overflow-hidden">
                    <div className="aspect-video bg-muted/40">
                      <iframe
                        src={t.embedUrl}
                        title={t.title}
                        className="w-full h-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Mentor Section */}
          <section className="py-14 md:py-20 lg:py-24 bg-muted/10 border-b border-border/40">
            <div className="container max-w-5xl mx-auto px-4">
              <SectionHeading tag="Your Mentor" title={mentor.title} />
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 items-start mt-6">
                <div className="gsap-fade opacity-0 rounded-2xl overflow-hidden border border-border aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl">
                  <img
                    src={founderAbdulImage}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="gsap-fade opacity-0">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">{mentor.role}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mt-1">{mentor.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{mentor.bio}</p>
                  <ul className="mt-6 space-y-3">
                    {mentor.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                        <Star size={14} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-14 md:py-20 lg:py-24 border-b border-border/40">
            <div className="container max-w-lg mx-auto px-4">
              <SectionHeading
                tag="Pricing"
                title="Invest in Your Brand's Future"
                description="One-time payment. Lifetime access. No hidden fees."
              />
              <Card className="gsap-fade opacity-0 mt-8 border-border shadow-xl shadow-black/20 overflow-hidden bg-card/60">
                <div className="h-1 bg-primary" aria-hidden="true" />
                <CardContent className="p-8 text-center">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">WePix Kickstart Course</p>
                  <p className="font-display text-5xl md:text-6xl font-bold mt-3 text-foreground">{COURSE_PRICE}</p>
                  <p className="text-sm text-muted-foreground mt-2">One-time payment · Lifetime access</p>
                  <ul className="mt-8 space-y-3 text-left">
                    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Full 10-module curriculum (64 lessons)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Weekly 1-on-1 accountability calls</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Private Skool community access</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>20+ templates and action worksheets</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Lifetime access to updates</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Done-for-you Shopify store build bridge</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <KickstartEnrollButton label="Enroll Now" fullWidth />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-14 md:py-20 lg:py-24 border-b border-border/40">
            <div className="container max-w-3xl mx-auto px-4">
              <SectionHeading tag="FAQ" title="Frequently Asked Questions" />
              <Accordion type="single" collapsible className="w-full mt-6 gsap-fade opacity-0">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 100%, hsl(var(--primary) / 0.2), transparent 70%)",
              }}
            />
            <div className="container relative text-center max-w-3xl mx-auto px-4">
              <h2 className="gsap-fade opacity-0 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Your Brand Deserves Better Than Random Experiments
              </h2>
              <p className="gsap-fade opacity-0 mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                Join the WePix Kickstart Course and get the complete system - store, content, ads, and scaling - from the team that has done it for 50+ brands.
              </p>
              <div className="gsap-fade opacity-0 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <p className="font-display text-2xl font-bold">{COURSE_PRICE}</p>
                <KickstartEnrollButton label="Enroll Now - Secure Your Seat" />
              </div>
            </div>
          </section>

          {/* Sticky mobile CTA */}
          <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg p-3 md:hidden">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.625rem] uppercase tracking-widest text-muted-foreground">Course Fee</p>
                <p className="font-display text-lg font-bold">{COURSE_PRICE}</p>
              </div>
              <KickstartEnrollButton label="Enroll Now" size="default" />
            </div>
          </div>
          <div className="h-20 md:hidden" aria-hidden="true" />
        </div>
      </Layout>
    </div>
  );
}
