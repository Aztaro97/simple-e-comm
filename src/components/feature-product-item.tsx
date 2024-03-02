"use client";

import { TProduct } from "@/@types";
import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";

export default function FeatureProductItem({ ...product }: TProduct) {
  return (
    <div className="flex space-x-5">
      <Image
        src={product.image}
        width={200}
        height={200}
        objectFit="contain"
        alt="Feature"
        className="w-[140px] h-[140px]"
      />
      <div>
        <h3 className="text-[1.37rem] mb-2">{product.title}</h3>
        <div className="![&>.style-module_emptyIcons__Bg-FZ]:flex">
          <Rating
            className="mb-3"
            initialValue={2}
            size={30}
            readonly={true}
            SVGstyle={{ display: "inline" }}
          />
        </div>
        <p className="text-[1.25rem] space-x-3">
          <span className="text-tint">${product.price}</span>
          <span className="text-gray">$599</span>
        </p>
      </div>
    </div>
  );
}
