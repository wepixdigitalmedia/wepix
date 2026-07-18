import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import wepixTeamImg from "@/assets/wepix-team.jpeg";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { motion } from "framer-motion";

const doctrine = [
  { num: "01", title: "Time is the primary dimension", desc: "We optimise for decades, not cycles. Short-term success that damages long-term direction is treated as failure. Perennial exists to compound effort, knowledge, and systems over time." },
  { num: "02", title: "Scale comes from coordination", desc: "Complex systems are not built by individuals. Strength emerges when specialised capabilities are aligned under a single direction. This is why Perennial is a group, not a hero-led firm." },
  { num: "03", title: "Questions come before answers", desc: "Most failure is not caused by poor execution. It is caused by confidently solving the wrong problem. Perennial slows down early so that speed later is meaningful." },
  { num: "04", title: "Humility enables learning", desc: "Complex systems do not reveal themselves fully upfront. Certainty closes feedback loops. Humility keeps them open. Perennial treats understanding as provisional, not complete." },
  { num: "05", title: "Engineering is a civilisational pursuit", desc: "Engineering is one of humanity's highest forms of expression. Across software, hardware, aviation, space, and science, engineering is how intent becomes reality. Perennial treats engineering as a discipline to be respected, not a commodity to be rushed." },
  { num: "06", title: "Shaping the world is not optional", desc: "Humans reshape the world by default. The only question is whether it is done deliberately or accidentally. Perennial prefers intentional systems over inherited outcomes." },
  { num: "07", title: "Raise the ceiling, not the floor", desc: "We focus on expanding what is possible, not merely optimising what already exists. Incremental improvement sustains systems. Ceiling-raising work changes trajectories." },
  { num: "08", title: "Craft outlasts novelty", desc: "It is easy to build with new tools. It is difficult to build correctly. Perennial values reliability over demos, architecture over hacks, and taste over speed. Good systems age well. Bad systems accumulate debt." },
  { num: "09", title: "High agency is non-negotiable", desc: "Exceptional outcomes require judgment. Empowering individuals increases variance, but enables excellence. Avoiding mistakes entirely guarantees mediocrity. Perennial is built to trust judgment over process theatre." },
  { num: "10", title: "Entropy must be resisted", desc: "Entropy is the natural state of growing organisations. Without discipline, clarity erodes, ownership blurs, and complexity collapses into noise. Perennial exists to actively resist this decay." },
  { num: "11", title: "Direction compounds more than speed", desc: "Early direction matters disproportionately. A one-degree error is invisible at the start and catastrophic at scale. A one-degree correction is slow to show impact and decisive in the long run." },
  { num: "12", title: "Method transcends industry", desc: "Industries change. Methods persist. Perennial organises around how systems are built, not where they are applied." },
  { num: "13", title: "Outcomes prove intelligence", desc: "Credentials, theory, and articulation are signals, not evidence. Intelligence is demonstrated by the ability to produce real outcomes under real constraints." },
  { num: "14", title: "Impossible is rarely final", desc: "Most claims of impossibility reflect current assumptions, incentives, or constraints. Progress begins when those constraints are re-examined. Perennial treats impossible as the start of inquiry, not the end of discussion." },
  { num: "15", title: "Rules can be broken. Laws cannot.", desc: "Rules are human constructs and often deserve challenge. Laws - physical, mathematical, or fundamental - do not negotiate. Perennial questions convention while respecting reality." },
];

export default function Perennial() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-10 sm:py-14 md:py-24 lg:py-32 border-b border-border">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-medium text-muted-foreground mb-4 px-3 py-1 rounded-full border border-border bg-muted">Perennial Group</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">Perennial</h1>
            <p className="text-xs text-muted-foreground mt-2 tracking-wider uppercase">Distinguished capability, single accountability</p>
          </motion.div>
        </div>
      </section>

      {/* Brand Narrative */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="container max-w-4xl" style={{ maxWidth: "70rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
            <img src={wepixTeamImg} alt="WePix team photo" className="rounded-xl w-full h-auto object-cover aspect-square lg:aspect-auto" loading="lazy" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Most organisations are built to win a moment. Very few are built to survive change.</p>
              <p>Perennial Group exists for the second kind of work.</p>
              <p>Across history, the things that endure are not the loudest, fastest, or most celebrated. They are the ones built on principles that remain valid as conditions change. In nature, in engineering, and in civilisation itself, longevity comes from sound structure, not surface-level optimisation.</p>
              <p>Perennial Group is a consortium formed around that idea.</p>
              <p>The group works across software, hardware, artificial intelligence, and complex systems because engineering discipline applies everywhere.</p>
              <p className="text-foreground font-medium">We don't optimise for applause. We optimise for endurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctrine */}
      <section className="py-10 md:py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <SectionHeading tag="The Perennial Doctrine" title="The quiet spine" description="Perennial Group exists to build enduring systems across domains by applying engineering discipline, long-term thinking, and high-agency execution." align="left" />
          <div className="space-y-8 mt-12">
            {doctrine.map((d, i) => (
              <motion.article
                key={d.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className="border-l-2 border-border pl-6"
              >
                <span className="text-xs font-medium text-muted-foreground tracking-wider">{d.num}</span>
                <h3 className="font-display text-lg font-semibold mt-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Build systems that last</h2>
          <p className="text-muted-foreground mt-3">If you are building something meant to endure, we should talk.</p>
          <div className="mt-8">
            <BookingFormDialog triggerLabel="Contact WePix" triggerClassName="font-display font-medium text-base" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
