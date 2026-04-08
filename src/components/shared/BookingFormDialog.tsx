import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFormDialogProps {
  children?: React.ReactNode;
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "ghost";
  triggerSize?: "default" | "sm" | "lg";
  triggerClassName?: string;
  showArrow?: boolean;
}

function getPageVariable(pathname: string): string {
  const map: Record<string, string> = {
    "/": "Home",
    "/fashion": "Fashion",
    "/fashion/kickstarter": "Kickstarter",
    "/fashion/wepixstudio": "WePixStudio",
    "/fashion/shopify": "Shopify",
    "/fashion/case-studies": "CaseStudies",
    "/fashion/book": "BookACall",
    "/academy": "Academy",
    "/academy/meta-ads-course": "MetaAdsCourse",
    "/academy/webinar": "Webinar",
    "/academy/community": "Community",
    "/business": "Business",
    "/business/ai-agents": "AIAgents",
    "/business/mentorship": "Mentorship",
    "/business/contact": "BusinessContact",
    "/contact": "Contact",
    "/about": "About",
    "/people": "People",
    "/handbook": "Handbook",
    "/manifesto": "Manifesto",
    "/digital-store": "DigitalStore",
    "/academy/digital-store": "DigitalStore",
    "/blogs": "Blogs",
  };
  return map[pathname] || "General";
}

export function BookingFormDialog({
  children,
  triggerLabel = "Book a Call",
  triggerVariant = "default",
  triggerSize = "lg",
  triggerClassName,
  showArrow = false,
}: BookingFormDialogProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pageVariable = getPageVariable(location.pathname);

  const formUrl = `https://portal.wepix.in/widget/form/I0lRd1J16ltjA2QXGlJ8?PageVariable=${encodeURIComponent(pageVariable)}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children ? (
        <span onClick={() => setOpen(true)} className="cursor-pointer">
          {children}
        </span>
      ) : (
        <Button
          size={triggerSize}
          variant={triggerVariant}
          className={cn(
            "rounded-lg font-medium shadow-[inset_0_0_12px_rgba(255,255,255,0.25)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.25)]",
            showArrow && "gap-2",
            triggerClassName
          )}
          onClick={() => setOpen(true)}
        >
          {triggerLabel} {showArrow && <ArrowRight size={16} />}
        </Button>
      )}
      <DialogContent className="sm:max-w-lg max-h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Book a Call</DialogTitle>
        <iframe
          src={formUrl}
          className="w-full border-none rounded-lg"
          style={{ height: "659px", minHeight: "500px" }}
          title="WePix Booking Form"
        />
      </DialogContent>
    </Dialog>
  );
}
