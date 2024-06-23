// // src/app/ResetPassword/page.jsx
// 'use client'
// import { useState } from 'react';
// import axios from 'axios';

// export default function ResetPassword() {
//   const [form, setForm] = useState({
//     password: '',
//     confirmPassword: '',
//     email: '',
//     token: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('Password', form.password);
//     formData.append('ConfirmPassword', form.confirmPassword);
//     formData.append('Email', form.email);
//     formData.append('token', form.token);

//     try {
//       const { data } = await axios.post(
//         'http://154.38.186.138:5000/api/Authentication/ResetPassword',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       console.log('Response:', data);
//     } catch (error) {
//       if (error.response) {
//         console.error('Response error:', error.response.data);
//       } else if (error.request) {
//         console.error('Request error:', error.request);
//       } else {
//         console.error('Error:', error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={form.password} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Token:</label>
//           <input type="text" name="token" value={form.token} onChange={handleChange} required />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation"; // Correctly import useSearchParams

// export default function ResetPassword() {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const email = searchParams.get('email'); // Get the email from query parameters

//   const formSchema = z.object({
//     email: z.string().email().nonempty(),
//     otp: z.string().length(6, { message: "OTP must be 6 digits" }),
//   });

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: email || "",
//       otp: "",
//     },
//   });

