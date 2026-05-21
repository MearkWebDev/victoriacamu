import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Cloud, Smartphone, KeyRound, Globe2, Briefcase, GraduationCap,
  Building2, Wallet, BarChart3, Target, Sparkles, Compass, Network, Infinity as InfinityIcon,
  Award, Video, BookOpen, FolderHeart, LayoutDashboard, Users2, ShieldCheck,
  Workflow, Plug, Calendar, Mail, Lock, UserCog, Heart, ClipboardCheck,
  MapPin, CheckCircle2, Send, MessageSquare, Building, School, Factory, Stamp,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import heroCareerHub from "@/assets/hero-career-hub.jpg";

const whatIsCareerHub = [
  { icon: Cloud, title: "Cloud-based SaaS", desc: "Fully integrated platform — no design-and-build project required." },
  { icon: Smartphone, title: "Mobile-first design", desc: "Responsive experiences for students, parents and employers on any device." },
  { icon: KeyRound, title: "Browser-based SSO", desc: "Single sign-on via Active Directory and Google Workspace." },
  { icon: Globe2, title: "Hosted in-country", desc: "Data sovereignty guaranteed — Australian-hosted infrastructure." },
  { icon: Briefcase, title: "Work Integrated Learning engine", desc: "End-to-end placements, 4-way agreements and live status tracking." },
  { icon: GraduationCap, title: "Career Education platform", desc: "Curated pathways, exploration and guidance from Years 7–12." },
  { icon: Building2, title: "Employer & Industry CRM", desc: "A 360° view of every host employer — from outreach to long-term partnership." },
  { icon: Wallet, title: "Digital Portfolio & eWallet", desc: "Lifelong record of credentials, reflections and achievements." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Live dashboards across schools, regions and the state." },
];

const stats = [
  { value: "700+", label: "Global Deployments" },
  { value: "2M+", label: "Students Served" },
  { value: "100%", label: "Compliance on Essentials" },
];

const ultimateGoal = [
  { icon: Target, title: "Better Student Outcomes", desc: "Smarter pathways from classroom to career through guided exploration and personalised support." },
  { icon: Briefcase, title: "Employability", desc: "Real-world experience, industry exposure and job-ready skills built before graduation." },
  { icon: Sparkles, title: "Entrepreneurial Spirit", desc: "Encouraging initiative, creativity and the confidence to build, lead and launch new ideas." },
  { icon: Compass, title: "Informed Career Choices", desc: "Self-awareness, market insight and clear pathway visibility to make confident decisions." },
  { icon: Network, title: "Industry & Community Links", desc: "Lasting partnerships between schools, employers, parents and community mentors." },
  { icon: InfinityIcon, title: "Lifelong Growth", desc: "A digital wallet of skills, achievements and reflections that travels with the learner." },
];

const studentFeatures = [
  { icon: Briefcase, title: "Work Experience & Placements", desc: "End-to-end discovery, application and Four-Way Agreement workflow connecting students with industry hosts." },
  { icon: Award, title: "Industry Projects & Micro-Credentials", desc: "Real-world projects with verifiable badges and ACS-aligned credentials issued on completion." },
  { icon: Video, title: "Virtual Work Experience", desc: "Course-style enrolment delivered through the LMS for students unable to attend on-site placements — equity at scale." },
  { icon: Compass, title: "Career Exploration & Pathways", desc: "Curated industry profiles, university/VET pathway mapping and tailored guidance from Years 7–12." },
  { icon: BookOpen, title: "Learning Hub & Resources", desc: "Pre-placement modules covering WHS, workplace conduct and reflection journals — accessible on any device." },
  { icon: FolderHeart, title: "Digital Wallet & Portfolio", desc: "Lifelong record of experiences, credentials and supervisor feedback — portable beyond Year 12." },
];

const schoolBenefits = [
  { title: "Reduce admin workload", desc: "Automated workflows, e-signatures and reporting cut placement admin by up to 70%." },
  { title: "Stronger industry connections", desc: "Tap a state-wide employer network without each school building it alone." },
  { title: "Better student outcomes", desc: "Earlier, more diverse placements and richer reflection data lift senior-secondary decisions." },
  { title: "School planning dashboards", desc: "Live participation, satisfaction and credentials data feeds school improvement plans." },
];

const stateBenefits = [
  { icon: BarChart3, title: "Policy visibility", desc: "Real-time state-wide dashboards on participation, equity gaps and industry engagement." },
  { icon: Wallet, title: "Cost efficiency at scale", desc: "One platform replaces fragmented school-level tools, reducing duplication and licensing spend." },
  { icon: ShieldCheck, title: "Governance & compliance", desc: "Centralised Four-Way Agreements, audit trails, cybersecurity and Privacy Act compliance." },
  { icon: Network, title: "Industry partnerships", desc: "A curated employer network shared across every school, regardless of zipcode." },
  { icon: Factory, title: "Workforce pipeline", desc: "Direct line of sight from school pathways into priority industries informing skills planning." },
  { icon: Heart, title: "Equity of outcome", desc: "Virtual Work Experience and mobile-first access ensure every student participates equally." },
];

const coreFunctionality = [
  { icon: Plug, title: "Open API Integration", desc: "Native APIs integrate with state SIS, certification systems, Active Directory and Google Workspace." },
  { icon: Users2, title: "Role-Based Portals", desc: "Tailored portals for Students, Teachers, Employers, Parents, State Admin and System Admin." },
  { icon: Workflow, title: "Electronic Workflows", desc: "Visual workflow designer for digital forms with configurable signature routing and live status tracking." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Responsive user interfaces optimised for any screen size, anywhere." },
  { icon: School, title: "School-Level Localisation", desc: "Each school can brand its page and tailor events within a state-wide governance baseline." },
  { icon: Cloud, title: "Off-the-Shelf SaaS", desc: "Proven platform deployable without a design-and-build project, configured to your specifics." },
];

const fourWaySteps = [
  { step: "01", role: "School", action: "Initiates the placement", icon: School },
  { step: "02", role: "Employer", action: "Signs first to confirm host commitment", icon: Building2 },
  { step: "03", role: "Parent", action: "Signs second to give consent", icon: Heart },
  { step: "04", role: "Student", action: "Signs to confirm and activate placement", icon: GraduationCap },
];

const integrations = [
  { icon: Lock, title: "Active Directory", desc: "Single sign-on and identity management." },
  { icon: Mail, title: "Google Workspace", desc: "Calendar, mail and document sync." },
  { icon: Calendar, title: "Microsoft Outlook", desc: "Native calendar and inbox integration." },
  { icon: Award, title: "Certification Systems", desc: "Senior secondary credentialing and course recognition." },
  { icon: ShieldCheck, title: "MFA Authentication", desc: "Multi-factor authentication built in by default." },
];

const personas = [
  { icon: GraduationCap, role: "Student", desc: "Explores pathways, applies for placements and builds a portfolio." },
  { icon: Heart, role: "Parent", desc: "Consents to placements, monitors progress and supports decisions." },
  { icon: Compass, role: "Careers Advisor", desc: "Curates opportunities, advises learners and tracks outcomes." },
  { icon: Building2, role: "Employer", desc: "Hosts placements, signs agreements and provides feedback." },
  { icon: Building, role: "State Staff", desc: "Monitors state-wide engagement, equity and compliance." },
  { icon: UserCog, role: "System Administrator", desc: "Configures workflows, roles and integrations." },
];

const journey = [
  { title: "Career Exploration", desc: "Discover industries, pathways and post-school options." },
  { title: "Placement Discovery", desc: "Browse curated opportunities matched to interests." },
  { title: "Approval Workflow", desc: "4-way agreement signed by school, employer, parent and student." },
  { title: "Active Placement", desc: "Live status tracking, WHS modules and reflection journals." },
  { title: "Feedback & Completion", desc: "Supervisor feedback, credentials and portfolio updates." },
  { title: "Reporting", desc: "Insights fed back to schools, advisors and state dashboards." },
];

const destinations = [
  { icon: GraduationCap, title: "Universities" },
  { icon: BookOpen, title: "TAFE & VET" },
  { icon: Building2, title: "Employers" },
  { icon: Stamp, title: "Apprenticeships" },
];

const qualifications = [
  { title: "AQF Mapping", desc: "Activities mapped to the Australian Qualifications Framework levels." },
  { title: "Skill Progression", desc: "Track capability growth from foundational to advanced." },
  { title: "RPL & Credit Transfer", desc: "Recognition of Prior Learning fed into post-school pathways." },
  { title: "Cross-Border Recognition", desc: "Portable credentials accepted across states and sectors." },
];

const CareerHub = () => {
  return (
    <>
      <PageHero
        label="Career Hub"
        title="Work Experience & Career Education Platform"
        description="Connecting students, schools, employers and state education systems through one unified Career Hub ecosystem."
        image={heroCareerHub}
      />

      {/* Hero CTAs strip */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <a href="#features" className="btn-gold text-sm inline-flex items-center gap-2">
            Explore Features <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/contact" className="btn-outline text-sm">Request Demo</Link>
        </div>
      </section>

      {/* What is Career Hub */}
      <section id="features" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="section-label">What is Career Hub</p>
            <h2 className="section-title">A unified Work Integrated Learning engine</h2>
            <p className="section-subtitle mt-4">
              A cloud-based, mobile-first SaaS platform covering the full work experience and career education lifecycle — configured to your jurisdiction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIsCareerHub.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-premium"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(var(--gold-light))" }}>
                  <item.icon className="w-6 h-6" style={{ color: "hsl(var(--gold))" }} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-8 rounded-2xl" style={{ background: "hsl(var(--navy))" }}>
                <div className="font-serif text-5xl md:text-6xl font-black gradient-text-gold mb-2">{s.value}</div>
                <div className="text-sm tracking-widest uppercase text-background/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Goal */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <p className="section-label">The Ultimate Goal</p>
            <h2 className="section-title">Why Career Hub Matters</h2>
            <p className="section-subtitle mx-auto mt-4">Outcomes that shape every learner's future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ultimateGoal.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-premium border-t-4"
                style={{ borderTopColor: "hsl(var(--gold))" }}
              >
                <g.icon className="w-8 h-8 mb-4" style={{ color: "hsl(var(--teal))" }} />
                <h3 className="font-serif text-xl font-bold mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="section-label">For Students</p>
            <h2 className="section-title">Features that drive measurable outcomes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentFeatures.map((f) => (
              <div key={f.title} className="card-premium">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(var(--teal-light))" }}>
                  <f.icon className="w-6 h-6" style={{ color: "hsl(var(--teal))" }} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">For Schools</p>
            <h2 className="section-title mb-4">How schools gain from Career Hub</h2>
            <p className="section-subtitle mb-8">Less admin, stronger partnerships, better outcomes — backed by live data.</p>
            <div className="space-y-4">
              {schoolBenefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-5 rounded-xl bg-background border border-border">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
                  <div>
                    <h4 className="font-bold mb-1">{b.title}</h4>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl p-10 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(var(--teal) / 0.12), hsl(var(--gold) / 0.12))" }}>
              <div className="grid grid-cols-2 gap-4 w-full">
                {[LayoutDashboard, BarChart3, ClipboardCheck, Users2].map((Icon, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-background shadow-lg flex items-center justify-center">
                    <Icon className="w-12 h-12" style={{ color: i % 2 === 0 ? "hsl(var(--teal))" : "hsl(var(--gold))" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State-Level Benefits */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <p className="section-label">State-Level Strategic Benefits</p>
            <h2 className="section-title text-background">A single source of truth for the jurisdiction</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateBenefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl backdrop-blur-sm border border-background/10"
                style={{ background: "hsl(0 0% 100% / 0.04)" }}>
                <b.icon className="w-8 h-8 mb-4" style={{ color: "hsl(var(--gold))" }} />
                <h3 className="font-serif text-lg font-bold mb-2 text-background">{b.title}</h3>
                <p className="text-sm text-background/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core System Functionality */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="section-label">Core System Functionality</p>
            <h2 className="section-title">Off-the-shelf. Ready to configure.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFunctionality.map((c) => (
              <div key={c.title} className="card-premium">
                <c.icon className="w-8 h-8 mb-4" style={{ color: "hsl(var(--teal))" }} />
                <h3 className="font-serif text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow & Automation */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <p className="section-label">Workflow & Automation</p>
            <h2 className="section-title">The 4-Way Agreement flow</h2>
            <p className="section-subtitle mx-auto mt-4">Live status tracking — schools see the exact stage of every form in real time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {fourWaySteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative card-premium text-center"
              >
                <div className="text-xs font-mono font-bold mb-3 tracking-widest" style={{ color: "hsl(var(--gold))" }}>STEP {s.step}</div>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4" style={{ background: "hsl(var(--teal-light))" }}>
                  <s.icon className="w-7 h-7" style={{ color: "hsl(var(--teal))" }} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{s.role}</h3>
                <p className="text-sm text-muted-foreground">{s.action}</p>
                {i < fourWaySteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6" style={{ color: "hsl(var(--gold))" }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM & Integration */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <p className="section-label">Employer CRM</p>
            <h2 className="section-title mb-6">A 360° view of every host</h2>
            <ul className="space-y-3">
              {[
                "Unified employer record — contacts, placements and history",
                "Engagement analytics: placement volume, risk score, incidents",
                "Approval & onboarding workflows for new hosts",
                "Real-time compliance dashboards",
                "Helpdesk and telephony with SLA tracking and click-to-call",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(var(--gold))" }} />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label">Integrations</p>
            <h2 className="section-title mb-6">Built to plug into your stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrations.map((i) => (
                <div key={i.title} className="p-5 rounded-xl bg-card border border-border">
                  <i.icon className="w-7 h-7 mb-3" style={{ color: "hsl(var(--teal))" }} />
                  <h4 className="font-bold mb-1">{i.title}</h4>
                  <p className="text-xs text-muted-foreground">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="section-label">User Personas</p>
            <h2 className="section-title">Built for every stakeholder</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.role} className="card-premium group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: "hsl(var(--gold-light))" }}>
                    <p.icon className="w-7 h-7" style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold">{p.role}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                  <LayoutDashboard className="w-4 h-4" /> Dedicated dashboard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Journey Timeline */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <p className="section-label">Student Journey</p>
            <h2 className="section-title">From exploration to reporting</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: "hsl(var(--gold))" }} />
            <div className="space-y-8">
              {journey.map((j, i) => (
                <motion.div
                  key={j.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`pl-16 md:pl-0 md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="card-premium inline-block text-left">
                      <div className="text-xs font-mono font-bold mb-2" style={{ color: "hsl(var(--gold))" }}>STAGE {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="font-serif text-xl font-bold mb-2">{j.title}</h3>
                      <p className="text-sm text-muted-foreground">{j.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background" style={{ background: "hsl(var(--gold))" }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond School */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="section-label">Beyond School</p>
            <h2 className="section-title">A profile that travels with the learner</h2>
            <p className="section-subtitle mt-4">Digital identity, credentials, portfolio and achievements — shared with consent, wherever the learner goes next.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: UserCog, label: "Digital Identity" },
              { icon: Award, label: "Skills & Credentials" },
              { icon: FolderHeart, label: "Portfolio & Achievements" },
              { icon: ShieldCheck, label: "Consent-controlled Sharing" },
            ].map((p) => (
              <div key={p.label} className="p-5 rounded-xl bg-background border border-border text-center">
                <p.icon className="w-7 h-7 mx-auto mb-2" style={{ color: "hsl(var(--teal))" }} />
                <div className="text-sm font-semibold">{p.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((d) => (
              <div key={d.title} className="p-6 rounded-2xl text-center"
                style={{ background: "linear-gradient(135deg, hsl(var(--navy)), hsl(var(--teal) / 0.6))" }}>
                <d.icon className="w-8 h-8 mx-auto mb-3" style={{ color: "hsl(var(--gold))" }} />
                <div className="font-serif font-bold text-background">{d.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Framework */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="section-label">Qualifications Framework</p>
            <h2 className="section-title">Recognised, portable, progressive</h2>
          </div>
          <div className="relative pl-8 border-l-2" style={{ borderColor: "hsl(var(--gold))" }}>
            {qualifications.map((q, i) => (
              <div key={q.title} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[42px] w-6 h-6 rounded-full border-4 border-background" style={{ background: "hsl(var(--gold))" }} />
                <div className="card-premium">
                  <div className="text-xs font-mono font-bold mb-1" style={{ color: "hsl(var(--teal))" }}>LEVEL {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-serif text-xl font-bold mb-2">{q.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ background: "hsl(var(--navy))" }}>
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 20% 30%, hsl(var(--teal) / 0.5), transparent 60%), radial-gradient(ellipse at 80% 70%, hsl(var(--gold) / 0.3), transparent 60%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-background mb-6 leading-tight">
            Transform Career Education with One Unified Platform
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
            Book a personalised walkthrough or talk to our team about deploying Career Hub across your jurisdiction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              <Send className="w-4 h-4" /> Book a Demo
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm border border-background/30 text-background hover:bg-background hover:text-foreground transition-all">
              <MessageSquare className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerHub;
