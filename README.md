<div align="center">

#  InHire - Intelligent Swipe-Based Opportunity Discovery Platform

🌐 Live Deployment - [Visit InHire](https://in-hire.vercel.app/login)

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-v2.0-blue)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/API-Express.js-000000?style=for-the-badge&logo=express)
![Machine Learning](https://img.shields.io/badge/AI-Machine%20Learning-orange?style=for-the-badge)
![NLP](https://img.shields.io/badge/AI-NLP-red?style=for-the-badge)
![Recommendation System](https://img.shields.io/badge/System-Recommendation%20Engine-blueviolet?style=for-the-badge)
![REST API](https://img.shields.io/badge/API-REST%20API-02569B?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Auth-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)
![Responsive UI](https://img.shields.io/badge/UI-Responsive-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Non--Commercial-red)


**Swipe-style job swiping · ML match scoring · Resume transfer to recruiters**

[Features](#-features) · [Demo Flow](#-demo-flow) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [API Reference](#-api-reference)

</div>

---


InHire is a full-stack AI-driven job and internship discovery platform designed to simplify how users find relevant opportunities. Inspired by swipe-based interaction systems, the platform enables users to explore jobs dynamically while leveraging machine learning for personalized recommendations.

The system integrates a React + Vite frontend, a Node.js + Express backend, and a Python FastAPI-based ML microservice. It uses TF-IDF and cosine similarity to analyze user profiles and job descriptions, ensuring accurate and meaningful matches.

InHire is a full-stack AI-driven job and internship discovery platform designed to simplify how users find relevant opportunities. Inspired by swipe-based interaction systems, the platform enables users to explore jobs dynamically while leveraging machine learning for personalized recommendations.

The system integrates a React + Vite frontend, a Node.js + Express backend, and a Python FastAPI-based ML microservice. It uses TF-IDF and cosine similarity to analyze user profiles and job descriptions, ensuring accurate and meaningful matches.

## ✨ Features

### For Job Seekers
- 🃏 **Swipe UI** — Tinder-style job cards, swipe right to apply, left to skip
- 🤖 **ML Match Score** — TF-IDF cosine similarity shows how well your skills match each job
- 📄 **Resume Upload** — PDF stored in database, automatically sent to recruiters on apply
- 📊 **Dashboard** — Track all jobs you've applied to
- 🔥 **Streak Counter** — Daily swipe streak to keep you motivated
- 👤 **Editable Profile** — Update skills, education, work experience anytime

### For Companies
- 📋 **Job Posting** — Create jobs with title, description, location, salary, required skills
- 👥 **Applicant Viewer** — See every applicant per job with full profile details
- 📥 **Resume Download** — Download the actual PDF resume of each applicant
- ✅ **Close Jobs** — Close a job once filled — removed from seeker swipe cards instantly
- 🏢 **Company Profile** — Editable company info page

### Platform
- 🔐 **JWT Authentication** — Secure login with 7-day tokens
- 🛡️ **Role-based Access** — Separate flows for job seekers and companies
- 🗄️ **MongoDB Atlas** — Cloud database, all data persisted
- ⚡ **Hot Reload** — Vite dev server for instant frontend updates

---

## 🎬 Demo Flow

### Job Seeker
Register → Fill Profile + Upload Resume → Login
→ Swipe Cards (with ML match %) → Apply (resume auto-sent)
→ Dashboard (view applied jobs) → Profile (edit anytime)

### Company
Register → Login → Dashboard
→ Create Job → Job appears in seeker swipe cards
→ View Applicants → Download Resume PDF
→ Close Job (removes from swipe cards)

---

## 🏗️ Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Frontend      │────▶│   Backend        │────▶│   ML Service    │
│  React + Vite   │     │  Node + Express  │     │  Python FastAPI │
│  TypeScript     │◀────│  MongoDB Atlas   │     │  TF-IDF Cosine  │
│  Tailwind CSS   │     │  JWT Auth        │◀────│  Similarity     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
   :5173                      :5000                     :8000
```



---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 + TypeScript | UI framework |
| Styling | Tailwind CSS 4 | Utility-first CSS |
| Animation | Framer Motion | Swipe card animations |
| Routing | React Router 7 | Client-side routing |
| Backend | Node.js + Express | REST API server |
| Database | MongoDB Atlas + Mongoose | Data persistence |
| Auth | JWT + bcryptjs | Secure authentication |
| ML Service | Python + FastAPI | Job match scoring |
| Algorithm | TF-IDF + Cosine Similarity | Skill matching |
| Build Tool | Vite 6 | Frontend bundler |

---

## Getting Started

### Prerequisites

| Tool | Version | Check |
|------|---------|-------|
| Node.js | 18+ | `node -v` |
| Python | 3.9+ | `python --version` |
| npm | latest | `npm -v` |

### Installation

**Clone the repository**
```bash
git clone https://github.com/pavithra_sunilkumar/inhire.git
cd inhire
```

**Terminal 1 — ML Service**
```bash
cd ml-service

# Mac/Linux
python -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt
python main.py
# ✅ Running on http://localhost:8000
```

**Terminal 2 — Backend**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
# ✅ MongoDB connected
# ✅ Running on http://localhost:5000
```

**Terminal 3 — Frontend**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
# ✅ Running on http://localhost:5173
```

## 📡 API Reference

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Register jobseeker or company |
| `POST` | `/login` | Login → returns JWT + user object |

### Profile
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/save-profile` | ✅ | Update profile + resume |
| `POST` | `/get-profile` | ✅ | Fetch current user |

### Jobs
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/jobs` | ✅ | All active jobs with ML scores |
| `POST` | `/create-job` | ✅ Company | Create job posting |
| `GET` | `/company/jobs` | ✅ Company | Jobs by this company |
| `PATCH` | `/company/jobs/:id/close` | ✅ Company | Close a job |

### Applications
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/apply` | ✅ Seeker | Apply with resume snapshot |
| `GET` | `/applied-jobs` | ✅ Seeker | All applied jobs |
| `GET` | `/company/applicants/:jobId` | ✅ Company | Applicants + resume data |

### ML Service
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/recommend` | `{user_skills, job_skills}` → `{match_score}` |
| `GET` | `/health` | Health check |

---

## 📁 Project Structure

```
InHire/
├── frontend/                 # React + Vite app
│   ├── src/
│   │   └── app/
│   │       ├── pages/        # Login, Signup, Home, Profile
│   │       ├── components/   # JobCard, Layout, AppliedPopup
│   │       └── api.ts        # API calls
│   ├── .env.example
│   └── package.json
│
├── backend/                  # Node.js + Express API
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── ml-service/               # Python FastAPI
│   ├── main.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```


---

## 🤖 ML Match Score

The ML service computes how well a job seeker's skills match a job posting:

1. Both skill lists are **tokenized** into individual terms
2. **TF-IDF vectors** are built for each
3. **Cosine similarity** is calculated (0–1 range)
4. **Exact skill match bonus** adds up to +20 points
5. Score is scaled to **0–100%**
```python
# Example
user_skills = ["React", "TypeScript", "Node.js"]
job_skills  = ["React", "JavaScript", "Node.js", "AWS"]

# → match_score: 72
```

If the ML service is unreachable, the backend falls back to a simple overlap ratio.

---

## 🔒 Security

- Passwords hashed with **bcrypt** (12 salt rounds)
- **JWT tokens** expire after 7 days
- All protected routes require `Authorization: Bearer <token>`
- Resume files stored as **base64 in MongoDB** (no file system needed)
- CORS restricted to known frontend origins

---
# 👩‍💻 Author

## Pavithra Sunilkumar and Saksham Midha

- LinkedIn: https://linkedin.com/in/pavithra-sunilkumar68
- GitHub: https://github.com/pavithrasunilkumar
- Portfolio: https://vermillion-panda-a08876.netlify.app/

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---
## 📝 License

copyright attached

---



