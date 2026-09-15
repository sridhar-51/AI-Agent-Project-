import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Cpu, 
  FileText, 
  Briefcase, 
  Copy, 
  Check, 
  Mail, 
  Database,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  SAMPLE_CANDIDATES, 
  SAMPLE_JOBS, 
  runClientScreeningSimulation 
} from '../data/simulationData';
import { ScreeningResult, AgentExecutionStep } from '../types';

export const InteractiveSimulator: React.FC = () => {
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>(SAMPLE_CANDIDATES[0].id);
  const [selectedJobId, setSelectedJobId] = useState<string>(SAMPLE_JOBS[0].id);
  const [customResume, setCustomResume] = useState<string>('');
  const [isCustomResume, setIsCustomResume] = useState<boolean>(false);
  const [threshold, setThreshold] = useState<number>(75);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [executionSteps, setExecutionSteps] = useState<AgentExecutionStep[]>([]);
  const [result, setResult] = useState<ScreeningResult | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [activeResultTab, setActiveResultTab] = useState<'questions' | 'skills' | 'email' | 'rag'>('questions');

  const activeCandidate = SAMPLE_CANDIDATES.find(c => c.id === selectedCandidateId) || SAMPLE_CANDIDATES[0];
  const activeJob = SAMPLE_JOBS.find(j => j.id === selectedJobId) || SAMPLE_JOBS[0];
  const resumeTextToUse = isCustomResume ? customResume : activeCandidate.fullText;

  const handleRunAgent = () => {
    setIsRunning(true);
    setResult(null);
    setExecutionSteps([]);
    setCurrentStep(1);

    const stepsQueue: AgentExecutionStep[] = [
      {
        stepNumber: 1,
        type: 'thought',
        title: 'Agent Reasoning',
        detail: 'Initializing autonomous screening loop. Inspecting candidate resume text and role profile.',
        timestamp: '00.1s'
      },
      {
        stepNumber: 2,
        type: 'tool_call',
        toolName: 'parse_resume_text()',
        title: 'Tool Execution: Resume Parser',
        detail: 'Extracting candidate name, experience duration, and technical skill entities.',
        timestamp: '00.4s'
      },
      {
        stepNumber: 3,
        type: 'rag_query',
        toolName: 'rag_engine.search()',
        title: 'RAG Semantic Vector Search',
        detail: 'Chunking texts into vector database; executing cosine similarity to retrieve matching qualification criteria.',
        timestamp: '00.8s'
      },
      {
        stepNumber: 4,
        type: 'tool_call',
        toolName: 'calculate_match_score()',
        title: 'Tool Execution: Multi-Factor Scoring',
        detail: 'Comparing extracted skills against required JD stack. Computing skill match and experience alignment.',
        timestamp: '01.2s'
      },
      {
        stepNumber: 5,
        type: 'tool_call',
        toolName: 'generate_interview_questions()',
        title: 'Tool Execution: Interview Rubric Generator',
        detail: 'Formulating adaptive technical, system design, and behavioral questions targeted specifically to candidate gaps.',
        timestamp: '01.6s'
      },
      {
        stepNumber: 6,
        type: 'decision',
        title: 'Agent Final Decision & Correspondence',
        detail: 'Synthesizing screening verdict (Shortlist / Further Review) and drafting personalized HR email.',
        timestamp: '02.0s'
      }
    ];

    // Step-by-step progressive execution animation
    stepsQueue.forEach((step, index) => {
      setTimeout(() => {
        setExecutionSteps(prev => [...prev, step]);
        setCurrentStep(step.stepNumber);

        if (index === stepsQueue.length - 1) {
          const res = runClientScreeningSimulation(resumeTextToUse, activeJob);
          setResult(res);
          setIsRunning(false);

          if (res.overallScore >= threshold) {
            confetti({
              particleCount: 70,
              spread: 60,
              origin: { y: 0.7 }
            });
          }
        }
      }, (index + 1) * 350);
    });
  };

  const handleCopyEmail = () => {
    if (result) {
      navigator.clipboard.writeText(result.decisionEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Live Interactive Playground
            </span>
            <span className="bg-blue-500/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-blue-500/30">
              Agent + Tools + RAG
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            AI HR Recruitment Agent Simulator
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Test the entire autonomous screening pipeline right here in the browser. Select candidate resumes,
            run the agent loop, and observe real-time tool calls, RAG retrievals, match scores, and interview question generation.
          </p>
        </div>

        <button
          id="run-agent-simulation-btn"
          onClick={handleRunAgent}
          disabled={isRunning}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
        >
          {isRunning ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Agent Executing...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Run AI Screening Agent</span>
            </>
          )}
        </button>
      </div>

      {/* Input Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column: Job Description */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-sm text-slate-900">1. Select Target Job Description</h3>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">Role Profile</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {SAMPLE_JOBS.map(job => (
              <button
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                className={`p-3 rounded-xl text-left text-xs border transition-all ${
                  selectedJobId === job.id
                    ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="font-semibold">{job.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{job.experienceRequired}</div>
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs space-y-2">
            <div>
              <span className="font-semibold text-slate-700">Required Skills: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {activeJob.requiredSkills.map(s => (
                  <span key={s} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-[11px] pt-1 border-t border-slate-200 leading-relaxed">
              {activeJob.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs text-slate-600">
            <span>Interview Cutoff Threshold:</span>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="50"
                max="90"
                value={threshold}
                onChange={e => setThreshold(Number(e.target.value))}
                className="w-24 accent-blue-600 cursor-pointer"
              />
              <span className="font-bold text-blue-600 font-mono">{threshold}%</span>
            </div>
          </div>
        </div>

        {/* Right Column: Candidate Resume */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              <h3 className="font-bold text-sm text-slate-900">2. Select Candidate Resume</h3>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[11px]">
              <button
                onClick={() => setIsCustomResume(false)}
                className={`px-2 py-0.5 rounded-md ${!isCustomResume ? 'bg-white shadow-xs font-semibold text-slate-800' : 'text-slate-500'}`}
              >
                Presets
              </button>
              <button
                onClick={() => {
                  setIsCustomResume(true);
                  if (!customResume) setCustomResume(activeCandidate.fullText);
                }}
                className={`px-2 py-0.5 rounded-md ${isCustomResume ? 'bg-white shadow-xs font-semibold text-slate-800' : 'text-slate-500'}`}
              >
                Custom Paste
              </button>
            </div>
          </div>

          {!isCustomResume ? (
            <div className="grid grid-cols-3 gap-2">
              {SAMPLE_CANDIDATES.map(cand => (
                <button
                  key={cand.id}
                  onClick={() => setSelectedCandidateId(cand.id)}
                  className={`p-2.5 rounded-xl text-left text-xs border transition-all ${
                    selectedCandidateId === cand.id
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 font-semibold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="truncate font-semibold">{cand.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{cand.role}</div>
                  <div className="text-[10px] text-indigo-600 mt-1">{cand.experienceYears}y exp</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-xs text-slate-500">
              Type or paste any candidate resume text below:
            </div>
          )}

          <div className="relative">
            <textarea
              value={resumeTextToUse}
              onChange={e => {
                setIsCustomResume(true);
                setCustomResume(e.target.value);
              }}
              rows={6}
              className="w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none leading-relaxed"
              placeholder="Paste candidate resume text here..."
            />
          </div>

          {!isCustomResume && (
            <div className="flex flex-wrap gap-1 text-[11px]">
              <span className="text-slate-500 mr-1">Skills found:</span>
              {activeCandidate.skills.slice(0, 5).map(s => (
                <span key={s} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                  {s}
                </span>
              ))}
              {activeCandidate.skills.length > 5 && (
                <span className="text-slate-400">+{activeCandidate.skills.length - 5} more</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Execution Trace (Agent & Tool Activity) */}
      {executionSteps.length > 0 && (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Agent Reasoning & Tool Execution Trace
              </h4>
            </div>
            {isRunning && (
              <span className="text-xs text-emerald-400 flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Step {currentStep}/6 in progress...
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {executionSteps.map(step => (
              <div 
                key={step.stepNumber}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 space-y-1 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-blue-400 font-semibold uppercase">
                    Step {step.stepNumber} • {step.toolName || step.type}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{step.timestamp}</span>
                </div>
                <div className="font-semibold text-slate-100">{step.title}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{step.detail}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Dashboard (Rendered when Agent Completes) */}
      {result && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg transition-all">
          {/* Top Score Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 p-6 text-white border-b border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    result.recommendation === 'STRONG HIRE' || result.recommendation === 'SHORTLIST FOR INTERVIEW'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : result.recommendation === 'FURTHER REVIEW'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {result.recommendation}
                  </span>
                  <span className="text-xs text-slate-400">
                    Role: {activeJob.title}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Screening Assessment: {isCustomResume ? 'Candidate' : activeCandidate.name}
                </h3>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Match Score</div>
                  <div className="text-2xl font-black text-white font-mono">
                    {result.overallScore}%
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-emerald-400 flex items-center justify-center font-bold text-sm">
                  {result.overallScore >= threshold ? '✓' : '!'}
                </div>
              </div>
            </div>

            {/* Metric Meters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-800 text-xs">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Skill Alignment</span>
                  <span className="font-mono font-bold">{result.skillsMatchScore}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: `${result.skillsMatchScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Experience Adequacy</span>
                  <span className="font-mono font-bold">{result.experienceScore}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: `${result.experienceScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Culture & Project Match</span>
                  <span className="font-mono font-bold">{result.cultureFitScore}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${result.cultureFitScore}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Results Navigation Tabs */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveResultTab('questions')}
              className={`py-3 px-3 border-b-2 text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeResultTab === 'questions'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tailored Interview Questions ({result.tailoredQuestions.length})</span>
            </button>

            <button
              onClick={() => setActiveResultTab('skills')}
              className={`py-3 px-3 border-b-2 text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeResultTab === 'skills'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Skill Matrix & Gaps</span>
            </button>

            <button
              onClick={() => setActiveResultTab('email')}
              className={`py-3 px-3 border-b-2 text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeResultTab === 'email'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Draft Recruiter Email</span>
            </button>

            <button
              onClick={() => setActiveResultTab('rag')}
              className={`py-3 px-3 border-b-2 text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeResultTab === 'rag'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>RAG Retrieved Chunks</span>
            </button>
          </div>

          {/* Tab 1: Tailored Interview Questions with Rubric */}
          {activeResultTab === 'questions' && (
            <div className="p-5 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 text-xs text-blue-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Dynamically Formulated by Agent</div>
                  <div className="text-blue-700 text-[11px] mt-0.5">
                    These interview questions were generated based on this specific candidate&apos;s verified skills vs identified gaps in the JD.
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {result.tailoredQuestions.map((q, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded text-[11px]">
                        [{q.category}] • Targeted Focus: {q.targetedGap}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">Q#{idx + 1}</span>
                    </div>

                    <div className="font-semibold text-slate-900 text-sm">
                      {q.question}
                    </div>

                    <div className="bg-white border border-slate-200 p-2.5 rounded-lg text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-700">Expected Candidate Answer: </span>
                      {q.expectedAnswer}
                    </div>

                    <div className="pt-1">
                      <div className="text-[11px] font-semibold text-slate-700 mb-1">Scoring Rubric:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[10px] text-slate-600">
                        {q.rubricPoints.map((rubric, rIdx) => (
                          <div key={rIdx} className="bg-white border border-slate-200 p-1.5 rounded">
                            {rubric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Skill Matrix */}
          {activeResultTab === 'skills' && (
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Matched Skills ({result.matchedSkills.length})</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.matchedSkills.map(s => (
                    <span key={s} className="bg-emerald-100 text-emerald-800 font-medium px-2.5 py-1 rounded-md text-xs border border-emerald-200">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Missing Gaps to Probe ({result.missingSkills.length})</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.missingSkills.length > 0 ? (
                    result.missingSkills.map(s => (
                      <span key={s} className="bg-amber-100 text-amber-800 font-medium px-2.5 py-1 rounded-md text-xs border border-amber-200">
                        ⚠ {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 italic">No skill gaps detected! 100% match.</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: HR Email Draft */}
          {activeResultTab === 'email' && (
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">
                  Auto-Drafted Candidate Communication
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                {result.decisionEmail}
              </div>
            </div>
          )}

          {/* Tab 4: RAG Chunks */}
          {activeResultTab === 'rag' && (
            <div className="p-5 space-y-3">
              <div className="text-xs text-slate-600 mb-2">
                Top semantic vector chunks retrieved by the RAG cosine engine to ground the candidate analysis:
              </div>
              <div className="space-y-2.5">
                {result.ragRetrievedContexts.map((chunk, cIdx) => (
                  <div key={cIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="font-semibold text-slate-700">{chunk.source}</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Cosine Similarity: {(chunk.similarity * 100).toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-slate-700 text-xs italic">
                      &quot;{chunk.text}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
