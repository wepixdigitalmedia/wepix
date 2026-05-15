import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { BookOpen, Clock, Calendar, Shield, Lock, MessageSquare, TrendingUp, Users, AlertTriangle, Handshake } from "lucide-react";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-right max-w-[60%]">{value}</span>
    </div>
  );
}

function ContentCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="border-border/50 hover:border-border transition-colors">
        <CardContent className="p-5 flex gap-4 items-start">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
            <Icon size={18} className="text-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-base font-semibold leading-tight mb-3">{title}</h3>
            <div className="text-sm text-muted-foreground space-y-3">{children}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Handbook() {
  return (
    <Layout>
      <section className="py-10 sm:py-12 md:py-20 lg:py-28">
        <div className="container max-w-4xl">
          <SectionHeading
            tag="Handbook"
            title="WePix Employee Handbook"
            description="The non-boring version you will actually read. This covers how we work, how we communicate, what we expect, and what you can expect from us."
            align="left"
          />

          <Tabs defaultValue="who-we-are" className="mt-8">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 rounded-xl mb-8">
              <TabsTrigger value="who-we-are" className="text-xs sm:text-sm">Who We Are</TabsTrigger>
              <TabsTrigger value="first-day" className="text-xs sm:text-sm">Your First Day</TabsTrigger>
              <TabsTrigger value="communication" className="text-xs sm:text-sm">Communication</TabsTrigger>
              <TabsTrigger value="feedback" className="text-xs sm:text-sm">Feedback</TabsTrigger>
              <TabsTrigger value="attendance" className="text-xs sm:text-sm">Attendance & Leave</TabsTrigger>
              <TabsTrigger value="conduct" className="text-xs sm:text-sm">Conduct</TabsTrigger>
              <TabsTrigger value="growth" className="text-xs sm:text-sm">Growth</TabsTrigger>
              <TabsTrigger value="the-deal" className="text-xs sm:text-sm">The Deal</TabsTrigger>
            </TabsList>

            {/* CHAPTER 01 — WHO WE ARE */}
            <TabsContent value="who-we-are" className="space-y-4">
              <ContentCard icon={BookOpen} title="WePix Is Not Just Another Agency">
                <p>Founded in 2022 by Abdul Navas (CEO) and Santhosh (CFO), WePix was created with one clear belief: fashion e-commerce brands in India deserve better digital marketing. Not generic strategies. Not templated solutions. And certainly not the same-old copy-paste strategy that fails to stand out.</p>
                <p>So, we built something different. A team that truly understands fashion, understands e-commerce, and genuinely cares about whether our clients’ campaigns drive results or just look good on paper.</p>
              </ContentCard>

              <ContentCard icon={Users} title="The Mission">
                <p>We aim to be the first digital partner fashion brands turn to, not because we are the biggest agency, but because we deliver results that matter. Better digital presence. More conversions. Campaigns that actually get things done.</p>
              </ContentCard>

              <ContentCard icon={Shield} title="The Six Things WePix Stands For">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Innovation and Creativity</h4>
                    <p>We don’t recycle outdated strategies. Every client gets a custom approach, tailored just for them. No generic templates with their logo on it.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Collaboration and Teamwork</h4>
                    <p>The best work at WePix doesn’t come from one person working alone. It comes from people talking, sharing ideas, challenging each other, and building on one another’s thinking.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Commitment to Learning</h4>
                    <p>Digital marketing moves at lightning speed. What worked six months ago could be outdated today. Staying curious and informed isn’t optional at WePix. It’s built into the job.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Customer Focus</h4>
                    <p>Our clients aren’t just accounts. They are brands with real goals. Real budgets, sales targets, and pressure. When we treat their challenges as our own, everyone wins.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Fun and Passion</h4>
                    <p>We take our work seriously, but not ourselves. Enjoy what you do. If the passion’s gone, speak up. Don’t just quietly stop caring.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Integrity and Transparency</h4>
                    <p>We’re honest with our clients and each other. If something goes wrong, we own up and fix it. Honesty is easier and more effective than pretending everything is fine.</p>
                  </div>
                </div>
              </ContentCard>
            </TabsContent>

            {/* CHAPTER 02 — YOUR FIRST DAY */}
            <TabsContent value="first-day" className="space-y-4">
              <ContentCard icon={Clock} title="Before Day One">
                <p>You should already have your Zoho login, your email credentials, and a basic brief about your role. If you don't, ping HR at hr@wepix.in before you show up. Starting Day 1 without system access is a completely avoidable waste of everyone's morning.</p>
              </ContentCard>

              <ContentCard icon={Calendar} title="The Actual Day One Schedule">
                <InfoRow label="9:30 AM" value="Check in. Find your desk. Don't panic." />
                <InfoRow label="9:30 – 10:30 AM" value="Meet your team lead and get a proper onboarding walkthrough." />
                <InfoRow label="10:30 AM – 12:00 PM" value="System setup: Zoho, email, communication tools." />
                <InfoRow label="Lunch" value="Go with someone. Don't eat alone at your desk on Day 1." />
                <InfoRow label="Afternoon" value="Shadow your team. Watch. Ask questions. Don't go silent." />
                <InfoRow label="Before you leave" value="Check if there's anything you need for tomorrow. Confirm." />
              </ContentCard>

              <ContentCard icon={BookOpen} title="The First Week Goal">
                <p>Your first week is not about impressing everyone. It is about understanding how things work here. Where do decisions get made? How does feedback flow? What is the team's rhythm?</p>
                <p>Ask questions. Take notes. Say hello to people you don't know. And if something feels confusing or unclear, speak up. Staying silent and guessing is how misunderstandings start on Day 3 and explode on Day 30.</p>
              </ContentCard>
            </TabsContent>

            {/* CHAPTER 03 — COMMUNICATION */}
            <TabsContent value="communication" className="space-y-4">
              <ContentCard icon={MessageSquare} title="Communication Tools">
                <p>Bad communication is the root cause of at least 70% of agency problems. Not bad design. Not bad strategy. Bad communication.</p>
                <InfoRow label="Zoho Projects" value="Task management. Where work lives. If it's not in Zoho, it doesn't exist." />
                <InfoRow label="Zoho Cliq / WhatsApp" value="Quick coordination. Updates. Not for approvals or decisions." />
                <InfoRow label="Email" value="Formal communication. Client-facing updates. Anything that needs a paper trail." />
                <InfoRow label="In-Person / Calls" value="Complex discussions, feedback sessions, anything that needs real back-and-forth." />
              </ContentCard>

              <ContentCard icon={AlertTriangle} title="Giving Updates Without Being Asked">
                <p>If you are working on something with a deadline and you hit a blocker — say something. Don't go quiet and hope it sorts itself out.</p>
                <p>The rule is simple: if you are more than 30% behind on something, your team lead needs to know before they have to ask.</p>
              </ContentCard>

              <Card className="border-border/50 bg-muted/30">
                <CardContent className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <h4 className="text-sm font-semibold text-destructive mb-2">Communication That Causes Chaos</h4>
                      <p className="text-xs text-muted-foreground">"I told Hari on WhatsApp to resize the banner." Nobody else knows. Task not in Zoho. Hari thought it was optional. Banner is not ready. Client is waiting.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h4 className="text-sm font-semibold text-primary mb-2">Communication That Works</h4>
                      <p className="text-xs text-muted-foreground">Task created in Zoho. Hari is the owner. Description says what, why, and when. WhatsApp is only used to say "just added a task for you in Zoho, check it." Everyone knows. Work happens.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CHAPTER 04 — FEEDBACK */}
            <TabsContent value="feedback" className="space-y-4">
              <ContentCard icon={MessageSquare} title="How Feedback Works Here">
                <p>Feedback at agencies usually goes one of two ways. Either it is so brutally blunt it feels like a personal attack. Or it is so softened and padded with compliments that the actual issue never gets addressed. Both are useless.</p>
                <p>At WePix, feedback is how the work gets better. It is not an evaluation of your worth as a human being. It is information about the output.</p>
              </ContentCard>

              <ContentCard icon={Users} title="Receiving Feedback">
                <p>When someone gives you feedback on your work, your first job is to listen. Not to explain. Not to defend. Not to immediately tell them why you made that decision. Listen first. Ask one clarifying question if needed. Then go fix it.</p>
                <p>If you genuinely disagree with feedback, that is okay. But you disagree through conversation, not passive-aggressive silence or doing it your way anyway without saying anything.</p>
              </ContentCard>

              <ContentCard icon={Calendar} title="Quarterly Voice of Team">
                <p>Every quarter, we run a Voice of Team segment in our review meetings. This is not a venting session. It is a structured space to flag recurring issues, suggest improvements, and recognize things that are genuinely working well.</p>
                <p>You can also submit feedback anytime at feedback@wepix.in. It is confidential. It goes to HR and management, not to your entire team group chat.</p>
              </ContentCard>

              <ContentCard icon={AlertTriangle} title="Grievance Process">
                <InfoRow label="Step 1" value="Talk directly to your immediate supervisor or team lead." />
                <InfoRow label="Step 2" value="If unresolved, submit a formal written grievance to hr@wepix.in" />
                <InfoRow label="Step 3" value="If still unresolved, escalate to the management board (CEO, Co-founder, CFO)." />
                <InfoRow label="Timeline" value="Acknowledged within 2 working days. Resolved within 7-10 working days." />
                <InfoRow label="Confidentiality" value="Everything is treated with strict confidentiality. No retaliation. Ever." />
              </ContentCard>

              <Card className="border-border/50 bg-muted/30">
                <CardContent className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <h4 className="text-sm font-semibold text-destructive mb-2">Feedback That Doesn't Help</h4>
                      <p className="text-xs text-muted-foreground">"This doesn't look right." "The design is off." "Not what I wanted." — All feeling, no direction. The designer now has to guess what wrong means and what right looks like.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h4 className="text-sm font-semibold text-primary mb-2">Feedback That Actually Helps</h4>
                      <p className="text-xs text-muted-foreground">"The font feels too casual for this brand's tone. Can we try something more structured? Here's a reference." Now there is a direction. Now revision is possible.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CHAPTER 05 — ATTENDANCE & LEAVE */}
            <TabsContent value="attendance" className="space-y-4">
              <ContentCard icon={Clock} title="Work Hours">
                <InfoRow label="Working Days" value="Monday to Saturday" />
                <InfoRow label="Work Hours" value="9:30 AM – 7:00 PM" />
                <InfoRow label="Lunch Break" value="1:15 PM – 2:00 PM" />
                <InfoRow label="Tea Break" value="4:00 PM – 4:15 PM" />
                <InfoRow label="Grace Period" value="Check-in until 9:45 AM is fine. After that = late." />
                <InfoRow label="Late Check-in" value="One per week, no penalty. Second one onwards = 0.5 day deducted." />
                <InfoRow label="Work Hour Shortfall" value="Up to 15 min short = acceptable. More than twice a week = 0.5 casual leave deducted." />
              </ContentCard>

              <ContentCard icon={Calendar} title="Leave Types">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-medium text-foreground">Type</th>
                        <th className="text-left py-2 font-medium text-foreground">Paid</th>
                        <th className="text-left py-2 font-medium text-foreground">Days</th>
                        <th className="text-left py-2 font-medium text-foreground">Key Rule</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50"><td className="py-2">Casual Leave</td><td>Paid</td><td>12/year</td><td>Apply 2 days in advance. Max 1 day per request. 10-day gap between requests.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2">Sick Leave</td><td>Paid</td><td>12/year</td><td>Inform by 10 AM same day. Medical cert needed if Saturday or beyond 1 day.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2">Menstrual Flex Day</td><td>Paid / OD</td><td>12/year</td><td>For women only. WFH with reduced load. Must remain reachable. 25-day gap.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2">Leave Without Pay</td><td>Unpaid</td><td>As needed</td><td>When CL/SL are exhausted. Apply 2 days ahead. Unapproved = Absent.</td></tr>
                      <tr className="border-b border-border/50"><td className="py-2">Wedding Leave</td><td>Paid</td><td>5 days (once)</td><td>Self-marriage only. Apply 10 days ahead. Proof may be requested.</td></tr>
                      <tr><td className="py-2">Absent</td><td>Unpaid</td><td>Avoid this</td><td>No prior approval or intimation. May result in disciplinary action.</td></tr>
                    </tbody>
                  </table>
                </div>
              </ContentCard>

              <ContentCard icon={AlertTriangle} title="The Sandwich Rule">
                <p>If you take leave on either side of a weekend or public holiday, the days in between also count as leave. This is the rule that catches everyone off guard the first time. Read it. Understand it. Don't learn about it the hard way.</p>
              </ContentCard>

              <ContentCard icon={Clock} title="Permissions (Short Time Off)">
                <InfoRow label="Monthly Limit" value="4 hours maximum per month" />
                <InfoRow label="Minimum Block" value="30 minutes at a time" />
                <InfoRow label="How to Apply" value="Through the HR system or your manager, in advance" />
                <InfoRow label="Exceeding 4 Hours" value="Treated as unpaid leave or deducted from casual leave" />
              </ContentCard>

              <ContentCard icon={Calendar} title="Other Leave Rules">
                <InfoRow label="Backdated Leave" value="Can be applied retroactively for up to 10 days with valid reason and manager approval." />
                <InfoRow label="Leave Reset Date" value="All paid leave balances reset on December 31 annually." />
                <InfoRow label="Carry Forward" value="Not allowed unless approved in writing by HR." />
                <InfoRow label="Unapproved Leave" value="Marked as Absent. Unpaid. May lead to disciplinary action." />
                <InfoRow label="Regularization" value="Allowed once per week for genuine emergencies. Not for routine late check-ins." />
                <InfoRow label="Overtime" value="Beyond standard hours, eligible for compensation as per legal norms. Must be pre-approved." />
              </ContentCard>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Remote work is not a default perk. It is available to selected people approved by the board. All remote team members must complete 15 days in-office during induction regardless.</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CHAPTER 06 — CONDUCT */}
            <TabsContent value="conduct" className="space-y-4">
              <ContentCard icon={Shield} title="Professional Conduct">
                <p>Show up as someone who respects the people around them. Respect means different things in different contexts, but at minimum it means: you don't talk over people, you don't undermine colleagues in client meetings, you don't ghost your team when there is a deadline in two hours.</p>
                <p>Dress code: professional attire at all times. If uniforms are provided, wear them. This is not negotiable. It is about representing a brand that clients need to trust.</p>
              </ContentCard>

              <ContentCard icon={Lock} title="Protecting Company Information">
                <p>`When you join WePix, you sign a confidentiality agreement. This is not bureaucracy. It protects real business interests. Client data, campaign strategies, creative work, and company financials are confidential. They don't leave the office and they don't get shared outside proper channels.</p>`
                <p>Company assets: devices, software, equipment are for work. Using them for personal projects or unrelated activity is not okay.</p>
              </ContentCard>

              <ContentCard icon={Shield} title="Non-Solicitation and Non-Compete">
                <p>During your employment and for 6 months after leaving WePix, you may not solicit WePix clients, employees, or business partners for yourself or any other party. The non-compete clause details will be in your specific agreement. Read it.</p>
              </ContentCard>

              <ContentCard icon={AlertTriangle} title="Disciplinary Process">
                <p>Violations of company policy lead to a graduated response: verbal warning, written warning, suspension, or termination depending on severity. Serious violations (harassment, data breach, gross misconduct) can result in immediate termination.</p>
              </ContentCard>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Salary and compensation details are strictly confidential. You do not discuss your pay in group chats, WhatsApp groups, or team meetings. Take it to HR directly if there is a concern.</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CHAPTER 07 — GROWTH */}
            <TabsContent value="growth" className="space-y-4">
              <ContentCard icon={TrendingUp} title="How People Move Up Here">
                <p>Growth at WePix is not a mystery. It is not based on who is the loudest in meetings or who has been here the longest. It is based on actual output, actual ownership, and actual impact.</p>
                <p>But it also doesn't happen automatically. Sitting at your desk delivering average work for 12 months straight and then being surprised that nothing changed is not a WePix problem. That is a you problem.</p>
              </ContentCard>

              <ContentCard icon={BookOpen} title="The Commitment to Learning Is Mutual">
                <p>WePix will support your learning. That means access to tools, exposure to diverse campaigns, and feedback that actually helps you develop.</p>
                <p>But the initiative has to come from you. We can create the environment. We can't want it more than you do.</p>
              </ContentCard>
            </TabsContent>

            {/* CHAPTER 08 — THE DEAL */}
            <TabsContent value="the-deal" className="space-y-4">
              <ContentCard icon={Handshake} title="What WePix Commits to You">
                <p>Employment relationships work because both sides hold up their end. Here is what WePix commits to you:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>A respectful, growth-oriented work environment</li>
                  <li>Access to tools, learning, and diverse project exposure</li>
                  <li>Feedback that actually helps you develop</li>
                  <li>Fair and transparent policies</li>
                  <li>Confidential grievance handling</li>
                </ul>
              </ContentCard>

              <ContentCard icon={Users} title="What WePix Needs From You">
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Ownership of your work and deadlines</li>
                  <li>Honest communication, especially when things are going wrong</li>
                  <li>Respect for your teammates, clients, and company assets</li>
                  <li>Curiosity and initiative in learning</li>
                  <li>Adherence to company policies and confidentiality</li>
                </ul>
              </ContentCard>

              <Card className="border-border/50 bg-muted/30">
                <CardContent className="p-5 text-center">
                  <p className="text-xs text-muted-foreground">Version 1.5 — 2026 &middot; hr@wepix.in &middot; feedback@wepix.in</p>
                  <p className="text-xs text-muted-foreground mt-1">15/15 Sri Vinayagar Koil Street, Kosavampalayam, Palladam, Tirupur, Tamil Nadu – 641664</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
