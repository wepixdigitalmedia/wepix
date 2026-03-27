import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check } from "lucide-react";

const included = [
  "Shopify store setup and optimization - We build your store from scratch so you don’t get stuck watching random tutorials at 2 AM.",
  "Full product shoot (up to 50 SKUs) - Your products will look so good, you’ll want to post them everywhere.",
  "Ad creatives (10+ scroll stopping pieces) - The kind that makes people pause and go “wait, what was that?”",
  "Meta Ads setup and management (60 days) - We make sure the right people see your brand and actually click.",
  "Content strategy and calendar - No more “what should I post today?” panic.",
  "Weekly performance check ins - We track, tweak, and make sure things are moving in the right direction.",
  "WhatsApp and email support - Fast replies. No ghosting. No confusion.",
];

const faqs = [
  { q: "Who is this for?", a: "New D2C fashion brands launching online for the first time, or existing brands that tried doing it themselves and... well, let's just say it didn't go as planned. If you've got great products but your online game is giving 'under construction,' this is for you." },
  { q: "How long is the program?", a: "60 days. That's enough time to set up your entire online presence, launch campaigns, gather data, optimize, and see real results. It's intense (in a good way), like a marketing bootcamp for your brand." },
  { q: "What if I don't have a Shopify store?", a: "Perfect — we build it for you! Store setup is fully included. We'll design it, set up payments, optimize for conversions, and make it look like you hired a fancy agency (because you did, except we're not overpriced)." },
  { q: "What's the investment?", a: "It depends on your specific needs — number of SKUs, campaign scope, etc. Book a call and we'll give you a custom quote. No hidden fees, no surprise invoices, no 'oh we forgot to mention that costs extra.'" },
  { q: "Do I need to provide products for the shoot?", a: "Yes! You send us the products, we handle literally everything else — styling, shooting, editing, making them look irresistible. Ship them over and trust the process." },
];

export default function Kickstarter() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-check"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-checklist"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Kickstarter Program</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">No confusion. No random experiments.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Just a complete system covering store, content, ads, and strategy designed to turn your products into a selling brand.'</p>
            <div className="mt-10">
              <div className="rounded-xl border-2 border-dashed border-border bg-muted/40 overflow-hidden aspect-[21/9]">
                <img
                  src="/kickstarter-timeline.png"
                  alt="Kickstarter program timeline infographic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border gsap-checklist">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">What's Included (spoiler: everything)</h2>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="gsap-check flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <BookingFormDialog triggerLabel="Apply for Kickstarter" showArrow />
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Burning Questions? We got answers.</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <CTABanner headline="Ready to launch your brand? Let's gooo" subtext="Book a call. We'll tell you exactly how we'd launch your brand in 60 days." ctaLabel="Book a Call" />
    </Layout>
  );
}
