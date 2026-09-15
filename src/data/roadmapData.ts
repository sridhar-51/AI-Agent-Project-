import { DayRoadmapItem, VivaQuestion } from '../types';

export const FIVE_DAY_ROADMAP: DayRoadmapItem[] = [
  {
    day: 1,
    title: 'Project Selection & Architecture Setup',
    focus: 'Define schema, install Python dependencies, set up virtual environment and problem statement.',
    deliverables: [
      'Finalize Project #2: AI HR Recruitment Assistant',
      'Create virtual environment (venv) and install requirements.txt',
      'Design project folder structure (app.py, agent.py, tools.py, rag_engine.py)',
      'Prepare 3 realistic sample resumes & 2 job descriptions (JDs)'
    ],
    milestoneCode: 'pip install streamlit faiss-cpu python-dotenv pydantic google-genai',
    tips: 'Ensure your Python version is 3.10 or higher. Keep sample resumes formatted with clear Skills and Experience headers.',
    tamilTip: 'Day 1-la project select panni requirements.txt install pannidunga. Sample resume text files ready panni vachukkonga.'
  },
  {
    day: 2,
    title: 'RAG Pipeline & Vector Search',
    focus: 'Build document chunking, embeddings generation, and vector cosine similarity search.',
    deliverables: [
      'Implement text chunker with sliding window overlap in rag_engine.py',
      'Build semantic similarity indexing for resumes & job descriptions',
      'Verify top-3 relevant context chunks retrieval for query matching',
      'Test vector cosine similarity math on sample resumes'
    ],
    milestoneCode: 'rag_engine.search_matching_context(query="required skills", top_k=3)',
    tips: 'Explain to mentors why chunking with overlap (e.g., 150 words with 30 word overlap) prevents losing context at boundary lines.',
    tamilTip: 'Day 2-la RAG pipeline mudikanum. Resume and JD-ai chunks-aa pirithu vector similarity calculate panni relevant lines-ai edukkanum.'
  },
  {
    day: 3,
    title: 'Tool Engineering & Structured Outputs',
    focus: 'Develop specialized tools for Resume Parsing, Match Scoring, and Interview Rubrics.',
    deliverables: [
      'Build parse_resume_text() to extract names, years of exp, and tech skills',
      'Build calculate_match_score() with weighted skill & experience formula',
      'Build generate_interview_questions() targeting missing candidate skills',
      'Build draft_decision_email() for personalized candidate communication'
    ],
    milestoneCode: 'def generate_interview_questions(candidate_skills, missing_skills): ...',
    tips: 'Ensure all tools return typed dictionary outputs with clear key names for the Agent to parse.',
    tamilTip: 'Day 3-la Agent use panna pora Tools ready pannidunga: Parsing tool, Match score calculator, Interview question maker.'
  },
  {
    day: 4,
    title: 'Agent Reasoning Loop & Session Memory',
    focus: 'Connect the Agent loop (ReAct / Tool Calling) and session memory for multi-step execution.',
    deliverables: [
      'Implement HRRecruitmentAgent coordinator in agent.py',
      'Wire tool execution flow: Parse -> RAG -> Score -> Question Gen -> Verdict',
      'Implement memory buffer storing evaluated candidate histories',
      'Add threshold logic (e.g. 75%+ for Shortlist, below for Review/Reject)'
    ],
    milestoneCode: 'result = agent.evaluate_candidate(resume_text, jd_text, threshold=75)',
    tips: 'This is where you demonstrate the difference between a simple script and an Agent! Show the step-by-step reasoning logs.',
    tamilTip: 'Day 4-la Agent orchestrator ready panni, tool calling and decision making connect pannunga. Memory-la past scores save aaganum.'
  },
  {
    day: 5,
    title: 'Interactive Web UI, Final Pitch & Viva Defense',
    focus: 'Build Streamlit frontend, generate presentation slides, and rehearse viva defense answers.',
    deliverables: [
      'Launch interactive Streamlit dashboard (streamlit run app.py)',
      'Add visual metric cards, radar progress bars, and tabs for questions & emails',
      'Create 5-slide project presentation deck',
      'Rehearse Viva Q&A with faculty and industry mentors'
    ],
    milestoneCode: 'streamlit run app.py  # Opens localhost:8501',
    tips: 'In your final demo, run 2 candidates: one high-match (88%) and one moderate-match (60%) to demonstrate dynamic adaptive interview questions!',
    tamilTip: 'Day 5 final day! Streamlit UI run panni, evaluators munadi demo kaattunga. Rendu candidate vachu test panni kaatuna full marks confirm!'
  }
];

