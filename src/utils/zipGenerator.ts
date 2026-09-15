import JSZip from 'jszip';
import { PYTHON_CODE_FILES_HR } from '../data/projectsData';

export async function downloadProjectZip(): Promise<void> {
  const zip = new JSZip();

  // Root project folder inside zip
  const rootFolder = zip.folder('ai_hr_recruitment_assistant');

  if (!rootFolder) return;

  // Add all python code files
  PYTHON_CODE_FILES_HR.forEach(file => {
    rootFolder.file(file.name, file.code);
  });

  // Add sample resumes directory
  const sampleFolder = rootFolder.folder('sample_resumes');
  if (sampleFolder) {
    sampleFolder.file(
      'sridhar_senior_ai_engineer.txt',
      `Sridhar Kumar | sridhar.ai@example.com | Chennai, India
Summary: Senior Python & Generative AI Developer with 4 years of experience building autonomous LLM agents, semantic RAG pipelines, and scalable APIs.
Skills: Python, FastAPI, LangChain, RAG Pipelines, FAISS, Vector Databases, Docker, PostgreSQL, Git, Linux.
Experience:
- AI Engineer at Apex Systems (2022 - Present): Designed multi-agent recruiter tool with RAG over 10,000 PDF resumes. Built async FastAPI services with 99.9% uptime.
- Software Engineer at DataCorp (2020 - 2022): Built Python ETL workflows and PostgreSQL database optimizations.
Education: B.E. Computer Science, Anna University (2020)`
    );

    sampleFolder.file(
      'priya_backend_developer.txt',
      `Priya Raman | priya.r@example.com | Bengaluru, India
Summary: Backend Python Developer with 2.5 years experience in Django, REST APIs, and relational databases.
Skills: Python, Django, Flask, PostgreSQL, MySQL, Redis, Git, Unit Testing.
Experience:
- Backend Developer at CloudSoft (2022 - Present): Developed microservices in Django REST framework.
Education: B.Tech Information Technology, SRM (2021)`
    );
  }

  // Generate zip binary
  const blob = await zip.generateAsync({ type: 'blob' });

  // Trigger browser download
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'ai_hr_recruitment_assistant.zip';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
