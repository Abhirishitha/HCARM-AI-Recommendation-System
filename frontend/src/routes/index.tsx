import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HCARM — Smart Recommendations Beyond Keywords" },
      { name: "description", content: "Hybrid Context-Aware Recommendation Model: AI-powered product recommendations over 50,000+ Amazon products using semantic search and hybrid ranking." },
      { property: "og:title", content: "HCARM — Smart Recommendations Beyond Keywords" },
      { property: "og:description", content: "AI-powered hybrid product recommendation engine combining semantic search, ratings, popularity and discount intelligence." },
    ],
  }),
  component: Landing,
});
