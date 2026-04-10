import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TamilTooltip } from "@/components/shared/TamilTooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    title: "Meta Ads Mastery Course",
    type: "Course",
    price: "₹4,999",
    originalPrice: "₹9,999",
    description:
      "The ultimate guide to running profitable Meta Ads, from setting up the pixel to scaling. Over 12 hours of video content, templates, and live campaign breakdowns.",
    features: ["12+ hours of video", "Ad templates", "Lifetime access", "Community support"],
    badge: "Bestseller",
    link: "#",
    preview: { light: "/meta-ads-mastery-light.png", dark: "/meta-ads-mastery-dark.png" },
  },
  {
    title: "D2C Fashion Brand Launch Kit",
    type: "Digital Product",
    price: "₹7,999",
    originalPrice: "₹14,999",
    description: (
      <>
        Everything you need to launch your fashion brand online - Shopify checklist, content calendar, ad strategy
        framework, and supplier contacts in <TamilTooltip />.
      </>
    ),
    features: ["Launch checklist", "Content templates", "Ad frameworks", "Supplier database"],
    badge: "New",
    link: "#",
    preview: { light: "/d2c-fashion-launch-kit-light.png", dark: "/d2c-fashion-launch-kit-dark.png" },
  },
  {
    title: "AI Marketing Toolkit",
    type: "Digital Product",
    price: "₹2,999",
    originalPrice: "₹5,999",
    description:
      "50+ AI prompts for marketing, content frameworks, automation workflows, and tool recommendations that'll save you 10+ hours per week.",
    features: ["50+ AI prompts", "Automation workflows", "Tool guides", "Monthly updates"],
    badge: null,
    link: "#",
    preview: { light: "/ai-marketing-toolkit-light.png", dark: "/ai-marketing-toolkit-dark.png" },
  },
  {
    title: "Advanced Performance Marketing",
    type: "Course",
    price: "₹14,999",
    originalPrice: "₹24,999",
    description:
      "For marketers who've outgrown beginner courses. Advanced bid strategies, attribution modeling, creative testing frameworks, and scaling playbooks.",
    features: ["20+ hours content", "1:1 audit session", "Advanced strategies", "Certificate"],
    badge: "Premium",
    link: "#",
    preview: { light: "/advanced-performance-marketing-light.png", dark: "/advanced-performance-marketing-dark.png" },
  },
  {
    title: "Social Media Content Calendar",
    type: "Template",
    price: "₹999",
    originalPrice: "₹1,999",
    description:
      "90-day plug-and-play content calendar with post ideas, captions, hashtag sets, and scheduling templates for fashion and lifestyle brands.",
    features: ["90-day plan", "Caption templates", "Hashtag research", "Notion template"],
    badge: null,
    link: "#",
    preview: { light: "/social-media-content-calendar-light.png", dark: "/social-media-content-calendar-dark.png" },
  },
  {
    title: "Shopify Store Setup Masterclass",
    type: "Course",
    price: "₹4,999",
    originalPrice: "₹8,999",
    description:
      "Build a conversion-optimized Shopify store from scratch. Theme customization, payment setup, SEO basics, and our exact store audit checklist.",
    features: ["8+ hours video", "Store checklist", "Theme guide", "SEO templates"],
    badge: null,
    link: "#",
    preview: { light: "/shopify-store-setup-masterclass-light.png", dark: "/shopify-store-setup-masterclass-dark.png" },
  },
];

export default function DigitalStore() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Digital Store"
            title="Courses & digital products"
            description="Everything we've learned from managing ₹2Cr+ in ad spend and building 50+ brands, packaged into courses, templates, and toolkits you can use right now."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card className="h-full border-border/50 flex flex-col">
                  <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                    <img
                      src={product.preview.light}
                      alt={`${product.title} preview`}
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <img
                      src={product.preview.dark}
                      alt={`${product.title} preview`}
                      className="hidden w-full h-full object-cover dark:block"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.type}
                      </Badge>
                      {product.badge && (
                        <Badge className="text-xs bg-primary text-primary-foreground">{product.badge}</Badge>
                      )}
                    </div>
                    <h3 className="font-display text-base font-semibold leading-snug">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{product.description}</p>
                    <ul className="mt-3 space-y-1">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Star size={10} className="text-foreground shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="font-display text-lg font-bold">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice}</span>
                      </div>
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-1.5 text-xs">
                          <ShoppingCart size={14} /> Coming Soon
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
