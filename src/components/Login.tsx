"use client";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Form } from "antd";
import { userToken } from "../store/slice/UserSlice";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

function Login({
  close,
  loginPageOpen,
}: {
  close: () => void;
  loginPageOpen: boolean;
}) {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: any) {
    console.log(values, "onsubmit");
    try {
      const login = await axios.post(
        "https://nt.softly.uz/api/auth/login",
        values
      );
      console.log(login.data ,'loginnn');
      ("muvaffiqiyatli bajarildi");
      dispatch(userToken(login.data));
      close();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Dialog open={loginPageOpen} onOpenChange={() => close()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kirish yoki Royxatdan otish</DialogTitle>
          </DialogHeader>
          <div className="mt-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Login</FormLabel>
                      <FormControl>
                        <Input placeholder="Login kiriting" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parol</FormLabel>
                      <FormControl>
                        <Input placeholder="Parol kiriting" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Login;
