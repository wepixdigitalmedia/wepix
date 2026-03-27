import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  interface TamilTooltipProps {
    className?: string;
  }
  
  export function TamilTooltip({ className }: TamilTooltipProps) {
    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span 
              className={`cursor-help font-medium text-foreground transition-colors hover:text-primary ${className || ""}`}
            >
              தமிழ்
            </span>
          </TooltipTrigger>
          <TooltipContent side="top" align="center" className="bg-foreground text-background font-sans p-3 shadow-xl">
            <p className="text-xs md:text-sm font-semibold max-w-[250px] text-center">Tamil in Tamil Language</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  