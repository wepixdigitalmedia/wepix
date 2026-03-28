import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "portrait";
  /** Grayscale until pointer is over the frame; then show full color. */
  grayscaleUntilHover?: boolean;
}

export function ImagePlaceholder({
  label = "Image coming soon",
  src,
  alt,
  className,
  aspectRatio = "video",
  grayscaleUntilHover = false,
}: ImagePlaceholderProps) {
  const ratioClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  }[aspectRatio];

  if (src) {
    return (
      <div
        className={cn(
          "rounded-xl border-2 border-dashed border-border bg-muted/40 overflow-hidden flex flex-col items-center justify-center gap-3",
          grayscaleUntilHover && "group",
          ratioClass,
          className,
        )}
      >
        <img
          src={src}
          alt={alt ?? label}
          className={cn(
            "w-full h-full object-cover",
            grayscaleUntilHover &&
              "grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0",
          )}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={cn("rounded-xl border-2 border-dashed border-border bg-muted/40 overflow-hidden flex flex-col items-center justify-center gap-3", ratioClass, className)}>
      <ImageIcon className="text-muted-foreground/40" size={40} />
      <p className="text-sm text-muted-foreground/60 font-medium">{label}</p>
    </div>
  );
}
