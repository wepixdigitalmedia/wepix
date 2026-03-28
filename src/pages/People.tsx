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
      { name: "Vignesh", role: "Chief Operating Officer", bio: "Bridges strategy and execution. Every brand vertical runs better because of him." },
      { name: "Dhesini", role: "HR", bio: "Right people, right place, right culture. She makes it happen." },
      { name: "Rineesha", role: "Performance Marketer", bio: "She runs Meta campaigns that perform and makes sure every brand shows up the right way." },
      { name: "Madhumitha", role: "Performance Marketer", bio: "She handles the ads that drive sales and keeps the brand vibe strong across platforms." },
      { name: "Sasi Prabha", role: "Marketer & Content Writer", bio: "She writes content that gets read, runs campaigns that get results, and keeps the brand sharp." },
      { name: "Krishnabrindha", role: "Jr.Performance Marketer", bio: "She runs targeted campaigns and builds brand strategies that keep you relevant and growing." },
      { name: "Hari Krishna", role: "Sr. Designer & Video Editor", bio: "Sets the quality bar for the team. Complex designs, polished edits, always on point." },
      { name: "Kadhirvel", role: "Jr. Designer & Video Editor", bio: "Fresh ideas, clean execution. He handles designs and edits and keeps projects moving." },
      { name: "Vashanth Ram", role: "Jr. Designer & Video Editor", bio: "Handles both design and video with equal focus and always delivers what the brief needs." },
      { name: "Gowthaman", role: "Shopify Developer", bio: "He builds Shopify stores that are fast, functional, and ready to sell from day one." },
      { name: "Jananika", role: "Jr.Shopify Developer", bio: "From store setups to platform fixes, she gets the job done and keeps everything running smooth." },
    ],
  },
  // {
  //   name: "Leadership",
  //   members: [
      
  //   ],
  // },
  // {
  //   name: "HR Department",
  //   members: [
      
  //   ],
  // },
  // {
  //   name: "Marketing",
  //   members: [
      
  //   ],
  // },
  // {
  //   name: "Design & Video",
  //   members: [
      
  //   ],
  // },
  // {
  //   name: "Development",
  //   members: [
      
  //   ],
  // },
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

type MemberImageSrc = string | { light: string; dark: string };

const memberImageSrc: Record<string, MemberImageSrc> = {
  "Abdul Navas": {
    light: "/team/abdul.jpg",
    dark: "/team/abdul-dark.png",
  },
  "Santhosh": {
    light: "/team/santhosh.jpg",
    dark: "/team/santhosh-dark.png",
  },
  "Vignesh": {
    light: "/team/vignesh.jpg",
    dark: "/team/vignesh-dark.png",
  },
  "Dhesini": {
    light: "/team/dhesini.jpg",
    dark: "/team/dhesini-dark.png",
  },
  "Rineesha": {
    light: "/team/rineesha.jpg",
    dark: "/team/rineesha-dark.png",
  },
  "Madhumitha": {
    light: "/team/madhumitha.jpg",
    dark: "/team/madhumitha-dark.png",
  },
  "Sasi Prabha": {
    light: "/team/sasi.jpg",
    dark: "/team/sasi-dark.png",
  },
  "Krishnabrindha": {
    light: "/team/brindha.jpg",
    dark: "/team/brindha-dark.png",
  },
  "Hari Krishna": {
    light: "/team/harikrishna.jpg",
    dark: "/team/harikrishna-dark.png",
  },
  "Kadhirvel": {
    light: "/team/kadirvel.jpg",
    dark: "/team/kadirvel-dark.png",
  },
  "Vashanth Ram": {
    light: "/team/vashanth.jpg",
    dark: "/team/vashanth-dark.png",
  },
  "Gowthaman": {
    light: "/team/gowthaman.jpg",
    dark: "/team/gowthaman-dark.png",
  },
  "Jananika": {
    light: "/team/janani.jpg",
    dark: "/team/janani-dark.png",
  },
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
          <ImagePlaceholder
            src="/team/group-team.jpg"
            alt="WePix Digital Media team photo"
            aspectRatio="video"
            grayscaleUntilHover
            className="mb-16 max-w-5xl mx-auto"
          />

          {departments.map((dept, di) => (
            <div key={dept.name} className="mb-16 last:mb-0">
              <h2 className="font-display text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6 max-w-6xl mx-auto">{dept.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {dept.members.map((member, i) => {
                  const portrait = memberImageSrc[member.name];
                  return (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      className="text-center"
                    >
                      {portrait ? (
                        <div className="border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 aspect-square rounded-xl mb-3 overflow-hidden">
                          {typeof portrait === "string" ? (
                            <img
                              src={portrait}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <>
                              <img
                                src={portrait.light}
                                alt={member.name}
                                className="w-full h-full object-cover dark:hidden"
                                loading="lazy"
                              />
                              <img
                                src={portrait.dark}
                                alt={member.name}
                                className="hidden w-full h-full object-cover dark:block"
                                loading="lazy"
                              />
                            </>
                          )}
                        </div>
                      ) : (
                        <ImagePlaceholder label={member.name} aspectRatio="square" className="rounded-xl mb-3" />
                      )}
                      <h3 className="font-display text-sm font-semibold leading-tight">{member.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{member.bio}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
