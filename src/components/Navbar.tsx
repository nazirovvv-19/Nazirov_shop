import EarthIcon from "../assets/icons/earthIcon";
import FavouriteIcon from "../assets/icons/heart";
import Menu01Icon from "../assets/icons/menuIcon";
import Search01Icon from "../assets/icons/search";
import ShoppingCart01Icon from "../assets/icons/shoppingCartIcon";
import UserIcon from "../assets/icons/userIcon";
import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/types";
import ShoppingCart from "./ShoppingCart";
import LikedProducts from "./LikedProducts";
import Login from "./Login";
import { useRouter } from "next/navigation";
import { UserStorage } from "../store/slice/UserSlice";

const Navbar = () => {
  const router = useRouter();
  const products = useSelector((state: RootState) => state.cart.items || []);
  const totalCount = products.length;
  const [isOpenShoppingCart, setisOpenShoppingCart] = useState<boolean>(false);
  const [likeModalOpen, setLikeModalOpen] = useState<boolean>(false);
  const [loginPageOpen, setLoginPageOpen] = useState<boolean>(false);
  // const totalPrice = products.reduce(
  //   (prev, curr) => prev + curr.total_price,
  //   0
  // );
  const likedProduct = useSelector((state: RootState) => state.like.items);
  // const user_name = useSelector(
  //   (state: RootState) => state.userToken.user?.name
  // );
  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.userToken.accessToken);

  const userName = useSelector((state: RootState) => state.userToken.user);
  useEffect(() => {
    dispatch(UserStorage()); 
  }, []);
  return (
    <div className="container mx-auto w-full">
      <div className="bg-gray-800 text-white text-sm flex justify-between px-6 py-2">
        <div className="flex gap-4">
          <span>📍 Toshkent</span>
          <span>Bizning dokonlarimiz</span>
          <span className="bg-gray-600 px-2 py-0.5 rounded">
            Yuridik shaxslar uchun
          </span>
          <span>Tolov usullari</span>
        </div>
        <div className="flex items-center gap-4">
          <span>
            Aloqa markazi :{" "}
            <strong className="text-white">+99871 209 99 44</strong>
          </span>

          <EarthIcon />

          <span>O{"'"}Z </span>
        </div>
      </div>

      <div className="bg-white flex items-center justify-between px-6 py-3 shadow-md">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-black" onClick={()=>{
            router.push('/')
          }}>texnomart*</h1>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
            <Menu01Icon />
            Katalog
          </button>
        </div>

        <div className="flex flex-1 max-w-3xl mx-6">
          <input
            type="text"
            placeholder="Qidirish"
            className="w-full px-4 py-2 rounded-l-xl border border-yellow-400"
          />
          <button className="bg-yellow-400 px-4 rounded-r-xl">
            <Search01Icon />
          </button>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div
            className="flex flex-col items-center"
            onClick={() => {
              if (token) {
                router.push("/profile");
              } else {
                setLoginPageOpen(true);
              }
            }}
          >
            <UserIcon />
            <span>{userName?.name ? userName.name : "Kirish"}</span>
          </div>
          <div
            onClick={() => setLikeModalOpen(true)}
            className="flex flex-col items-center relative"
          >
            <FavouriteIcon />

            <span>Sevimlilar</span>
            <span className="absolute top-0 right-0 text-xs bg-yellow-400 rounded-full px-1">
              {likedProduct.length}
            </span>
          </div>
          <div
            className="flex flex-col items-center relative"
            onClick={() => {
              setisOpenShoppingCart(true);
            }}
          >
            <ShoppingCart01Icon />

            <span>Savatcha</span>
            <span className="absolute top-0 right-0 text-xs bg-yellow-400 rounded-full px-1">
              {totalCount}
            </span>
          </div>
        </div>
      </div>
      <CategoryList />
      {isOpenShoppingCart && (
        <ShoppingCart
          close={() => {
            setisOpenShoppingCart(false);
          }}
        />
      )}
      {likeModalOpen && (
        <LikedProducts
          close={() => {
            setLikeModalOpen(false);
          }}
        />
      )}
      {loginPageOpen && (
        <Login
          close={() => {
            setLoginPageOpen(false);
          }}
          loginPageOpen={loginPageOpen}
        />
      )}
    </div>
  );
};

export default Navbar;
