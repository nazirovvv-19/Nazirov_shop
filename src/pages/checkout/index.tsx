"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store/types";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";


// type OrderType = {
//   address: string;
//   items: OrderitemType[];
// };
type OrderitemType = {
  productId: number;
  quantity: number;
};
export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const total_price = useSelector((state: RootState) => state.cart.total_price);
  const [address, setAddress] = useState("");
  const accessToken = useSelector(
    (state: RootState) => state.userToken.accessToken
  );

  // const form =useForm()
  // const formSchema = z.object({
  //   address: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  //   }),
  // });
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     address: "",
  //   },
  // });

  // const [buyurtma, setBuyurtma] = useState();

  const PostOrder = () => {
    const postItem = cartItems.map((item) => {
      return { productId: item.product.id, quantity: item.qty };
    });

    const order = {
      address:address,
      items: postItem,
    };
    axios
      .post("https://nt.softly.uz/api/front/orders", order, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        console.log("joantildi");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold">1. Sizning Malumotingiz</h2>
            <Input placeholder="+998" className="w-1/2" />
            <div className="grid grid-cols-2 gap-1">
              <Input placeholder="Ism" />
              <Input placeholder="Familiya" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold">2. Qabul qilish usuli</h2>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Yetkazib Berish</Button>
              <Button variant="outline">Dokondan Olib ketish</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Viloyatni Tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toshkent">Toshkent</SelectItem>
                  <SelectItem value="samarkand">Samarqand</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Shahar/Tuman" />
            </div>

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
            />

            <Input placeholder="Qavat" className="w-1/3" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold">
              3. Yetkazib berish shartlari
            </h2>
            <div className="flex gap-4">
              <Button variant="outline">Ertaga yoki keyinroq (Bepul)</Button>
              <Button variant="outline">
                Tez yetkazib berish (30 000 so{"'"}m)
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold">4. Tolov usulini tanlang</h2>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4 h-[790px] overflow-y-auto">
          <p className="font-bold text-2xl">
            Jami: {total_price.toLocaleString("ru")}
          </p>
          {cartItems.map((item) => {
            return (
              <div key={item.product_id} className="flex justify-between px-5">
                <div className="flex flex-col gap-1 ">
                  <p className="font-bold">{item.product.name}</p>
                  <p>{item.qty}</p>
                  <p>{item.total_price.toLocaleString("ru")}</p>
                </div>
                <Image
                  src={item.product.imageUrl}
                  alt="nimadr"
                  width={90}
                  height={90}
                />
              </div>
            );
          })}
          <Button onClick={()=>PostOrder()} className="w-full">
            Yakunlash
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
