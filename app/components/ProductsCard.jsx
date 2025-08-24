"use client";
import React from "react";
import PrimaryButton from "./Button";

export default function ProductsCard({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="card bg-base-100 shadow-xl border hover:shadow-2xl transition duration-300"
        >
          {/* Product Image */}
          <figure className="px-6 pt-6">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl object-cover h-48 w-full"
            />
          </figure>

          {/* Product Info */}
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">{product.name}</h2>
            {/* <p className="text-sm text-gray-500 italic">{product.tagline}</p> */}
            <p className="mt-2 text-sm">{product.description}</p>

            {/* Features */}
            {/* <ul className="mt-3 space-y-1 text-sm list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul> */}

            {/* Price + Action */}
            <div className="card-actions mt-4 justify-between items-center">
              <span className="text-xl font-semibold text-primary">
                ${product.price}
              </span>
              <PrimaryButton
                btnName={"Details"}
                href={`/details/${product._id}`}
              />
              {/* <button className="btn btn-primary btn-sm">Details</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
