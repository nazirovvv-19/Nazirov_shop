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
export const getServerSideProps = (async ({params}:GetServerSidePropsContext) => {
  const res = await fetch("https://nt.softly.uz/api/front/products/" + params?.id)
  const product= await res.json()
  return { props: {product } }
})
function Product({product}:any) {
  // const { id } = useParams();
  // const [product, setProduct] = useState<OneProductType | null>(null);
  const dispatch = useDispatch()

  const addToCart = (product:any)=>{
    dispatch(add(product))
  }

 

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col   md:flex-row justify-center items-center md:items-start gap-40  ">
        <div className="flex flex-col gap-3 ">
          <Image
            className="border-black border rounded-xl p-1"
            src={product.imageUrl}
            alt={product.name}
            width={150}
            height={40}
          />
          <Image
            className="border-black border rounded-xl p-1"
            src={product.imageUrl}
            alt={product.name}
            width={150}
            height={40}
          />
          <Image
            className="border-black border rounded-xl p-1"
            src={product.imageUrl}
            alt={product.name}
            width={150}
            height={40}
          />
        </div>
        <div className="w-full">
          <Image
            style={{
              width: 400,
              height: 400,
              objectFit: "contain",
            }}
            width={400}
            height={500}
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg shadow-lg border border-gray-300"
          />
        </div>
        <div className="w-60">
            <p>Description _____ {product.description}</p>
        </div>
        <div className=" mt-30">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-3xl font-semibold text-green-600 mt-4">
            ${product.price}
          </p>
          <div className="mt-6">
            <button onClick={()=>addToCart(product)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Product;
