import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Check, ArrowRight } from "lucide-react";

const covers = [
  "Your brand’s challenges and goals - let’s keep it real, no LinkedIn fluff.",
  "Which WePix services are the right fit - if something’s not for you, we’ll be upfront.",
  "A rough roadmap for the first 60 days - so you know exactly what’s next.",
  "Budget and timeline - no surprises, no hidden costs, and no “oh btw” moments.",
  "Q&A - ask us anything. The weirder the better. We’re all for it.",
];

export default function BookACall() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-item"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-list"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-10 sm:py-14 md:py-24 lg:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Fashion</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Book a Free Strategy Call. It's like therapy, but for your brand.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">30 minutes. No obligations. No awkward sales pitches. Just a genuine conversation about your brand and how we can help make it the brand you've always envisioned.</p>
          </div>
        </section>

        <section className="py-10 md:py-16 lg:py-24 border-t border-border">
          <div className="container max-w-4xl gsap-list">
            <h2 className="font-display text-2xl font-semibold mb-6">Here’s What We’ll Chat About:</h2>
            <div className="space-y-4 mb-10">
              {covers.map((item) => (
                <div key={item} className="gsap-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <BookingFormDialog triggerLabel="Schedule Your Call" showArrow triggerClassName="w-full md:w-auto" />
            <p className="text-sm text-muted-foreground mt-4">Fill out the form and we'll get back to you within 24 hours to schedule your call.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
