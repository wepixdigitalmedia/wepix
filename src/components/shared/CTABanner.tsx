import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useGSAP, gsap } from "@/hooks/useGSAP";
import { BookingFormDialog } from "./BookingFormDialog";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref?: string;
  useDialog?: boolean;
}

export function CTABanner({ headline, subtext, ctaLabel, ctaHref, useDialog = true }: CTABannerProps) {
  const containerRef = useGSAP((container) => {
    gsap.fromTo(
      container.querySelectorAll(".gsap-cta-el"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section ref={containerRef} className="border-t border-border py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container text-center">
        <h2 className="gsap-cta-el font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl mx-auto opacity-0">
          {headline}
        </h2>
        {subtext && <p className="gsap-cta-el mt-4 md:mt-5 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto opacity-0">{subtext}</p>}
        <div className="gsap-cta-el mt-7 md:mt-10 opacity-0">
          {useDialog ? (
            <BookingFormDialog triggerLabel={ctaLabel} showArrow triggerSize="lg" />
          ) : ctaHref ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-medium gap-2 rounded-lg shadow-[inset_0_0_12px_rgba(255,255,255,0.25)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.25)]"
              >
                {ctaLabel} <ArrowRight size={16} />
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
