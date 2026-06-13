import pandas as pd

df = pd.read_csv("data/Amazon-Products.csv")

print("\nColumns:")
print(df.columns.tolist())

print("\nShape:")
print(df.shape)

print("\nFirst 5 Rows:")
print(df.head())