import { CandidateResume, JobDescription, ScreeningResult } from '../types';

export const SAMPLE_CANDIDATES: CandidateResume[] = [
  {
    id: 'cand-sridhar',
    name: 'Sridhar Kumar',
    role: 'Senior Python & AI Engineer',
    experienceYears: 4,
    education: 'B.E. Computer Science, Anna University (CGPA: 8.8)',
    summary: 'Senior Python & Generative AI Developer with 4 years of experience building autonomous LLM agents, semantic RAG pipelines, and scalable microservices.',
    skills: ['Python', 'FastAPI', 'LangChain', 'RAG Pipelines', 'FAISS', 'Vector Databases', 'Docker', 'PostgreSQL', 'Git', 'Linux'],
    projects: [
      'Multi-Agent Recruiter Screening Tool with RAG over 10,000 PDF resumes',
      'High-throughput Async FastAPI microservices handling 5,000 requests/sec',
      'Autonomous Code Review Agent with Gemini API integration'
    ],
    fullText: `Sridhar Kumar | sridhar.ai@example.com | Chennai, India
Summary: Senior Python & Generative AI Developer with 4 years of experience building autonomous LLM agents, semantic RAG pipelines, and scalable APIs.
Skills: Python, FastAPI, LangChain, RAG Pipelines, FAISS, Vector Databases, Docker, PostgreSQL, Git, Linux, PyTorch.
Experience:
- Senior AI Engineer at Apex Systems (2022 - Present): Designed multi-agent recruiter tool with RAG over 10,000 PDF resumes. Built async FastAPI services with 99.9% uptime. Reduced candidate screening turnaround by 75%.
- Python Software Engineer at DataCorp (2020 - 2022): Built Python ETL workflows, PostgreSQL database optimizations, and REST APIs.
Education: B.E. Computer Science, Anna University (2020)`
  },
  {
    id: 'cand-priya',
    name: 'Priya Raman',
    role: 'Backend Python Developer',
    experienceYears: 2.5,
    education: 'B.Tech Information Technology, SRM Institute (CGPA: 8.4)',
    summary: 'Backend Python Developer with 2.5 years experience in Django, REST APIs, PostgreSQL, and basic LLM integrations.',
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Redis', 'Git', 'REST APIs', 'Docker', 'Unit Testing'],
    projects: [
      'E-commerce Payment Gateway & Order Microservices in Django REST',
      'Customer Loyalty Loyalty Engine with PostgreSQL indexing',
      'Basic Document Search prototype using TF-IDF'
    ],
    fullText: `Priya Raman | priya.r@example.com | Bengaluru, India
Summary: Backend Python Developer with 2.5 years experience in Django, REST APIs, and relational databases.
Skills: Python, Django, Flask, PostgreSQL, Redis, Git, REST APIs, Docker, Unit Testing.
Experience:
- Backend Developer at CloudSoft (2022 - Present): Developed microservices in Django REST framework. Integrated 3rd-party payment gateways and Redis caching.
- Junior Python Developer at WebTech (2021 - 2022): Wrote automated unit tests and internal CRUD dashboards.
Education: B.Tech Information Technology, SRM (2021)`
  },
  {
    id: 'cand-karthik',
    name: 'Karthik S',
    role: 'Junior Fullstack Developer',
    experienceYears: 1,
    education: 'B.Sc Computer Science, Madras University (CGPA: 7.9)',
    summary: 'Recent graduate with 1 year hands-on experience in Python basics, HTML5, CSS3, JavaScript, and simple web utilities.',
    skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQLite', 'Git', 'React Basics'],
    projects: [
      'Personal Developer Portfolio Website',
      'Student Attendance Tracker in Python & SQLite',
      'Weather Forecast Widget with open API'
    ],
    fullText: `Karthik S | karthik.dev@example.com | Coimbatore, India
Summary: Junior Developer with knowledge in Python, HTML, CSS, JavaScript, and basic database queries.
Skills: Python, JavaScript, HTML5, CSS3, SQLite, Git, React Basics.
Experience:
- Junior Web Intern at StartupHub (2023 - 2024): Assisted in frontend bug fixing and basic Python scripting.
Education: B.Sc Computer Science, Madras University (2023)`
  }
];

