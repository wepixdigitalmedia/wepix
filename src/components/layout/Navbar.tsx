import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "@/components/shared/AnimatedLogo";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { gsap } from "@/hooks/useGSAP";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Fashion", href: "/fashion" },
  { label: "Academy", href: "/academy" },
  { label: "Business", href: "/business" },
  { label: "Our Works", href: "/my-works" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const subNavs: Record<string, { label: string; href: string }[]> = {
  "/fashion": [
    { label: "Overview", href: "/fashion" },
    { label: "Kickstarter", href: "/fashion/kickstarter" },
    { label: "WePixStudio", href: "/fashion/wepixstudio" },
    { label: "Shopify", href: "/fashion/shopify" },
    { label: "Case Studies", href: "/fashion/case-studies" },
    { label: "Book a Call", href: "/fashion/book" },
  ],
  "/academy": [
    { label: "Overview", href: "/academy" },
    { label: "Kickstart Course", href: "/academy/kickstart-course" },
    { label: "Meta Ads Course", href: "/academy/meta-ads-course" },
    { label: "Live Masterclass", href: "/academy/webinar" },
    { label: "Community", href: "/academy/community" },
    { label: "Courses & Tools", href: "/academy/digital-store" },
  ],
  "/business": [
    { label: "Overview", href: "/business" },
    { label: "AI Agents", href: "/business/ai-agents" },
    { label: "Mentorship", href: "/business/mentorship" },
    { label: "Contact", href: "/business/contact" },
  ],
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const subNavRef = useRef<HTMLDivElement>(null);

  const activeSection = Object.keys(subNavs).find((key) =>
    location.pathname.startsWith(key)
  );
  const subLinks = activeSection ? subNavs[activeSection] : null;

  useEffect(() => {
    if (!subNavRef.current || window.innerWidth >= 768) return;
    const el = subNavRef.current;
    if (el.scrollWidth <= el.clientWidth) return;
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(el, { scrollLeft: 80, duration: 0.4, ease: "power2.inOut" })
      .to(el, { scrollLeft: 0, duration: 0.4, ease: "power2.inOut" });
    return () => { tl.kill(); };
  }, [activeSection]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-[4.5rem]">
          <AnimatedLogo />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-3 py-2 text-[0.8125rem] font-medium tracking-wide rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted",
                  (location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href))) &&
                    "text-foreground bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <BookingFormDialog triggerLabel="Book a Call" triggerSize="sm" triggerClassName="ml-2" />
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border pb-3">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2.5 text-[0.8125rem] font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted",
                  (location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href))) &&
                    "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-1">
              <BookingFormDialog triggerLabel="Book a Call" triggerSize="sm" triggerClassName="w-full" />
            </div>
          </div>
        )}
      </nav>

      {/* Context subnav */}
      {subLinks && (
        <div className="sticky top-[4.5rem] z-40 bg-background/80 backdrop-blur-lg border-b border-border">
          <div ref={subNavRef} className="container flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {subLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-3 py-1.5 text-[0.8125rem] font-medium tracking-wide rounded-lg whitespace-nowrap transition-colors text-muted-foreground hover:text-foreground hover:bg-muted",
                  location.pathname === link.href && "bg-muted text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
