import pandas as pd

df = pd.read_csv("data/Amazon-Products.csv")

df = df[
    [
        "name",
        "main_category",
        "sub_category",
        "ratings",
        "no_of_ratings",
        "discount_price",
        "actual_price"
    ]
]

df = df.dropna()

sample_size = min(50000, len(df))

df = df.sample(
    n=sample_size,
    random_state=42
)

df.to_csv(
    "data/clean_products.csv",
    index=False
)

print("Final Shape:", df.shape)