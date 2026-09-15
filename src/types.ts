export interface ProjectOption {
  id: number;
  title: string;
  tagline: string;
  whatStudentsBuild: string;
  keyCapabilities: string;
  isBestChoice: boolean;
  score: number; // 0-100
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  whyBestTamil: string;
  whyBestEnglish: string;
  keyPillars: {
    agent: string;
    tools: string[];
    rag: string;
    memory: string;
  };
}

export interface PythonFile {
  name: string;
  description: string;
  language: string;
  code: string;
}

export interface CandidateResume {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  education: string;
  summary: string;
  skills: string[];
  projects: string[];
  fullText: string;
}

export interface JobDescription {
  id: string;
  title: string;
  department: string;
  experienceRequired: string;
  requiredSkills: string[];
  preferredSkills: string[];
  description: string;
}

export interface AgentExecutionStep {
  stepNumber: number;
  type: 'thought' | 'tool_call' | 'rag_query' | 'tool_result' | 'decision';
  toolName?: string;
  title: string;
  detail: string;
  timestamp: string;
}

export interface ScreeningResult {
  candidateId: string;
  jobId: string;
  overallScore: number;
  skillsMatchScore: number;
  experienceScore: number;
  cultureFitScore: number;
  recommendation: 'STRONG HIRE' | 'SHORTLIST FOR INTERVIEW' | 'FURTHER REVIEW' | 'REJECT';
  matchedSkills: string[];
  missingSkills: string[];
  ragRetrievedContexts: { source: string; text: string; similarity: number }[];
  tailoredQuestions: {
    category: 'Technical' | 'Problem Solving' | 'System Design' | 'Behavioral';
    question: string;
    targetedGap: string;
    expectedAnswer: string;
    rubricPoints: string[];
  }[];
  decisionEmail: string;
}

export interface DayRoadmapItem {
  day: number;
  title: string;
  focus: string;
  deliverables: string[];
  milestoneCode: string;
  tips: string;
  tamilTip: string;
}

export interface VivaQuestion {
  question: string;
  questionTamil: string;
  answer: string;
  answerTamil: string;
  conceptTag: string;
}
