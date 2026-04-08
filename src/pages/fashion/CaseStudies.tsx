import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { TrendingUp } from "lucide-react";

const studies = [
  { brand: "Yazhli", category: "Ethnic & Fusion Wear", stat: "31x ROAS", description: "From scroll to sale powered by high-performing creatives and a structured ad system." },
  { brand: "Thugiil", category: "Kids Fashion", stat: "₹68L+ in Sales", description: "₹68L+ revenue built on clean aesthetics, consistent content, and a system that actually converts." },
  { brand: "Pearloze", category: "Premium Western Wear", stat: "20x Growth", description: "From just another fashion page to a scroll-stopper brand. Clean visuals with conversion-focused campaigns." },
  { brand: "Lemoonbaby", category: "Premium Kids Wear", stat: "₹75L+ Revenue Scaled", description: "From a basic kidswear store to a high-converting D2C brand. Adorable visuals backed by performance campaigns that drive consistent sales." },
  { brand: "Teebuy", category: "Affordable Innerwear & Kidswear", stat: "₹60L+ Revenue Scaled", description: "From a local manufacturing brand to a high-volume D2C store. Value-driven products powered by performance campaigns that convert at scale." },
  { brand: "Thedori", category: "Modern Ethnic Wear", stat: "Scaling From Scratch", description: "From zero traction to consistent order flow. Aesthetic-first content with campaigns that start converting." },
  { brand: "Pinkstories", category: "Luxury Ethnic Wear", stat: "From Scroll to Sold", description: "From a boutique-style brand to a fast-growing D2C store. Festive-first visuals backed by campaigns that convert consistently." },
  { brand: "Alankarchennai", category: "Designer Ethnic Wear", stat: "Premium Sales Flow", description: "Not just seen. Sold. From aesthetic collections to consistent high-value purchases. Content that attracts with campaigns that close." },
  { brand: "Cloudyfit", category: "Maternity & Lounge Wear", stat: "3x Scaling Achieved", description: "From unstable performance to predictable scaling. Optimized funnels and creatives to drive higher output with the same spend." },
];

export default function CaseStudies() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-study", container, { stagger: 0.06, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Case Studies</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Real brands. Real money. Real receipts.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">No fluff, no vanity metrics, no 'we increased engagement by 500%' (engagement doesn't pay rent). Here's what actually happened when these brands trusted us with their growth.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {studies.map((study) => (
                <div key={study.brand} className="gsap-study opacity-0">
                  <Card className="rounded-xl border-border overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    {study.brand === "Yazhli" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/taasza-analytics.png" alt="Yazhli analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Thugiil" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/thugiil-analytics.png" alt="Thugiil analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Pearloze" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/pearloze-analytics.png" alt="Pearloze analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Lemoonbaby" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/lemoonbaby-analytics.png" alt="Lemoonbaby analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Teebuy" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/teebuy-analytics.png" alt="Teebuy analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Thedori" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/thedori-analytics.png" alt="Thedori analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Pinkstories" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/pinkstories-analytics.png" alt="Pinkstories analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Alankarchennai" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/alankarchennai-analytics.png" alt="Alankarchennai analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : study.brand === "Cloudyfit" ? (
                      <div className="aspect-square rounded-none border-0 overflow-hidden">
                        <img src="/case-studies/cloudyfit-analytics.png" alt="Cloudyfit analytics dashboard" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : (
                      <ImagePlaceholder label={`${study.brand} brand imagery`} aspectRatio="square" className="rounded-none border-0" />
                    )}
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{study.category}</span>
                        {/* <span className="flex items-center gap-1 text-xs font-semibold text-foreground">
                          <TrendingUp size={12} /> {study.stat}
                        </span> */}
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{study.stat}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Want your brand to be the next case study?" subtext="Book a call. We'll look at your brand and tell you honestly if we can help." ctaLabel="Book a Free Call" />
    </Layout>
  );
}
