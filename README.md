````md
<div align="center">

# 🚀 InHire - Intelligent AI-Powered Swipe-Based Job Discovery Platform

🌐 **Live Demo:** https://in-hire.vercel.app/login

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-v2.0-blue)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/API-Express.js-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma)
![Python](https://img.shields.io/badge/AI-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![LangChain](https://img.shields.io/badge/Framework-LangChain-success?style=for-the-badge)
![RAG](https://img.shields.io/badge/AI-RAG-purple?style=for-the-badge)
![Semantic Embeddings](https://img.shields.io/badge/AI-Semantic%20Embeddings-orange?style=for-the-badge)
![Recommendation System](https://img.shields.io/badge/System-Recommendation%20Engine-blueviolet?style=for-the-badge)
![REST API](https://img.shields.io/badge/API-REST%20API-02569B?style=for-the-badge)
![JWT](https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge)
![Responsive UI](https://img.shields.io/badge/UI-Responsive-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Non--Commercial-red)

### Intelligent Swipe-Based Job Discovery • Semantic Resume Matching • Personalized AI Recommendations

[Features](#-features) •
[Architecture](#-architecture) •
[Tech Stack](#-tech-stack) •
[Getting Started](#-getting-started) •
[API Reference](#-api-reference)

</div>

---

# 📖 Overview

InHire is an AI-powered swipe-based job discovery and recommendation platform that transforms traditional job searching into an intelligent and personalized experience.

Unlike conventional job portals that rely primarily on keyword matching and manual filtering, InHire combines semantic resume understanding, personalized recommendation systems, and behavioral learning to continuously improve job recommendations.

The platform learns from every user interaction. Each swipe acts as implicit feedback that helps the recommendation engine understand user preferences, resulting in increasingly relevant opportunities over time.

The application consists of a React frontend, Node.js backend, PostgreSQL database with Prisma ORM, and a Python FastAPI AI microservice that performs semantic resume understanding and recommendation generation.

---

# 🚀 Features

## 👨‍💻 For Job Seekers

- Tinder-like swipe interface
- AI-powered semantic resume-job matching
- Personalized recommendations based on swipe history
- Resume upload & management
- AI Match Score for every opportunity
- Daily swipe streak
- Saved applications dashboard
- Editable profile
- Resume auto-submission during application

---

## 🏢 For Recruiters

- Company registration & authentication
- Create and manage job postings
- Applicant dashboard
- Resume viewing & download
- Close filled positions instantly
- Company profile management
- Job analytics

---

## 🤖 AI Features

- Semantic Resume Understanding
- Sentence Transformer Embeddings
- Cosine Similarity Matching
- Content-Based Recommendation System
- Swipe Preference Learning
- LangChain Orchestration
- Retrieval-Augmented Generation (RAG)
- Personalized Job Ranking

---

# 🎯 Problem Statement

Traditional job portals face several limitations:

- Information overload due to thousands of job listings
- Static keyword-based search
- Poor candidate-role matching
- Limited personalization
- No learning from user interactions

InHire solves these challenges by combining semantic AI with behavioral recommendation learning, allowing recommendations to improve continuously based on user preferences and interactions.

---

# 🎬 User Flow

## Job Seeker

Register

↓

Complete Profile

↓

Upload Resume

↓

Resume Parsed

↓

Semantic Embedding Generated

↓

Relevant Jobs Retrieved

↓

AI Match Score Calculated

↓

Swipe Right / Left

↓

Apply

↓

Recommendation Engine Learns

↓

Future Recommendations Improve

---

## Recruiter

Register

↓

Create Company

↓

Post Job

↓

Job Appears to Matching Candidates

↓

View Applicants

↓

Download Resume

↓

Close Position

---

# 🏗️ Architecture

```text
                    React + TypeScript
                           │
                    REST API (HTTPS)
                           │
                  Node.js + Express
                           │
                        Prisma ORM
                           │
                      PostgreSQL
                           │
         ┌─────────────────┴─────────────────┐
         │                                   │
 Authentication                      Python FastAPI
                                     │
                              Resume Processing
                                     │
                        Sentence Transformer
                                     │
                         Semantic Embeddings
                                     │
                         Cosine Similarity
                                     │
                       Initial Match Score
                                     │
                 Swipe Preference Learning
                                     │
               Content-Based Recommendation
                                     │
                       LangChain + RAG
                                     │
                  Personalized Job Ranking
````

---

# 🤖 AI Recommendation Pipeline

```text
Resume Upload

↓

Resume Parsing

↓

Skill Extraction

↓

Sentence Transformer

↓

Semantic Embedding

↓

Job Embedding

↓

Cosine Similarity

↓

Initial Match Score

↓

Swipe History

↓

Content-Based Filtering

↓

LangChain

↓

RAG

↓

Final Personalized Recommendation
```

---

# 🛠️ Tech Stack

| Layer          | Technology                               | Purpose                   |
| -------------- | ---------------------------------------- | ------------------------- |
| Frontend       | React 18 + TypeScript                    | User Interface            |
| Styling        | Tailwind CSS                             | Styling                   |
| Animation      | Framer Motion                            | Swipe Animations          |
| Routing        | React Router                             | Client-side Routing       |
| Backend        | Node.js + Express                        | REST API                  |
| Database       | PostgreSQL                               | Relational Database       |
| ORM            | Prisma                                   | Type-safe Database Access |
| Authentication | JWT + bcrypt                             | Authentication            |
| AI Service     | Python + FastAPI                         | AI Microservice           |
| Embeddings     | Sentence Transformers (all-MiniLM-L6-v2) | Semantic Encoding         |
| Similarity     | Cosine Similarity                        | Resume Matching           |
| AI Framework   | LangChain                                | AI Orchestration          |
| Retrieval      | Retrieval-Augmented Generation (RAG)     | Context Retrieval         |
| Recommendation | Content-Based Filtering                  | Personalized Ranking      |
| Deployment     | Vercel + Render                          | Cloud Deployment          |

---

# ⚙️ Getting Started

## Prerequisites

| Tool       | Version |
| ---------- | ------- |
| Node.js    | 18+     |
| Python     | 3.10+   |
| PostgreSQL | 15+     |
| npm        | Latest  |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/pavithrasunilkumar/InHire.git

cd InHire
```

### Backend

```bash
cd backend

npm install

npx prisma generate

npx prisma migrate dev

npm run dev
```

---

### AI Service

```bash
cd ml-service

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python main.py
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📡 API Reference

## Authentication

POST `/register`

POST `/login`

---

## Profile

GET `/profile`

PUT `/profile`

POST `/upload-resume`

---

## Jobs

GET `/jobs`

POST `/jobs`

PATCH `/jobs/:id/close`

GET `/company/jobs`

---

## Applications

POST `/apply`

GET `/applications`

GET `/company/applicants/:jobId`

---

## Recommendations

GET `/recommendations`

---

## AI Service

POST `/generate-embedding`

POST `/recommend`

GET `/health`

---

# 🗄️ Database Schema

## User

* id
* name
* email
* password
* role
* skills
* education
* experience
* resumeUrl

---

## Company

* id
* companyName
* email
* website
* description

---

## Job

* id
* companyId
* title
* description
* salary
* location
* requiredSkills
* status

---

## Application

* id
* userId
* jobId
* matchScore
* appliedAt

---

## Swipe

* id
* userId
* jobId
* direction
* timestamp

---

# 📂 Project Structure

```text
InHire

frontend/
    src/
    components/
    pages/
    services/

backend/
    controllers/
    routes/
    middleware/
    prisma/
        schema.prisma
    services/

ml-service/
    main.py
    recommendation.py
    embeddings.py
    parser.py

README.md
```

---

# 🔒 Security

* JWT Authentication
* bcrypt Password Hashing
* Role-Based Authorization
* Protected REST APIs
* Prisma ORM
* Input Validation
* Secure Resume Storage

---

# 🚀 Deployment

| Service    | Platform   |
| ---------- | ---------- |
| Frontend   | Vercel     |
| Backend    | Render     |
| Database   | PostgreSQL |
| AI Service | Render     |

---

# 🔮 Future Enhancements

* Hybrid Recommendation System
* pgvector Integration
* Real-time Recommendation Updates
* Explainable AI Recommendations
* AI Resume Optimization
* Skill Gap Analysis
* Interview Preparation Assistant
* Recruiter Analytics Dashboard
* Salary Prediction

---

# 👩‍💻 Author

## Pavithra Sunilkumar

* LinkedIn: https://linkedin.com/in/pavithra-sunilkumar68
* GitHub: https://github.com/pavithrasunilkumar
* Portfolio: https://vermillion-panda-a08876.netlify.app/

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 📜 License

This project is intended for educational and non-commercial purposes.

```
```
