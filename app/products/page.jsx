import React from "react";
import ProductsCard from "../components/ProductsCard";

export default async function products() {
  const res = await fetch("http://localhost:3000/api/all-products");
  const products = await res.json();
  return (
    <div className="my-10">
      <h1 className="text-xl md:text-3xl font-bold">All Products</h1>

      <div>
        <div>
          <ProductsCard products={products} />
        </div>
      </div>
    </div>
  );
}
