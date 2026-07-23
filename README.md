<div align="center">

# InHire - Intelligent AI-Powered Swipe-Based Job Discovery Platform

🌐 **Live Deployment** - [Visit InHire](https://in-hire.vercel.app/login)

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

**Swipe-Based Job Discovery • Semantic Resume Matching • AI Recommendations**

[Features](#-features) · [Demo Flow](#-demo-flow) · [Architecture](#-architecture) · [Tech Stack](#-tech-stack) · [Getting Started](#getting-started) · [API Reference](#-api-reference)

</div>

---


## Overview

InHire is a full-stack AI-powered job discovery platform that delivers
personalized opportunities through semantic resume understanding,
content-based recommendations, and swipe-driven preference learning.

The application consists of a React frontend, Node.js backend,
PostgreSQL database using Prisma ORM, and a Python FastAPI AI
microservice. Semantic embeddings, cosine similarity, LangChain, and
Retrieval-Augmented Generation (RAG) work together to rank and recommend
the most relevant jobs.

------------------------------------------------------------------------

## ✨ Features

### For Job Seekers

-   Swipe-based job discovery
-   AI-powered resume-job matching
-   Semantic similarity scoring
-   Personalized recommendations
-   Resume upload
-   Application dashboard
-   Daily streak
-   Editable profile

### For Recruiters

-   Company registration
-   Create and manage jobs
-   Applicant dashboard
-   Resume download
-   Close filled jobs
-   Company profile management

### Platform

-   JWT Authentication
-   Role-based access
-   PostgreSQL + Prisma
-   REST APIs
-   AI recommendation engine

------------------------------------------------------------------------


## 🏗️ Architecture

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
               ┌──────────────────────┴──────────────────────┐
               │                                             │
      Authentication                               Python FastAPI
                                                    AI Microservice
                                                           │
                                                    Resume Parser
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
                                              Personalized Job Feed
```

---
## 🛠️ Tech Stack

  Layer            Technology              Purpose
  ---------------- ----------------------- ---------------------------
  Frontend         React + TypeScript      UI
  Styling          Tailwind CSS            Styling
  Animation        Framer Motion           Swipe animations
  Backend          Node.js + Express       REST API
  Database         PostgreSQL              Data storage
  ORM              Prisma                  Type-safe database access
  Authentication   JWT + bcrypt            Authentication
  AI               Python + FastAPI        Recommendation service
  Embeddings       Sentence Transformers   Semantic matching
  AI Framework     LangChain               AI orchestration
  Retrieval        RAG                     Context retrieval

------------------------------------------------------------------------

## Getting Started

### Prerequisites

-   Node.js 18+
-   Python 3.10+
-   PostgreSQL
-   npm

### Installation

``` bash
git clone https://github.com/pavithrasunilkumar/InHire.git
cd InHire
```

Backend

``` bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

AI Service

``` bash
cd ml-service
pip install -r requirements.txt
python main.py
```

Frontend

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

## 📡 API Reference

### Authentication

-   POST /register
-   POST /login

### Profile

-   GET /profile
-   PUT /profile

### Jobs

-   GET /jobs
-   POST /jobs
-   PATCH /jobs/:id/close

### Applications

-   POST /apply
-   GET /applications

### Recommendations

-   GET /recommendations

------------------------------------------------------------------------

## 📁 Project Structure

``` text
frontend/
backend/
  prisma/
    schema.prisma
ml-service/
README.md
```

------------------------------------------------------------------------

## 🤖 Recommendation Pipeline

Resume

↓

Skill Extraction

↓

Semantic Embeddings

↓

Job Embeddings

↓

Cosine Similarity

↓

Initial Match Score

↓

Swipe History

↓

Content-Based Recommendation

↓

LangChain

↓

RAG

↓

Final Recommendation

------------------------------------------------------------------------

## 🔒 Security

-   JWT Authentication
-   bcrypt Password Hashing
-   Role-Based Access
-   Input Validation
-   Protected REST APIs

------------------------------------------------------------------------

## 👩‍💻 Author

**Pavithra Sunilkumar**

GitHub: https://github.com/pavithrasunilkumar

LinkedIn: https://linkedin.com/in/pavithra-sunilkumar68

Portfolio: https://vermillion-panda-a08876.netlify.app/

------------------------------------------------------------------------

## ⭐ Support

If you found this project useful, consider giving it a ⭐.

------------------------------------------------------------------------

## 📝 License

For educational and non-commercial use.
