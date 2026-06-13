from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend.recommender_service import get_recommendations

app = FastAPI(title="HCARM API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    query: str

@app.get("/")
def home():
    return {"message": "HCARM Running"}

@app.post("/recommend")
def recommend(request: QueryRequest):
    return {
        "query": request.query,
        "recommendations": get_recommendations(request.query)
    }