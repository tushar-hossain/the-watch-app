import React from "react";
import ProductsCard from "./ProductsCard";

export default async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div>
        <ProductsCard products={products} />
      </div>
    </div>
  );
}
