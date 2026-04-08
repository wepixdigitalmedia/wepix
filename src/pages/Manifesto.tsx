import { Layout } from "@/components/layout/Layout";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    title: "Level 5 Leadership: It's About Us, Not Me",
    body: "At WePix Digital Media, our focus is on building a lasting impact within the fashion industry, rather than seeking personal accolades. Leadership is a collective endeavor where we uplift each other, inspire growth, and foster trust within our team and with our clients. We celebrate our successes together, maintaining humility while making decisions that benefit the entire team and our clients.",
  },
  {
    title: "Confront Brutal Facts Habitually",
    body: "We lead with questions and a deep understanding of the fashion market, relying on data rather than assumptions. Open debates drive our decisions, and when mistakes occur, we conduct thorough analyses instead of assigning blame. Our red flag system ensures that those not aligned with our standards are identified and addressed.",
  },
  {
    title: "Singular Focus",
    body: "We dedicate ourselves to what we are passionate about:",
    bullets: [
      "Empowering fashion entrepreneurs to thrive globally.",
      "Streamlining their businesses for greater efficiency.",
      "Enhancing profitability through strategic marketing.",
    ],
    extra: "We commit only to what drives our economic engine:",
    extraBullets: [
      "Generating leads.",
      "Converting prospects into clients.",
      "Closing deals that matter.",
    ],
  },
  {
    title: "Compounding Effect",
    body: "Our growth strategy is simple yet powerful: generate leads, nurture relationships, close deals, and improve with every step. We continuously seek feedback, refine our processes, and build momentum through consistent effort and incremental improvement.",
  },
  {
    title: "Fanatic Discipline",
    body: "Regardless of external factors, we are committed to a minimum growth rate of 20% per year. This standard keeps us resilient and focused, ensuring we stay on track towards our long-term goals while achieving short-term successes.",
  },
  {
    title: "Test Aggressively",
    body: "We make calculated, low-risk investments in innovative ideas, testing them thoroughly before scaling up the winners. This approach allows us to stay agile and ahead of the curve in the fast-paced fashion industry.",
  },
  {
    title: "Productive Paranoia",
    body: "We remain vigilant by categorizing risks into:",
    bullets: [
      "Death-line risks: Potential threats to our business.",
      "Asymmetric risks: Scenarios where the downside outweighs the upside.",
      "Uncontrollable risks: External factors beyond our control.",
    ],
    extra: "We constantly reassess our strategies, zooming in and out to make informed adjustments as needed.",
  },
  {
    title: "Specific, Methodical, and Consistent",
    body: "We stick to our proven strategies, making only minor adjustments over time to ensure long-term success. Like the industry leaders we admire, we introduce innovations only after they've been thoroughly validated in the market.",
  },
  {
    title: "Maximizing Per-Share Value",
    body: "Our financial strategy focuses on high-return investments, ensuring that every decision we make contributes to maximizing cash flow and shareholder returns. We prioritize activities that offer a minimum of 20% return on investment after taxes.",
  },
  {
    title: "Institution Over Product",
    body: "WePix is committed to building a robust institution capable of continuously delivering exceptional services, rather than relying on any single product or service.",
  },
  {
    title: "Home-Grown Management",
    body: "We invest in our team, developing internal talent to ensure the company's growth and longevity. This approach allows us to maintain a consistent culture and standard of excellence.",
  },
  {
    title: "Good Enough Never Is",
    body: "While we have long-term goals, we also achieve outstanding short-term results. We recognize that today's achievements are the result of yesterday's efforts, and we strive to outdo ourselves and our competitors each year.",
  },
  {
    title: "Over-Communicate Clarity",
    body: "We serve as each other's Chief Reminding Officers, ensuring that everyone remains aligned with our goals. We regularly revisit our objectives until they are fully realized.",
  },
  {
    title: "Bias for Action",
    body: "We believe in action over hesitation. At WePix, the burden of proof lies on those who argue that an idea won't work, not on those who believe it will. We do not hold meetings without a clear action plan.",
  },
  {
    title: "Close to the Customer",
    body: "Our obsession with quality and customer service drives us to treat each client like a VIP. We imagine each interaction as if we are hosting an exclusive event, ensuring that every client feels valued and heard.",
  },
  {
    title: "Autonomy and Entrepreneurship",
    body: "We encourage innovation by empowering individuals to champion new ideas, supported by senior management. WePix embraces well-intentioned failures as stepping stones to success.",
  },
  {
    title: "Proud but Never Satisfied",
    body: "We take pride in our past successes but understand that entitlement has no place at WePix. We continuously strive to understand the market, respond to changes, and improve our services.",
  },
  {
    title: "Saying Goodbye",
    body: "Performance issues are handled transparently, with ample time given for improvement. We maintain respect and dignity in all personnel decisions, ensuring no one is humiliated.",
  },
  {
    title: "No Room for Culture-F**kers",
    body: "Integrity, intelligence, maturity, and cultural fit are non-negotiable at WePix. We seek team members who value results, authenticity, and resilience, and who surround themselves with smart, innovative individuals.",
  },
  {
    title: "What to Do When Things Go Wrong?",
    body: "In tough times, we refocus on the disciplines that have made us successful, accumulating small wins to restore momentum. Our core values guide us through challenges, ensuring we survive and thrive.",
  },
  {
    title: "Competition is for Losers",
    body: "WePix aims to be the best, playing the long-term game by focusing on continuous improvement and outdoing our past performance. Our competition is ourselves.",
  },
];

export default function Manifesto() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-[0.8125rem] font-medium text-muted-foreground mb-4 px-3 py-1 rounded-full border border-border bg-muted">Our Philosophy</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Our Manifesto</h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Here's our manifesto, shaped by years of experience and success, which we now share with you to guide and inspire your journey!
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="rounded-xl bg-muted/40 overflow-hidden aspect-square">
                <img
                  src="/manifesto-hero-visual.png"
                  alt="Manifesto hero visual with chess strategy concept"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-0">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="py-10 border-b border-border last:border-b-0"
              >
                <span className="text-[0.6875rem] font-semibold text-muted-foreground tracking-[0.15em] mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-lg md:text-xl font-semibold mb-4">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                {p.bullets && (
                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground">
                    {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
                {p.extra && <p className="text-muted-foreground leading-relaxed mt-4">{p.extra}</p>}
                {p.extraBullets && (
                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground">
                    {p.extraBullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-[21/9] rounded-xl overflow-hidden">
            <img
              src="/manifesto-team-culture.png"
              alt="Team culture visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold">Ready to Be Part of the Journey?</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Whether you want to join our team or grow your brand, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/careers">
                  Join WePix <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <BookingFormDialog
                triggerLabel="Having a Brand? Book a Call"
                triggerVariant="outline"
                triggerSize="lg"
                showArrow
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
