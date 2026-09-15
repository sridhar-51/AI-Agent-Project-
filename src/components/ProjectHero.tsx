import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Database, 
  Wrench, 
  Terminal, 
  Code2, 
  Play, 
  Star,
  FileText
} from 'lucide-react';
import { PROJECTS_LIST } from '../data/projectsData';

interface ProjectHeroProps {
  onNavigateToCode: () => void;
  onNavigateToSimulator: () => void;
  onNavigateToRoadmap: () => void;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  onNavigateToCode,
  onNavigateToSimulator,
  onNavigateToRoadmap
}) => {
  const hrProject = PROJECTS_LIST.find(p => p.id === 2)!;

  return (
    <div className="space-y-8 pb-8">
      {/* Top Banner: Selection Verdict */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-800/40 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              Selected Best Project (Use Case #2)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              5-Day Curriculum Aligned
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Agent + Tools + RAG
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            AI HR Recruitment Assistant
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
            Autonomous resume screening engine that performs semantic RAG matching against Job Descriptions,
            calculates multi-factor candidate scores, and generates targeted interview questions with scoring rubrics.
          </p>

          {/* Tamil Guidance Callout Box */}
          <div className="bg-slate-800/80 border border-blue-500/30 rounded-xl p-4 sm:p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">💡</span>
              <div className="space-y-1.5">
                <h4 className="text-sm font-semibold text-blue-200">
                  Enaku Idhu En Best Project? (Why This Project is the #1 Pick for You):
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {hrProject.whyBestTamil}
                </p>
                <p className="text-xs text-slate-400 italic">
                  &quot;Slides-la irukkura 5 use cases-laye idhula mattum thaan Agent, Custom Tools, and Document RAG
                  moondrumae complete-aa implement aagudhu. College viva & mentor presentation-la highest marks confirm!&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateToSimulator}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Test Live Agent Simulator</span>
            </button>

            <button
              onClick={onNavigateToCode}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>View & Copy Python Code</span>
            </button>

            <button
              onClick={onNavigateToRoadmap}
              className="px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white font-medium text-sm border border-slate-700/50 flex items-center gap-2 transition-all"
            >
              <span>5-Day Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 Core Pillars: Agent + Tools + RAG */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" />
          The 3 Key Agent Capabilities Built Into This Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: Autonomous Agent Loop */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">1. Autonomous Agent Loop</h3>
            <p className="text-xs text-slate-500 mb-3">
              ReAct loop coordinating tool execution & decisions
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>Plans next step based on candidate qualification state</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>Evaluates threshold cutoff (Shortlist vs Reject vs Review)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>Synthesizes recruiter feedback and candidate emails</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Specialized Tools */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">2. Custom Agent Tools</h3>
            <p className="text-xs text-slate-500 mb-3">
              Deterministic Python helper tools called by the agent
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span><code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded text-blue-700">parse_resume_text()</code>: Skill entity extractor</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span><code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded text-blue-700">calculate_match_score()</code>: Weighted JD gap scoring</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span><code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded text-blue-700">generate_interview_questions()</code>: Adaptive rubrics</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Semantic RAG Pipeline */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">3. Semantic RAG Engine</h3>
            <p className="text-xs text-slate-500 mb-3">
              Vector chunking & cosine similarity over PDF/Text
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>Text chunking with sliding window overlap (150 words / 30 overlap)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>Vector embeddings index over Resume & Job Description</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>Retrieves top-3 context chunks to ground questions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visual Architectural Workflow */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-slate-700" />
          End-to-End System Execution Flow
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
            <div className="w-7 h-7 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-xs">
              1
            </div>
            <div className="text-xs font-semibold text-slate-800 mb-1">Upload Resume & JD</div>
            <div className="text-[11px] text-slate-500">Candidate PDF or text pasted into Streamlit UI</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
            <div className="w-7 h-7 bg-indigo-100 text-indigo-700 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-xs">
              2
            </div>
            <div className="text-xs font-semibold text-slate-800 mb-1">Resume Parser Tool</div>
            <div className="text-[11px] text-slate-500">Extracts skills, years of exp, and education</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
            <div className="w-7 h-7 bg-purple-100 text-purple-700 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-xs">
              3
            </div>
            <div className="text-xs font-semibold text-slate-800 mb-1">RAG Vector Match</div>
            <div className="text-[11px] text-slate-500">Chunks documents & computes cosine similarity</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
            <div className="w-7 h-7 bg-amber-100 text-amber-700 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-xs">
              4
            </div>
            <div className="text-xs font-semibold text-slate-800 mb-1">Rubric & Question Gen</div>
            <div className="text-[11px] text-slate-500">Crafts questions targeting candidate gaps</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
            <div className="w-7 h-7 bg-emerald-100 text-emerald-700 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-xs">
              5
            </div>
            <div className="text-xs font-semibold text-slate-800 mb-1">Agent Verdict & Email</div>
            <div className="text-[11px] text-slate-500">Shortlist recommendation + personalized email</div>
          </div>
        </div>
      </div>

      {/* Project Checklist for Viva */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-600" />
          5-Day Project Deliverables Checklist (Ready for Evaluation)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
          <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>app.py:</strong> Interactive Streamlit Web UI with metrics & tabs</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>agent.py:</strong> Autonomous ReAct agent coordinator loop</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>rag_engine.py:</strong> Chunking & vector similarity search</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>tools.py:</strong> Typed parser, matcher, and question generator</span>
          </div>
        </div>
      </div>
    </div>
  );
};
