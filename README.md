# HCARM – Hybrid Context-Aware Recommendation Model

## Smart Recommendations Beyond Keywords

HCARM is an AI-powered recommendation system that goes beyond traditional keyword matching by combining semantic search, popularity analysis, ratings, and pricing intelligence to deliver highly relevant product recommendations.

---

## Live Demo

Frontend: Coming Soon

Backend API: Coming Soon

---

## Project Overview

Traditional search systems rely heavily on exact keyword matching, often failing to understand the user's actual intent.

HCARM solves this problem using transformer-based embeddings and a hybrid ranking mechanism that understands context and meaning.

Example:

Query:

```
wireless bluetooth headphones
```

Instead of simply matching keywords, HCARM identifies products that are semantically similar and ranks them using:

* Semantic Similarity
* Product Ratings
* Product Popularity
* Price Intelligence

---

## Features

### Semantic Search

Uses Sentence Transformers to understand the meaning behind user queries.

### Hybrid Ranking

Combines multiple signals into a single HCARM Score:

* Semantic Similarity
* Ratings
* Popularity
* Price

### FastAPI Backend

Provides REST APIs for recommendation generation.

### Modern Frontend

Built with:

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion

### Explainable Recommendations

Each recommendation includes reasons explaining why the product was selected.

---

## Architecture

```text
User Query
    ↓
Query Parser
    ↓
Sentence Transformer
    ↓
Semantic Similarity Search
    ↓
Hybrid Ranking Engine
    ↓
Top Recommendations
    ↓
Frontend Dashboard
```

---

## Tech Stack

### Machine Learning

* Sentence Transformers
* Hugging Face Transformers
* NumPy
* Pandas
* Scikit-Learn

### Backend

* FastAPI
* Uvicorn

### Frontend

* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Axios

### Version Control

* Git
* GitHub

---

## Dataset

Amazon Product Dataset

Processed products:

* 50,000+ Products

The original dataset and embeddings are excluded from GitHub because of file size limitations.

---

## API Endpoints

### Health Check

```http
GET /
```

Response:

```json
{
  "message": "HCARM Running"
}
```

### Recommendations

```http
POST /recommend
```

Request:

```json
{
  "query": "wireless bluetooth headphones"
}
```

Response:

```json
{
  "query": "wireless bluetooth headphones",
  "recommendations": [...]
}
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Abhirishitha/HCARM-AI-Recommendation-System.git
cd HCARM-AI-Recommendation-System
```

### Backend Setup

```bash
pip install -r requirements.txt
```

Run:

```bash
uvicorn backend.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Screenshots
<img width="1896" height="875" alt="Screenshot 2026-06-13 223333" src="https://github.com/user-attachments/assets/9ab1d932-254b-4571-b8cc-899345019728" />
<img width="1901" height="867" alt="Screenshot 2026-06-13 223410" src="https://github.com/user-attachments/assets/f0afd51e-64e8-4adc-855f-e6e59166491d" />
<img width="1900" height="865" alt="Screenshot 2026-06-13 223431" src="https://github.com/user-attachments/assets/c38c03f0-5205-42e7-8ffd-d127e8e9726d" />
<img width="1896" height="867" alt="Screenshot 2026-06-13 223503" src="https://github.com/user-attachments/assets/f8323b1a-0010-4df6-a035-afa83d0b88eb" />
<img width="1896" height="868" alt="Screenshot 2026-06-13 223525" src="https://github.com/user-attachments/assets/d9e12167-9bd5-4bc8-931f-a5e45074c3e9" />

## Future Improvements

* User Personalization
* Recommendation History
* Product Images
* Product Purchase Links
* User Authentication
* Recommendation Analytics
* Real-Time Learning

---

## Author

Abhirishitha Naraharisetti

B.Tech CSE Student

Machine Learning | Data Science | Full Stack Development

GitHub:
https://github.com/Abhirishitha

---

## License

MIT License
