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
import { UserForm } from "./_components/user-form";
import { DoctorForm } from "./_components/doctor-form";

const ProfilePage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const initializeAuth = useAuth((state) => state.initialize);
  const { setUser, id, user } = useAuth.getState();

  const [profileType, setProfileType] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formSchema = z.object({
    name: z.string().min(5, { message: "Name must be at least 5 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(11, { message: "Phone number must be valid" }),
    dateOfBirth: z.coerce.date(),
    gender: z.enum(["male", "female"], { message: "Please select your gender" }),
    wage: z.string().optional(),
    speciality: z.string().optional(),
    address: z.string().optional(),
    image: z.any().optional(),
  });

  // const specialties = formSchema.shape.speciality.options;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      wage: "",
      address: "",
      speciality: "",
      image: null,
    },
  });

  useEffect(() => {
    initializeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;
    setProfileType(user.profileType);
  }, [user]);

  useEffect(() => {
    if (!profileType) return;
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
      speciality: "",
      address: "",
      image: null,
    });
  }, [name, email, form]);

  async function onUserSubmit(values) {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("Name", values.name);
    formData.append("phone", values.phone);
    formData.append("Email", values.email);
    formData.append("Date_Of_birth", new Date(values.dateOfBirth).toISOString());
    formData.append("Gender", values.gender);
    values.image ? formData.append("image", values.image[0]) : "";

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
      const updatedUser = {
        ...user,
        ...response.data,
      };

      setUser(updatedUser);
      Cookies.set("profileCompleted", true);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function onDoctorSubmit(values) {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("Name", values.name);
    formData.append("phone", values.phone);
    formData.append("Email", values.email);
    formData.append("Address", values.address);
    formData.append("Wage", values.wage);
    formData.append("Speciality", values.speciality);
    formData.append("Date_Of_birth", new Date(values.dateOfBirth).toISOString());
    formData.append("Gender", values.gender);
    formData.append("image", values.image[0]);

    try {
      console.log("Form Data:", id);
      const response = await axios.put(`http://154.38.186.138:5000/api/Doctors/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "*/*",
        },
      });

      console.log("Response:", response.data);
      toast.success("Profile updated successfully.");
      const updatedUser = {
        ...user,
        ...response.data,
      };

      setUser(updatedUser);
      Cookies.set("profileCompleted", true);
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
          {profileType && profileType === "Patient" ? (
            <UserForm form={form} onSubmit={onUserSubmit} isLoading={isLoading} />
          ) : (
            <DoctorForm form={form} onSubmit={onDoctorSubmit} isLoading={isLoading} />
          )}
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