export const SAMPLE_JOBS: JobDescription[] = [
  {
    id: 'job-ai-eng',
    title: 'Senior Python & AI Engineer',
    department: 'Artificial Intelligence & Platforms',
    experienceRequired: '3-5 Years',
    requiredSkills: ['Python', 'FastAPI', 'LangChain', 'RAG Pipelines', 'Vector Databases', 'Docker', 'PostgreSQL', 'Git'],
    preferredSkills: ['Kubernetes', 'LLM Fine-tuning', 'PyTorch', 'AWS/GCP'],
    description: `Job Title: Senior Python & AI Engineer
Company: TechNova Solutions
Experience: 3-5 Years
Required Skills: Python, FastAPI, LangChain, RAG Pipelines, Vector Databases, Docker, PostgreSQL, Git.
Responsibilities:
- Architect and deploy production-grade Autonomous AI Agents and RAG systems.
- Build high-performance REST APIs in FastAPI with asynchronous database connections.
- Optimize prompt engineering, hallucination guards, and retrieval accuracy for enterprise applications.`
  },
  {
    id: 'job-fullstack',
    title: 'Fullstack Software Engineer',
    department: 'Web Products',
    experienceRequired: '2-4 Years',
    requiredSkills: ['Python', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'REST APIs', 'Git'],
    preferredSkills: ['Next.js', 'FastAPI', 'Tailwind CSS', 'Redis'],
    description: `Job Title: Fullstack Software Engineer
Experience: 2-4 Years
Required Skills: Python, React, TypeScript, PostgreSQL, Docker, REST APIs, Git.
Responsibilities:
- Build modern responsive web frontends and high-performance Python API backends.
- Maintain reliable relational database schemas and automated deployment pipelines.`
  }
];

