"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import Header from "./Header";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  createdAt: string;
  description: string;
}

function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
      // console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  if (!categories.length) {
    return <div>loading</div>;
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto p-3">
        {/* <Header /> */}
        <div className="overflow-x-auto">
          <div className="flex space-x-4 p-3">
            {categories.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/catogories/${item.id}`}
                  className=" m-auto text-gray-800 rounded-md  transition"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
