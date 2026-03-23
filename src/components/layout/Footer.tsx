import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, MapPin, Facebook, Twitter, Phone } from "lucide-react";

const footerLinks = {
  "Brand Verticals": [
    { label: "Fashion", href: "/fashion" },
    { label: "Academy", href: "/academy" },
    { label: "Business", href: "/business" },
    { label: "Digital Store", href: "/digital-store" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Careers", href: "/careers" },
    { label: "Handbook", href: "/handbook" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Perennial", href: "/perennial" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blogs" },
    { label: "Case Studies", href: "/fashion/case-studies" },
    { label: "Community", href: "/academy/community" },
    { label: "Webinar", href: "/academy/webinar" },
  ],
  "Sexy Legal Docx": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie" },
    { label: "Legal Contact", href: "/legal" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/wepix", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/wepix", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@wepix", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/wepix", label: "X" },
  { icon: Facebook, href: "https://facebook.com/wepix", label: "Facebook" },
];

function MediumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm2.04 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              <img
                src="/favicon.ico"
                alt="WePix logo"
                className="h-7 w-7"
              />
              <span>WePix</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-[0.8125rem] max-w-xs leading-relaxed">
              Digital Media. Built Different.
            </p>
            <a href="mailto:hello@wepix.in" className="inline-block mt-3 text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors">
              hello@wepix.in
            </a>
            <a href="tel:+91987654321" className="flex items-center gap-1.5 mt-2 text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={14} />
              +91 987654321
            </a>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={social.label}>
                  <social.icon size={18} />
                </a>
              ))}
              <a href="https://medium.com/@wepix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Medium">
                <MediumIcon size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[0.6875rem] text-muted-foreground uppercase tracking-[0.15em] mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: "Tirupur", address: "Sheriff Colony, Tirupur" },
            { city: "Bangalore", address: "HSR Layout, Bangalore" },
            { city: "Chennai", address: "Casagrand Amberly, Navalur, Chennai" },
          ].map((loc) => (
            <div key={loc.city} className="flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center mt-0.5">
                <MapPin size={14} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-[0.6875rem] text-muted-foreground uppercase tracking-[0.15em] mb-0.5">{loc.city}</p>
                <p className="text-[0.8125rem] text-muted-foreground">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.6875rem] text-muted-foreground tracking-wide">
            &copy; 2026 WePix Digital Media LLP (India) |{" "}
            <Link to="/perennial" className="hover:text-foreground transition-colors">
              Perennial Group (A Consortium)
            </Link>
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[0.6875rem] text-muted-foreground hover:text-foreground transition-colors tracking-wide">Privacy Policy</Link>
            <Link to="/terms" className="text-[0.6875rem] text-muted-foreground hover:text-foreground transition-colors tracking-wide">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
