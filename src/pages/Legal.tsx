import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Building2 } from "lucide-react";

const offices = [
  { city: "Tirupur", address: "Sheriff Colony, Tirupur, Tamil Nadu, India" },
  { city: "Bangalore", address: "HSR Layout, Bangalore, Karnataka, India" },
  { city: "Chennai", address: "Casagrand Amberly, Navalur, Chennai, India" },
  { city: "Dubai", address: "Al Safa St, Downtown Dubai, UAE" },
];

export default function Legal() {
  return (
    <Layout>
      <section className="container py-10 md:py-16 lg:py-20">
        <SectionHeading tag="Legal" title="Legal Contact" description="Company registration details and how to reach us for legal matters." />

        <div className="max-w-3xl mx-auto space-y-12">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Building2 size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">Company Registration</h3>
                  <p className="text-sm text-muted-foreground">WePix Digital Media LLP</p>
                  <p className="text-sm text-muted-foreground">Registered in India under the Limited Liability Partnership Act, 2008</p>
                  <p className="text-sm text-muted-foreground mt-1">Part of Perennial Group (A Consortium)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Mail size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">Contact Email</h3>
                  <a href="mailto:hello@wepix.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    hello@wepix.in
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">For all legal, partnership, and general inquiries</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Office Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((loc) => (
                <Card key={loc.city}>
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center mt-0.5">
                      <MapPin size={14} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{loc.city}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{loc.address}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
