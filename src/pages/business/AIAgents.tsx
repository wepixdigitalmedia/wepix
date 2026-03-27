import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Bot, MessageSquare, Users, BarChart3, Clock, ArrowRight } from "lucide-react";

const agents = [
  { title: "Sales Call Setter Agent", description: "Automatically books qualified sales calls for you. It handles objections, finds the right time slots, and sends confirmations so your sales team only needs to show up and close.", img: "Sales call setter interface", src: "/ai-agent-setter.png" },
  { title: "Lead Qualifier Agent", description: "Scores and qualifies every inbound lead in real-time. It asks the right questions, captures key data, and routes hot prospects straight to your closers. No more chasing dead ends.", img: "Lead qualifier dashboard", src: "/ai-agent-qualifier.png" },
  { title: "WhatsApp Chat Agent", description: "Engages customers on WhatsApp 24/7. It answers questions, shares catalogs, processes orders, and escalates when needed. It feels like texting a real person, but works like a machine.", img: "WhatsApp chat agent demo", src: "/ai-agent-chat.png" },
  { title: "Instagram DM Agent", description: "Responds to every DM instantly. Handles product inquiries, captures leads from story replies, and turns casual browsers into paying customers all on autopilot.", img: "Instagram DM agent interface", src: "/ai-agent-dm.png" },
];

const useCases = [
  { icon: MessageSquare, title: "Customer Support", description: "Our AI agents are always on, 24/7, across WhatsApp, web, and email. They never sleep, never get cranky, and never say 'let me check with my supervisor.' Your customers will think they’re talking to a full squad of support pros." },
  { icon: Users, title: "Lead Qualification", description: "Stop wasting your team’s time on tire-kickers. Our AI agents qualify leads, ask the right questions, and pass the hot ones straight to your closers. It’s like having a bouncer for your sales pipeline." },
  { icon: BarChart3, title: "Data Analysis", description: "No need for a data scientist (or to learn Python). Ask your AI agent questions in plain English and get real answers that actually make sense. You get the insights without the complexity." },
  { icon: Clock, title: "Workflow Automation", description: "Forget about follow-ups, reminders, scheduling, and all that other stuff that eats up time. Our AI agents handle it so your team can focus on work that actually requires brainpower." },
  { icon: Bot, title: "Internal Knowledge Base", description: "Get your AI to learn your docs, SOPs, and processes. New team members can ask the AI for info instead of pestering Karen from HR for the hundredth time. She'll thank you." },
];

const industries = ["SaaS & Tech", "Manufacturing", "E-commerce", "Healthcare", "Education", "Professional Services"];

export default function AIAgents() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-usecase", container, { stagger: 0.08, y: 25 });
    scrollFadeIn(".gsap-agent", container, { stagger: 0.1, y: 30 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">AI Agents</span>
                <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">AI Agents That Never Sleep</h1>
                <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Say goodbye to basic chatbots that always say, "Sorry, I didn’t understand." Our AI agents are designed for YOUR business, powered by YOUR data, and connected to YOUR tools. They get the context, learn as they go, and actually take action. No more pretending to help.</p>
              </div>
              <div className="gsap-hero-cta opacity-0 rounded-xl border-2 border-dashed border-border bg-muted/40 aspect-square overflow-hidden">
                <img
                  src="/business-ai-agent-hero.png"
                  alt="AI agent interface and workflow intelligence dashboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl font-semibold mb-4">Meet the AI Agents That Do More Than Talk</h2>
            <p className="text-lg text-muted-foreground mb-8">Most "AI chatbots" are just glorified FAQ pages with a text box. Ours? Totally different. They're trained on YOUR business data, synced with your CRM, email, and WhatsApp. They pick up from every convo and actually get stuff done. They schedule appointments, follow up with leads, and update your database. Basically, they’re the perfect employee, minus the coffee breaks.</p>
            <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center aspect-[21/9] overflow-hidden">
              <img
                src="/ai-agent-architecture.png"
                alt="AI agent architecture diagram connecting CRM, database, WhatsApp, ads and email"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Use Cases" title="Level Up Your Business with These 5 AI Agent Powers" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="gsap-usecase opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <uc.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-semibold">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-3xl">
            <SectionHeading tag="Industries" title="Industries we've built agents for" align="left" />
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span key={ind} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium border border-border">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Our Agents" title="Set Up Your AI Agent Today" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {agents.map((agent) => (
                <div key={agent.title} className="gsap-agent opacity-0">
                  <Card className="h-full rounded-xl border-border overflow-hidden">
                    <ImagePlaceholder label={agent.img} src={agent.src} alt={agent.title} aspectRatio="video" />
                    <CardContent className="p-4 sm:p-5">
                      <h3 className="font-display text-sm sm:text-base font-semibold">{agent.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{agent.description}</p>
                      <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline">
                        Implement Today <ArrowRight size={14} />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Ready to deploy your AI army?" subtext="Book a consultation. We'll discuss your use case and show you exactly how an AI agent would work for your business." ctaLabel="Book a Consultation" />
    </Layout>
  );
}
