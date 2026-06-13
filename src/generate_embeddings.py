import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer

print("Loading dataset...")

df = pd.read_csv("data/clean_products.csv")

print("Creating product text...")

df["product_text"] = (
    df["name"].astype(str)
    + " "
    + df["main_category"].astype(str)
    + " "
    + df["sub_category"].astype(str)
)

print("Loading model...")

model = SentenceTransformer("all-MiniLM-L6-v2")

print("Generating embeddings...")

embeddings = model.encode(
    df["product_text"].tolist(),
    batch_size=64,
    show_progress_bar=True
)

np.save(
    "embeddings/product_embeddings.npy",
    embeddings
)

print("Embeddings shape:", embeddings.shape)
print("Embeddings saved successfully!")