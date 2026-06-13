import pandas as pd
import numpy as np
import re

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

query = input("\nEnter your query: ")

print("\nSearching...\n")

# -------------------
# Query Embedding
# -------------------

query_embedding = model.encode([query])

similarities = cosine_similarity(
    query_embedding,
    embeddings
)[0]

df["similarity"] = similarities

# -------------------
# Rating Score
# -------------------

df["ratings"] = pd.to_numeric(
    df["ratings"],
    errors="coerce"
).fillna(0)

df["rating_score"] = (
    df["ratings"] / 5
)

# -------------------
# Popularity Score
# -------------------

df["no_of_ratings"] = (
    df["no_of_ratings"]
    .astype(str)
    .str.replace(",", "")
)

df["no_of_ratings"] = pd.to_numeric(
    df["no_of_ratings"],
    errors="coerce"
).fillna(0)

df["popularity_score"] = (
    np.log1p(df["no_of_ratings"])
)

df["popularity_score"] = (
    df["popularity_score"]
    /
    df["popularity_score"].max()
)

# -------------------
# Price Cleaning
# -------------------

df["discount_price"] = (
    df["discount_price"]
    .astype(str)
    .str.replace("₹", "")
    .str.replace(",", "")
)

df["actual_price"] = (
    df["actual_price"]
    .astype(str)
    .str.replace("₹", "")
    .str.replace(",", "")
)

df["discount_price"] = pd.to_numeric(
    df["discount_price"],
    errors="coerce"
)

df["actual_price"] = pd.to_numeric(
    df["actual_price"],
    errors="coerce"
)

# -------------------
# Discount Score
# -------------------

df["discount_score"] = (
    (
        df["actual_price"]
        -
        df["discount_price"]
    )
    /
    df["actual_price"]
)

df["discount_score"] = (
    df["discount_score"]
    .fillna(0)
)

# -------------------
# HCARM V2 Formula
# -------------------

df["hcarm_score"] = (
    0.50 * df["similarity"]
    +
    0.20 * df["rating_score"]
    +
    0.15 * df["popularity_score"]
    +
    0.15 * df["discount_score"]
)

# -------------------
# Top Results
# -------------------

results = df.sort_values(
    "hcarm_score",
    ascending=False
).head(10)

print("\nTOP 10 RECOMMENDATIONS\n")

for i, (_, row) in enumerate(
    results.iterrows(),
    start=1
):

    print(f"{i}. {row['name']}")

    print(
        f"Category: {row['main_category']}"
    )

    print(
        f"Rating: {row['ratings']}"
    )

    print(
        f"Popularity: {row['no_of_ratings']}"
    )

    print(
        f"Discount Price: ₹{row['discount_price']}"
    )

    print(
        f"HCARM Score: {round(row['hcarm_score'],3)}"
    )

    print("-" * 80)