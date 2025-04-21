import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/Banners";
import Products from "@/components/Products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/types";
import YandexMap from "@/components/YandexMap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const total_price = useSelector((state:RootState)=>state.cart.total_price)
  const state = useSelector(state => state)
  // console.log(state)
  return (
    <div
      className={`${geistSans.className} ${geistMono.className}  font-[family-name:var(--font-geist-sans)] bg-white`}
    >
      <Banner/>
      <Products/>
      <YandexMap/>

     
    </div>
  );
}
