export interface ProblemStatement {
  id: string;
  title: string;
  statement: string;
  evidence: string;
  sdgAlignment: string[];
  affectedPopulation: string;
  technicalDirections: string[];
  feasibility: "High" | "Medium" | "Low";
  domain: string;
  relevanceScore: number;
}

export interface UserPreferences {
  domain: string;
  skillLevel: string;
  purpose: string;
}

export const domains = [
  "Artificial Intelligence",
  "Healthcare",
  "Sustainability",
  "IoT & Smart Systems",
  "Education Technology",
  "FinTech",
  "Agriculture",
  "Cybersecurity",
  "Urban Planning",
  "Mental Health",
];

export const skillLevels = ["Beginner", "Intermediate", "Advanced"];

export const purposes = ["Hackathon", "Research", "Startup", "College Project"];

// Placeholder data — will be replaced by AI-powered ranking + NLP pipeline
export const mockProblems: ProblemStatement[] = [
  {
    id: "ps-001",
    title: "Early Detection of Diabetic Retinopathy in Rural Clinics",
    statement:
      "Over 80% of rural clinics in South Asia lack ophthalmologists. Diabetic retinopathy affects 93 million people globally, yet early-stage detection remains inaccessible outside urban hospitals. A low-cost, AI-assisted screening tool using smartphone fundus photography could bridge this gap.",
    evidence: "WHO Global Report on Diabetes (2024); IOVS Dataset — Kaggle Diabetic Retinopathy Detection",
    sdgAlignment: ["SDG 3: Good Health", "SDG 10: Reduced Inequalities"],
    affectedPopulation: "463 million adults with diabetes globally, concentrated in LMICs",
    technicalDirections: [
      "Transfer learning on retinal image datasets",
      "Edge inference on mobile devices",
      "Federated learning for privacy-preserving training",
    ],
    feasibility: "Medium",
    domain: "Healthcare",
    relevanceScore: 94,
  },
  {
    id: "ps-002",
    title: "Predicting Urban Heat Islands Using Satellite Imagery",
    statement:
      "Urban heat islands increase city temperatures by 1–7°C, disproportionately affecting low-income neighborhoods. Current mitigation strategies rely on expensive ground-sensor networks. Satellite-based thermal mapping combined with ML could enable city-scale prediction and targeted interventions.",
    evidence: "NASA Landsat Thermal Data; EPA Urban Heat Island Report 2023",
    sdgAlignment: ["SDG 11: Sustainable Cities", "SDG 13: Climate Action"],
    affectedPopulation: "4.4 billion urban residents, especially in tropical megacities",
    technicalDirections: [
      "Satellite image segmentation (U-Net variants)",
      "Temporal prediction models (LSTM / Transformer)",
      "GIS integration for policy dashboards",
    ],
    feasibility: "High",
    domain: "Sustainability",
    relevanceScore: 91,
  },
  {
    id: "ps-003",
    title: "Real-Time Misinformation Detection in Regional Languages",
    statement:
      "Misinformation in non-English languages spreads 6x faster on social platforms due to lack of NLP tooling. Existing fact-checking models are English-centric and fail on code-mixed text common in South Asian and African contexts.",
    evidence: "MIT Media Lab — Spread of Misinformation Study; UNESCO Digital Literacy Report 2024",
    sdgAlignment: ["SDG 16: Peace & Justice", "SDG 4: Quality Education"],
    affectedPopulation: "3.2 billion non-English internet users",
    technicalDirections: [
      "Multilingual transformer fine-tuning (XLM-R, IndicBERT)",
      "Claim verification pipelines",
      "Browser extension for real-time flagging",
    ],
    feasibility: "Medium",
    domain: "Artificial Intelligence",
    relevanceScore: 88,
  },
  {
    id: "ps-004",
    title: "Soil Health Monitoring for Smallholder Farmers via IoT",
    statement:
      "75% of the world's food is produced by smallholder farmers who lack access to soil testing. Current IoT soil sensors are too expensive ($200+). A sub-$30 sensor network with cloud-based analytics could revolutionize precision agriculture in developing nations.",
    evidence: "FAO Smallholder Agriculture Report; IEEE Sensors Journal — Low-Cost Soil Monitoring (2023)",
    sdgAlignment: ["SDG 2: Zero Hunger", "SDG 9: Industry & Innovation"],
    affectedPopulation: "500 million smallholder farming households",
    technicalDirections: [
      "Low-power LoRaWAN sensor networks",
      "Time-series soil nutrient prediction",
      "Mobile dashboard with SMS alerts",
    ],
    feasibility: "High",
    domain: "IoT & Smart Systems",
    relevanceScore: 86,
  },
  {
    id: "ps-005",
    title: "AI-Powered Mental Health Triage for University Counseling",
    statement:
      "University counseling centers report 3–6 week wait times. 40% of students who seek help never return after initial contact. An NLP-based triage system could prioritize high-risk cases and provide immediate low-risk interventions through guided self-help.",
    evidence: "ACHA National College Health Assessment 2024; JMIR Mental Health — AI Triage Studies",
    sdgAlignment: ["SDG 3: Good Health", "SDG 4: Quality Education"],
    affectedPopulation: "200 million university students worldwide",
    technicalDirections: [
      "Sentiment analysis on intake forms",
      "Risk scoring with explainable AI",
      "Integration with campus EHR systems",
    ],
    feasibility: "Medium",
    domain: "Mental Health",
    relevanceScore: 83,
  },
  {
    id: "ps-006",
    title: "Adaptive Learning Paths for Neurodiverse Students",
    statement:
      "Standard e-learning platforms fail 15–20% of students with learning disabilities. Current adaptive systems optimize for average learners. A multi-modal learning path engine could tailor content pacing, format, and assessment to individual cognitive profiles.",
    evidence: "UNESCO ICT in Education Report; Learning Disabilities Association of America — 2024 Data",
    sdgAlignment: ["SDG 4: Quality Education", "SDG 10: Reduced Inequalities"],
    affectedPopulation: "70 million children with learning disabilities globally",
    technicalDirections: [
      "Knowledge graph-based curriculum modeling",
      "Reinforcement learning for path optimization",
      "Multi-modal content generation (text, visual, audio)",
    ],
    feasibility: "Low",
    domain: "Education Technology",
    relevanceScore: 80,
  },
];

