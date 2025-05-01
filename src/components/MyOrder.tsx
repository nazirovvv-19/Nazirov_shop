"use client";
import { RootState } from "@/store/types";
import { MyOrderObjectType } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

function MyOrder() {
  const accessToken = useSelector(
    (state: RootState) => state.userToken.accessToken
  );
  const [myOrderState, setMyOrderState] = useState<MyOrderObjectType>();
  useEffect(() => {
    if (!accessToken) return;
    axios
      .get(`https://nt.softly.uz/api/front/orders?limit=10&page=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data, "ordedr");
        toast.success("Ajoyib");
        setMyOrderState(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="w-[80%] ">
      <p className="text-2xl font-bold mb-7">Buyurtmalaringiz</p>
      <div className="">
        {myOrderState?.items.map((item) => {
          return (
            <div key={item.id} className="flex justify-around items-center flex-wrap">
              {item.items.map((item2) => {
                return (
                  <div key={item2.id}>
                    <div className="border w-full p-4 rounded-2xl mb-2">
                      <div className="flex justify-between items-center gap-5">
                        <div>
                          <p className="font-bold">
                            Buyurma nomi:{" "}
                            <span className="font-normal">
                              {item2.product.name}
                            </span>
                          </p>
                          <p className="font-bold">
                            Buyurma haqida:{" "}
                            <span className="font-normal">
                              {item2.product.description}
                            </span>
                          </p>
                        </div>
                        <Image
                          src={item2.product.imageUrl}
                          alt={item2.product.name}
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="border-b my-2"></div>
                      <p className="font-bold">
                        Buyutma soni:{" "}
                        <span className="font-normal">{item2.quantity}</span>
                      </p>
                      <p className="font-bold">
                        {" "}
                        Buyurtma holati:{" "}
                        <span className="font-normal">{item.status}</span>
                      </p>
                      <p className="font-bold">
                        {" "}
                        Buyurtma narxi:{" "}
                        <span className="font-normal">
                          {item2.price.toLocaleString("ru")} som{" "}
                        </span>{" "}
                      </p>
                      {/* <div className="border-b my-2"></div> */}
                      {/* <p>Jami: <span>{it}</span></p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrder;
