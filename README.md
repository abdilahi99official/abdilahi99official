# Hi, I'm Abdilah Ahmed 👋

I am a Software Engineer specializing in hybrid system architectures—building deterministic Python microservices and low-bandwidth web applications that safely integrate probabilistic AI models[cite: 2, 3]. I design software for high-friction operational environments, focusing on schema enforcement, auditability, and domain-specific financial and agricultural workflows[cite: 2, 4].

---

### 🛠️ Production Tech Stack

**Languages & Frameworks**  
![Python](https://img.shields.io/badge/Python_3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Data, Infrastructure & Cloud**  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic_v2-E92063?style=for-the-badge&logo=pydantic&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**AI & Retrieval Engineering**  
![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white)
![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-000000?style=for-the-badge&logo=vercel&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-336791?style=for-the-badge&logo=postgresql&logoColor=white)

---

### 🚀 Production Applications

#### 1. [DELA — Tanzanian Bank Statement Processing Microservice](https://github.com/abdilahi99official/dela)
*Stateless financial document conversion engine transforming PDF bank statements into structured `.xlsx` workbooks for Tanzanian financial professionals.*
* **Deterministic Core**: Engineered automated extraction parsers using Python and `pdfplumber` with mathematical reconciliation ($\text{Beginning Balance} + \sum \text{Credits} - \sum \text{Debits} = \text{Ending Balance}$).
* **Privacy & Compliance**: Built a zero-retention execution pipe utilizing FastAPI `BackgroundTask` hooks to purge temp uploads and generated workbooks within 15 minutes of conversion.
* **Infrastructure**: Containerized multi-stage build deployed on Railway with Mobile Money payment webhooks.
* `Python` • `FastAPI` • `Pydantic` • `Docker` • `Railway` • `openpyxl`

#### 2. [AgriPride Market Link — Low-Bandwidth Intelligence System](https://github.com/abdilahi99official/agripride)
*Connectivity-aware agricultural intelligence platform for smallholder farmers and market officers in Tanzania[cite: 3, 4].*
* **Low-Bandwidth Web Architecture**: Server-Side Rendered (SSR) Next.js App Router delivering text-first interfaces with an initial JS bundle under 50KB for rural 2G/3G connectivity[cite: 3, 4].
* **Grounded RAG Pipeline**: Built market trend summary features using Supabase `pgvector` similarity search, Vercel AI SDK, and strict Zod schema validation to eliminate hallucinations.
* **LLM Evaluation**: Evaluated system accuracy against a 15-scenario manual evaluation benchmark dataset before deployment.
* `Next.js` • `TypeScript` • `Supabase` • `PostgreSQL` • `pgvector` • `Vercel`

---

### ⚡ Proven Technical Accomplishments

* **Schema Validation & Guardrails**: Standardized end-to-end data contracts using Pydantic v2 (Python) and Zod (TypeScript) across backend services and AI generation layers.
* **Database & Row-Level Security**: Designed multi-tenant relational schemas in PostgreSQL with Supabase Auth and strict RLS policies governing market officer operations.
* **Containerized Deployment**: Built optimized Docker containers deployed on Railway for persistent backend processes alongside serverless deployments on Vercel.

---

### 📊 GitHub Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=abdilahi99official&show_icons=true&theme=dark&hide_border=true" alt="Abdilah's GitHub Stats" width="48%" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=abdilahi99official&theme=dark&hide_border=true" alt="GitHub Streak" width="48%" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=abdilahi99official&layout=compact&theme=dark&hide_border=true" alt="Top Languages" />
</div>

---

### 📬 Connect & Technical Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=aboutdotme&logoColor=white)](https://abdilahi99official.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abdilahi99official)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abdilahi99official@gmail.com)
