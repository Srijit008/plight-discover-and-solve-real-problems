import { type ProblemStatement } from "@/lib/mockData";
import { motion } from "framer-motion";
import { TrendingUp, Users, Lightbulb, BarChart3 } from "lucide-react";

interface ProblemCardProps {
  problem: ProblemStatement;
  index: number;
}

const feasibilityColors: Record<string, string> = {
  High: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Low: "bg-red-500/10 text-red-400 border-red-500/20",
};

const ProblemCard = ({ problem, index }: ProblemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-6 hover:glow-primary transition-shadow duration-500 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-muted-foreground">
              #{problem.id}
            </span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full border ${feasibilityColors[problem.feasibility]}`}
            >
              {problem.feasibility} Feasibility
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {problem.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 bg-primary/10 rounded-lg px-3 py-1.5 shrink-0">
          <BarChart3 size={14} className="text-primary" />
          <span className="text-sm font-bold text-primary">
            {problem.relevanceScore}
          </span>
        </div>
      </div>

      {/* Statement */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {problem.statement}
      </p>

      {/* Evidence */}
      <div className="mb-4 p-3 rounded-lg bg-muted/30 border border-border/30">
        <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
          Evidence Sources
        </p>
        <p className="text-sm text-foreground/80">{problem.evidence}</p>
      </div>

      {/* SDG Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {problem.sdgAlignment.map((sdg) => (
          <span
            key={sdg}
            className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15 font-medium"
          >
            {sdg}
          </span>
        ))}
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="flex items-start gap-2">
          <Users size={14} className="text-muted-foreground mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Affected
            </p>
            <p className="text-sm text-foreground/80">
              {problem.affectedPopulation}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <TrendingUp
            size={14}
            className="text-muted-foreground mt-0.5 shrink-0"
          />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Domain
            </p>
            <p className="text-sm text-foreground/80">{problem.domain}</p>
          </div>
        </div>
      </div>

      {/* Technical directions */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <Lightbulb size={14} className="text-primary" />
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Technical Directions
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {problem.technicalDirections.map((dir) => (
            <span
              key={dir}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {dir}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemCard;