//   async function onSubmit(values) {
//     setIsLoading(true);
//     try {
//       await axios.post(
//         "http://154.38.186.138:5000/api/Authentication/ResetPassword",
//         values,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       toast.success("Password reset successfully. Please check your email.");
//       router.push("/login");
//     } catch (e) {
//       toast.error("An error occurred. Please try again later.");
//       console.error(e);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="py-16 px-4 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
//       <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
//         <div className="w-full p-8 lg:w-1/2">
//           <div className="flex justify-center">
//             <Image src="/logo.png" alt="logo" width={200} height={80} />
//           </div>
//           <p className="text-xl text-gray-600 text-center">
//             Check your email and enter the code <span className="text-primary font-bold">MEDIX</span> sent you!
//           </p>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
//                         placeholder="Email"
//                         {...field}
//                         readOnly
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="otp"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>OTP</FormLabel>
//                     <FormControl>
//                       <InputOTP maxLength={6} onChange={(otp) => field.onChange(otp)}>
//                         <InputOTPGroup>
//                           <InputOTPSlot index={0} />
//                           <InputOTPSlot index={1} />
//                           <InputOTPSlot index={2} />
//                         </InputOTPGroup>
//                         <InputOTPSeparator />
//                         <InputOTPGroup>
//                           <InputOTPSlot index={3} />
//                           <InputOTPSlot index={4} />
//                           <InputOTPSlot index={5} />
//                         </InputOTPGroup>
//                       </InputOTP>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button disabled={isLoading} type="submit" className="w-full text-xl">
//                 {!isLoading ? "Submit" : <Loader className="w-4 h-4 animate-spin" />}
//               </Button>
//             </form>
//           </Form>
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 md:w-1/4"></span>
//             <Link href={"/login"} className="text-xs text-gray-500 ">
//               Back to Login
//             </Link>
//             <span className="border-b w-1/5 md:w-1/4"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Loader } from "react-loader-spinner"; // Import Loader component
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function ResetPassword() {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   // Form submission handler
//   const onSubmit = async (values) => {
//     setIsLoading(true);
//     try {
//       // Submit logic here
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="py-16 px-4 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
//       <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
//         <div className="w-full p-8 lg:w-1/2">
//           <div className="flex justify-center">
//             <Image src="/logo.png" alt="logo" width={200} height={80} />
//           </div>
//           <p className="text-xl text-gray-600 text-center">
//             Check your email and enter the code <span className="text-primary font-bold">MEDIX</span> sent you!
//           </p>
//           <Form onSubmit={onSubmit}>
//             <form className="space-y-8">
//               {/* Form fields */}
//               <Button disabled={isLoading} type="submit" className="w-full text-xl">
//                 {!isLoading ? "Submit" : <Loader type="ThreeDots" color="#fff" height={20} width={20} />}
//               </Button>
//             </form>
//           </Form>
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 md:w-1/4"></span>
//             <Link href={"/login"} className="text-xs text-gray-500 ">
//               Back to Login
//             </Link>
//             <span className="border-b w-1/5 md:w-1/4"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation"; // Correctly import useSearchParams

// export default function ResetPassword() {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const email = searchParams.get('email'); // Get the email from query parameters

//   const formSchema = z.object({
//     email: z.string().email().nonempty(),
//     otp: z.string().length(6, { message: "OTP must be 6 digits" }),
//   });

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: email || "",
//       otp: "",
//     },
//   });

//   async function onSubmit(values) {
//     setIsLoading(true);
//     try {
//       await axios.post(
//         "http://154.38.186.138:5000/api/Authentication/ResetPassword",
//         values,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       toast.success("Password reset successfully. Please check your email.");
//       router.push("/login");
//     } catch (e) {
//       toast.error("An error occurred. Please try again later.");
//       console.error(e);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="py-16 px-4 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
//       <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
//         <div className="w-full p-8 lg:w-1/2">
//           <div className="flex justify-center">
//             <Image src="/logo.png" alt="logo" width={200} height={80} />
//           </div>
//           <p className="text-xl text-gray-600 text-center">
//             Check your email and enter the code <span className="text-primary font-bold">MEDIX</span> sent you!
//           </p>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
//                         placeholder="Email"
//                         {...field}
//                         readOnly
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="otp"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>OTP</FormLabel>
//                     <FormControl>
//                       <InputOTP maxLength={6} onChange={(otp) => field.onChange(otp)}>
//                         <InputOTPGroup>
//                           <InputOTPSlot index={0} />
//                           <InputOTPSlot index={1} />
//                           <InputOTPSlot index={2} />
//                         </InputOTPGroup>
//                         <InputOTPSeparator />
//                         <InputOTPGroup>
//                           <InputOTPSlot index={3} />
//                           <InputOTPSlot index={4} />
//                           <InputOTPSlot index={5} />
//                         </InputOTPGroup>
//                       </InputOTP>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button disabled={isLoading} type="submit" className="w-full text-xl">
//                 {!isLoading ? "Submit" : <Loader className="w-4 h-4 animate-spin" />}
//               </Button>
//             </form>
//           </Form>
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 md:w-1/4"></span>
//             <Link href={"/login"} className="text-xs text-gray-500 ">
//               Back to Login
//             </Link>
//             <span className="border-b w-1/5 md:w-1/4"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/Signin/ForgetPassword/ResetPassword.jsx
// Ensure correct imports for Next.js components and utilities
"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { query } = router; // Destructure query from router object

  // Check if query and email are defined, fallback to empty string if not
  const email = query?.email ? query.email.toString() : "";

  const formSchema = z.object({
    email: z.string().email().nonempty(),
    otp: z.string().length(6, { message: "OTP must be 6 digits" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email,
      otp: "",
    },
  });

  // async function onSubmit(values) {
  //   setIsLoading(true);
  //   try {
  //     await axios.post(
  //       "http://154.38.186.138:5000/api/Authentication/ResetPassword",
  //       values,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     toast.success("Password reset successfully. Please check your email.");
  //     router.push("/login");
  //   } catch (e) {
  //     toast.error("An error occurred. Please try again later.");
  //     console.error(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className="py-16 px-4 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
      <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
        <div className="w-full p-8 lg:w-1/2">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="logo" width={200} height={80} />
          </div>
          <p className="text-xl text-gray-600 text-center">
            Check your email and enter the code{" "}
            <span className="text-primary font-bold">MEDIX</span> sent you!
          </p>
          <Form {...form}>
            <form  className="space-y-8">
              {/* <FormField
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
                        readOnly
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OTP</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        onChange={(otp) => field.onChange(otp)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href={"Signin/ForgetPassword/ResetPassword/ChangePassword"} className="pt-5 w-full">
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full text-xl mt-5"
              >
                {!isLoading ? "Submit" : "Submitting..."}
              </Button></Link>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href={"/Signin"} className="text-xs text-gray-500 ">
              Back to Login
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
