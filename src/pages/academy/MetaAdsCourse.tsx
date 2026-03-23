import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function MetaAdsCourse() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide uppercase text-muted-foreground">
              WePix Academy
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              Meta Ads Mastery Course
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are building this course right now. New modules, templates, and live sessions are being finalized.
            </p>
            <div className="mt-8">
              <span className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium">
                Coming Soon
              </span>
            </div>
            <div className="mt-8 flex justify-center">
              <BookingFormDialog triggerLabel="Join Waitlist" showArrow triggerClassName="px-8 text-base" />
            </div>
          </div>
        </section>
        <div className="relative">
          <WhatsAppButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}
