<div align="center">

# 🎯 InHire

### AI-Powered Job Matching Platform

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Tinder-style job swiping · ML match scoring · Resume transfer to recruiters**

</div>

---

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

---

## 🏗️ Architecture

```
Frontend (React)  →  Backend (Node.js)  →  ML Service (Python)
     :5173               :5000                   :8000
                            ↓
                     MongoDB Atlas
```

---

## 🚀 Getting Started

### Terminal 1 — ML Service
```bash
cd ml-service

# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python -m venv venv
source venv/bin/activate

pip install -r requirements.txt
python main.py
# ✅ Running on http://localhost:8000
```

### Terminal 2 — Backend
```bash
cd backend
npm install
npm run dev
# ✅ Running on http://localhost:5000
```

### Terminal 3 — Frontend
```bash
cd frontend
npm install
npm run dev
# ✅ Running on http://localhost:5173
```

Open **http://localhost:5173** 🎉

---

## ⚙️ Environment Variables

### `backend/.env`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=inhire_jwt_secret_key_2024
ML_SERVICE_URL=http://localhost:8000
```

### `frontend/.env`
```env
VITE_API_URL=http://localhost:5000
```

---

## 📡 API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/register` | — | Register user or company |
| `POST` | `/login` | — | Login → JWT token |
| `POST` | `/save-profile` | ✅ | Update profile + resume |
| `GET` | `/jobs` | ✅ | Jobs with ML match scores |
| `POST` | `/create-job` | ✅ Company | Create job posting |
| `GET` | `/company/jobs` | ✅ Company | Company's jobs |
| `PATCH` | `/company/jobs/:id/close` | ✅ Company | Close a job |
| `POST` | `/apply` | ✅ Seeker | Apply with resume snapshot |
| `GET` | `/applied-jobs` | ✅ Seeker | Applied jobs list |
| `GET` | `/company/applicants/:jobId` | ✅ Company | Applicants + resumes |

---

## 📁 Project Structure

```
InHire/
├── frontend/          # React + Vite + TypeScript
├── backend/           # Node.js + Express + MongoDB
│   └── models/        # User, Job, Application schemas
├── ml-service/        # Python FastAPI — TF-IDF scoring
└── README.md
```

---

## 🤖 ML Model

Uses **TF-IDF + Cosine Similarity** to score how well a seeker's skills match a job:
1. Tokenize skill lists
2. Build TF-IDF vectors
3. Compute cosine similarity (0–1)
4. Scale to 0–100% with exact match bonus

---

<div align="center">Built with ❤️ using React, Node.js, and Python</div>
