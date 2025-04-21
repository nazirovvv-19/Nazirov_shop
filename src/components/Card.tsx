"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { productType } from "@/types/types";
import ShoppingCart01Icon from "@/assets/icons/shoppingCartIcon";
import { useDispatch } from "react-redux";
import { add } from "@/store/slice/CartSlice";
import FavouriteIcon from "../assets/icons/favourite-stroke-rounded (4)";
import { relative } from "path";
import { toggleLike } from "@/store/slice/LikedSlice";

function ProduktCard({ item }: { item?: productType }) {
  const dispatch = useDispatch();
  console.log(item,'item');
  

  // const addToCart = (item: any) => {
  //   \
  // };

  if (!item) {
    return (
      <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>
    );
  }

  return (
    <div className=" bg-white border rounded-lg p-4 max-w-[250px] my-5">
      {item.imageUrl ? (
        <div className="relative">
          {" "}
          <Link href={"/product/" + item.id}>
            {" "}
            <Image
              style={{
                height: 250,
                objectFit: "contain",
              }}
              width={300}
              height={250}
              src={item.imageUrl}
              alt={item.name || "Mahsulot"}
              className="mx-auto rounded-lg object-cover"
            />
          </Link>
          <div onClick={()=>dispatch(toggleLike(item))} className="absolute top-0 right-0 z-10">
            <FavouriteIcon />
          </div>
        </div>
      ) : (
        <div className="bg-gray-200 w-[230px] h-[250px] flex items-center justify-center rounded-lg">
          <p className="text-gray-500">Rasm yo‘q</p>
        </div>
      )}

      <div className="mt-4 w-full">
        <p className=" text-sm h-10 ">{item.name}</p>
        <p className="text-gray-700 text-sm h-10 ">{item.description}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-xm font-semibold text-gray-900">
            {item.price
              ? `${Number(item.price).toLocaleString("ru")} so'm`
              : "Narx noma’lum"}
          </p>
          <button
            className="border-2 border-amber-500 p-2 rounded-md hover:bg-amber-500 hover:text-white transition"
            onClick={() => dispatch(add(item))}
          >
            <ShoppingCart01Icon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProduktCard;
