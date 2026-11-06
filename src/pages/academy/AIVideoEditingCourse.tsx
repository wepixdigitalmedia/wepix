import { Film } from "lucide-react";
import { AICourseDetailTemplate, type AICourseDetailData } from "@/components/academy/AICourseDetailTemplate";

const courseData: AICourseDetailData = {
  id: "ai-video-editing",
  slug: "ai-video-editing",
  title: "AI + Video Editing Course",
  tagline: "Master short-form storytelling, motion graphics, and AI video production to create viral content.",
  objective: "Train students to use AI-powered tools and professional editing techniques to create engaging video content for digital platforms and brands.",
  overview:
    "Learn professional video editing paired with cutting-edge AI video generation. Create viral short-form reels, brand commercials, motion graphics, and dynamic audio-visual narratives.",
  skillsCovered: [
    "Video editing fundamentals",
    "AI-assisted video generation",
    "Short-form content and reels creation",
    "Video storytelling and sequencing",
    "Motion graphics fundamentals",
    "Audio and visual editing",
    "AI-powered video production workflows",
  ],
  careerRoles: [
    "Video Editor",
    "Reels Editor",
    "Video Content Creator",
    "Motion Graphics Associate",
    "AI Video Production Associate",
  ],
  duration: "8–10 Weeks (Creator Track)",
  format: "Live Online + Real Brand Projects",
  level: "Beginner to Advanced",
  heroPlaceholderLabel: "AI + Video Editing Course Visual Preview",
  heroImageLight: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Video.webp",
  heroImageDark: "https://ik.imagekit.io/wpxassets/wepix%20academy/Ai%20Video%20DK.webp",
  icon: Film,
};

export default function AIVideoEditingCourse() {
  return <AICourseDetailTemplate course={courseData} />;
}

