from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import math
from collections import Counter

app = FastAPI(title="InHire ML Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class RecommendRequest(BaseModel):
    user_skills: List[str] = []
    job_skills: List[str] = []


class RecommendResponse(BaseModel):
    match_score: int
    matched_skills: List[str]
    missing_skills: List[str]


def tokenize(skills: List[str]) -> List[str]:
    tokens = []
    for skill in skills:
        parts = skill.lower().replace(",", " ").replace("/", " ").split()
        tokens.extend(parts)
    return tokens


def build_tfidf_vector(tokens: List[str], vocab: List[str]) -> List[float]:
    tf = Counter(tokens)
    total = max(len(tokens), 1)
    vector = []
    for term in vocab:
        tf_score = tf.get(term, 0) / total
        idf = 1.0 + math.log(1 + 1 / (1 + tf.get(term, 0)))
        vector.append(tf_score * idf)
    return vector


def cosine_similarity(vec_a: List[float], vec_b: List[float]) -> float:
    if not vec_a or not vec_b:
        return 0.0
    dot = sum(a * b for a, b in zip(vec_a, vec_b))
    mag_a = math.sqrt(sum(a ** 2 for a in vec_a))
    mag_b = math.sqrt(sum(b ** 2 for b in vec_b))
    if mag_a == 0 or mag_b == 0:
        return 0.0
    return dot / (mag_a * mag_b)


def compute_match(user_skills: List[str], job_skills: List[str]) -> dict:
    user_lower = {s.lower().strip() for s in user_skills}
    matched = [s for s in job_skills if s.lower().strip() in user_lower]
    missing = [s for s in job_skills if s.lower().strip() not in user_lower]

    if not user_skills or not job_skills:
        return {"match_score": 20, "matched_skills": matched, "missing_skills": missing}

    user_tokens = tokenize(user_skills)
    job_tokens = tokenize(job_skills)
    vocab = list(set(user_tokens + job_tokens))

    user_vec = build_tfidf_vector(user_tokens, vocab)
    job_vec = build_tfidf_vector(job_tokens, vocab)

    similarity = cosine_similarity(user_vec, job_vec)
    raw_score = similarity * 100

    if job_skills:
        exact_ratio = len(matched) / len(job_skills)
        raw_score = min(100, raw_score + exact_ratio * 20)

    score = max(10, round(raw_score))

    return {
        "match_score": score,
        "matched_skills": matched,
        "missing_skills": missing,
    }


@app.post("/recommend", response_model=RecommendResponse)
async def recommend(request: RecommendRequest):
    result = compute_match(request.user_skills, request.job_skills)
    return result


@app.get("/health")
async def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
