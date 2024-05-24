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
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Loader, UploadCloudIcon } from "lucide-react";
import Cookies from "js-cookie";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProfilePage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { user, id } = useAuth();
  const [profileType, setProfileType] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formSchema = z.object({
    name: z.string().min(5, { message: "Name must be at least 5 characters long" }),
    email: z.string().email(),
    phone: z.string().min(11, { message: "Phone number must be valid" }),
    dateOfBirth: z.coerce.date(),
    gender: z.enum(["male", "female"], { message: "Please select your gender" }),
    image: z.string().min(1, { message: "Please upload a profile image" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      image: "",
    },
  });

  useEffect(() => {
    if (user) {
      setProfileType(user.profileType);
    }
  }, [user]);

  useEffect(() => {
    if (profileType === "Doctor") {
      setName(user.doctor_name);
      setEmail(user.doctor_email);
    } else if (profileType === "Patient") {
      setName(user.patient_name);
      setEmail(user.patient_email);
    }
  }, [profileType]);

  useEffect(() => {
    form.reset({
      name,
      email,
      phone: "",
      dateOfBirth: "",
      gender: "",
      image: "",
    });
  }, [name, email, form]);

  async function onSubmit(values) {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("Name", values.name);
    formData.append("phone", values.phone);
    formData.append("Email", values.email);
    formData.append("Date_Of_birth", new Date(values.dateOfBirth).toISOString());
    formData.append("Gender", values.gender);
    formData.append("image", values.image);

    try {
      console.log("Form Data:", id);
      const response = await axios.put(`http://154.38.186.138:5000/api/Patients/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "*/*",
        },
      });
      console.log("Response:", response.data);
      toast.success("Profile updated successfully.");
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
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
          <p className="text-muted-foreground text-center text-sm my-2">
            Please complete your profile to get started.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        readOnly
                        className="bg-[#D4EDED] read-only:cursor-not-allowed focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>{`You can't change your name.`}</FormDescription>
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
                        readOnly
                        className="bg-[#D4EDED] read-only:cursor-not-allowed focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>{`
                    You can't change your email address.
                    `}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Phone"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Please enter your phone number.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Date of Birth"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Please enter your date of birth.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={"male"} />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={"female"} />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>Please select your gender.</FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div>
                        <p className="mb-3">Profile Image</p>
                        <div className="w-full bg-[#2A99A2]/20 text-gray-600 font-bold cursor-pointer rounded-lg h-24 flex justify-center items-center">
                          <UploadCloudIcon className="w-12 h-12" />
                        </div>
                      </div>
                      <FormControl>
                        <Input
                          type="file"
                          className="bg-[#D4EDED] hidden file:bg-red-500 file:text-red-500 focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                          placeholder="Gender"
                          {...field}
                        />
                      </FormControl>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit" className="w-full text-xl">
                {!isLoading ? "Update Profile" : <Loader className="w-4 h-4 animate-spin" />}
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
};

export default ProfilePage;
