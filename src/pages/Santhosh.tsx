import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Santhosh = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <SectionHeading
            tag="Founder Story"
            title="R Santhosh"
            description="The finance brain making sure every crazy idea actually adds up — for WePix and for the brands we work with."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Santhosh founder story"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>
            <div className="space-y-4 text-sm md:text-[0.9375rem] text-muted-foreground leading-relaxed">
              <p>
                Santhosh is the one making sure the math always maths. While the rest of the crew obsesses over creatives and funnels, he obsesses
                over P&amp;Ls, cash flow, unit economics, and making sure growth doesn&apos;t quietly kill the business.
              </p>
              <p>
                He&apos;s the reason WePix frameworks are built around profitability first — not just vanity metrics, not just &quot;spend more
                and hope CPMs stay friendly.&quot;
              </p>
              <p>
                When he&apos;s not tearing through spreadsheets, you&apos;ll usually find him stress-testing new pricing models or figuring out how
                to turn wild ideas into something a CFO would actually sign off on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Santhosh;

