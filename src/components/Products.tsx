"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { productType } from "../types/types";
import Card from "./Card";
// import { productType } from "@/types";

function Products() {
  const [products, setProducts] = useState<productType[]>([]);
  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/products").then((res) => {
      setProducts(res.data.items);
      // console.log("product", res.data.items);
    });
  }, []);
  if (!products) {
    return <div>loading</div>;
  }
  return (
    <div className="container mx-auto   ">
    <div className="flex flex-wrap justify-between w-full px-7">
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  </div>
  );
}

export default Products;
