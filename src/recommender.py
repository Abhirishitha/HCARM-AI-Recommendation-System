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

query = input("\nEnter your query: ")
if "laptop" in query.lower():

    laptop_mask = (
        df["name"]
        .str.lower()
        .str.contains(
            "laptop|notebook|macbook",
            na=False
        )
    )

else:

    laptop_mask = pd.Series(
        [True] * len(df)
    )

print("\nSearching...\n")

query_embedding = model.encode([query])

similarities = cosine_similarity(
    query_embedding,
    embeddings
)[0]

df["similarity"] = similarities

df = df[laptop_mask]

# Clean ratings
df["ratings"] = pd.to_numeric(
    df["ratings"],
    errors="coerce"
).fillna(0)

# Normalize ratings
df["rating_score"] = df["ratings"] / 5

# HCARM V1
df["hcarm_score"] = (
    0.8 * df["similarity"]
    +
    0.2 * df["rating_score"]
)

results = df.sort_values(
    "hcarm_score",
    ascending=False
).head(10)

print("\nTOP 10 RECOMMENDATIONS\n")

for i, (_, row) in enumerate(results.iterrows(), start=1):

    print(f"{i}. {row['name']}")

    print(f"Category: {row['main_category']}")

    print(f"Rating: {row['ratings']}")

    print(
        f"Score: {round(row['hcarm_score'],3)}"
    )

    print("-" * 80)