export const VIVA_QUESTIONS: VivaQuestion[] = [
  {
    question: 'Why did you choose the AI HR Recruitment Assistant project over the other use cases?',
    questionTamil: 'Matha project-ai vida en AI HR Recruitment Assistant project select panneenga?',
    answer: 'The AI HR Recruitment Assistant is an end-to-end enterprise solution combining all three essential agent pillars: Autonomous Agent decision making, RAG semantic vector search over long PDF resumes, and multi-tool orchestration (resume parser, match scoring, interview rubric generator). It has high quantifiable business value and immediate visual demonstration impact.',
    answerTamil: 'Idhula Agent, Tools, and RAG moondrumae complete-aa implement aagi irukku. Live demo-la resume match score (0-100%) and candidate gaps-ku dynamic interview questions generate aavadhu judges and evaluators-ku romba impressive-aa irukkum.',
    conceptTag: 'Project Justification'
  },
  {
    question: 'What is the fundamental difference between an Agent and standard RAG in your project?',
    questionTamil: 'Unga project-la Agent-kum normal RAG-kum enna difference?',
    answer: 'RAG only retrieves semantically similar text chunks from the Job Description and Resume. The Agent is the autonomous brain that plans the workflow, calls specialized tools (parsing skills, computing scores), inspects missing qualifications, and decides whether the candidate qualifies for an interview or needs further review.',
    answerTamil: 'RAG vanthu just relevant text-ai thedi edukka mattum thaan seiyum. Aana Agent thaan "Endha tool-ai eppo call pannanum? Candidate shortlist aavara illaya? Enna interview questions kekkanum?" nu autonomous-aa decide pannum.',
    conceptTag: 'Agent vs RAG'
  },
  {
    question: 'How do you handle hallucinations when the agent evaluates candidate resumes?',
    questionTamil: 'Agent thappa candidate pathi poi sollaama irukka (hallucination) eppadi handle panneenga?',
    answer: 'We enforce strict grounding via RAG and deterministic extraction tools. Skills are verified against explicit resume token matches, and the interview questions are generated with explicit source rubrics linked directly to missing JD requirements rather than open-ended hallucination.',
    answerTamil: 'Strict RAG grounding and deterministic regex/tool extraction use pannom. Resume-la illadha skills-ai agent assume pannaadha maadhiri system prompt constraints and validation rules set pannirukkom.',
    conceptTag: 'AI Safety & Grounding'
  },
  {
    question: 'How does tool calling work in Python for this project?',
    questionTamil: 'Python-la Tool Calling eppadi work aaguthu?',
    answer: 'Each tool is a typed Python function with defined inputs and schemas. The Agent coordinator inspects the input state, determines which tool to execute (e.g., parse_resume_text, calculate_match_score), executes the function with arguments, and uses the output to determine the next action in the loop.',
    answerTamil: 'Ovvoru tool-um oru Python function. Agent input-ai paarthu thevaiyana function-ai parameters-oda call panni, adhoda output-ai vachu adutha step-ku pogum.',
    conceptTag: 'Tool Calling'
  },
  {
    question: 'Why did you select Streamlit for the user interface?',
    questionTamil: 'UI-ku en Streamlit select panneenga?',
    answer: 'Streamlit allows rapid prototyping of data-dense AI workflows directly in Python. It supports instant metric cards, tabs, file uploaders, and real-time execution status spinners without requiring separate frontend boilerplate.',
    answerTamil: 'Streamlit python-laye fast-aa interactive web app build panna best framework. File upload, metrics, and agent execution status kaatta romba easy.',
    conceptTag: 'Frontend Tech'
  }
];
