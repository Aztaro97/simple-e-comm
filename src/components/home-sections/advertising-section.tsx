import Image from "next/image";
import React from "react";

export default function AdvertisingSection() {
  return (
    <section className="bg-blue min-h-[500px] flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-3 max-w-[572px]">
          <h1 className="text-white text-[3.42rem] leading-[76px]">
            Adidas Men Running Sneakers
          </h1>
          <p className="text-white text-[1.5rem]">
            Performance and design. Taken right to the edge.
          </p>
          <button className="text-white underline">SHOP NOW</button>
        </div>

        <div className="md:relative bottom-28">
          <Image
            src="/assets/images/shoe.png"
            width={400}
            height={400}
            alt="Shoe"
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
