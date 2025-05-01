"use client";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Products from "../../components/Products";
import { add } from "../../store/slice/CartSlice";

interface OneProductType {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const res = await fetch(`https://nt.softly.uz/api/front/products/${params?.id}`);
  const product = await res.json();
  return { props: { product } };
};

function Product({ product }: { product: OneProductType }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-row lg:flex-col gap-3 justify-center items-center">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              className="border border-black rounded-xl p-1"
              src={product.imageUrl}
              alt={`${product.name} thumbnail ${i + 1}`}
              width={100}
              height={100}
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex justify-center items-center w-full lg:w-[400px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg shadow-lg border border-gray-300 object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-3xl font-semibold text-green-600">${product.price}</p>
          <button
            onClick={addToCart}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-20">
        <Products />
      </div>
    </div>
  );
}

export default Product;
