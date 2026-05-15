import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type WorkItem = {
  name: string;
  platform: "Shopify" | "WordPress";
  category: string;
  year: string;
  description: string;
  image: string;
};

type WorkFilter = "All" | "Shopify" | "WordPress";

export const toWorkSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/['.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const works: WorkItem[] = [
  {
    name: "Alankar Chennai",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Festive and occasion wear on Shopify: anarkalis, lehengas and drape dresses with a polished, high-trust shopping flow.",
    image: "/my-works/01.png",
  },
  {
    name: "Eitara",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Craft-led Indian wear with editorial storytelling: kurti sets, dresses and co-ords built for discovery and repeat purchases.",
    image: "/my-works/02.png",
  },
  {
    name: "Velaura by Sri Shanmuga Silks",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Silks and sarees online with collection-led browsing, clear pricing tiers, and a heritage brand narrative.",
    image: "/my-works/03.png",
  },
  {
    name: "Pearloze",
    platform: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    description:
      "Contemporary dresses, tops and skirts: a fashion-forward Shopify build with strong merchandising and social proof.",
    image: "/my-works/04.png",
  },
  {
    name: "Lifashion",
    platform: "Shopify",
    category: "Kidswear · D2C",
    year: "2025",
    description:
      "Kids' apparel and unisex essentials: catalogue-heavy Shopify with age-based navigation and parent-friendly UX.",
    image: "/my-works/05.png",
  },
  {
    name: "Reviash",
    platform: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    description:
      "Affordable luxury womenswear: dresses, co-ords and scarves with a calm, editorial storefront.",
    image: "/my-works/06.png",
  },
  {
    name: "Yazhli Collection",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Western and ethnic occasion wear: gowns, lehengas and kurta sets with minimal, breathable visual design.",
    image: "/my-works/07.png",
  },
  {
    name: "Label Jas",
    platform: "Shopify",
    category: "Fashion · D2C",
    year: "2026",
    description:
      "Emerging fashion label on Shopify: campaign-ready homepage, crisp collections, and conversion-focused PDPs.",
    image: "/my-works/08.png",
  },
  {
    name: "Ishika Trends",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Full-range ethnic and fusion wear: kurti sets, gowns, sarees and maternity with strong category IA.",
    image: "/my-works/09.png",
  },
  {
    name: "Uzvi",
    platform: "Shopify",
    category: "Beauty · D2C",
    year: "2025",
    description:
      "Skincare and beauty retail: product education, clean typography, and a trust-led path to purchase.",
    image: "/my-works/10.png",
  },
  {
    name: "Le'Moon Baby",
    platform: "Shopify",
    category: "Kidswear · D2C",
    year: "2025",
    description:
      "Premium baby and toddler wear: rompers, dresses and accessories with a soft, giftable brand experience.",
    image: "/my-works/11.png",
  },
  {
    name: "Suva Attire",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Tamil-forward ethnic and fusion: kurti sets, maxis and brocade drops with video-led merchandising.",
    image: "/my-works/12.png",
  },
  {
    name: "Mini Tantini",
    platform: "Shopify",
    category: "Kidswear · D2C",
    year: "2026",
    description:
      "Playful kidswear on pure-cotton positioning: collections, trust badges, and parent-first product detail.",
    image: "/my-works/13.png",
  },
  {
    name: "Seams to Love",
    platform: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    description:
      "Contemporary dresses and budget tiers: tiered collections, promos, and a warm boutique tone.",
    image: "/my-works/14.png",
  },
  {
    name: "Cloudy Fit by Asmitha",
    platform: "Shopify",
    category: "Loungewear · D2C",
    year: "2025",
    description:
      "Maternity-friendly loungewear and nightwear: inclusive sizing, feeding-friendly highlights, and calm UX.",
    image: "/my-works/15.png",
  },
  {
    name: "Oggha",
    platform: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    description:
      "Contemporary women's apparel: dresses, sets and tailored coordinates with a bold, modern storefront.",
    image: "/my-works/16.png",
  },
  {
    name: "Hrudhay",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Occasion and everyday ethnic: gowns, anarkalis and kurtis with editorial lookbooks and fast mobile browse.",
    image: "/my-works/17.png",
  },
  {
    name: "Angelic Weaves",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Kurtis, dresses and co-ords: polished Shopify UX with budget and clearance paths for steady conversion.",
    image: "/my-works/18.png",
  },
  {
    name: "Madhavas The Design Studio",
    platform: "WordPress",
    category: "Interior design · Studio",
    year: "2025",
    description:
      "Commercial and residential interior design: portfolio, process, and lead generation on a bespoke WordPress build.",
    image: "/my-works/19.png",
  },
  {
    name: "Plumeria by Jeyashilpa",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/20.png",
  },
  {
    name: "Velzaara",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/21.png",
  },
  {
    name: "The Alp Stores",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/22.png",
  },
  {
    name: "Momify",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/23.png",
  },
  {
    name: "Malliclothing",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/24.png",
  },
  {
    name: "Sampradaya",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/25.png",
  },
  {
    name: "Studio Mirela",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/27.png",
  },
  {
    name: "Thugiil",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/28.png",
  },
  {
    name: "Pink Stories",
    platform: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    description:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    image: "/my-works/29.png",
  },
];

export default function MyWorks() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");

  const filteredWorks =
    activeFilter === "All"
      ? works
      : works.filter((work) => work.platform === activeFilter);

  const filterOptions: WorkFilter[] = ["All", "Shopify", "WordPress"];

  return (
    <Layout>
      <section className="py-8 sm:py-12 md:py-20 lg:py-28">
        <div className="container">
          <SectionHeading
            tag="Portfolio"
            title="Work that moves the needle"
            description="Click any project for the full case study with metrics, scope and outcomes."
          />

          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className="rounded-full"
                >
                  <Badge
                    variant={isActive ? "secondary" : "outline"}
                    className={cn("cursor-pointer", !isActive && "text-foreground")}
                  >
                    {filter}
                  </Badge>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredWorks.map((work) => (
              <Card key={work.name} className="h-full border-border/60 overflow-hidden">
                <Link to={`/work/${toWorkSlug(work.name)}`} className="group block">
                  <div className="aspect-[16/10] bg-muted/40 border-b border-border overflow-hidden">
                    <img
                      src={work.image}
                      alt={`${work.name} project preview`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-[0.6875rem] uppercase tracking-wide">
                        {work.platform}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{work.category}</span>
                      <span className="text-xs text-muted-foreground">· {work.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-primary transition-colors">{work.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{work.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
