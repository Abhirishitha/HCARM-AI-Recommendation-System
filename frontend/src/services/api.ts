import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export interface Recommendation {
  name: string;
  category: string;
  rating: number;
  price: number;
  score: number;

}

export interface RecommendResponse {
  query: string;
  recommendations: Recommendation[];
}

export async function getRecommendations(query: string): Promise<RecommendResponse> {
  const { data } = await axios.post<RecommendResponse>(
    `${API_URL}/recommend`,
    { query },
    { headers: { "Content-Type": "application/json" }, timeout: 30000 },
  );
  return data;
}

export function explainRecommendation(r: Recommendation): string[] {
  const reasons: string[] = [];
  if (r.score >= 0.7) reasons.push("High semantic relevance to your query");
  else if (r.score >= 0.5) reasons.push("Strong semantic match");
  else reasons.push("Relevant contextual match");
  if (r.rating >= 4.3) reasons.push("Excellent user ratings");
  else if (r.rating >= 4.0) reasons.push("Strong ratings from buyers");
  if (r.price < 2000) reasons.push("Great value pricing");
  else if (r.price < 10000) reasons.push("Competitive price point");
  reasons.push("Popular among similar buyers");
  return reasons;
}
