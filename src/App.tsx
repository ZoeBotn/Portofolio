/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Database, 
  Cloud, 
  BarChart, 
  Mail, 
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Mail as MailIcon,
  Waves,
  Music,
  Plane,
  Users
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-4">
        <div className="max-w-5xl mx-auto bg-brand-bg/80 backdrop-blur-md border-[1.5px] border-brand-border rounded-full px-8 py-3 flex items-center justify-between retro-shadow">
          <span className="font-serif text-2xl font-semibold text-brand-primary">Zoé Bouton</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="font-mono text-sm font-semibold hover:text-brand-tertiary transition-colors">Experience</a>
            <a href="#education" className="font-mono text-sm font-semibold hover:text-brand-tertiary transition-colors">Education</a>
            <a href="#skills" className="font-mono text-sm font-semibold hover:text-brand-tertiary transition-colors">Skills</a>
            <a href="#interests" className="font-mono text-sm font-semibold hover:text-brand-tertiary transition-colors">Interests</a>
          </div>
          <button className="bg-brand-accent text-brand-border border-[1.5px] border-brand-border px-6 py-2 rounded-full font-mono text-xs font-bold hover-lift">
            Contact Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 space-y-8"
          {...fadeIn}
        >
          <h1 className="font-serif text-6xl md:text-8xl text-brand-primary leading-tight">
            Zoé Bouton
          </h1>
          <p className="font-serif text-3xl md:text-4xl text-brand-secondary max-w-2xl italic leading-tight">
            CRM Project Leader — Driving Growth through Strategy & Creative Ingenuity.
          </p>
          <p className="text-lg md:text-xl text-brand-border/80 max-w-xl leading-relaxed">
            Ambitious marketing professional with a focus on international business. I leverage CRM migration expertise and data-driven optimization to bridge the gap between technical infrastructure and creative customer engagement.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-brand-accent text-brand-border border-[1.5px] border-brand-border px-10 py-4 rounded-full font-mono text-sm font-bold hover-lift flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </button>
            <button className="bg-white text-brand-border border-[1.5px] border-brand-border px-10 py-4 rounded-full font-mono text-sm font-bold hover:bg-brand-bg transition-colors flex items-center gap-2">
              Download CV <Download size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[3/4] rounded-2xl border-[1.5px] border-brand-border overflow-hidden retro-shadow bg-brand-sage relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
              alt="Zoé Bouton" 
              className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.1]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-brand-sage p-4 border-[1.5px] border-brand-border rounded-xl -rotate-3 hidden md:block">
            <p className="font-mono text-xs font-bold uppercase tracking-wider">Based in Paris, FR</p>
          </div>
        </motion.div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-brand-bg border-y-[1.5px] border-brand-border grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 bg-white border-[1.5px] border-brand-border rounded-xl">
              <Briefcase className="text-brand-tertiary" size={32} />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl">Professional Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard 
              company="Rakuten France"
              role="CRM Project Leader"
              period="2022 — Present"
              color="bg-brand-tertiary"
              points={[
                "Directed complete CRM migration strategy enhancing user retention by 15%.",
                "Optimized performance marketing through automated SQL-driven workflows.",
                "Managed multi-channel creative campaigns for high-stakes seasonal events."
              ]}
            />
            <ExperienceCard 
              company="HomeExchange"
              role="Project Leader & Customer Relations"
              period="2020 — 2022"
              color="bg-brand-secondary"
              points={[
                "Streamlined customer relations processes reducing response time by 30%.",
                "Implemented international feedback loops for product improvement.",
                "Coordinated cross-functional teams for brand loyalty initiatives."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section id="education" className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div className="lg:col-span-8 space-y-12" {...fadeIn}>
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white border-[1.5px] border-brand-border rounded-xl">
              <GraduationCap className="text-brand-tertiary" size={32} />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl">Education</h2>
          </div>

          <div className="space-y-12">
            <div className="flex gap-8 items-start pb-12 border-b-[1.5px] border-brand-border/10">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center border-[1.5px] border-brand-border shrink-0">
                <span className="font-serif text-2xl font-bold italic">B</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-3xl font-medium">ESCE International Business School</h4>
                <p className="text-lg text-brand-border/70">Master's Degree in International Marketing & Business Development</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border-[1.5px] border-brand-border space-y-4">
                <p className="font-mono text-xs font-bold text-brand-tertiary uppercase tracking-[0.2em]">Malaysia</p>
                <h4 className="font-serif text-2xl">APU University</h4>
                <p className="text-brand-border/70">Specialized Semester in Digital Global Trends</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border-[1.5px] border-brand-border space-y-4">
                <p className="font-mono text-xs font-bold text-brand-tertiary uppercase tracking-[0.2em]">Norway</p>
                <h4 className="font-serif text-2xl text-brand-primary">BI Norwegian Business School</h4>
                <p className="text-brand-border/70">International Management & Nordic Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-4" {...fadeIn}>
          <div className="bg-brand-sage p-10 rounded-3xl border-[1.5px] border-brand-border h-full retro-shadow space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Languages className="text-brand-secondary" />
                <h3 className="font-serif text-3xl font-medium">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['French (Native)', 'English (Bilingual)', 'German (Professional)', 'Malay (Conversational)'].map(lang => (
                  <span key={lang} className="bg-white px-5 py-2.5 rounded-full border-[1.5px] border-brand-border font-mono text-xs font-bold">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="aspect-square bg-brand-accent-soft rounded-2xl border-[1.5px] border-brand-border overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" 
                alt="International experience" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <span className="font-serif text-2xl leading-tight text-brand-primary">Connecting Minds Across Borders</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="font-serif text-5xl md:text-6xl">Hard Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkillItem icon={<Database />} label="SQL & BigQuery" />
                <SkillItem icon={<Cloud />} label="Salesforce CRM" />
                <SkillItem icon={<BarChart />} label="Google Analytics 4" />
                <SkillItem icon={<Mail />} label="Brais / Klaviyo" />
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="font-serif text-5xl md:text-6xl">Soft Skills</h2>
              <div className="space-y-8">
                <SoftSkillItem color="bg-brand-tertiary" label="Analytical Rigor" />
                <SoftSkillItem color="bg-brand-secondary" label="Proactive Problem Solving" />
                <SoftSkillItem color="bg-brand-primary" label="Cross-Cultural Leadership" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-32 border-t-[1.5px] border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl mb-16">Interests & Life</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <InterestCard icon={<Waves />} title="Swimming" desc="Discipline and focus in the water." color="bg-brand-accent-soft" />
            <InterestCard icon={<Music />} title="Flute / Guitar" desc="Creative harmony and precision." color="bg-brand-tertiary-fixed" />
            <InterestCard icon={<Plane />} title="Travel" desc="Exploring global cultures and markets." color="bg-brand-sage" />
            <InterestCard icon={<Users />} title="Asso Furious" desc="Active community engagement." color="bg-brand-bg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t-[1.5px] border-brand-border bg-white grid-bg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif text-4xl text-brand-primary">Zoé Bouton</h3>
            <p className="text-sm font-medium text-brand-border/60">
              © 2026 Zoé Bouton — CRM Strategy & Creative Ingenuity
            </p>
          </div>
          <div className="flex gap-10 items-center">
            <FooterLink icon={<Linkedin size={20} />} label="LinkedIn" href="#" />
            <FooterLink icon={<MailIcon size={20} />} label="Email" href="#" />
            <FooterLink icon={<Github size={20} />} label="GitHub" href="#" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceCard({ company, role, period, points, color }: { company: string, role: string, period: string, points: string[], color: string }) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl border-[1.5px] border-brand-border relative overflow-hidden group hover-lift"
      {...fadeIn}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${color}`}></div>
      <div className="pl-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
          <div className="space-y-1">
            <h3 className="font-serif text-3xl font-medium">{company}</h3>
            <p className="font-mono text-sm font-bold text-brand-secondary">{role}</p>
          </div>
          <span className="font-mono text-xs bg-brand-sage text-brand-border/80 px-4 py-1.5 rounded-full border-[1px] border-brand-border self-start">
            {period}
          </span>
        </div>
        <ul className="space-y-4">
          {points.map((point, i) => (
            <li key={i} className="flex gap-3 text-brand-border/80 leading-relaxed font-body-md">
              <span className="text-brand-tertiary mt-1 shrink-0">✦</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function SkillItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="p-6 border-[1.5px] border-brand-border bg-white rounded-2xl flex items-center gap-5 hover-lift">
      <div className="text-brand-primary group-hover:scale-110 transition-transform">{icon}</div>
      <span className="font-mono text-sm font-bold uppercase tracking-wider">{label}</span>
    </div>
  );
}

function SoftSkillItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className={`h-2 w-16 ${color} rounded-full transition-all group-hover:w-24`}></div>
      <span className="font-serif text-3xl md:text-4xl text-brand-border group-hover:italic transition-all">{label}</span>
    </div>
  );
}

function InterestCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <motion.div 
      className={`${color} p-10 rounded-2xl border-[1.5px] border-brand-border hover-lift space-y-6`}
      {...fadeIn}
    >
      <div className="text-brand-border transform group-hover:rotate-12 transition-transform scale-150 origin-left">
        {icon}
      </div>
      <div className="space-y-2">
        <h4 className="font-serif text-3xl font-medium">{title}</h4>
        <p className="text-brand-border/70 leading-snug">{desc}</p>
      </div>
    </motion.div>
  );
}

function FooterLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest hover:text-brand-tertiary transition-colors group">
      <span className="group-hover:-translate-y-1 transition-transform">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
