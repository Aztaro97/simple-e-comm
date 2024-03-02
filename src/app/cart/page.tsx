"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X as XIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStoreStore } from "@/store/useAddTocartStore";
import { toast } from "sonner";

export default function CartPage() {
  const { deleteItemById, items, totalPrice } = useCartStoreStore();

  const handleRemoveItem = (id: number) => {
    deleteItemById(id);
    toast.success("Item removed from cart");
  };

  return (
    <div className="min-h-[500px] container py-24">
      <Table className="mb-24">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">PRODUCT</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>QTY</TableHead>
            <TableHead>UNIT PRICE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length > 0 ? (
            items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium w-full">
                  <div className="flex items-center gap-x-3 max-w-max">
                    <XIcon
                      size={30}
                      color="#FF4252"
                      className="p-1 hover:bg-[#ff42521e] cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                    <Image
                      src={item.image}
                      width={400}
                      height={200}
                      alt={item.title}
                      className="w-[137px] h-[94px] rounded-[7px]"
                    />
                    <p className="text-lg">{item.title}</p>
                  </div>
                </TableCell>
                <TableCell className="min-w-[140px]">
                  <p className="text-lg">${item.price}</p>
                </TableCell>
                <TableCell className="min-w-[140px]">
                  <div className="flex items-center h-[46px] max-w-max bg-[#F6F7F8]">
                    <Button className="bg-transparent text-blue hover:bg-blue hover:text-white">
                      -
                    </Button>
                    <p className="text-lg mx-2">1</p>
                    <Button className="bg-transparent text-blue hover:bg-blue hover:text-white">
                      +
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="min-w-[140px]">
                  <p className="text-lg">$499</p>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="font-medium w-full">
                <h2 className="text-5xl text-center my-20">No items in cart</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex w-full gap-10 flex-col md:flex-row md:justify-between">
        <VoucherCode />
        <div>
          <Table className="max-w-[374px]">
            <TableBody>
              <TableRow>
                <TableCell className="min-w-[140px]">Subtotal</TableCell>
                <TableCell>$998</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="min-w-[140px]">Shipping fee</TableCell>
                <TableCell>$998</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="min-w-[140px]">Coupon</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
              <TableRow className="mt-10">
                <TableCell className="min-w-[140px] text-[1.87rem] font-medium">
                  TOTAL
                </TableCell>
                <TableCell className="text-[1.87rem] font-medium">
                  ${totalPrice}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <Button
                    className="bg-blue text-white w-full text-center"
                    disabled={totalPrice === 0}
                  >
                    Check out
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export function VoucherCode() {
  return (
    <div className="flex w-full max-w-[369px] items-center  space-x-0 my-10">
      <Input
        type="text"
        className="focus:border-blue border border-solid border-blue focus:outline-none min-h-[58px] rounded-none focus-visible:border-none focus-visible:outline-none"
        placeholder="Search query..."
      />
      <Button type="submit" className="bg-blue min-h-[58px] rounded-none">
        Search
      </Button>
    </div>
  );
}
