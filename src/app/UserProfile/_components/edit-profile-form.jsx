"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const doctorFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(11),
  address: z.string().min(5),
  wage: z.string().min(1),
  speciality: z.string().min(3),
  date_Of_Birth: z.string(),
  bio: z.string().optional(),
});

const userFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(11),
  date_Of_Birth: z.string(),
});

export const EditProfilePage = ({ user, id, isDoctor }) => {
  const initializeAuth = useAuth((state) => state.initialize);
  const [isLoading, setIsLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(user.image);

  const form = useForm({
    resolver: isDoctor ? zodResolver(doctorFormSchema) : zodResolver(userFormSchema),
    defaultValues: {
      name: user ? user.name : "",
      email: user ? user.email : "",
      phone: user ? user.phone : "",
      address: user.profileType.toLowerCase() == "doctor" ? user.address : "", // Ensure it defaults to empty string if user is not a doctor
      wage: user.profileType.toLowerCase() == "doctor" ? user.wage.toString() : "",
      speciality: user.profileType.toLowerCase() == "doctor" ? user.speciality : "",
      bio: user ? user.bio : "",
      date_Of_Birth: user
        ? new Date(user.date_Of_birth || user.date_Of_Birth).toISOString().split("T")[0]
        : "" || "",
    },
  });

  async function onSubmit(values) {
    try {
      const formData = new FormData();
      formData.append("name", values.name ? values.name : user.name);
      formData.append("email", user.email);
      formData.append("phone", values.phone ? values.phone : user.phone);
      formData.append("gender", user.gender);
      formData.append("Date_Of_birth", new Date(values.date_Of_Birth).toISOString());
      isDoctor && formData.append("address", values.address ? values.address : user.address);
      isDoctor && formData.append("wage", values.wage ? values.wage : user.wage);
      isDoctor &&
        formData.append("speciality", values.speciality ? values.speciality : user.speciality);
      isDoctor && formData.append("bio", values.bio ? values.bio : user.bio);

      const res = await axios.put(
        `http://154.38.186.138:5000/api/${isDoctor ? "doctors" : "patients"}/${id}`,
        formData
      );

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("gender", user.gender);
      formData.append("Date_Of_birth", user.date_Of_Birth);
      isDoctor && formData.append("address", user.address);
      isDoctor && formData.append("wage", user.wage);
      isDoctor && formData.append("speciality", user.speciality);
      isDoctor && formData.append("bio", user.bio);
      formData.append("image", file);

      const res = await axios.put(`http://154.38.186.138:5000/api/Doctors/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImgSrc(res.data.imageUrl);
      await initializeAuth();

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full flex justify-center flex-col items-center py-5 min-h-[85vh]">
      <Card className="bg-white/20 w-4/5">
        <CardHeader>
          <CardTitle className="flex flex-col items-center gap-4 justify-center relative w-full">
            {isDoctor && (
              <div>
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <Loader2 className="w-10 h-10 animate-spin text-[#D4EDED]" />
                  </div>
                ) : (
                  <>
                    <label htmlFor="file">
                      <Image
                        className="rounded-full border border-[#D4EDED] cursor-pointer"
                        src={
                          imgSrc !== "http://154.38.186.138:5000/images/" ? imgSrc : `/doctor.svg`
                        }
                        width={100}
                        height={100}
                        alt="User"
                        loading="lazy"
                      />
                    </label>
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      className="bg-[#D4EDED] hidden file:bg-red-500 file:text-red-500 focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                      placeholder="Profile Image"
                    />
                  </>
                )}
              </div>
            )}
            {!isDoctor && (
              <Image
                className="rounded-full border border-[#D4EDED]"
                src={`/patient.svg`}
                width={100}
                height={100}
                alt="User"
                loading="lazy"
              />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage errors={form.formState.errors.name} />
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
                      <FormMessage errors={form.formState.errors.email} />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date_Of_Birth"
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
                      <FormMessage errors={form.formState.errors.phone} />
                    </FormItem>
                  )}
                />
              </div>
              {isDoctor && (
                <>
                  <div className="grid grid-cols-1 md:flex justify-center items-center gap-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-[#D4EDED]  focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                              placeholder="Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage errors={form.formState.errors.address} />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="wage"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormLabel>Wage</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                              placeholder="Wage"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage errors={form.formState.errors.wage} />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="speciality"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormLabel>Speciality</FormLabel>
                          <FormControl>
                            <Input
                              readOnly
                              className="bg-[#D4EDED] read-only:cursor-not-allowed focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                              placeholder="Speciality"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage errors={form.formState.errors.speciality} />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                            placeholder="Bio"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage errors={form.formState.errors.bio} />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
