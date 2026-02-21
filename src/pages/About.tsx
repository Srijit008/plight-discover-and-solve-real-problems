import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Shield, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";

const values = [
  {
    icon: Target,
    title: "Evidence Over Guesswork",
    description:
      "Every problem statement is grounded in real data — research papers, global reports, and verified datasets.",
  },
  {
    icon: Shield,
    title: "Authenticity First",
    description:
      "We don't generate generic ideas. Plight surfaces underexplored, high-impact problems that actually need solving.",
  },
  {
    icon: Zap,
    title: "Actionable Intelligence",
    description:
      "Each result comes with technical directions, feasibility scores, and SDG alignment — ready for your next project.",
  },
  {
    icon: Globe,
    title: "Global Impact Focus",
    description:
      "Problems are mapped to the UN Sustainable Development Goals, ensuring your work contributes to meaningful change.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Why <span className="text-gradient">Plight</span> exists
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Every year, millions of students and researchers default to
                recycled project ideas — chatbot assistants, to-do apps, generic
                dashboards. The world's hardest problems remain undiscovered by
                the people most capable of solving them.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 mb-16"
            >
              <p className="text-lg text-foreground leading-relaxed">
                Plight is an{" "}
                <strong className="text-primary">
                  innovation intelligence platform
                </strong>{" "}
                that bridges the gap between open data and human ingenuity. We
                mine research papers, global health reports, environmental
                datasets, and economic indicators to surface authentic problems
                that are{" "}
                <em>underexplored, feasible, and aligned with global goals</em>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This isn't a chatbot. It's not an idea generator. It's a
                structured discovery engine for people who want their work to
                matter.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/discover"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
              >
                Start Discovering
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
