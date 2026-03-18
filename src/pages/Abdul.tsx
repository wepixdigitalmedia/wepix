import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Abdul = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <SectionHeading
            tag="Founder Story"
            title="N Abdul Navas"
            description="From Tiruppur kid breathing cotton and hustle to building WePix — the fashion-first growth partner for brands that refuse to be mid."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Abdul founder story"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>
            <div className="space-y-4 text-sm md:text-[0.9375rem] text-muted-foreground leading-relaxed">
              <p>
                Abdul grew up in Tiruppur, surrounded by factories, fabric rolls, and people trying to turn good products into real brands.
                Watching great garments die because of mid marketing genuinely annoyed him — so he decided to build the crew he wished those brands had.
              </p>
              <p>
                Before WePix, he spent years testing offers, funnels, and media buying strategies with his own money, figuring out what actually
                moves numbers for D2C fashion brands. That experimentation became the backbone of the MCS framework WePix uses today.
              </p>
              <p>
                Now his day job is simple: spot what{" "}
                <span className="font-semibold text-foreground">should</span> be working for a brand, then rebuild their marketing so the numbers
                finally match the potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Abdul;

