import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AICourseApplicationDialogProps {
  courseName?: string;
  children?: React.ReactNode;
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "ghost";
  triggerSize?: "default" | "sm" | "lg";
  triggerClassName?: string;
  showArrow?: boolean;
}

export function AICourseApplicationDialog({
  courseName = "AI Course",
  children,
  triggerLabel = "Apply Now",
  triggerVariant = "default",
  triggerSize = "lg",
  triggerClassName,
  showArrow = false,
}: AICourseApplicationDialogProps) {
  const [open, setOpen] = useState(false);

  const formUrl = `https://portal.wepix.in/widget/form/6oIw1hamfUjH27GAm0EJ?PageVariable=${encodeURIComponent(courseName)}`;

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
      <DialogContent className="sm:max-w-lg max-h-[92vh] p-0 overflow-hidden bg-card border-border shadow-2xl rounded-2xl">
        <DialogTitle className="sr-only">Apply for {courseName}</DialogTitle>
        <iframe
          src={formUrl}
          className="w-full border-none rounded-lg"
          style={{ height: "668px", minHeight: "500px" }}
          title={`Apply for ${courseName}`}
        />
      </DialogContent>
    </Dialog>
  );
}
