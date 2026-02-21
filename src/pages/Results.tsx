import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProblemCard from "@/components/ProblemCard";
import { filterProblems } from "@/lib/mockData";

const Results = () => {
  const [searchParams] = useSearchParams();

  const preferences = useMemo(
    () => ({
      domain: searchParams.get("domain") || "all",
      skillLevel: searchParams.get("skill") || "Intermediate",
      purpose: searchParams.get("purpose") || "Hackathon",
    }),
    [searchParams]
  );

  const problems = useMemo(() => filterProblems(preferences), [preferences]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative pt-28 pb-20">
        <div className="absolute inset-0 bg-grid opacity-15" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link
              to="/discover"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Modify Preferences
            </Link>

            <h1 className="text-3xl font-bold text-foreground mb-2">
              Problem Statements
            </h1>
            <p className="text-muted-foreground mb-4">
              {problems.length} results ranked by relevance for your profile.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                <Filter size={12} />
                {preferences.domain === "all" ? "All Domains" : preferences.domain}
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {preferences.skillLevel}
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {preferences.purpose}
              </span>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {problems.map((problem, i) => (
              <ProblemCard key={problem.id} problem={problem} index={i} />
            ))}
          </div>

          {problems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No matching problems found. Try broadening your filters.
              </p>
              <Link
                to="/discover"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
              >
                <ArrowLeft size={16} />
                Back to Discover
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
