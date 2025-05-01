import React, { useEffect, useState } from "react";
import Strelka from "../../assets/icons/strelka";
import Image from "next/image";
import PersonalAcc from "../../components/Profil/PersonalAcc";
import { useDispatch, useSelector } from "react-redux";
import { logOut, UserStorage } from "../../store/slice/UserSlice";
import { RootState } from "../../store/types";
import { useRouter } from "next/router";
import MyOrder from "@/components/MyOrder";

function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open,setOpen]=useState(false)

  useEffect(() => {
    dispatch(UserStorage());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.userToken.user);

  const Chiqish = async () => {
    await dispatch(logOut());

    router.push("/");
  };




  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 p-2">
        <div onClick={()=>{router.push('/')}}>
          <Strelka />
        </div>
        <p className="p-1 text-[12px] bg-gray-200 rounded">Bosh sahifa</p>
        <p className="p-1 text-[12px] bg-amber-200 rounded">Shaxsiy kabinet</p>
      </div>
      <div className="py-5 px-7 flex  justify-between">
        <div className="border-r p-5 pr-12">
          <div className="flex gap-5 items-center border-b py-3 " onClick={()=>setOpen(false)}>
            <Image
              className="border rounded-full p-2 bg-gray-200"
              src={"https://cdn-icons-png.flaticon.com/512/51/51256.png"}
              alt=""
              width={40}
              height={40}
            />
            <div>
              <p>{user?.name}</p>
              <p className="text-black/50">+998901234567</p>
            </div>
          </div>

          <div className="flex gap-5 items-center mt-7">
            <Image
              className="border rounded-full p-2 bg-gray-200"
              src={"https://cdn-icons-png.flaticon.com/512/51/51256.png"}
              alt=""
              width={40}
              height={40}
            />
            <p>Mening tolovlarim</p>
          </div>
          <div className="flex gap-5 items-center mt-5">
            <Image
              className="border rounded-full p-2 bg-gray-200"
              src={"https://cdn-icons-png.flaticon.com/512/51/51256.png"}
              alt=""
              width={40}
              height={40}
            />
            <p>Tolov tarixi</p>
          </div>
          <div className="flex gap-5 items-center mt-5" onClick={()=>setOpen(true)}>
            <Image
              className="border rounded-full p-2 bg-gray-200"
              src={"https://cdn-icons-png.flaticon.com/512/51/51256.png"}
              alt=""
              width={40}
              height={40}
            />
            <p>Onlayn buyurtmalar</p>
          </div>

          <div
            className="flex gap-5 items-center mt-5 cursor-pointer "
            onClick={Chiqish}
          >
            <Image
              className="border rounded-full p-2 bg-gray-200"
              src={"https://www.iconpacks.net/icons/2/free-exit-icon-2860-thumb.png"}
              alt=""
              width={40}
              height={40}
            />
            <p>Chiqish</p>
          </div>
        </div>
       {open? <MyOrder/>:<PersonalAcc />}
      </div>
    </div>
  );
}

export default Profile;
