import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ENROLL_URL } from "@/data/kickstartCourseConstants";

interface KickstartEnrollButtonProps {
  label?: string;
  size?: "default" | "sm" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function KickstartEnrollButton({
  label = "Enroll Now",
  size = "lg",
  className,
  fullWidth,
}: KickstartEnrollButtonProps) {
  return (
    <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className={cn(fullWidth && "block w-full")}>
      <Button
        size={size}
        className={cn(
          "font-medium gap-2 rounded-lg shadow-[inset_0_0_12px_rgba(255,255,255,0.2)]",
          fullWidth && "w-full",
          className
        )}
      >
        {label}
        <ArrowRight size={size === "sm" ? 14 : 16} aria-hidden="true" />
      </Button>
    </a>
  );
}
