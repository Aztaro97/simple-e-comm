import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";

const serviceNav = [
  {
    label: "About Us",
    link: "#/",
  },
  {
    label: "Infomation",
    link: "#/",
  },
  {
    label: "Privacy Policy",
    link: "#/",
  },
  {
    label: "Terms & Conditions",
    link: "#/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#BCDDFE] py-24">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          <div className="max-w-[221px]">
            <div className="flex items-center space-x-2 mb-2 ">
              <Icons.logo />
              <span className="text-lg font-bold">E-Comm</span>
            </div>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="max-w-[221px]">
            <h2 className="text-lg font-medium mb-4">Follow Us</h2>
            <p className="text-xs mb-3">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="http://facebok.com/" target="_blank">
                <Icons.facebook />
              </Link>
              <Link href="http://twitter.com/" target="_blank">
                <Icons.twitter />
              </Link>
            </div>
          </div>
          <div className="max-w-[221px]">
            <h2 className="text-lg font-medium mb-4">Contact Us</h2>
            <p className="text-sm max-w-[148px]">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-x-5">
          <div className="max-w-[221px]">
            <h2 className="text-lg mb-4">Information</h2>
            <div className="flex flex-col space-y-1">
              {serviceNav.map((nav, index) => (
                <Link key={index} href={nav.link}>
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-w-[221px]">
            <h2 className="text-lg mb-4">Service</h2>
            <div className="flex flex-col space-y-1">
              {serviceNav.map((nav, index) => (
                <Link key={index} href={nav.link}>
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-w-[221px]">
            <h2 className="text-lg mb-4">My Account</h2>
            <div className="flex flex-col space-y-1">
              {serviceNav.map((nav, index) => (
                <Link key={index} href={nav.link}>
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-w-[221px]">
            <h2 className="text-lg mb-4">Our Offers</h2>
            <div className="flex flex-col space-y-1">
              {serviceNav.map((nav, index) => (
                <Link key={index} href={nav.link}>
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[#C1C8CE]">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>

          <div className="flex items-center gap-x-3">
            <Link href="http://facebok.com/" target="_blank">
              <Icons.wasterUnion />
            </Link>
            <Link href="http://twitter.com/" target="_blank">
              <Icons.masterCard />
            </Link>
            <Link href="http://instagram.com/" target="_blank">
              <Icons.paypal />
            </Link>
            <Link href="http://youtube.com/" target="_blank">
              <Icons.masterCard />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
