import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";

export const FASHION_MASTERCLASS_URL = "https://lp.abdulnavas.com";
export const AI_MASTERCLASS_URL = "https://lp.abdulnavas.com/ai-masterclass-b1";

interface MasterclassPopupProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultTab?: string;
}

export function MasterclassPopup({ open: controlledOpen, onOpenChange: controlledOnOpenChange }: MasterclassPopupProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = (val: boolean) => {
    if (isControlled) {
      controlledOnOpenChange?.(val);
    } else {
      setInternalOpen(val);
    }
  };

  // NOTE: Auto-show on page load has been removed as outdated masterclass details were cleared.
  // The popup now only opens when explicitly triggered.

  // Listen to custom trigger event
  useEffect(() => {
    const handleTrigger = () => {
      setOpen(true);
    };
    window.addEventListener("open-masterclass-popup" as any, handleTrigger as any);
    return () => window.removeEventListener("open-masterclass-popup" as any, handleTrigger as any);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg max-h-[92vh] overflow-y-auto p-0 border-border bg-card text-card-foreground shadow-2xl rounded-2xl">
        <DialogTitle className="sr-only">Live Fashion Masterclass by Abdul Navas</DialogTitle>
        <DialogDescription className="sr-only">
          Join the waitlist for the upcoming live masterclass with Abdul Navas.
        </DialogDescription>

        {/* Header Banner */}
        <div className="relative p-5 sm:p-6 pb-4 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-b border-border">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-muted border border-border text-foreground text-xs font-semibold">
              <Sparkles size={12} className="text-primary" />
              NEXT COHORT · COMING SOON
            </div>
            <Badge variant="outline" className="text-xs font-normal">
              Waitlist Open
            </Badge>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            Build Your Fashion Brand Online
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Hands-on 3-hour live masterclass with Abdul Navas. Real systems, no fluff.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 pt-4 space-y-4">
          {/* Timing */}
          <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-muted/40 border border-border text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <Calendar size={15} className="text-primary" /> Next Date: To Be Announced
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock size={15} className="text-primary" /> 3-Hour Live Session
            </span>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stop relying on random Instagram DMs and guesswork. Learn the structured operating system fashion brands use to generate consistent online sales with Shopify, Content, and Meta Ads.
            </p>
          </div>

          {/* Core Takeaways */}
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <span><strong>The Brand OS:</strong> Turn followers into paying customers with high-converting store funnels</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <span><strong>Meta Ads Engine:</strong> Proven ad frameworks & creative angles that scale profitably</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <span><strong>Free Toolkit:</strong> KPI Tracking Sheet, Fashion Brand SOPs & Pricing Calculator included</span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-sm text-foreground">Priority Waitlist</p>
              <p className="text-[11px] text-muted-foreground">Get notified first when registrations open.</p>
            </div>

            <div onClick={() => setOpen(false)}>
              <BookingFormDialog
                triggerLabel="Join Waitlist"
                showArrow
                triggerSize="default"
                triggerClassName="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-muted/20 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <Link
            to="/academy/webinar"
            onClick={() => setOpen(false)}
            className="hover:text-foreground font-medium inline-flex items-center gap-1 transition-colors"
          >
            View past sessions & curriculum <ArrowRight size={12} />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function openMasterclassPopup(tab?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-masterclass-popup", { detail: { tab } }));
  }
}
