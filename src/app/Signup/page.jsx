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
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    username: z.string().min(5, { message: "Username must be at least 5 characters long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one symbol" }),
    isDoctor: z.boolean([true, false], {
      required_error: "Please select an option",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      isDoctor: false,
    },
  });
  async function onSubmit(values) {
    setIsLoading(true);
    const formData = await createFormData(values, false);
    console.log(formData);
    try {
      const res = await axios.post(
        "http://154.38.186.138:5000/api/Authentication/Register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("User registered successfully");
      router.refresh();
      router.push("/Signin");
    } catch (e) {
      console.log(e);
      if (e.response.status == 403) {
        toast.error("User already exists");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="UserName"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="isDoctor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are you a doctor?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={true} />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={false} />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit" className="w-full text-xl">
                {!isLoading ? "Register" : <Loader className="w-4 h-4 animate-spin" />}
              </Button>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href={"/Signin"} className="text-xs text-gray-500 ">
              Already have an account?
              <span className="text-xs text-primary uppercase"> Login</span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
