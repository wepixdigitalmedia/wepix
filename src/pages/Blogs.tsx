import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const posts = [
  { title: "Why 90% of D2C Fashion Brands Fail at Meta Ads", tag: "Meta Ads", date: "Mar 5, 2026", readTime: "6 min" },
  { title: "The ₹500/day Ad Budget Strategy That Actually Works", tag: "Strategy", date: "Feb 28, 2026", readTime: "8 min" },
  { title: "AI in Fashion Marketing: Hype vs. Reality", tag: "AI", date: "Feb 20, 2026", readTime: "5 min" },
  { title: "How We Scaled Taasza from ₹0 to ₹5L/Month", tag: "Case Study", date: "Feb 14, 2026", readTime: "10 min" },
  { title: "Stop Boosting Posts. Here's What to Do Instead.", tag: "Meta Ads", date: "Feb 8, 2026", readTime: "4 min" },
  { title: "Building a Content Calendar That Doesn't Suck", tag: "Content", date: "Jan 30, 2026", readTime: "7 min" },
  { title: "The Ugly Truth About Marketing Agency Pricing", tag: "Industry", date: "Jan 22, 2026", readTime: "6 min" },
  { title: "Shopify vs WooCommerce for Indian Fashion Brands", tag: "E-commerce", date: "Jan 15, 2026", readTime: "9 min" }, 
  { title: "Our Exact Creative Testing Framework (Steal It)", tag: "Strategy", date: "Jan 8, 2026", readTime: "8 min" },
];

export default function Blogs() {
  return (
    <Layout>
      <section className="py-10 sm:py-12 md:py-20 lg:py-28">
        <div className="container">
          <SectionHeading
            tag="Blog"
            title="From trial and error to what actually works"
            description="No fluff. No noise. Just clear, actionable insights."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow cursor-pointer group">
                  <ImagePlaceholder label="Blog cover" aspectRatio="video" className="rounded-t-xl rounded-b-none border-0 border-b" />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{post.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold group-hover:text-primary/80 transition-colors leading-snug">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{post.date}</p>
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
