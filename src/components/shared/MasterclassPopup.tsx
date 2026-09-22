import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const FASHION_MASTERCLASS_URL = "https://lp.abdulnavas.com/masterclass-b5-759189";
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
        <DialogTitle className="sr-only">Live AI Masterclass by Abdul Navas</DialogTitle>
        <DialogDescription className="sr-only">
          Build Your First AI Employee — Live 3-hour hands-on masterclass on 10th October 2026.
        </DialogDescription>

        {/* Header Banner */}
        <div className="relative p-5 sm:p-6 pb-4 bg-gradient-to-br from-blue-500/10 via-primary/5 to-transparent border-b border-border">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <Sparkles size={12} />
              UPCOMING LIVE MASTERCLASS
            </div>
            <span className="text-xs text-muted-foreground font-medium">Tamil (தமிழ்) Live</span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            Build Your First AI Employee
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
              <Calendar size={15} className="text-blue-500" /> 10th October 2026
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock size={15} className="text-blue-500" /> 7:00 PM IST (3 hrs)
            </span>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stop treating AI like a simple chatbot. Turn AI into a 24/7 autonomous employee that audits ad ROAS daily, reconciles payments, and automates your business reporting.
            </p>
          </div>

          {/* 3 Simple Hooked Points */}
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <span><strong>AI Assistant vs Employee:</strong> Real job delegation with live business data</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Ad Doctor & Cash Leaks:</strong> Auto-catch ad performance dips and order leaks</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Bonus Templates:</strong> Setup Framework & Reusable Prompts included</span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-foreground">₹1,999</span>
                <span className="text-xs text-muted-foreground line-through">₹4,999</span>
                <Badge className="text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 border-0 font-semibold">
                  60% OFF
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground">Early cohort pass · Batch 1</p>
            </div>

            <a
              href={AI_MASTERCLASS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto gap-2 font-medium bg-foreground text-background hover:bg-foreground/90">
                Reserve Seat (₹1,999) <ExternalLink size={14} />
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
