"use client";
import { CategoryType } from "@/types/types";
// import ProduktCard from "@/companents/ProduktCard";
// import { CardsDataType } from "@/type/Types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type objectType = {
   limit:number
   items:CategoryType[]
   totalItems:number,
   page:number
}
function CategorieProduct() {
  const [categoriesPage, setCategoriesPage] = useState<CategoryType[]>([]);
  const [pagination,setPagination] =useState<objectType>()
  const [page, setPage] = useState(1)
  const params = useParams();
  if (!params) return null;
  const id = params.id;
  useEffect(() => {
    axios
      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${id}&page=${page}&limit=10`
      )
      .then((res) => {
        console.log(res.data, "skkskss");
        setCategoriesPage(res.data.items);
        setPagination(res.data)
      });
  }, [id,page]);
  if (categoriesPage.length === 0) {
    return (
      <div className="mx-auto container text-center  text-xl ">
        loading...
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-5 container w-full mx-auto px-6 py-4">
        {categoriesPage.map((item) => {
          return (
            <>
              <Card item={item} key={item.id} />
            </>
          );
        })}
      </div>
      <Pagination>
        <PaginationContent>
          {page>1&&(
            <PaginationItem onClick={()=>setPage(page-1)}>
            <PaginationPrevious href="#" />
          </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem onClick={()=>setPage(page +1)}>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default CategorieProduct;
