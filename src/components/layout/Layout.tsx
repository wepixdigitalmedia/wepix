import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnnouncementMarquee } from "./AnnouncementMarquee";
import { MasterclassPopup } from "@/components/shared/MasterclassPopup";

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
  hideAnnouncement?: boolean;
}

export function Layout({ children, hideNav, hideAnnouncement }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideNav && !hideAnnouncement && <AnnouncementMarquee />}
      {!hideNav && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
      <MasterclassPopup />
    </div>
  );
}
