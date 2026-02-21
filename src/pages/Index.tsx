import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Brain, Target, Search } from "lucide-react";
import Navbar from "@/components/Navbar";

const steps = [
  {
    icon: Search,
    title: "Define Your Focus",
    description:
      "Select your domain, skill level, and purpose. Plight uses these to match you with the most relevant problems.",
  },
  {
    icon: Database,
    title: "Evidence Mining",
    description:
      "Our engine scans research papers, datasets, and global reports to surface problems backed by real data.",
  },
  {
    icon: Brain,
    title: "AI Ranking",
    description:
      "NLP and semantic clustering rank problems by novelty, feasibility, and impact — not by popularity.",
  },
  {
    icon: Target,
    title: "Actionable Results",
    description:
      "Get structured problem statements with evidence, SDG alignment, and technical directions ready for action.",
  },
];

const stats = [
  { value: "10K+", label: "Data Sources" },
  { value: "17", label: "SDGs Mapped" },
  { value: "50+", label: "Domains" },
  { value: "93%", label: "Relevance Rate" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-Powered Innovation Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Innovation should begin with{" "}
              <span className="text-gradient">evidence</span>, not guesswork.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Plight helps students, researchers, and innovators discover
              authentic, data-backed, and underexplored real-world problem
              statements — not generic ideas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/discover"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow-primary"
              >
                Discover Problems
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-foreground font-medium text-base hover:bg-muted/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Plight Works
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              From your interests to actionable, evidence-backed problem
              statements in four steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-xl p-6 text-center group hover:glow-primary transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon size={24} className="text-primary" />
                </div>
                <p className="text-xs font-mono text-muted-foreground mb-2">
                  0{i + 1}
                </p>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center glow-primary"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to find your next breakthrough?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Stop guessing. Start discovering real problems that matter — backed
              by data, aligned with global goals.
            </p>
            <Link
              to="/discover"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start Discovering
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Plight. Innovation Intelligence Platform.
          </p>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Discover", path: "/discover" },
  { label: "About", path: "/about" },
];

export default Index;
