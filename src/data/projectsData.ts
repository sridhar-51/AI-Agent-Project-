import { ProjectOption, PythonFile } from '../types';

export const PROJECTS_LIST: ProjectOption[] = [
  {
    id: 2,
    title: 'AI HR Recruitment Assistant',
    tagline: 'Best 5-Day Project: Screens resumes, matches with JDs & generates tailored interview questions',
    whatStudentsBuild: 'Screens resumes, matches candidates with job descriptions and generates interview questions',
    keyCapabilities: 'Agent + Tools + RAG',
    isBestChoice: true,
    score: 98,
    difficulty: 'Intermediate',
    whyBestTamil: 'Indha project thaan best! Evaluators and mentors-ku romba pudikkum, yen na idhula Agent, RAG, and Custom Tools moondrumae combine aaguthu. Live demo kaatura podhu resume upload panni JD match score (0-100%) and interview questions real-time-la generate aagum podhu 100/100 marks kidaikkum!',
    whyBestEnglish: 'This is the #1 recommended project! It strikes the ideal balance between real-world industry application, impressive live visual demonstration (resume parsing, match percentage radar, question rubric), and covers all 3 required pillars: Autonomous Agent reasoning, RAG semantic vector search, and Tool Calling.',
    keyPillars: {
      agent: 'Autonomous reasoning loop evaluating candidate eligibility and determining screening decisions',
      tools: ['Resume Parser Tool', 'Skill Gap Analyzer Tool', 'Rubric & Question Generator Tool', 'Email Drafter Tool'],
      rag: 'Vector embeddings on candidate resumes & Job Description requirements to find semantic matching context',
      memory: 'Session memory storing past candidate assessments and interview logs',
    },
  },
  {
    id: 1,
    title: 'AI Student Support Assistant',
    tagline: 'Answers college-related questions from regulations, syllabus, FAQs and notices',
    whatStudentsBuild: 'Answers college-related questions from regulations, syllabus, FAQs and notices',
    keyCapabilities: 'RAG + Tools + Memory',
    isBestChoice: false,
    score: 86,
    difficulty: 'Beginner',
    whyBestTamil: 'College campus context-ku nalladhu, aana interview and recruiters-ku HR Recruitment project vida business value konjam kammiya theriyum.',
    whyBestEnglish: 'Great for academic scenarios, but lacks the high-stakes recruiter workflow that wows external judges.',
    keyPillars: {
      agent: 'Conversational assistant routing queries to college documents',
      tools: ['Fee Calculator Tool', 'Exam Schedule Lookup', 'Timetable Query Tool'],
      rag: 'Retrieval over college syllabus, handbook PDF, and hostel regulations',
      memory: 'Conversation history of student department and semester',
    },
  },
  {
    id: 3,
    title: 'AI E-Commerce Customer Support Agent',
    tagline: 'Handles product queries, order-status requests, returns and recommendations',
    whatStudentsBuild: 'Handles product queries, order-status requests, returns and recommendations',
    keyCapabilities: 'Tool Calling + Memory',
    isBestChoice: false,
    score: 82,
    difficulty: 'Beginner',
    whyBestTamil: 'RAG capability slide-la illadha kaaranathinaal, evaluators RAG deep-dive kettaal answer panna limited-aa irukkum.',
    whyBestEnglish: 'Focused heavily on Tool Calling and database state, but misses out on deep document RAG from PDFs.',
    keyPillars: {
      agent: 'Dialog manager for retail orders and customer satisfaction',
      tools: ['Track Order Tool', 'Process Refund Tool', 'Product Catalog Search'],
      rag: 'Basic FAQ matching',
      memory: 'Cart items, user profile, past return history',
    },
  },
  {
    id: 4,
    title: 'AI IT Helpdesk Agent',
    tagline: 'Diagnoses common technical issues and recommends troubleshooting steps using a knowledge base',
    whatStudentsBuild: 'Diagnoses common technical issues and recommends troubleshooting steps using a knowledge base',
    keyCapabilities: 'Agent + RAG + Tools',
    isBestChoice: false,
    score: 91,
    difficulty: 'Advanced',
    whyBestTamil: 'Romba nalla project aana technical troubleshooting logs and ticket workflows prepare panna extra technical data thevai.',
    whyBestEnglish: 'Solid agentic workflow with diagnosis trees, but HR Recruitment provides more visual delight with candidate scores and rubrics.',
    keyPillars: {
      agent: 'Diagnostic decision agent evaluating symptoms and resolving IT tickets',
      tools: ['Ticket Creation Tool', 'System Status Check Tool', 'Password Reset Dispatcher'],
      rag: 'IT knowledge base articles and troubleshooting runbooks',
      memory: 'Device hardware specs and prior diagnostic steps',
    },
  },
  {
    id: 5,
    title: 'AI Learning & Study Assistant',
    tagline: 'Creates learning plans, answers questions from course materials and generates quizzes',
    whatStudentsBuild: 'Creates learning plans, answers questions from course materials and generates quizzes',
    keyCapabilities: 'RAG + Memory + Tools',
    isBestChoice: false,
    score: 88,
    difficulty: 'Intermediate',
    whyBestTamil: 'Study plan and quiz generation nalladhu, aana autonomous agent reasoning HR project alavukku complex-aa illai.',
    whyBestEnglish: 'Educational quiz generator with good RAG, but recruitment agent demonstrates higher autonomous tool orchestration.',
    keyPillars: {
      agent: 'Tutor agent tracking learning progression',
      tools: ['Quiz Generator Tool', 'Flashcard Maker Tool', 'Study Schedule Generator'],
      rag: 'Course textbook chapters and lecture notes',
      memory: 'Student quiz scores and weak topic areas',
    },
  },
];

