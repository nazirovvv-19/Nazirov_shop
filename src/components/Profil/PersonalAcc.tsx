import { RootState } from "@/store/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { UserStorage } from "@/store/slice/UserSlice";

function PersonalAcc() {
  const user = useSelector((state: RootState) => state.userToken.user);
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(UserStorage())
    },[])

  return (
    <div className="flex items-center gap-10 w-[75%] ">
      {/* onshiy */}
      <div className="flex flex-col gap-5">
        {/* 2 tani orab turadgan */}
        <div className="border p-2 rounded-md w-[500px] ">
          <div className="flex items-center justify-between border-b p-2 ">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Shahsiy malumotlar</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>{user?.name}</p>
            <p className="text-black/50">
              Telefon: <span className="text-black">+{user?.phone|| '+998904545454'}</span>
            </p>
          </div>
        </div>
        <div className="border p-2 rounded-md w-[500px] ">
          <div className="flex items-center justify-between border-b p-2 ">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Mening kartam</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>Mavjud emas</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* 2 tani orab turadgan */}
        <div className="border p-2 rounded-md w-[500px]">
          <div className="flex items-center justify-between border-b p-2 ">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Xabarlar yoki yangiliklar</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>aksiyalar va chegirmalar xaqida malumot olish</p>
            <p className="text-black/50">
              Telefon: <span className="text-black">+998954545444</span>
            </p>
          </div>
        </div>
        <div className="border p-2 rounded-md w-[500px]">
          <div className="flex items-center justify-between border-b p-2 ">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Yetkazib berish manzili</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>MAnzil qoyilmagan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAcc;
