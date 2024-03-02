"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/@types";
import { useCartStoreStore } from "@/store/useAddTocartStore";
import { toast } from "sonner";
import { Icons } from "./Icons";

export default function ProductItem({ ...item }: TProduct) {
  const { addToCart } = useCartStoreStore();

  const handleAddToCart = (item: TProduct) => {
    addToCart(item);
    toast.success("Item added to cart");
  };

  return (
    <Card className="flex flex-col group relative">
      <div
        className={`absolute h-[300px] group-hover:bg-white top-0 right-0 inset-0 flex justify-center space-x-5 opacity-0 items-center p-3 transition-opacity duration-300 ease-in-out   group-hover:opacity-100 `}
      >
        <button className="hover:scale-125 cursor-pointer">
          <Icons.heart />
        </button>
        <button
          onClick={() => handleAddToCart(item)}
          className="hover:scale-125 cursor-pointer"
        >
          <Icons.cart />
        </button>
      </div>
      <Image
        src={item.image}
        width={500}
        height={500}
        alt={item.title}
        className="h-[300px] w-full object-cover rounded-t-xl"
      />
      <CardContent className="flex flex-col justify-between">
        <CardTitle className="text-[#223263] text-lg font-bold mb-2 mt-1">
          {item.title}
        </CardTitle>
        <p className="font-bold text-sm text-center flex justify-center gap-x-2 mt-auto">
          <span className="text-blue">${item.price}</span>{" "}
          <span className="text-gray">$534,33</span>{" "}
          <span className="text-tint">24% Off</span>
        </p>
      </CardContent>
    </Card>
  );
}

ProductItem.Skeleton = function ProductItemSkeleton() {
  return (
    <Card className="bg-transparent flex flex-col">
      <Skeleton className="h-[200px] w-full rounded-xl mb-3" />
      <CardContent className="bg-transparent space-y-2">
        <Skeleton className="h-4 w-[130px]" />
        <Skeleton className="h-4 w-[130px]" />
      </CardContent>
    </Card>
  );
};
