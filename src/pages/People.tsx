import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Founders",
    members: [
      { name: "Abdul Navas", role: "Co-Founder & CEO", bio: "Built WePix from the ground up with a vision to fix how brands approach digital growth." },
      { name: "Santhosh", role: "Co-Founder & COO", bio: "Runs operations, delivery, and everything that keeps the engine moving." },
    ],
  },
  {
    name: "Leadership",
    members: [
      { name: "Vignesh", role: "Head of Content", bio: "Leads content strategy across all brand verticals." },
      { name: "Meera Nair", role: "Creative Director", bio: "Oversees all visual direction and brand design systems." },
    ],
  },
  {
    name: "Marketing",
    members: [
      { name: "Karthik R.", role: "Performance Marketing Lead", bio: "Manages ad budgets and campaign performance across Meta and Google." },
      { name: "Farhan Ahmed", role: "Meta Ads Specialist", bio: "Deep expertise in Meta advertising platforms and creative testing." },
      { name: "Rohan Das", role: "SEO & Analytics Lead", bio: "Drives organic growth and data-driven decision making." },
      { name: "Sneha Reddy", role: "Community Manager", bio: "Builds and nurtures brand communities across platforms." },
    ],
  },
  {
    name: "Design & Video",
    members: [
      { name: "Ananya Iyer", role: "Graphic Designer", bio: "Creates visual assets for campaigns, brands, and social content." },
      { name: "Rahul Menon", role: "Video Production Head", bio: "Leads video content production from concept to delivery." },
    ],
  },
  {
    name: "Development",
    members: [
      { name: "Vikram S.", role: "Full-Stack Developer", bio: "Builds and maintains web platforms, Shopify stores, and internal tools." },
    ],
  },
  {
    name: "Strategy & Partnerships",
    members: [
      { name: "Arjun Patel", role: "AI & Automation Lead", bio: "Develops AI workflows and automation systems for clients and internal use." },
      { name: "Divya Krishnan", role: "Fashion Strategy Lead", bio: "Specialises in growth strategy for D2C fashion brands." },
      { name: "Lakshmi V.", role: "Client Success Manager", bio: "Ensures client satisfaction and long-term relationship building." },
      { name: "Tanya Gupta", role: "Brand Partnerships", bio: "Manages strategic partnerships and brand collaborations." },
    ],
  },
];

export default function People() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="The Team"
            title="The people behind WePix"
            description="Marketers, designers, developers, and strategists working together to build digital growth systems for brands."
          />
          <div className="border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-[21/9] rounded-xl mb-16 max-w-5xl mx-auto overflow-hidden">
            <img
              src="/team-photo-logo.png"
              alt="WePix Digital Media team photo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {departments.map((dept, di) => (
            <div key={dept.name} className="mb-16 last:mb-0">
              <h2 className="font-display text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6 max-w-6xl mx-auto">{dept.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {dept.members.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="text-center"
                  >
                    {member.name === "Abdul Navas" ? (
                      <div className="border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-square rounded-xl mb-3 overflow-hidden">
                        <img
                          src="/people-abdul-navas.png"
                          alt="Abdul Navas"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : member.name === "Santhosh" ? (
                      <div className="border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-square rounded-xl mb-3 overflow-hidden">
                        <img
                          src="/people-santhosh.png"
                          alt="Santhosh"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : member.name === "Vignesh" ? (
                      <div className="border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-square rounded-xl mb-3 overflow-hidden">
                        <img
                          src="/people-priya-sharma.png"
                          alt="Vignesh"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder label={member.name} aspectRatio="square" className="rounded-xl mb-3" />
                    )}
                    <h3 className="font-display text-sm font-semibold leading-tight">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
