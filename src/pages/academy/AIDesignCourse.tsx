import { Palette } from "lucide-react";
import { AICourseDetailTemplate, type AICourseDetailData } from "@/components/academy/AICourseDetailTemplate";

const courseData: AICourseDetailData = {
  id: "ai-design",
  slug: "ai-design",
  title: "AI + Design Course",
  tagline: "Combine AI image generation with foundational design skills to craft stunning visual brand communication.",
  objective: "Train students to combine AI-powered tools with creative design skills to produce professional visual content and brand communication materials.",
  overview:
    "Master the blend of human creativity and generative AI. Develop professional graphic design, typography, brand identities, and commercial ad creatives with AI-assisted design pipelines.",
  skillsCovered: [
    "AI-powered image generation",
    "Graphic design fundamentals",
    "Visual communication and typography",
    "Branding and visual identity",
    "Social media creatives and advertisements",
    "AI-assisted design workflows",
    "Creative development and design thinking",
  ],
  careerRoles: [
    "Graphic Designer",
    "Creative Designer",
    "Brand Design Associate",
    "AI Visual Content Creator",
    "Social Media Designer",
  ],
  duration: "8–10 Weeks (Studio Track)",
  format: "Live Online + Design Portfolio",
  level: "Beginner to Intermediate",
  heroPlaceholderLabel: "AI + Design Course Visual Preview",
  heroImageLight: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Design.webp",
  heroImageDark: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Design%20DK.webp",
  icon: Palette,
};

export default function AIDesignCourse() {
  return <AICourseDetailTemplate course={courseData} />;
}

