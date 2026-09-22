import { useState, useEffect } from "react";
import { ExternalLink, Sparkles, X, ChevronRight } from "lucide-react";
import { openMasterclassPopup, AI_MASTERCLASS_URL } from "@/components/shared/MasterclassPopup";

export function AnnouncementMarquee() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("wepix_marquee_dismissed");
    if (isDismissed) {
      setVisible(false);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    sessionStorage.setItem("wepix_marquee_dismissed", "true");
  };

  if (!visible) return null;

  return (
    <aside aria-label="Upcoming live masterclass" className="relative z-50 bg-foreground text-background text-xs font-medium border-b border-border/20 overflow-hidden select-none">
      <div className="container py-2 px-3 sm:px-4 flex items-center justify-between gap-3">
        {/* Left: Upcoming Live Badge */}
        <div
          onClick={() => openMasterclassPopup()}
          className="cursor-pointer shrink-0 flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider">
            <Sparkles size={11} className="text-blue-400" />
            Upcoming Live
          </span>
        </div>

        {/* Center: Marquee / Ticker text */}
        <div
          onClick={() => openMasterclassPopup()}
          className="cursor-pointer flex-1 overflow-hidden relative mx-2 hidden sm:block"
        >
          <div className="flex items-center gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-2">
                <span className="font-semibold text-background">Build Your First AI Employee (Batch 1)</span>
                <span className="opacity-70">— 10th Oct 2026 at 7:00 PM IST (Tamil Live)</span>
                <span className="px-1.5 py-0.5 rounded bg-background/20 text-[10px] font-bold">₹1,999 Only</span>
              </span>
              <span className="opacity-40">•</span>
              <span className="opacity-80">
                Direct hands-on 3-hour masterclass by Abdul Navas. Real systems, no fluff.
              </span>
              <span className="opacity-40">•</span>
            </div>

            {/* Duplicate for seamless infinite loop */}
            <div className="flex items-center gap-6" aria-hidden="true">
              <span className="inline-flex items-center gap-2">
                <span className="font-semibold text-background">Build Your First AI Employee (Batch 1)</span>
                <span className="opacity-70">— 10th Oct 2026 at 7:00 PM IST (Tamil Live)</span>
                <span className="px-1.5 py-0.5 rounded bg-background/20 text-[10px] font-bold">₹1,999 Only</span>
              </span>
              <span className="opacity-40">•</span>
              <span className="opacity-80">
                Direct hands-on 3-hour masterclass by Abdul Navas. Real systems, no fluff.
              </span>
              <span className="opacity-40">•</span>
            </div>
          </div>
        </div>

        {/* Mobile short description */}
        <div
          onClick={() => openMasterclassPopup()}
          className="cursor-pointer block sm:hidden text-[11px] truncate font-medium flex-1 text-center"
        >
          AI Masterclass (10 Oct 7 PM) · ₹1,999
        </div>

        {/* Right: Actions */}
        <div className="shrink-0 flex items-center gap-1.5 sm:gap-2">
          <a
            href={AI_MASTERCLASS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background text-foreground text-[11px] font-semibold hover:bg-background/90 transition-colors shadow-sm"
          >
            <span>Register ₹1,999</span>
            <ExternalLink size={10} />
          </a>

          <button
            onClick={() => openMasterclassPopup()}
            className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-background/15 hover:bg-background/25 text-background text-[11px] transition-colors"
          >
            <span>Details</span>
            <ChevronRight size={12} />
          </button>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-md hover:bg-background/20 text-background/70 hover:text-background transition-colors"
            title="Dismiss announcement"
            aria-label="Dismiss announcement"
          >
            <X size={13} />
          </button>
        </div>
      </div>
    </aside>
  );
}
