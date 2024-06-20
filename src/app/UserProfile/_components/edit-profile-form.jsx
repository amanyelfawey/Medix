"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Card, CardDescription, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(11),
  address: z.string().min(5),
});

export const EditProfilePage = ({ user, profileType }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user[`${profileType}_name`],
      email: user[`${profileType}_email`],
      phone: user[`${profileType}_phone`],
      address: user[`${profileType}_address`],
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <div className="w-full flex justify-center flex-col items-center py-5">
        <Card className="bg-white/20 w-4/5">
          <CardHeader>
            <CardTitle className="flex justify-center relative w-full">
              <Image
                className="rounded-full"
                src={`http://154.38.186.138:5000/images/c4511684-4e7b-40ad-996f-d64ae2621748_doc.jpg`}
                width={100}
                height={100}
                alt="User"
                loading="lazy"
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
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
                          placeholder="Email"
                          className="read-only:bg-gray-400/20 focus-visible:ring-0 cursor-not-allowed focus-visible:ring-opacity"
                          {...field}
                          readonly="readonly"
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
                        <Input placeholder="Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Save</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};