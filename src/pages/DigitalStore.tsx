import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { TirupurTooltip } from "@/components/shared/TirupurTooltip";
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
    description: "The complete playbook on running profitable Meta Ads — from pixel setup to scaling. 12+ hours of video, templates, and live campaign walkthroughs.",
    features: ["12+ hours of video", "Ad templates", "Lifetime access", "Community access"],
    badge: "Bestseller",
    link: "https://razorpay.me/@wepix/4999",
  },
  {
    title: "D2C Fashion Brand Launch Kit",
    type: "Digital Product",
    price: "₹7,999",
    originalPrice: "₹14,999",
    description: (<>Everything you need to launch a fashion brand online — Shopify checklist, content calendar, ad strategy framework, and supplier contacts in <TirupurTooltip />.</>),
    features: ["Launch checklist", "Content templates", "Ad frameworks", "Supplier database"],
    badge: "New",
    link: "https://razorpay.me/@wepix/7999",
  },
  {
    title: "AI Marketing Toolkit",
    type: "Digital Product",
    price: "₹2,999",
    originalPrice: "₹5,999",
    description: "50+ AI prompts for marketing, content frameworks, automation workflows, and tool recommendations that'll save you 10+ hours per week.",
    features: ["50+ AI prompts", "Automation workflows", "Tool guides", "Monthly updates"],
    badge: null,
    link: "https://razorpay.me/@wepix/2999",
  },
  {
    title: "Advanced Performance Marketing",
    type: "Course",
    price: "₹14,999",
    originalPrice: "₹24,999",
    description: "For marketers who've outgrown beginner courses. Advanced bid strategies, attribution modeling, creative testing frameworks, and scaling playbooks.",
    features: ["20+ hours content", "1:1 audit session", "Advanced strategies", "Certificate"],
    badge: "Premium",
    link: "https://razorpay.me/@wepix/14999",
  },
  {
    title: "Social Media Content Calendar",
    type: "Template",
    price: "₹999",
    originalPrice: "₹1,999",
    description: "90-day plug-and-play content calendar with post ideas, captions, hashtag sets, and scheduling templates for fashion and lifestyle brands.",
    features: ["90-day plan", "Caption templates", "Hashtag research", "Notion template"],
    badge: null,
    link: "https://razorpay.me/@wepix/999",
  },
  {
    title: "Shopify Store Setup Masterclass",
    type: "Course",
    price: "₹4,999",
    originalPrice: "₹8,999",
    description: "Build a conversion-optimized Shopify store from scratch. Theme customization, payment setup, SEO basics, and our exact store audit checklist.",
    features: ["8+ hours video", "Store checklist", "Theme guide", "SEO templates"],
    badge: null,
    link: "https://razorpay.me/@wepix/4999",
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
            description="Everything we've learned from managing ₹2Cr+ in ad spend and building 50+ brands — packaged into courses, templates, and toolkits you can use right now."
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
                    {product.title === "Meta Ads Mastery Course" ? (
                      <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                        <img
                          src="/meta-ads-mastery.png"
                          alt="Meta Ads Mastery Course preview"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : product.title === "D2C Fashion Brand Launch Kit" ? (
                      <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                        <img
                          src="/d2c-fashion-launch-kit.png"
                          alt="D2C Fashion Brand Launch Kit preview"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : product.title === "AI Marketing Toolkit" ? (
                      <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                        <img
                          src="/ai-marketing-toolkit.png"
                          alt="AI Marketing Toolkit preview"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : product.title === "Advanced Performance Marketing" ? (
                      <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                        <img
                          src="/advanced-performance-marketing.png"
                          alt="Advanced Performance Marketing preview"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : product.title === "Social Media Content Calendar" ? (
                      <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                        <img
                          src="/social-media-content-calendar.png"
                          alt="Social Media Content Calendar preview"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : product.title === "Shopify Store Setup Masterclass" ? (
                      <div className="aspect-video rounded-t-xl rounded-b-none border-0 border-b overflow-hidden bg-muted/40">
                        <img
                          src="/shopify-store-setup-masterclass.png"
                          alt="Shopify Store Setup Masterclass preview"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder label={product.title} aspectRatio="video" className="rounded-t-xl rounded-b-none border-0 border-b" />
                    )}
                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{product.type}</Badge>
                      {product.badge && <Badge className="text-xs bg-primary text-primary-foreground">{product.badge}</Badge>}
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
                          <ShoppingCart size={14} /> Buy Now
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
