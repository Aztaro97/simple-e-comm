"use client";

import React from "react";
import FeatureProductItem from "../feature-product-item";
import { InputSearch } from "../input-search";
import { useGetFeaturesProduct } from "@/hooks/product-hook";

export default function FeatureProductSection() {
  const { data: productData, isPending } = useGetFeaturesProduct();
  return (
    <section className="container py-10">
      <h1 className="text-[2.18rem] text-center mb-6">FEATURED PRODUCTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {isPending ? (
          <FeatureProductItem />
        ) : (
          productData?.map((product) => (
            <FeatureProductItem key={product.id} {...product} />
          ))
        )}
      </div>
      <InputSearch />
    </section>
  );
}
