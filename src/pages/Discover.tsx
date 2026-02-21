import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { domains, skillLevels, purposes } from "@/lib/mockData";

const Discover = () => {
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      domain: domain || "all",
      skill: skillLevel || "Intermediate",
      purpose: purpose || "Hackathon",
    });
    navigate(`/results?${params.toString()}`);
  };

  const isComplete = domain && skillLevel && purpose;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles size={14} />
                Preference Engine
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Tell us what you're looking for
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                We'll match you with evidence-backed problem statements tailored
                to your interests and skill level.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Domain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-foreground mb-3">
                  Domain of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {domains.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setDomain(d)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        domain === d
                          ? "bg-primary text-primary-foreground glow-primary"
                          : "glass hover:bg-muted/60 text-foreground"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Skill Level */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-foreground mb-3">
                  Skill Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {skillLevels.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSkillLevel(s)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        skillLevel === s
                          ? "bg-primary text-primary-foreground glow-primary"
                          : "glass hover:bg-muted/60 text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-foreground mb-3">
                  Purpose
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {purposes.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPurpose(p)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        purpose === p
                          ? "bg-primary text-primary-foreground glow-primary"
                          : "glass hover:bg-muted/60 text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={!isComplete}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all ${
                    isComplete
                      ? "bg-primary text-primary-foreground glow-primary-strong hover:opacity-90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  Discover Problem Statements
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
