// "use client";
import { CategoryType } from "../../types/types";
// import ProduktCard from "@/companents/ProduktCard";
// import { CardsDataType } from "@/type/Types";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GetServerSidePropsContext } from "next";
type objectType = {
  limit: number;
  items: CategoryType[];
  totalItems: number;
  page: number;
};

export async function getServerSideProps(args:GetServerSidePropsContext){
  console.log(args);
  
  const res = await axios.get(`https://nt.softly.uz/api/front/products`,{
   params:{
    page:args.query.page,
    limit:args.query.limit,
    categoryId:args.params?.id
   }

  })

  return {
    props:{
      data:res.data
    }
  }
}
function CategorieProduct({data}:{data:objectType}) {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')||1
  const limit = Number(searchParams.get('limit')||10)
 
  if (!data) {
    return (
      <div className="mx-auto container text-center  text-xl ">loading...</div>
    );
  }
const pageCount = Math.ceil(data.totalItems/limit)
const params = useParams()  
if (!params) {
  return <></>
}
  return (
    <div>
      <div className="grid grid-cols-5 container w-full mx-auto px-6 py-4">
        {data.items.map((item) => {
          return (
            <>
              <Card item={item} key={item.id} />
            </>
          );
        })}
      </div>

     <div className="flex justify-center gap-2 mb-5">
     {[...Array(pageCount)].map((_, index) => {
        return (
         <div>
           <Link href={`/categories/${params.id}?page=${index + 1}&limit=${limit}`}>
            <Button
              variant={index + 1 === Number(page) ? "default" : "outline"}
            >
              {index + 1}
            </Button>
          </Link>
            
         </div>
        );
      })}
     </div>
      {/* <Pagination>
  <PaginationContent>
    {page > 1 && (
      <PaginationItem>
        <PaginationPrevious href={`/categories/${id}?page=${page - 1}&limit=${limit}`} />
      </PaginationItem>
    )}

    <PaginationItem>
      <PaginationLink href={`/categories/${id}?page=${page}&limit=${limit}`}>
        {page}
      </PaginationLink>
    </PaginationItem>

    {pagination && page < Math.ceil(pagination.totalItems / limit) && (
      <PaginationItem>
        <PaginationNext href={`/categories/${id}?page=${page + 1}&limit=${limit}`} />
      </PaginationItem>
    )}
  </PaginationContent>
</Pagination> */}
    </div>
  );
}

export default CategorieProduct;
