<div align="center">

# InHire — AI-Powered Career Discovery Platform

🌐 **Live Demo** → [in-hire.vercel.app](https://in-hire.vercel.app/login)

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-v2.0-4F7EF5?style=for-the-badge)
![License](https://img.shields.io/badge/License-Non--Commercial-red?style=for-the-badge)

<!-- Stack -->
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express)
![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.95-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

<!-- AI -->
![Gemini](https://img.shields.io/badge/Gemini-1.5%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-Agentic%20Workflow-1C3C3C?style=for-the-badge)
![RAG](https://img.shields.io/badge/RAG-Knowledge%20Retrieval-7C3AED?style=for-the-badge)
![TF-IDF](https://img.shields.io/badge/TF--IDF-NLP%20Fallback-F59E0B?style=for-the-badge)
![Multi-Agent](https://img.shields.io/badge/Multi--Agent-5%20Stage%20Pipeline-EF4444?style=for-the-badge)
![Recency Decay](https://img.shields.io/badge/Recency%20Decay-Preference%20Learning-10B981?style=for-the-badge)
![Guardrails](https://img.shields.io/badge/Guardrails-JSON%20Schema%20%2B%20Fallback-06B6D4?style=for-the-badge)
![Cosine Similarity](https://img.shields.io/badge/Cosine%20Similarity-Vector%20Matching-8B5CF6?style=for-the-badge)

<!-- Security -->
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge)
![bcrypt](https://img.shields.io/badge/bcrypt-12%20Rounds-orange?style=for-the-badge)
![Rate Limiting](https://img.shields.io/badge/Rate%20Limiting-Per%20Endpoint-red?style=for-the-badge)
![RBAC](https://img.shields.io/badge/RBAC-Role%20Based%20Access-blue?style=for-the-badge)

<!-- Deploy -->
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Cost](https://img.shields.io/badge/Infrastructure%20Cost-%240-brightgreen?style=for-the-badge)

**Swipe-Based Job Discovery · Agentic AI Recommendations · Recency-Decay Preference Learning**

[Overview](#-overview) · [Features](#-features) · [AI Module](#-ai-module) · [Architecture](#-architecture) · [Tech Stack](#-tech-stack) · [Database](#-database-design) · [API](#-api-reference) · [Getting Started](#-getting-started) · [Security](#-security) · [Author](#-author)

</div>

---

## 📌 Overview

InHire is a full-stack AI-powered job discovery platform where candidates **swipe through personalised job cards** instead of scrolling through hundreds of irrelevant listings.

The platform learns from every swipe — right and left — using a **recency-weighted preference vector** that continuously adapts the recommendation feed. Every job card is scored by a **five-stage agentic AI pipeline** powered by Gemini 1.5 Flash, LangChain, RAG, and TF-IDF, producing a transparent four-part match breakdown before the candidate even applies.

A single right swipe constitutes a complete application — no forms, no re-entry. The seeker's full profile and PDF resume are automatically captured and delivered to the recruiter's dashboard.

```
Traditional portals:  Search → Filter → Browse → Apply → Repeat forever
InHire:               Swipe  → Learn  → Personalise → Recommend → Discover
```

---

## ✨ Features

### For Job Seekers

- Swipe-based discovery — one AI-ranked card at a time
- Match score (0–100%) with 4-part breakdown on every card — Skill · Semantic · Preference · Experience
- AI reasoning text — e.g. "Strong React match · startup culture fits your swipe history"
- Preference learning from every swipe using recency decay
- One-swipe full application — resume auto-attached, no form filling
- Upload resume once — reused on every application automatically
- Six-step rich profile wizard — skills, projects, interests, career goals
- Applied jobs dashboard with full history
- Editable profile — skills, resume, and goals updatable anytime
- Daily swipe streak tracking

### For Companies

- Four-step job posting wizard with AI Matching Hints
- AI Matching Hints read directly by Gemini during candidate scoring:
  - Ideal candidate profile · Deal breakers · Bonus experience · Culture fit
- Unified applicant dashboard — all profiles and resumes in one view
- One-click PDF resume download per applicant
- Close filled positions — instantly removed from all seeker feeds

### Platform

- JWT authentication with 7-day token expiry
- bcrypt password hashing — 12 salt rounds
- Role-based access control — seeker and company routes fully separated
- Rate limiting per endpoint
- CORS origin whitelisting
- Graceful AI fallback — TF-IDF activates automatically if Gemini is unavailable
- Three-service microservice architecture — independently deployable

---

## 🤖 AI Module

InHire's AI layer is a genuine multi-agent system — not a single LLM call. Five specialised agents run in sequence, each feeding its output to the next.

### Five-Stage Agentic Pipeline

```text
INPUT
  user_profile { skills, projects, careerTrack, workPreference, goals }
  job          { title, description, skills, niceToHaveSkills, aiHints }
  swipe_history[ last 100 swipes with timestamps ]
       │
       ▼
STAGE 1 — PREFERENCE VECTOR AGENT  (preference_vector.py)

  Reads every swipe with recency decay formula:
  weight = max(0.05, 1.0 - days_elapsed / 90)

  right swipe → +1.0 × weight added per skill
  left swipe  → -0.5 × weight added per skill

  Output: { AWS: +2.8, Backend: +1.9, React: -0.6 }
       │
       ▼
STAGE 2 — TF-IDF BASELINE AGENT  (main.py)

  Tokenise both skill lists → build TF-IDF vectors over shared vocab
  Cosine similarity + exact match bonus

  Output: skill_score, matched_skills[], missing_skills[]
       │
       ▼
STAGE 3 — EXPERIENCE SCORE AGENT  (main.py)

  Parse user years vs job requirement → compute ratio
  ratio >= 1.0 → 90    0.7–1.0 → 70    0.4–0.7 → 50    < 0.4 → 30

  Output: experience_score (30 / 50 / 70 / 90)
       │
       ▼
STAGE 4 — RAG + GEMINI SEMANTIC AGENT  (rag.py + main.py)

  RAG retrieves career context for job skills from 40+ entry knowledge base:
  "DynamoDB is Amazon's managed NoSQL database.
   Candidates with DynamoDB satisfy NoSQL requirements."

  Gemini prompt = profile + job + RAG context + preference summary
                + company AI hints (idealCandidateProfile, dealBreakers...)

  GUARDRAILS:
    • JSON-only output enforced in system prompt
    • Strip markdown fences before JSON.parse()
    • Score range validation enforced (0–100)
    • Full TF-IDF fallback if parse fails at any point

  Output: semantic_score, reasoning (max 18 words)
       │
       ▼
STAGE 5 — SCORE COMBINATION AGENT  (main.py)

  final = 0.40 × skill_score
        + 0.30 × semantic_score
        + 0.20 × preference_score
        + 0.10 × experience_score

  final = max(5, min(100, round(final)))
       │
       ▼
OUTPUT
  match_score     0–100
  breakdown       { skill, semantic, preference, experience }
  reasoning       "Strong React match · startup culture fits history"
  matched_skills  [ "React", "Node.js" ]
  missing_skills  [ "AWS", "Docker" ]
  engine          "gemini" | "tfidf"
```

### Recency Decay — How the Feed Learns

```text
weight = max(0.05, 1.0 - days_elapsed / 90)

  0 days ago  →  1.00  (full weight)
 30 days ago  →  0.67
 60 days ago  →  0.33
 90 days ago  →  0.05  (floor — nearly irrelevant)

right swipe on [AWS, Backend]  →  +1.0 × weight per skill
left swipe  on [React, CSS]    →  -0.5 × weight per skill

After 10 swipes:
  vector = { AWS: +2.1, Backend: +1.8, React: -0.4, CSS: -0.5 }

Next feed: Cloud → Backend → Data roles ranked first
           Frontend → Design roles ranked lower

Left swipe is -0.5 (not -1.0) because a skip might be
due to salary or location — not necessarily role mismatch.
```

### RAG Knowledge Base

```text
Job requires:   "NoSQL experience"
Candidate has:  "DynamoDB"

Without RAG  →  keyword mismatch → lower score
With RAG     →  Gemini receives: "DynamoDB is Amazon's managed NoSQL database"
             →  correctly scores DynamoDB as satisfying the NoSQL requirement
```

### AI Guardrails

```text
Layer 1  →  Prompt enforces JSON-only output with exact schema
Layer 2  →  Strip markdown fences → validate JSON.parse() succeeds
Layer 3  →  If any exception → TF-IDF + preference + experience fallback
            User always sees a scored card — Gemini failure is invisible
```

### Score Weight Rationale

| Component | Weight | Reason |
|-----------|--------|--------|
| Skill Match (TF-IDF) | 40% | Technical requirements are the hardest constraint |
| Semantic (Gemini) | 30% | Equivalent concepts must receive equal credit |
| Preference (Swipe History) | 20% | Behavioural signal of what the candidate actually enjoys |
| Experience | 10% | Softest constraint — companies regularly flex on seniority |

---

## 🏗️ Architecture

```text
                            USER BROWSER
                                 │
                         HTTPS / REST API
                                 │
                    ┌────────────▼────────────┐
                    │         VERCEL          │
                    │   React 18 + TypeScript │
                    │   Tailwind CSS 4        │
                    │   Framer Motion 12      │
                    │   React Router 7        │
                    └────────────┬────────────┘
                                 │  fetch() REST
                    ┌────────────▼────────────┐
                    │         RENDER          │
                    │   Node.js + Express     │
                    │   JWT · bcrypt          │
                    │   Rate Limiting · CORS  │
                    │   Mongoose ODM          │
                    └──────┬──────────┬───────┘
                           │          │ axios
                    Mongoose│          │ timeout: 8s
                    ┌───────▼──────┐  ┌▼──────────────────────┐
                    │ MONGODB ATLAS│  │  RENDER (Python)       │
                    │              │  │  FastAPI 0.95          │
                    │  Users       │  │  LangChain Agents      │
                    │  Jobs        │  │  Gemini 1.5 Flash      │
                    │  Applications│  │  RAG Knowledge Base    │
                    │  SwipeHistory│  │  TF-IDF Fallback       │
                    └──────────────┘  │  Recency Decay Engine  │
                                      └──────────┬─────────────┘
                                                 │ google-ai SDK
                                      ┌──────────▼─────────────┐
                                      │   GOOGLE AI STUDIO     │
                                      │   Gemini 1.5 Flash     │
                                      │   Free · 15 req/min    │
                                      └────────────────────────┘
```

### Request Flow — GET /jobs

```text
Browser  →  GET /jobs  (Authorization: Bearer JWT)
                │
        Express authenticates JWT → req.user
                │
        Fetch User profile from MongoDB
        Fetch all Active jobs from MongoDB
        Fetch SwipeHistory last 100 from MongoDB
                │
        Promise.all — score all jobs concurrently
                │
        For each job → POST /recommend to FastAPI
                │
        FastAPI runs 5-stage pipeline per job
        Returns: { match_score, breakdown, reasoning, engine }
                │
        Express sorts by matchPercentage descending
                │
        React renders ranked swipe cards
```

### Request Flow — Swipe Right

```text
User drags card right
        │
        ├── POST /swipe { jobId, action: "right" }
        │   SwipeHistory.findOneAndUpdate(
        │     { candidateId, jobId },
        │     { action, timestamp: now(), jobSkills, jobTitle },
        │     { upsert: true }
        │   )
        │
        └── POST /apply { jobId }
            User.findById(userId)        ← fresh fetch for latest resume
            Application.save({
              ...profileSnapshot,        ← immutable historical record
              resumeBase64: freshUser.resumeBase64
            })
```

---

## 🛠️ Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Frontend | React | 18.3 | Component-based UI |
| Frontend | TypeScript | 5.5 | Compile-time type safety |
| Frontend | Tailwind CSS | 4.0 | Dark theme utility styling |
| Frontend | Framer Motion | 12.x | Swipe card drag animations |
| Frontend | React Router | 7.0 | Client-side routing + auth guard |
| Frontend | Vite | 6.3 | Sub-second HMR build tool |
| Backend | Node.js | 18+ | Non-blocking async runtime |
| Backend | Express | 4.18 | REST API framework |
| Backend | Mongoose | 8.x | MongoDB ODM |
| Backend | JWT | 9.x | Stateless auth — 7-day tokens |
| Backend | bcryptjs | 2.4 | Password hashing — 12 rounds |
| Backend | express-rate-limit | 7.x | Per-endpoint rate limiting |
| Backend | Axios | 1.6 | Backend → ML service calls |
| AI | Python | 3.11 | AI service runtime |
| AI | FastAPI | 0.95 | Async REST API |
| AI | LangChain | 0.1.x | Multi-agent orchestration |
| AI | Gemini 1.5 Flash | Free | Primary LLM — semantic scoring |
| AI | TF-IDF + Cosine | Custom | NLP fallback — no API needed |
| AI | RAG | Custom | 40+ skill → career context |
| AI | Recency Decay | Custom | Preference learning algorithm |
| AI | pydantic | 1.10 | Request validation + guardrails |
| Database | MongoDB Atlas | Cloud | 4 collections — free 512MB |
| Deploy | Vercel | — | Frontend CDN hosting |
| Deploy | Render ×2 | — | Backend + ML service |
| Monitor | UptimeRobot | — | Keep-alive health checks |

---

## 🗄️ Database Design

```text
Users                              Jobs
──────────────────────             ──────────────────────────
_id                                _id
username        (unique)           title, description
email           (unique)           company, companyUserId (ref: User)
password        (bcrypt hash)      skills[]        ← AI matching input
role                               niceToHaveSkills[]
skills[]                           workMode, experienceLevel
projects[]      ← AI reads         salary, type, location
interests[]     ← personalisation  benefits[], companyValues[]
careerTrack     ← Gemini context   idealCandidateProfile ← Gemini reads
workPreference                     dealBreakers          ← Gemini reads
shortTermGoal   ← Gemini context   bonusExperience       ← Gemini reads
longTermGoal    ← Gemini context   cultureFit            ← Gemini reads
resumeBase64    ← PDF as base64    openToFreshers
resumeFileName                     status  Active | Closed
resumeMimeType
Indexes: username unique,          Indexes: status, companyUserId
         email unique

Applications                       SwipeHistory
──────────────────────             ──────────────────────────
_id                                _id
jobId     (ref: Job)               candidateId (ref: User, indexed)
userId    (ref: User)              jobId       (ref: Job)
appliedAt                          action      right | left
                                   timestamp   ← recency decay key
── Profile snapshot ──             jobSkills[] ← snapshot
applicantName                      jobTitle
applicantSkills[]
applicantEducation{}               Indexes:
applicantWorkExperience[]            candidateId (for fast fetch)
resumeBase64  ← file at apply time   timestamp (for sorted fetch)
coverLetter   ← AI generated         (candidateId, jobId) UNIQUE
resumeTips[]  ← AI generated           → upsert pattern

Index: (jobId, userId) UNIQUE
```

---

## 📡 API Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Create account — seeker or company |
| POST | `/login` | Returns JWT token + full user object |

### Seeker

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jobs` | AI-ranked feed — all 5 stages run per job |
| POST | `/swipe` | Record swipe — updates preference vector |
| POST | `/apply` | One-swipe full application with profile snapshot |
| GET | `/applied-jobs` | Application history |
| POST | `/save-profile` | Partial profile update |

### Company

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create-job` | New job with AI matching hints |
| GET | `/company/jobs` | All posted jobs |
| GET | `/company/applicants/:jobId` | Applicants + profiles + resumes |
| PATCH | `/company/jobs/:jobId/close` | Remove job from all seeker feeds |

### ML Service (Internal)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/recommend` | Full 5-stage pipeline — returns score + breakdown |
| GET | `/health` | UptimeRobot keep-alive |

---

## 📁 Project Structure

```text
InHire/
│
├── frontend/
│   ├── src/app/
│   │   ├── pages/
│   │   │   ├── Home.tsx              swipe feed + session stats
│   │   │   ├── ProfileDetails.tsx    6-step profile wizard
│   │   │   ├── CreateJob.tsx         4-step job wizard with AI hints
│   │   │   ├── CompanyDashboard.tsx  applicants + PDF download
│   │   │   ├── AppliedJobs.tsx       application history
│   │   │   ├── Login.tsx / Signup.tsx
│   │   │   └── Landing.tsx
│   │   ├── components/
│   │   │   ├── JobCard.tsx           swipe card + AI breakdown bars
│   │   │   ├── Layout.tsx
│   │   │   └── CompanyLayout.tsx
│   │   ├── api.ts                    fetch functions + recordSwipe()
│   │   └── routes.tsx                RequireAuth + nested routes
│   └── vercel.json                   SPA rewrite rule
│
├── backend/
│   ├── models/
│   │   ├── User.js                   schema + bcrypt pre-save hook
│   │   ├── Job.js                    AI matching hints fields
│   │   ├── Application.js            snapshot pattern + compound index
│   │   └── SwipeHistory.js           recency decay data source
│   ├── server.js                     all routes + middleware
│   └── package.json
│
├── ml-service/
│   ├── main.py                       5-stage pipeline + routes
│   ├── preference_vector.py          recency decay computation
│   ├── rag.py                        knowledge base + retriever
│   └── requirements.txt
│
└── docs/
    ├── architecture.md
    └── api.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11
- MongoDB Atlas account — [mongodb.com/atlas](https://mongodb.com/atlas) (free)
- Gemini API key — [aistudio.google.com](https://aistudio.google.com/app/apikey) (free)

### Installation

```bash
git clone https://github.com/pavithrasunilkumar/InHire.git
cd InHire
```

#### ML Service

```bash
cd ml-service
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Mac/Linux
pip install -r requirements.txt
cp .env.example .env         # add GEMINI_API_KEY
python main.py
```

#### Backend

```bash
cd backend
npm install
cp .env.example .env         # add MONGO_URI and JWT_SECRET
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
cp .env.example .env         # VITE_API_URL=http://localhost:5000
npm run dev
```

---

## 🔒 Security

| Threat | Mitigation |
|--------|-----------|
| Plain text passwords | bcrypt — 12 salt rounds, 4,096 iterations |
| Brute force | Rate limit — 10 requests / 15 min per IP |
| Token forgery | HMAC-signed JWT — secret in env var only |
| Privilege escalation | Role check before every company route |
| User enumeration | Generic error for wrong username and wrong password |
| Cross-origin | CORS whitelist — known frontend origins only |
| Field injection | Whitelist on save-profile — schema fields only |
| LLM failure | JSON guardrails + range validation + TF-IDF fallback |
| Payload overflow | `express.json({ limit: '10mb' })` |
| Cross-company access | Ownership check — `findOne({ _id, companyUserId })` |

---

## 👩‍💻 Author

**Pavithra Sunilkumar**

GitHub: [github.com/pavithrasunilkumar](https://github.com/pavithrasunilkumar)

LinkedIn: [linkedin.com/in/pavithra-sunilkumar68](https://linkedin.com/in/pavithra-sunilkumar68)

Portfolio: [vermillion-panda-a08876.netlify.app](https://vermillion-panda-a08876.netlify.app/)

---

## ⭐ Support

If you found this project useful or learned something from the codebase, consider giving it a ⭐ on GitHub.

---


