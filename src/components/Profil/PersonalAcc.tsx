import { RootState } from "@/store/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { UserStorage } from "@/store/slice/UserSlice";

function PersonalAcc() {
  const user = useSelector((state: RootState) => state.userToken.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserStorage());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-10 w-full px-4 py-6">
      {/* Chap blok */}
      <div className="flex flex-col gap-5 w-full md:w-auto">
        {/* Shahsiy ma'lumotlar */}
        <div className="border p-2 rounded-md w-full md:w-[500px] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-2">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Shahsiy malumotlar</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>{user?.name}</p>
            <p className="text-black/50">
              Telefon:{" "}
              <span className="text-black">
                +{user?.phone || "998904545454"}
              </span>
            </p>
          </div>
        </div>

        {/* Mening kartam */}
        <div className="border p-2 rounded-md w-full md:w-[500px] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-2">
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

      {/* O'ng blok */}
      <div className="flex flex-col gap-5 w-full md:w-auto">
        {/* Xabarlar */}
        <div className="border p-2 rounded-md w-full md:w-[500px] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-2">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Xabarlar yoki yangiliklar</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>Aksiyalar va chegirmalar haqida malumot olish</p>
            <p className="text-black/50">
              Telefon: <span className="text-black">+998954545444</span>
            </p>
          </div>
        </div>

        {/* Yetkazib berish manzili */}
        <div className="border p-2 rounded-md w-full md:w-[500px] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-2">
            <div className="flex items-center gap-3">
              <p className="border rounded-full py-2 px-3.5 border-black">A</p>
              <p>Yetkazib berish manzili</p>
            </div>
            <Button>Ozgartirish</Button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <p>Manzil qoyilmagan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAcc;
