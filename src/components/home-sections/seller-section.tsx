"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductItem from "../product-item";
import { useGetAllProduct } from "@/hooks/product-hook";

const tabsData = [
  { label: "All", value: "" },
  { label: "Bags", value: "electronics" },
  { label: "Sneakers", value: "men's clothing" },
  { label: "Belt", value: "women's clothing" },
  { label: "Sunglasses", value: "jewelery" },
];

export default function SellerSection() {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].value);

  const { data: productData, isPending } = useGetAllProduct(activeTab);

  const handleSelectTab = (selectedValue: string) => {
    setActiveTab(selectedValue);
  };

  return (
    <section className="container min-h-[400px] py-24">
      <h1 className="text-[2.18rem] text-center">BEST SELLER</h1>

      <Tabs
        defaultValue={tabsData[0].value}
        className="w-full mt-6 text-center"
      >
        <TabsList className="bg-transparent">
          {tabsData.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              onClick={() => handleSelectTab(tab.value)}
              className="data-[state=active]:text-blue data-[state=active]:underline"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={tabsData[0].value} className="min-h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {isPending
              ? Array.from({ length: 4 }).map((_, index) => (
                  <ProductItem.Skeleton key={index} />
                ))
              : productData?.map((product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
          </div>
        </TabsContent>
        <TabsContent value={tabsData[1].value} className="min-h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {isPending
              ? Array.from({ length: 4 }).map((_, index) => (
                  <ProductItem.Skeleton key={index} />
                ))
              : productData?.map((product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
          </div>
        </TabsContent>
        <TabsContent value={tabsData[2].value} className="min-h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {isPending
              ? Array.from({ length: 4 }).map((_, index) => (
                  <ProductItem.Skeleton key={index} />
                ))
              : productData?.map((product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
          </div>
        </TabsContent>
        <TabsContent value={tabsData[3].value} className="min-h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {isPending
              ? Array.from({ length: 4 }).map((_, index) => (
                  <ProductItem.Skeleton key={index} />
                ))
              : productData?.map((product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
          </div>
        </TabsContent>
        <TabsContent value={tabsData[4].value} className="min-h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {isPending
              ? Array.from({ length: 4 }).map((_, index) => (
                  <ProductItem.Skeleton key={index} />
                ))
              : productData?.map((product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