/**
 * FUTURE AI INTEGRATION POINTS:
 *
 * 1. NLP Processing:
 *    - Extract problem themes from research papers, news, and open datasets
 *    - Use embeddings (e.g., OpenAI, Cohere) to cluster related problems
 *
 * 2. Semantic Clustering:
 *    - Group problems by thematic similarity using HDBSCAN or similar
 *    - Identify underexplored niches vs. oversaturated areas
 *
 * 3. Ranking Logic:
 *    - Score problems based on: evidence strength, recency, feasibility, SDG alignment
 *    - Personalize ranking using user skill level and purpose
 *    - Penalize generic / widely-covered topics
 *
 * 4. Data Sources (to integrate):
 *    - Kaggle Datasets API
 *    - arXiv API for research papers
 *    - Google Dataset Search
 *    - UN SDG Indicators API
 *    - WHO / FAO / UNESCO open data portals
 */

export function filterProblems(
  preferences: UserPreferences
): ProblemStatement[] {
  // PLACEHOLDER: In production, this would call an AI ranking endpoint
  // that uses NLP + semantic clustering + user preference matching
  let results = [...mockProblems];

  if (preferences.domain && preferences.domain !== "all") {
    results = results.filter(
      (p) => p.domain.toLowerCase() === preferences.domain.toLowerCase()
    );
  }

  // Simulate skill-level based sorting
  if (preferences.skillLevel === "Beginner") {
    results = results.filter((p) => p.feasibility !== "Low");
  }

  // Sort by relevance score (placeholder for AI-powered ranking)
  results.sort((a, b) => b.relevanceScore - a.relevanceScore);

  // If no results after filtering, return all sorted by score
  if (results.length === 0) {
    return [...mockProblems].sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  return results;
}