export function runClientScreeningSimulation(resumeText: string, job: JobDescription): ScreeningResult {
  const textLower = resumeText.toLowerCase();
  
  // Extract matched skills
  const matched = job.requiredSkills.filter(skill => {
    const sLower = skill.toLowerCase();
    return textLower.includes(sLower);
  });
  
  const missing = job.requiredSkills.filter(skill => !matched.includes(skill));
  
  // Experience calculation
  const expMatch = textLower.match(/(\d+)\+?\s*(?:years|yrs)/);
  const years = expMatch ? parseInt(expMatch[1], 10) : 2;
  
  const skillRatio = matched.length / Math.max(job.requiredSkills.length, 1);
  const skillScore = Math.round(skillRatio * 100);
  const expScore = Math.min(Math.round((years / 3.5) * 100), 100);
  const cultureFitScore = Math.round(75 + (matched.length * 3));
  const overallScore = Math.min(Math.round((skillScore * 0.65) + (expScore * 0.25) + (cultureFitScore * 0.1)), 100);
  
  let recommendation: ScreeningResult['recommendation'] = 'REJECT';
  if (overallScore >= 80) {
    recommendation = 'STRONG HIRE';
  } else if (overallScore >= 65) {
    recommendation = 'SHORTLIST FOR INTERVIEW';
  } else if (overallScore >= 50) {
    recommendation = 'FURTHER REVIEW';
  }
  
  // Candidate name extract
  const firstLine = resumeText.split('\n')[0].split('|')[0].trim();
  const candName = firstLine.length > 2 && firstLine.length < 40 ? firstLine : 'Candidate';
  
  // Generate tailored questions targeting gaps and strengths
  const questions: ScreeningResult['tailoredQuestions'] = [
    {
      category: 'Technical',
      targetedGap: matched[0] || 'Python Architecture',
      question: `Given your strong experience with ${matched[0] || 'Python'}, can you explain how you structure asynchronous request pipelines to prevent memory leaks and handle high concurrent load?`,
      expectedAnswer: `Candidate should explain async/await paradigms, worker connection pooling in databases, task queues, and memory profiling.`,
      rubricPoints: [
        '1/5: Only knows basic syntax without understanding async event loop',
        '3/5: Explains async/await and connection pools clearly',
        '5/5: Discusses concurrency bottlenecks, event loop blocking, and profiling tools'
      ]
    },
    {
      category: 'Problem Solving',
      targetedGap: missing[0] ? `Missing Job Requirement: ${missing[0]}` : 'Edge-case RAG Evaluation',
      question: missing[0]
        ? `Our team heavily utilizes ${missing[0]}, which is not prominent in your resume. How would you quickly master its idioms and apply it to our existing codebase within your first 30 days?`
        : `How do you measure and mitigate hallucinations when building RAG systems over ambiguous or conflicting documents?`,
      expectedAnswer: missing[0]
        ? `Demonstrates self-directed learning frameworks, building proof-of-concept projects, and leveraging official documentation and testing.`
        : `Mentions RAG Triad metrics (Context Relevance, Groundedness, Answer Relevance), chunk size optimization, and re-ranking models.`,
      rubricPoints: [
        '1/5: Passive attitude or unfamiliar with core architectural motivation',
        '3/5: Shows quick learning methodology and conceptual understanding',
        '5/5: Cites concrete past examples of picking up new frameworks under tight deadlines'
      ]
    },
    {
      category: 'System Design',
      targetedGap: 'RAG & Vector Architecture',
      question: `How would you design a scalable resume screening pipeline capable of ingesting 50,000 PDF documents daily while maintaining sub-second semantic search response times?`,
      expectedAnswer: `Discusses distributed task workers (Celery/Kafka), distributed vector databases (Chroma/Pinecone/Milvus), document chunking with metadata filtering, and embedding caching.`,
      rubricPoints: [
        '1/5: Proposes single monolithic server with in-memory linear search',
        '3/5: Mentions background workers and vector database indexing',
        '5/5: Addresses rate limits, batch embeddings, caching layer, and horizontal autoscaling'
      ]
    },
    {
      category: 'Behavioral',
      targetedGap: 'Engineering Integrity & Mentorship',
      question: `Describe a situation where a project deadline was approaching, but you discovered a subtle bug in your agent's decision logic. How did you communicate this to stakeholders?`,
      expectedAnswer: `Demonstrates ownership, transparent communication with trade-off analysis, and proactive mitigation rather than silently shipping compromised code.`,
      rubricPoints: [
        '1/5: Blamed external constraints or swept issues under the rug',
        '3/5: Flagged issue to manager and worked overtime to resolve',
        '5/5: Prepared risk assessment, offered pragmatic phased solutions, and maintained stakeholder trust'
      ]
    }
  ];

  // RAG Context simulation
  const ragRetrievedContexts = [
    {
      source: 'Job Description - Qualifications',
      text: `Required: Must demonstrate strong hands-on experience in ${matched.slice(0, 3).join(', ')} with production deployment history.`,
      similarity: 0.93
    },
    {
      source: 'Job Description - Architecture Core',
      text: `Key Responsibilities: Building Autonomous Agent loops with function calling, vector store similarity search, and evaluation guardrails.`,
      similarity: 0.88
    },
    {
      source: 'Candidate Resume - Projects Section',
      text: `Led engineering of autonomous recruiter screening tool with vector retrieval and async microservices.`,
      similarity: 0.84
    }
  ];

  // HR Decision Email
  const isShortlisted = overallScore >= 65;
  const decisionEmail = isShortlisted
    ? `Subject: Interview Invitation: ${job.title} at TechNova Solutions

Dear ${candName},

Thank you for your application for the ${job.title} position at TechNova Solutions.

Our autonomous AI Recruitment Screening Agent has processed your profile. We were thoroughly impressed by your strong background in ${matched.slice(0, 3).join(', ')} (Automated Screening Match: ${overallScore}%).

We would like to invite you for a 45-minute technical conversation with our engineering leadership team. During this discussion, we will explore your hands-on system projects and discuss our AI platform roadmap.

Please let us know your preferred time slots across Thursday or Friday of next week.

Warm regards,
Talent Acquisition Team
TechNova Solutions`
    : `Subject: Update regarding your application for ${job.title}

Dear ${candName},

Thank you for taking the time to share your application for the ${job.title} role with us.

After carefully reviewing your qualifications alongside our immediate requirements, we have decided to advance other candidates whose skill profile aligns more closely with our urgent specialized needs at this time.

We were impressed by your background and will retain your resume in our talent database for upcoming openings that match your skills.

We wish you every success in your ongoing job search.

Sincerely,
Talent Acquisition Team
TechNova Solutions`;

  return {
    candidateId: 'simulated',
    jobId: job.id,
    overallScore,
    skillsMatchScore: skillScore,
    experienceScore: expScore,
    cultureFitScore,
    recommendation,
    matchedSkills: matched,
    missingSkills: missing,
    ragRetrievedContexts,
    tailoredQuestions: questions,
    decisionEmail
  };
}
