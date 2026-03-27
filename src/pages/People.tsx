import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Founders",
    members: [
      { name: "Abdul Navas", role: "Founder", bio: "Built Wepix from the ground up. Every decision and direction traces back to his vision." },
      { name: "Santhosh", role: "Co-Founder", bio: "Keeps operations and delivery running smoothly. If it needs to happen, he makes sure it does." },
    ],
  },
  {
    name: "Leadership",
    members: [
      { name: "Vignesh", role: "Chief Operating Officer", bio: "Bridges strategy and execution. Every brand vertical runs better because of him." },
    ],
  },
  {
    name: "HR Department",
    members: [
      { name: "Dhesini", role: "HR", bio: "Right people, right place, right culture. She makes it happen." },
    ],
  },
  {
    name: "Marketing",
    members: [
      { name: "Rineesha", role: "Performance Marketer", bio: "She runs Meta campaigns that perform and makes sure every brand shows up the right way." },
      { name: "Madhumitha", role: "Marketer & Content Writer", bio: "She keeps every rupee working hard on Meta and makes sure the brand always looks strong." },
      { name: "Sasi Prabha", role: "Performance Marketer", bio: "She writes content that gets read, runs campaigns that get results, and keeps the brand sharp." },
      { name: "Krishnabrindha", role: "Performance Marketer", bio: "She runs targeted campaigns and builds brand strategies that keep you relevant and growing." },
    ],
  },
  {
    name: "Design & Video",
    members: [
      { name: "Hari Krishna", role: "Sr. Designer & Video Editor", bio: "Sets the quality bar for the team. Complex designs, polished edits, always on point." },
      { name: "Kadhir Vel", role: "Jr. Designer & Video Editor", bio: "Fresh ideas, clean execution. He handles designs and edits and keeps projects moving." },
      { name: "Vashanth", role: "Jr. Designer & Video Editor", bio: "Handles both design and video with equal focus and always delivers what the brief needs." },
    ],
  },
  {
    name: "Development",
    members: [
      { name: "Gowthaman", role: "Shopify Developer", bio: "He builds Shopify stores that are fast, functional, and ready to sell from day one." },
      { name: "Jananika", role: "Jr.Shopify Developer", bio: "From store setups to platform fixes, she gets the job done and keeps everything running smooth." },
    ],
  },
  // {
  //   name: "Strategy & Partnerships",
  //   members: [
  //     { name: "Arjun Patel", role: "AI & Automation Lead", bio: "Develops AI workflows and automation systems for clients and internal use." },
  //     { name: "Divya Krishnan", role: "Fashion Strategy Lead", bio: "Specialises in growth strategy for D2C fashion brands." },
  //     { name: "Lakshmi V.", role: "Client Success Manager", bio: "Ensures client satisfaction and long-term relationship building." },
  //     { name: "Tanya Gupta", role: "Brand Partnerships", bio: "Manages strategic partnerships and brand collaborations." },
  //   ],
  // },
];

const memberImageSrc: Record<string, string> = {
  "Abdul Navas": "/people-abdul-navas.png",
  "Santhosh": "/people-santhosh.png",
  "Vignesh": "/people-vignesh.png",
  "Dhesini": "/dhesini.png",
  "Rineesha": "/people-karthik-r.png",
  "Madhumitha": "/people-rohan-das.png",
  "Sasi Prabha": "/people-farhan-ahmed.png",
  "Krishnabrindha": "/people-sneha-reddy.png",
  "Kadhir Vel": "/people-ananya-iyer.png",
  "Vashanth": "/people-rahul-menon.png",
  "Hari Krishna": "/harikrishna.png",
  "Gowthaman": "/gowthaman.png",
  "Jananika": "/people-vikram-s.png",
};

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
                    {memberImageSrc[member.name] ? (
                      <div className="border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-square rounded-xl mb-3 overflow-hidden">
                        <img
                          src={memberImageSrc[member.name]}
                          alt={member.name}
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
