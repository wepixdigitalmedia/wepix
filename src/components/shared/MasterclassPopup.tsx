import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const FASHION_MASTERCLASS_URL = "https://lp.abdulnavas.com/masterclass-b6";
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

  // Auto show after 4 seconds on first visit of session
  useEffect(() => {
    if (isControlled) return;
    const hasSeen = sessionStorage.getItem("wepix_masterclass_popup_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setInternalOpen(true);
        sessionStorage.setItem("wepix_masterclass_popup_seen", "true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isControlled]);

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
          Build Your Fashion Brand Online — Live 3-hour hands-on masterclass on 24th October 2026.
        </DialogDescription>

        {/* Header Banner */}
        <div className="relative p-5 sm:p-6 pb-4 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-b border-border">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
              <Sparkles size={12} />
              BATCH 6 · UPCOMING LIVE
            </div>
            <span className="text-xs text-muted-foreground font-medium">Tamil (தமிழ்) Live</span>
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
              <Calendar size={15} className="text-primary" /> 24th October 2026
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock size={15} className="text-primary" /> 5:00 PM IST (3 hrs)
            </span>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stop relying on random Instagram DMs. Learn the structured operating system fashion brands use to generate consistent online sales with Shopify, Content, and Meta Ads.
            </p>
          </div>

          {/* 3 Simple Hooked Points */}
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
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-foreground">₹299</span>
                <span className="text-xs text-muted-foreground line-through">₹2,999</span>
                <Badge className="text-[10px] bg-primary/10 text-primary border-0 font-semibold">
                  90% OFF
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground">Community pass · Batch 6</p>
            </div>

            <a
              href={FASHION_MASTERCLASS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto gap-2 font-medium bg-foreground text-background hover:bg-foreground/90">
                Reserve Seat (₹299) <ExternalLink size={14} />
              </Button>
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-muted/20 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <Link
            to="/academy/webinar"
            onClick={() => setOpen(false)}
            className="hover:text-foreground font-medium inline-flex items-center gap-1 transition-colors"
          >
            View full details & curriculum <ArrowRight size={12} />
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
