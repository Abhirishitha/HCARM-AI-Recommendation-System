import pandas as pd
import numpy as np

from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

print("Loading products...")
df = pd.read_csv("data/clean_products.csv")

print("Loading embeddings...")
embeddings = np.load(
    "embeddings/product_embeddings.npy"
)

print("Loading model...")
model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def get_recommendations(query, top_k=10):

    query_embedding = model.encode([query])

    similarities = cosine_similarity(
        query_embedding,
        embeddings
    )[0]

    temp_df = df.copy()

    temp_df["similarity"] = similarities

    # Rating Score
    temp_df["ratings"] = pd.to_numeric(
        temp_df["ratings"],
        errors="coerce"
    ).fillna(0)

    temp_df["rating_score"] = (
        temp_df["ratings"] / 5
    )

    # Popularity Score
    temp_df["no_of_ratings"] = (
        temp_df["no_of_ratings"]
        .astype(str)
        .str.replace(",", "")
    )

    temp_df["no_of_ratings"] = pd.to_numeric(
        temp_df["no_of_ratings"],
        errors="coerce"
    ).fillna(0)

    temp_df["popularity_score"] = (
        np.log1p(temp_df["no_of_ratings"])
    )

    temp_df["popularity_score"] = (
        temp_df["popularity_score"]
        /
        temp_df["popularity_score"].max()
    )

    # Price Cleaning
    temp_df["discount_price"] = (
        temp_df["discount_price"]
        .astype(str)
        .str.replace("₹", "")
        .str.replace(",", "")
    )

    temp_df["actual_price"] = (
        temp_df["actual_price"]
        .astype(str)
        .str.replace("₹", "")
        .str.replace(",", "")
    )

    temp_df["discount_price"] = pd.to_numeric(
        temp_df["discount_price"],
        errors="coerce"
    )

    temp_df["actual_price"] = pd.to_numeric(
        temp_df["actual_price"],
        errors="coerce"
    )

    # Discount Score
    temp_df["discount_score"] = (
        (
            temp_df["actual_price"]
            - temp_df["discount_price"]
        )
        /
        temp_df["actual_price"]
    )

    temp_df["discount_score"] = (
        temp_df["discount_score"]
        .fillna(0)
    )

    # HCARM Score
    temp_df["hcarm_score"] = (
        0.50 * temp_df["similarity"]
        + 0.20 * temp_df["rating_score"]
        + 0.15 * temp_df["popularity_score"]
        + 0.15 * temp_df["discount_score"]
    )

    results = temp_df.sort_values(
        "hcarm_score",
        ascending=False
    ).head(top_k)

    recommendations = []

    for _, row in results.iterrows():

        recommendations.append({
            "name": row["name"],
            "category": row["main_category"],
            "rating": float(row["ratings"]),
            "price": float(row["discount_price"]),
            "score": round(
                float(row["hcarm_score"]),
                3
            )

        })

    return recommendations