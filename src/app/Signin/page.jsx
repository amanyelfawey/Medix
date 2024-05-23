"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader } from "lucide-react";
import { createFormData } from "@/lib/created-form-data";
import Cookies from "js-cookie";
import { useAuth } from "@/hooks/use-auth";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    const formData = await createFormData(values, true);
    try {
      const res = await axios.post(
        "http://154.38.186.138:5000/api/Authentication/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Successfully logged in");
      const id = res.data.profile[0].doctor_id || res.data.profile[0].patient_id;
      const profile = res.data.profile[0];
      Cookies.set("id", id, { expires: 14, path: "/" });
      Cookies.set("profile", JSON.stringify(profile), { expires: 14, path: "/" });
      setUser(profile);

      console.log(res.data);
    } catch (e) {
      if (e?.response?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="py-16 px-4 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
      <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
        <div className="w-full p-8 lg:w-1/2">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="logo" width={200} height={80} />
          </div>
          <p className="text-xl text-gray-600 text-center">
            Welcome to <span className="text-primary font-bold">MEDIX</span>!
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Please enter your email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Please chose a strong password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isLoading} type="submit" className="w-full text-xl">
                {!isLoading ? "Login" : <Loader className="w-4 h-4 animate-spin" />}
              </Button>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href={"/Signup"} className="text-xs text-gray-500 ">
              {`Don't have an account?`}
              <span className="text-xs text-primary uppercase"> Register</span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