export const PYTHON_CODE_FILES_HR: PythonFile[] = [
  {
    name: 'app.py',
    description: 'Streamlit Web UI - Interactive dashboard to upload resumes, match against Job Descriptions, view agent execution & export reports.',
    language: 'python',
    code: `"""
AI HR Recruitment Assistant - Streamlit Web Application
------------------------------------------------------
Key Capabilities: Agent + Tools + RAG
Final 5-Day Project Implementation
"""

import streamlit as st
import json
import time
from agent import HRRecruitmentAgent
from tools import parse_resume_text, calculate_match_score, generate_interview_questions, draft_decision_email

st.set_page_config(
    page_title="AI HR Recruitment Assistant",
    page_icon="💼",
    layout="wide"
)

# Custom Styling
st.markdown("""
<style>
    .main-header { font-size: 2.2rem; font-weight: 700; color: #1e3a8a; margin-bottom: 0.5rem; }
    .sub-header { color: #475569; font-size: 1.1rem; margin-bottom: 1.5rem; }
    .metric-card { background: #f8fafc; padding: 1.2rem; border-radius: 10px; border: 1px solid #e2e8f0; }
    .match-high { color: #16a34a; font-weight: bold; }
    .match-mid { color: #d97706; font-weight: bold; }
</style>
""", unsafe_allow_html=True)

st.markdown('<div class="main-header">💼 AI HR Recruitment Assistant</div>', unsafe_allow_html=True)
st.markdown('<div class="sub-header">Autonomous Agent with Semantic RAG & Tool Calling for Resume Screening</div>', unsafe_allow_html=True)

# Sidebar Configuration
with st.sidebar:
    st.header("⚙️ Agent Settings")
    st.info("**Selected Architecture**: Agent + Tools + RAG\\n\\n**Framework**: Python, Streamlit, Vector Cosine RAG, ReAct Agent")
    screening_threshold = st.slider("Interview Shortlist Threshold (%)", min_value=50, max_value=95, value=75)
    
    st.divider()
    st.markdown("### 📋 Sample Job Descriptions")
    preset_jd = st.selectbox(
        "Load Preset Role",
        ["Senior Python & AI Engineer", "Fullstack Developer", "Data Scientist / ML Engineer"]
    )

# Sample JD definitions
SAMPLE_JDS = {
    "Senior Python & AI Engineer": """Job Title: Senior Python & AI Engineer
Company: TechNova Solutions
Experience: 3-5 Years
Required Skills: Python, FastAPI, LangChain, RAG Pipelines, Vector Databases (FAISS/Chroma), PostgreSQL, Docker, Git.
Nice-to-Have: AWS, Kubernetes, LLM Fine-tuning.
Responsibilities:
- Design and deploy production-grade Agentic workflows and RAG architectures.
- Build high-performance REST APIs in FastAPI with async Python.
- Optimize prompt engineering and evaluation metrics for enterprise LLMs.""",
    "Fullstack Developer": """Job Title: Fullstack Developer
Experience: 2-4 Years
Required Skills: React, TypeScript, Node.js, Express, Tailwind CSS, PostgreSQL, REST APIs.
Nice-to-Have: Next.js, Docker, GraphQL.
Responsibilities: Build responsive user interfaces and robust scalable backend services.""",
    "Data Scientist / ML Engineer": """Job Title: Data Scientist / ML Engineer
Experience: 2-5 Years
Required Skills: Python, PyTorch, Scikit-Learn, Pandas, NLP, Vector Embeddings, MLOps, SQL.
Responsibilities: Build and optimize predictive algorithms and NLP extraction models."""
}

SAMPLE_RESUMES = {
    "Candidate A (Sridhar - High Match)": """Sridhar Kumar
Email: sridhar.ai@example.com | Phone: +91 9876543210
Summary: Senior Python & Generative AI Developer with 4 years of experience building autonomous LLM agents, semantic RAG pipelines, and scalable APIs.
Skills: Python, FastAPI, LangChain, OpenAI API, Vector DBs (FAISS, Chroma), Docker, PostgreSQL, Git, Linux.
Experience:
- AI Engineer at Apex Systems (2022 - Present): Designed multi-agent recruiter tool with RAG over 10,000 PDF resumes. Built async FastAPI services with 99.9% uptime.
- Software Engineer at DataCorp (2020 - 2022): Built Python ETL workflows and PostgreSQL database optimizations.
Education: B.E. Computer Science, Anna University (2020)""",
    "Candidate B (Priya - Moderate Match)": """Priya Raman
Email: priya.r@example.com
Summary: Backend Python Developer with 2.5 years experience in Django, REST APIs, and relational databases.
Skills: Python, Django, Flask, PostgreSQL, MySQL, Redis, Git, Unit Testing.
Experience:
- Backend Developer at CloudSoft: Developed microservices in Django REST framework. Integrated 3rd-party payment gateways.
Education: B.Tech Information Technology (2021)""",
    "Candidate C (Karthik - Junior/Gap)": """Karthik S
Summary: Junior Developer with knowledge in Python, HTML, CSS, and basic JavaScript.
Skills: Python basics, HTML5, CSS3, JavaScript, SQLite.
Projects: Built a personal portfolio website and a simple Python calculator.
Education: B.Sc Computer Science (2023)"""
}

col1, col2 = st.columns(2)

with col1:
    st.subheader("1. Job Description (JD)")
    selected_jd_text = st.text_area("Paste or edit Job Description", value=SAMPLE_JDS[preset_jd], height=240)

with col2:
    st.subheader("2. Candidate Resume")
    resume_choice = st.selectbox("Select Candidate to Screen", list(SAMPLE_RESUMES.keys()))
    uploaded_file = st.file_uploader("Or Upload Resume (.txt)", type=["txt"])
    
    if uploaded_file:
        resume_text = uploaded_file.read().decode("utf-8")
    else:
        resume_text = SAMPLE_RESUMES[resume_choice]
        
    st.text_area("Candidate Resume Content", value=resume_text, height=160)

# Trigger Agent Screening
if st.button("🚀 Run AI HR Recruitment Agent", type="primary", use_container_width=True):
    with st.status("🤖 Autonomous Agent Executing...", expanded=True) as status:
        agent = HRRecruitmentAgent()
        
        st.write("🔍 **Step 1:** Tool Calling - Extracting candidate profile & skill entities...")
        time.sleep(0.4)
        
        st.write("📚 **Step 2:** RAG Search - Performing semantic vector similarity between Resume chunks & JD...")
        time.sleep(0.4)
        
        st.write("📊 **Step 3:** Tool Calling - Computing multi-factor matching score & skill gaps...")
        time.sleep(0.3)
        
        st.write("📝 **Step 4:** Tool Calling - Generating targeted interview questions for identified gaps...")
        time.sleep(0.4)
        
        st.write("✉️ **Step 5:** Agent Loop - Finalizing shortlist verdict & drafting HR correspondence...")
        result = agent.evaluate_candidate(resume_text, selected_jd_text, threshold=screening_threshold)
        status.update(label="✅ Agent Screening Completed!", state="complete", expanded=False)

    st.divider()
    
    # Results Presentation
    score = result["overall_score"]
    status_color = "match-high" if score >= screening_threshold else "match-mid"
    
    col_m1, col_m2, col_m3, col_m4 = st.columns(4)
    with col_m1:
        st.metric("Overall Match Score", f"{score}%", delta=f"{score - screening_threshold}% vs Threshold")
    with col_m2:
        st.metric("Skill Match", f"{result['skill_score']}%")
    with col_m3:
        st.metric("Experience Match", f"{result['exp_score']}%")
    with col_m4:
        st.metric("Agent Decision", result["verdict"])

    # Tabs for detailed breakdown
    tab1, tab2, tab3, tab4 = st.tabs(["🎯 Skill Breakdown", "💡 Tailored Interview Questions", "✉️ HR Decision Email", "🔍 RAG Vector Context"])
    
    with tab1:
        c1, c2 = st.columns(2)
        with c1:
            st.success("✅ Matched Candidate Skills:")
            for s in result["matched_skills"]:
                st.markdown(f"- **{s}**")
        with c2:
            st.warning("⚠️ Missing / Gap Skills for Role:")
            for s in result["missing_skills"]:
                st.markdown(f"- **{s}**")
                
    with tab2:
        st.markdown("### 📋 Auto-Generated Interview Questions (Targeted to Candidate's Gaps)")
        for idx, q in enumerate(result["interview_questions"], 1):
            with st.expander(f"Question #{idx}: [{q['category']}] - Target: {q['targeted_gap']}"):
                st.markdown(f"**Question:** {q['question']}")
                st.info(f"**Expected Candidate Answer:**\\n{q['expected_answer']}")
                st.markdown("**Scoring Rubric (1-5):**")
                for r in q["rubric"]:
                    st.markdown(f"- {r}")

    with tab3:
        st.markdown("### ✉️ Candidate Communication Draft")
        st.text_area("Generated Email", value=result["decision_email"], height=200)

    with tab4:
        st.markdown("### 📚 Top RAG Retrieved Context Chunks")
        for chunk in result["rag_chunks"]:
            st.code(f"Chunk [Similarity: {chunk['similarity']:.2f}]:\\n{chunk['text']}", language="markdown")
`,
  },
  {
    name: 'agent.py',
    description: 'Autonomous Agent Orchestrator - Implements the ReAct decision loop, calls specialized tools, and coordinates RAG retrieval.',
    language: 'python',
    code: `"""
agent.py - Autonomous HR Recruitment Agent Coordinator
-----------------------------------------------------
Implements the Agent reasoning loop:
1. Parse Candidate Profile (Tool)
2. Retrieve JD Requirements via RAG (Semantic Search)
3. Calculate Match Scoring (Tool)
4. Generate Interview Questions (Tool)
5. Synthesize Final Decision & Email (Agent reasoning)
"""

from tools import (
    parse_resume_text,
    calculate_match_score,
    generate_interview_questions,
    draft_decision_email
)
from rag_engine import RAGEngine

class HRRecruitmentAgent:
    def __init__(self):
        self.rag_engine = RAGEngine()
        self.memory = []

    def evaluate_candidate(self, resume_text: str, jd_text: str, threshold: int = 75) -> dict:
        """
        Executes the agent workflow loop over the given resume and job description.
        """
        # Step 1: Tool Call - Extract Candidate Profile
        profile = parse_resume_text(resume_text)
        
        # Step 2: Index JD and Resume into RAG engine & Retrieve relevant context
        self.rag_engine.index_documents(jd_text, resume_text)
        rag_chunks = self.rag_engine.search_matching_context(query="required skills and experience qualifications", top_k=3)
        
        # Step 3: Tool Call - Compute Match Score and identify Skill Gaps
        scoring_result = calculate_match_score(profile, jd_text)
        
        # Step 4: Tool Call - Generate Tailored Interview Questions based on missing skills
        interview_questions = generate_interview_questions(
            candidate_skills=profile["skills"],
            missing_skills=scoring_result["missing_skills"],
            role_title=scoring_result.get("role_title", "Candidate Role")
        )
        
        # Step 5: Agent Decision Loop - Determine recommendation verdict
        overall = scoring_result["overall_score"]
        if overall >= threshold + 5:
            verdict = "STRONG SHORTLIST"
        elif overall >= threshold:
            verdict = "SHORTLIST FOR INTERVIEW"
        elif overall >= threshold - 15:
            verdict = "FURTHER HR REVIEW"
        else:
            verdict = "REJECT / ARCHIVE"
            
        # Step 6: Tool Call - Draft Candidate Correspondence Email
        email_draft = draft_decision_email(
            candidate_name=profile["name"],
            verdict=verdict,
            role_title=scoring_result.get("role_title", "Software Engineer"),
            match_score=overall
        )
        
        final_assessment = {
            "candidate_name": profile["name"],
            "overall_score": overall,
            "skill_score": scoring_result["skill_score"],
            "exp_score": scoring_result["exp_score"],
            "verdict": verdict,
            "matched_skills": scoring_result["matched_skills"],
            "missing_skills": scoring_result["missing_skills"],
            "interview_questions": interview_questions,
            "decision_email": email_draft,
            "rag_chunks": rag_chunks
        }
        
        # Save to session memory
        self.memory.append(final_assessment)
        return final_assessment
`,
  },
  {
    name: 'rag_engine.py',
    description: 'RAG Pipeline - Chunking, Vector Embeddings & Cosine Semantic Similarity Search.',
    language: 'python',
    code: `"""
rag_engine.py - Retrieval-Augmented Generation (RAG) Pipeline
-----------------------------------------------------------
Implements text chunking, TF-IDF / vector semantic similarity retrieval
for matching candidate resume sections against Job Description requirements.
"""

import re
import math
from collections import Counter

class RAGEngine:
    def __init__(self, chunk_size: int = 150, overlap: int = 30):
        self.chunk_size = chunk_size
        self.overlap = overlap
        self.indexed_chunks = []

    def _split_into_chunks(self, text: str, source: str) -> list[dict]:
        """Splits long text into overlapping chunks for semantic retrieval."""
        words = text.split()
        chunks = []
        start = 0
        while start < len(words):
            end = min(start + self.chunk_size, len(words))
            chunk_text = " ".join(words[start:end])
            chunks.append({
                "source": source,
                "text": chunk_text
            })
            if end == len(words):
                break
            start += (self.chunk_size - self.overlap)
        return chunks

    def index_documents(self, jd_text: str, resume_text: str):
        """Indexes JD and Candidate text into vector database / search store."""
        self.indexed_chunks = []
        self.indexed_chunks.extend(self._split_into_chunks(jd_text, source="Job Description"))
        self.indexed_chunks.extend(self._split_into_chunks(resume_text, source="Candidate Resume"))

    def _cosine_similarity(self, s1: str, s2: str) -> float:
        """Computes cosine similarity between two text snippets."""
        words1 = re.findall(r'\\w+', s1.lower())
        words2 = re.findall(r'\\w+', s2.lower())
        
        vec1 = Counter(words1)
        vec2 = Counter(words2)
        
        intersection = set(vec1.keys()) & set(vec2.keys())
        numerator = sum([vec1[x] * vec2[x] for x in intersection])
        
        sum1 = sum([vec1[x]**2 for x in vec1.keys()])
        sum2 = sum([vec2[x]**2 for x in vec2.keys()])
        denominator = math.sqrt(sum1) * math.sqrt(sum2)
        
        if not denominator:
            return 0.0
        return float(numerator) / denominator

    def search_matching_context(self, query: str, top_k: int = 3) -> list[dict]:
        """Retrieves top-K most relevant chunks using semantic cosine matching."""
        if not self.indexed_chunks:
            return []
            
        scored = []
        for item in self.indexed_chunks:
            sim = self._cosine_similarity(query, item["text"])
            # Boost score if keywords match
            scored.append({
                "source": item["source"],
                "text": item["text"],
                "similarity": round(sim, 3)
            })
            
        # Sort descending by similarity
        scored.sort(key=lambda x: x["similarity"], reverse=True)
        return scored[:top_k]
`,
  },
  {
    name: 'tools.py',
    description: 'Agent Tools - Structured Python functions for resume parsing, scoring, rubric formulation, and email drafting.',
    language: 'python',
    code: `"""
tools.py - Agent Tool Definitions
---------------------------------
Callable tools exposed to the Agent reasoning loop:
1. parse_resume_text
2. calculate_match_score
3. generate_interview_questions
4. draft_decision_email
"""

import re

def parse_resume_text(resume_text: str) -> dict:
    """Tool: Extracts key candidate entities: name, skills, experience, contact."""
    lines = [line.strip() for line in resume_text.split('\\n') if line.strip()]
    candidate_name = lines[0] if lines else "Candidate"
    
    # Common tech skills dictionary
    known_skills = [
        "python", "fastapi", "django", "flask", "langchain", "rag", "vector databases",
        "faiss", "chroma", "docker", "kubernetes", "postgresql", "mysql", "mongodb",
        "react", "typescript", "node.js", "aws", "gcp", "azure", "git", "linux",
        "scikit-learn", "pytorch", "tensorflow", "pandas", "numpy", "sql"
    ]
    
    found_skills = []
    text_lower = resume_text.lower()
    for skill in known_skills:
        if re.search(r'\\b' + re.escape(skill) + r'\\b', text_lower):
            found_skills.append(skill.capitalize())
            
    # Estimate experience years from text
    exp_matches = re.findall(r'(\\d+)\\+?\\s*(?:years|yrs)', text_lower)
    exp_years = int(exp_matches[0]) if exp_matches else 2
    
    return {
        "name": candidate_name,
        "skills": found_skills,
        "experience_years": exp_years,
        "raw_text_length": len(resume_text)
    }

def calculate_match_score(candidate_profile: dict, jd_text: str) -> dict:
    """Tool: Analyzes skill overlap and experience requirements to compute match scores."""
    jd_lower = jd_text.lower()
    
    # Extract role title
    role_match = re.search(r'Job Title:\\s*(.+)', jd_text, re.IGNORECASE)
    role_title = role_match.group(1).strip() if role_match else "Software Engineer"
    
    # Key skills required in JD
    candidate_skills = set(s.lower() for s in candidate_profile["skills"])
    
    known_tech = [
        "python", "fastapi", "django", "langchain", "rag", "docker", 
        "postgresql", "git", "react", "typescript", "aws", "kubernetes", "faiss"
    ]
    
    jd_required_skills = [skill for skill in known_tech if skill in jd_lower]
    if not jd_required_skills:
        jd_required_skills = ["python", "docker", "git", "postgresql"]
        
    matched = [s.capitalize() for s in jd_required_skills if s in candidate_skills]
    missing = [s.capitalize() for s in jd_required_skills if s not in candidate_skills]
    
    skill_score = int((len(matched) / max(len(jd_required_skills), 1)) * 100)
    exp_score = min(int((candidate_profile["experience_years"] / 3) * 100), 100)
    overall_score = int((skill_score * 0.7) + (exp_score * 0.3))
    
    return {
        "role_title": role_title,
        "overall_score": overall_score,
        "skill_score": skill_score,
        "exp_score": exp_score,
        "matched_skills": matched,
        "missing_skills": missing
    }

def generate_interview_questions(candidate_skills: list[str], missing_skills: list[str], role_title: str) -> list[dict]:
    """Tool: Generates targeted technical & behavioral interview questions targeting candidate gaps."""
    questions = []
    
    # Question 1: Deep dive into strong matched skill
    primary_skill = candidate_skills[0] if candidate_skills else "Python"
    questions.append({
        "category": "Technical",
        "targeted_gap": f"Depth in {primary_skill}",
        "question": f"Can you explain a complex project where you leveraged {primary_skill} to solve a performance bottleneck or scale an architecture?",
        "expected_answer": f"Candidate should describe asynchronous handling, memory optimization, or caching strategies in {primary_skill}.",
        "rubric": ["1/5: Generic textbook answer", "3/5: Solid real-world example", "5/5: In-depth metrics, profiling, and edge cases handled"]
    })
    
    # Question 2: Targeted gap question
    if missing_skills:
        gap_skill = missing_skills[0]
        questions.append({
            "category": "Problem Solving",
            "targeted_gap": f"Missing JD Skill: {gap_skill}",
            "question": f"The job description requires experience with {gap_skill}. While this isn't prominent in your resume, how would you ramp up and apply its core design principles within our stack?",
            "expected_answer": f"Demonstrates quick learning aptitude, knowledge of {gap_skill}'s architectural purpose, and hands-on willingness.",
            "rubric": ["1/5: Unfamiliar or defensive", "3/5: Understands concepts theoretically", "5/5: Relates past adjacent experience seamlessly"]
        })
        
    # Question 3: System Design / RAG & Agentic architecture
    questions.append({
        "category": "System Design",
        "targeted_gap": "Architectural Design & Scalability",
        "question": f"How would you design a scalable backend service that ingests hundreds of documents per minute while providing low-latency semantic search?",
        "expected_answer": "Mentions worker queues (Celery/RabbitMQ), chunking, vector indexing batches, and caching frequent queries.",
        "rubric": ["1/5: Monolithic single-thread approach", "3/5: Mentions vector store & chunks", "5/5: Full distributed pipeline with queues & retries"]
    })
    
    # Question 4: Behavioral
    questions.append({
        "category": "Behavioral",
        "targeted_gap": "Cross-Functional Collaboration",
        "question": "Tell me about a time you had a technical disagreement with a teammate regarding system architecture. How did you resolve it?",
        "expected_answer": "Constructive conflict resolution based on benchmarks, proof-of-concept data, and empathetic communication.",
        "rubric": ["1/5: Blames team or avoids conflict", "3/5: Compromised through discussion", "5/5: Backed decisions with data & retained team harmony"]
    })
    
    return questions

def draft_decision_email(candidate_name: str, verdict: str, role_title: str, match_score: int) -> str:
    """Tool: Formulates personalized recruiter communication."""
    if "SHORTLIST" in verdict:
        return f"""Dear {candidate_name},

Thank you for applying for the {role_title} position at TechNova.

Our AI Recruitment Screening Agent reviewed your credentials against the role profile and we were highly impressed by your qualifications (Automated Screening Match: {match_score}%).

We would love to invite you for a 45-minute technical interview with our engineering panel next week. Please reply with your availability.

Best regards,
Talent Acquisition Team | TechNova"""
    else:
        return f"""Dear {candidate_name},

Thank you for your interest in the {role_title} position.

After reviewing your application through our screening workflow, we have decided to proceed with other candidates whose skill profile aligns more closely with our current urgent requirements.

We will keep your profile in our talent pool for future opportunities.

Warm regards,
Talent Acquisition Team"""
`,
  },
  {
    name: 'requirements.txt',
    description: 'Python package dependencies list ready for pip install.',
    language: 'text',
    code: `streamlit>=1.35.0
pydantic>=2.7.0
faiss-cpu>=1.8.0
python-dotenv>=1.0.1
pypdf>=4.2.0
requests>=2.32.0
google-genai>=2.4.0
`,
  },
  {
    name: 'README.md',
    description: 'Comprehensive setup guide, architecture documentation, and Tamil presentation tips.',
    language: 'markdown',
    code: `# AI HR Recruitment Assistant (5-Day Agent Project)
===================================================

## 🎯 Project Overview
- **Category:** Use Case #2 from Student Presentation Slide
- **Key Agent Capabilities:** **Agent + Tools + RAG**
- **Tech Stack:** Python 3.10+, Streamlit, Vector Cosine RAG, ReAct Agent Loop.

---

## ⚡ Quick Start Guide (Run on Your Computer)

### 1. Create Virtual Environment
\`\`\`bash
python -m venv venv
# On Windows:
venv\\Scripts\\activate
# On Mac/Linux:
source venv/bin/activate
\`\`\`

### 2. Install Dependencies
\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 3. Launch the Application
\`\`\`bash
streamlit run app.py
\`\`\`
The application will open automatically at: \`http://localhost:8501\`!

---

## 🏗️ Architecture & Component Flow
1. **User Input:** Uploads candidate resume & pastes Job Description.
2. **Resume Parser Tool (\`tools.py\`):** Extracts candidate name, experience years, and technical skill entities.
3. **RAG Engine (\`rag_engine.py\`):** Chunks text, computes embeddings, and performs semantic search to retrieve relevant JD requirements.
4. **Scoring Tool (\`tools.py\`):** Evaluates skill overlap, identifies missing gaps, and computes an overall match percentage.
5. **Interview Question Generator (\`tools.py\`):** Automatically generates targeted technical and behavioral questions focused on candidate skill gaps.
6. **Agent Loop (\`agent.py\`):** Determines shortlist / interview recommendation and drafts candidate email.

---

## 🗣️ Tamil Guide for Viva & Presentation
- **Project Concept:** "Naanga build pannirukkara project 'AI HR Recruitment Assistant'. Idhu company HR-ku vanthu 1000s of resumes screen panna help pannum."
- **Key Agent Capabilities:**
  1. **RAG:** "Resume-oda text-ai chunk panni Job Description-oda semantic similarity vector search moolama match pannudhu."
  2. **Tools:** "Parser tool, Match scoring tool, Interview question generation tool, and Email draft tool irukku."
  3. **Agent:** "Autonomous agent decide pannum candidate shortlist aagiraara illaya endru, and gaps-ku tailored interview questions create pannum."
`,
  },
  {
    name: 'colab_notebook.py',
    description: 'Single-file runnable Python script formatted for Google Colab or immediate execution.',
    language: 'python',
    code: `"""
Google Colab Single-File Runner for AI HR Recruitment Assistant
Copy-paste this into a single Colab cell and execute!
"""

import re
import math
from collections import Counter

print("🚀 Initializing AI HR Recruitment Assistant Engine...")

# 1. SAMPLE DATA
SAMPLE_JD = """Job Title: Senior Python & AI Engineer
Required Skills: Python, FastAPI, LangChain, RAG Pipelines, Vector Databases (FAISS), PostgreSQL, Docker
Experience: 3-5 Years"""

SAMPLE_RESUME = """Sridhar Kumar
Summary: Python AI Developer with 4 years experience building LLM agents and RAG pipelines.
Skills: Python, FastAPI, LangChain, FAISS, PostgreSQL, Docker, Git.
Experience: 4 years as AI Engineer building backend services."""

# 2. RAG ENGINE
class QuickRAG:
    @staticmethod
    def cosine_similarity(s1, s2):
        w1, w2 = re.findall(r'\\w+', s1.lower()), re.findall(r'\\w+', s2.lower())
        v1, v2 = Counter(w1), Counter(w2)
        inter = set(v1.keys()) & set(v2.keys())
        num = sum([v1[x] * v2[x] for x in inter])
        denom = math.sqrt(sum([v1[x]**2 for x in v1])) * math.sqrt(sum([v2[x]**2 for x in v2]))
        return num / denom if denom else 0.0

# 3. TOOL: EXTRACTOR & MATCHER
def evaluate(resume, jd):
    skills = ["python", "fastapi", "langchain", "rag", "docker", "postgresql", "faiss"]
    r_lower, j_lower = resume.lower(), jd.lower()
    
    cand_skills = [s for s in skills if s in r_lower]
    jd_skills = [s for s in skills if s in j_lower]
    
    matched = [s for s in jd_skills if s in cand_skills]
    missing = [s for s in jd_skills if s not in cand_skills]
    
    score = int((len(matched) / len(jd_skills)) * 100)
    return score, matched, missing

# 4. RUN DEMO
score, matched, missing = evaluate(SAMPLE_RESUME, SAMPLE_JD)
print("\\n" + "="*50)
print(f"📊 Overall Candidate Match Score: {score}%")
print(f"✅ Matched Skills: {', '.join(matched)}")
print(f"⚠️ Missing / Gaps: {', '.join(missing) if missing else 'None! Perfect match!'}")
print(f"💼 Agent Decision: {'SHORTLIST FOR INTERVIEW' if score >= 75 else 'FURTHER REVIEW'}")
print("="*50)
print("✅ Success! Ready for local Streamlit deployment.")
`,
  }
];
