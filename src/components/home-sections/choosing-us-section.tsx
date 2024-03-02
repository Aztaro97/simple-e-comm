import React from "react";
import { Icons } from "../Icons";

const serviceData = [
  {
    title: "Free Shipping",
    icon: <Icons.shipping />,
  },
  {
    title: "100% REFUND",
    icon: <Icons.refound />,
  },
  {
    title: "SUPPORT 24/7",
    icon: <Icons.support />,
  },
];

export default function ChoosingUsSection() {
  return (
    <section className="max-w-[1091px] mx-auto w-full py-10">
      <div className="flex flex-col md:flex-row gap-5 justify-between min-h-[400px]">
        {serviceData.map((service, index) => (
          <div
            className="flex flex-col justify-center items-center gap-5"
            key={index}
          >
            {service.icon}
            <h1 className="text-[1.68rem] font-medium">{service.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
