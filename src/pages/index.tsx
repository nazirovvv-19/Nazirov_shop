import { Geist, Geist_Mono } from "next/font/google";
import Banner from "../components/Banners";
import Products from "../components/Products";
import YandexMap from "../components/YandexMap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className}  font-[family-name:var(--font-geist-sans)] bg-white`}
    >
      <Banner />
      <Products />
      <YandexMap />
    </div>
  );
}
