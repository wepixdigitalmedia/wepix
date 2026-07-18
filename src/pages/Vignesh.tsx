import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Vignesh = () => {
  return (
    <Layout>
      <section className="py-10 sm:py-12 md:py-20 lg:py-24">
        <div className="container max-w-5xl">
          <SectionHeading
            tag="Founder Story"
            title="B Vignesh"
            description="The B2B growth nerd who treats lead-gen funnels like engineering problems - not wishful thinking."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vignesh founder story"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>
            <div className="space-y-4 text-sm md:text-[0.9375rem] text-muted-foreground leading-relaxed">
              <p>
                Vignesh doesn&apos;t think in &quot;campaigns&quot; - he thinks in systems. Pipelines, CRM logic, follow-up rules, scoring,
                workflows, and all the unsexy pieces that decide whether a lead machine prints money or just more noise.
              </p>
              <p>
                Before WePix Business, he spent years in the trenches building, breaking, and rebuilding outbound, inbound, and hybrid funnels for
                sales teams that needed more than &quot;just more leads.&quot;
              </p>
              <p>
                His obsession: making sure every sales team WePix works with has more qualified conversations than they know what to do with - and
                that the founder&apos;s calendar isn&apos;t the bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vignesh;

