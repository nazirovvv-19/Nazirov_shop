import { deleted, minus, plus } from "../store/slice/CartSlice";
import { RootState } from "../store/types";
import { productType } from "../types/types";
// import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Delete02Icon from "../assets/icons/delete-02-stroke-rounded (1)";
import Link from "next/link";
import { Button } from "./ui/button";

function ShoppingCart({ close }: { close: () => void }) {
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const total_price = useSelector((state: RootState) => state.cart.total_price);
  const dispatch = useDispatch();

  return (
    <div className=" container mx-auto w-full ">
      <div
        className="w-full bg-black/50 absolute top-0 h-full z-20"
        onClick={() => close()}
      ></div>
      <div className="bg-white absolute rounded-xl w-full top-10 z-30">
        <h3 className="text-3xl font-bold p-5">Savatcha:</h3>

        <div className="flex justify-between ">
          <div className="w-full h-[600px] overflow-auto mr-5 ">
            {cartItems.length > 0 ? (
              cartItems.map((item: productType | any) => {
                // console.log('nimadir',item);

                return (
                  <div className="p-5" key={item.id}>
                    <div className="flex justify-between w-full items-center">
                      <div className="p-10 flex items-center justify-between w-full">
                        <Image
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          width={80}
                          height={80}
                        />
                        <p>{item.product.name}</p>
                        <p>{item.total_price.toLocaleString("ru")} som</p>
                        <div className="flex gap-2 items-center">
                          <Button onClick={() => dispatch(minus(item))}>
                            -
                          </Button>
                          <p>{item.qty}</p>
                          <Button onClick={() => dispatch(plus(item))}>
                            +
                          </Button>
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          dispatch(deleted(item));
                        }}
                      >
                        <Delete02Icon />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-10 text-center text-xl font-medium text-gray-500 h-[400px]">
                Savatchada hech narsa yo‘q.
              </div>
            )}
          </div>
          <div className="border rounded-xl border-gray-300 p-2 w-[500px] h-[240px] mr-5">
            <div className="flex text-sm justify-around p-2 bg-gray-200 rounded-xl">
              <p>hoziroq tolash</p>
              <p>muddatli tolash</p>
            </div>
            <div className="p-2 flex justify-between">
              <p className="text-black/50">
                {cartItems.length} dona mahsulot narxi
              </p>
              <p>{total_price.toLocaleString("ru")} som</p>
            </div>
            <p className="text-2xl font-bold mt-5">
              Jami: {total_price.toLocaleString("ru")} som
            </p>
            <Link href={"/checkout"}>
              {" "}
              <button
                onClick={() => close()}
                className="bg-yellow-300 p-2 rounded-xl w-full mt-14"
              >
                Rasmiylashtirish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
