import { Megaphone } from "lucide-react";
import { AICourseDetailTemplate, type AICourseDetailData } from "@/components/academy/AICourseDetailTemplate";

const courseData: AICourseDetailData = {
  id: "ai-marketing",
  slug: "ai-marketing",
  title: "AI + Marketing Course",
  tagline: "Master prompt engineering, Meta & Google Ads, and marketing automation to scale campaigns.",
  objective: "Train students to use AI tools and modern digital marketing techniques to plan, create, execute and analyse marketing activities.",
  overview:
    "Learn to combine generative AI tools with digital marketing fundamentals. Master campaign planning, SEO, copywriting, and ad management using real-world budgets and workflows.",
  skillsCovered: [
    "AI tools and prompt engineering for marketing",
    "Content creation and copywriting",
    "Social media strategy and management",
    "Meta Ads and Google Ads fundamentals",
    "Search Engine Optimisation (SEO)",
    "Marketing automation and analytics",
    "Campaign planning and performance analysis",
  ],
  careerRoles: [
    "Digital Marketing Executive",
    "Performance Marketing Associate",
    "SEO Executive",
    "Social Media Executive",
    "Marketing Automation Associate",
  ],
  duration: "10–12 Weeks (Cohort)",
  format: "Live Online + Real Campaigns",
  level: "Beginner to Advanced",
  heroPlaceholderLabel: "AI + Marketing Course Visual Preview",
  heroImageLight: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Marketing.webp",
  heroImageDark: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Marketing%20DK.webp",
  icon: Megaphone,
};

export default function AIMarketingCourse() {
  return <AICourseDetailTemplate course={courseData} />;
}

