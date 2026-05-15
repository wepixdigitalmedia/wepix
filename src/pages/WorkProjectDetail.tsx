import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { works, toWorkSlug } from "./MyWorks";

const defaultScope = [
  "Theme & sections",
  "Collections & navigation",
  "Checkout & payments",
  "Performance & SEO",
];

export default function WorkProjectDetail() {
  const { slug = "" } = useParams();
  const currentIndex = works.findIndex((work) => toWorkSlug(work.name) === slug);

  if (currentIndex === -1) {
    return <Navigate to="/my-works" replace />;
  }

  const work = works[currentIndex];
  const clientName = work.name.split(" by ")[0].split(" | ")[0];

  const prevIndex = (currentIndex - 1 + works.length) % works.length;
  const nextIndex = (currentIndex + 1) % works.length;
  const prevWork = works[prevIndex];
  const nextWork = works[nextIndex];

  return (
    <Layout>
      <section className="py-8 sm:py-12 md:py-20 lg:py-28">
        <div className="container max-w-5xl">
          <Link to="/my-works" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            All Work
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{work.platform}</Badge>
            <span className="text-sm text-muted-foreground">{work.category}</span>
            <span className="text-sm text-muted-foreground">· {work.year}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold">{work.name}</h1>
          <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">{work.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button>Visit live website</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline">Start a similar project</Button>
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-border overflow-hidden bg-muted/30">
            <img src={work.image} alt={`${work.name} homepage preview`} className="w-full h-auto object-cover" />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-semibold">About the project</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{work.description}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We partnered with {clientName} to design and build a {work.category.toLowerCase()} experience on {work.platform}. From discovery through launch, we focused on performance, conversion, and a brand-true visual language that scales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-semibold">Scope of work</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {defaultScope.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-border/60">
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-semibold">Results</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Platform</p>
                  <p className="mt-1 font-medium">{work.platform} 2.0</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Focus</p>
                  <p className="mt-1 font-medium">Merch & checkout</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Experience</p>
                  <p className="mt-1 font-medium">Mobile-first</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-6">
            <Link to={`/work/${toWorkSlug(prevWork.name)}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Previous project: <span className="font-medium text-foreground">{prevWork.name}</span>
            </Link>
            <Link to={`/work/${toWorkSlug(nextWork.name)}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Next project: <span className="font-medium text-foreground">{nextWork.name}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
