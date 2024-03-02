import Image from "next/image";
import React from "react";

export default function BannerSection() {
  return (
    <section className=" w-full relative">
      <Image
        src="/assets/images/banner.png"
        width={1000}
        height={800}
        alt="Banner Image"
        className=" w-full h-full object-cover min-h-[650px] -z-10"
        priority
      />

      <div className=" w-full h-full flex items-center container bg-black/10  absolute top-0 left-0">
        <h1 className="text-[4rem] text-white font-bold leading-[96px] ">
          Super Flash Sale <br />
          50% Off
        </h1>
      </div>
    </section>
  );
}
