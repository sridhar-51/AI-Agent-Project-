import React, { useState } from 'react';
import { 
  Award, 
  Check, 
  Copy, 
  Layers, 
  Star, 
  Cpu, 
  Wrench, 
  Database, 
  Zap 
} from 'lucide-react';
import { PROJECTS_LIST } from '../data/projectsData';

interface AllProjectsComparisonProps {
  onSelectProject2: () => void;
}

export const AllProjectsComparison: React.FC<AllProjectsComparisonProps> = ({
  onSelectProject2
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(2);
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);

  const activeProject = PROJECTS_LIST.find(p => p.id === selectedProjectId) || PROJECTS_LIST[0];

  const getStarterSnippet = (projId: number) => {
    switch (projId) {
      case 1:
        return `# Project 1: AI Student Support Assistant (RAG + Tools + Memory)
from rag_engine import CollegeRAG
from tools import get_exam_schedule, check_fees

class StudentSupportAgent:
    def __init__(self):
        self.rag = CollegeRAG(handbook_pdf="college_handbook.pdf")
        self.memory = []

    def answer_query(self, student_query: str):
        # 1. Check if tool is needed (e.g. fees, timetable)
        if "fee" in student_query.lower():
            return check_fees(student_query)
        # 2. Otherwise RAG over college regulations handbook
        return self.rag.retrieve_answer(student_query)
`;
      case 2:
        return `# Project 2: AI HR Recruitment Assistant (Agent + Tools + RAG) - TOP PICK!
from agent import HRRecruitmentAgent

agent = HRRecruitmentAgent()
result = agent.evaluate_candidate(
    resume_text="Sridhar Kumar... Python, FastAPI, LangChain...",
    jd_text="Job Title: Senior AI Engineer... Required: Python, RAG...",
    threshold=75
)
print("Score:", result["overall_score"])
print("Interview Questions:", result["interview_questions"])
`;
      case 3:
        return `# Project 3: AI E-Commerce Customer Support Agent (Tool Calling + Memory)
from tools import track_order, process_refund, search_products

class ECommerceAgent:
    def handle_customer_message(self, message: str, user_id: str):
        if "where is my order" in message.lower():
            return track_order(user_id)
        elif "return" in message.lower() or "refund" in message.lower():
            return process_refund(user_id)
        return search_products(message)
`;
      case 4:
        return `# Project 4: AI IT Helpdesk Agent (Agent + RAG + Tools)
from rag_engine import ITRunbooksRAG
from tools import create_jira_ticket, restart_service

class HelpdeskAgent:
    def diagnose_issue(self, issue_description: str):
        # 1. RAG diagnosis from IT runbooks
        solution = ITRunbooksRAG.search(issue_description)
        # 2. Tool call: create ticket if unresolved
        ticket_id = create_jira_ticket(issue_description, priority="High")
        return {"solution": solution, "ticket": ticket_id}
`;
      case 5:
        return `# Project 5: AI Learning & Study Assistant (RAG + Memory + Tools)
from rag_engine import TextbookRAG
from tools import generate_quiz, create_study_plan

class StudyAssistantAgent:
    def build_study_module(self, topic: str, difficulty: str):
        notes = TextbookRAG.retrieve_concept(topic)
        quiz = generate_quiz(notes, num_questions=5)
        schedule = create_study_plan(topic, days=5)
        return {"notes": notes, "quiz": quiz, "schedule": schedule}
`;
      default:
        return `# AI Agent Starter Code`;
    }
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(getStarterSnippet(selectedProjectId));
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-500/30">
            Slide Comparison (Use Cases 1 to 5)
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          All 5 Student Use Cases Compared
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Review all five projects listed on your curriculum slide. Project #2 is highlighted as the winning choice,
          but you can examine the capabilities and Python starters for all five.
        </p>
      </div>

      {/* Grid of 5 Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS_LIST.map(proj => {
          const isSelected = selectedProjectId === proj.id;
          const isBest = proj.isBestChoice;

          return (
            <div
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all relative flex flex-col justify-between ${
                isBest
                  ? 'bg-gradient-to-b from-blue-50/70 to-indigo-50/40 border-blue-400 shadow-md ring-2 ring-blue-500/20'
                  : isSelected
                  ? 'bg-white border-blue-500 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center font-mono">
                      #{proj.id}
                    </span>
                    {isBest && (
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-white" />
                        TOP BEST PICK
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                    Score: {proj.score}/100
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-slate-900 mb-1">
                  {proj.title}
                </h3>

                {/* Key Capabilities */}
                <div className="inline-block bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-md mb-2 font-mono">
                  {proj.keyCapabilities}
                </div>

                {/* What Students Build */}
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  {proj.whatStudentsBuild}
                </p>
              </div>

              {/* Action / Select Button */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Difficulty: {proj.difficulty}
                </span>

                {isBest ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject2();
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    Select Project #2
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedProjectId(proj.id)}
                    className="text-xs text-blue-600 font-medium hover:underline"
                  >
                    View Code
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Project Deep Dive Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-600">
                Use Case #{activeProject.id}
              </span>
              {activeProject.isBestChoice && (
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                  Recommended Winner
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {activeProject.title} • {activeProject.keyCapabilities}
            </h3>
          </div>

          <button
            onClick={handleCopySnippet}
            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            {copiedSnippet ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Starter!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Starter Code</span>
              </>
            )}
          </button>
        </div>

        {/* Architecture Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Agent Loop</span>
            </div>
            <p className="text-[11px] text-slate-600">{activeProject.keyPillars.agent}</p>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
              <Wrench className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tools</span>
            </div>
            <ul className="text-[11px] text-slate-600 space-y-0.5">
              {activeProject.keyPillars.tools.map((t, idx) => (
                <li key={idx}>• {t}</li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
              <Database className="w-3.5 h-3.5 text-purple-600" />
              <span>RAG Storage</span>
            </div>
            <p className="text-[11px] text-slate-600">{activeProject.keyPillars.rag}</p>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Memory</span>
            </div>
            <p className="text-[11px] text-slate-600">{activeProject.keyPillars.memory}</p>
          </div>
        </div>

        {/* Python Starter Code for this Use Case */}
        <div>
          <div className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <span>Python Architecture Starter ({activeProject.title}):</span>
          </div>
          <div className="bg-slate-950 text-slate-100 font-mono text-xs rounded-xl p-4 overflow-x-auto border border-slate-800">
            <pre><code>{getStarterSnippet(selectedProjectId)}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};
