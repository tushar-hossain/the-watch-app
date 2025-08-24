import React from "react";
import ProductsCard from "../components/ProductsCard";
import Products from "../components/Products";

export default function products() {
  return (
    <div className="my-10">
      <h1 className="text-xl md:text-3xl font-bold">All Products</h1>

      <div>
        <Products />
      </div>
    </div>
  );
}
