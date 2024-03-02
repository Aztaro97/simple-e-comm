"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Icons } from "../Icons";
import { navData } from "@/constants/data";
import { usePathname } from "next/navigation";
import { useCartStoreStore } from "@/store/useAddTocartStore";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="w-full container">
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

const TopHeader = () => {
  const { count } = useCartStoreStore();

  return (
    <div className="flex items-center justify-between w-full min-h-[80px]">
      <div className=" items-center gap-x-3 hidden md:flex">
        <select
          name="langue"
          id="langue"
          defaultValue={"eng"}
          className="min-h-4 selection:border-none focus:outline-none bg-transparent uppercase"
        >
          <option className="uppercase" value="eng">
            Eng
          </option>
          <option className="uppercase" value="fr">
            Fr
          </option>
          <option className="uppercase" value="ar">
            Ar
          </option>
          <option className="uppercase" value="jap">
            Jap
          </option>
        </select>

        <select
          name="currency"
          id="currency"
          defaultValue={"usd"}
          className="min-h-4 selection:border-none focus:outline-none bg-transparent uppercase"
        >
          <option className="uppercase" value="usd">
            Usd
          </option>
          <option className="uppercase" value="aed">
            Aed
          </option>
          <option className="uppercase" value="fcfa">
            Fcfa
          </option>
        </select>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="gap-x-2">
          <NavigationMenuItem>
            <Link href="/profile" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center gap-x-1">
                <Icons.userProfile />
                My profile
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/cart" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center gap-x-1 relative">
                <Icons.cart />
                <span className="bg-tint p-1 w-[20px] h-[20px]  rounded-full absolute -top-2 -right-2 text-[10px] flex items-center justify-center">
                  {count ?? 0}
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/products" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center gap-x-1">
                Items
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/search" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center gap-x-1 text-gray-400">
                $0.00
                <Icons.search />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const BottomHeader = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2 mb-2 ">
        <Icons.logo />
        <span className="text-lg font-bold">E-Comm</span>
      </div>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="space-x-0 lg:space-x-5">
          {navData.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.link}>
                <NavigationMenuLink
                  className={`hover:bg-blue hover:text-white rounded-md p-2 font-medium ${
                    pathname === item.link && "text-blue"
                  }`}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <MobileNav />
    </div>
  );
};
