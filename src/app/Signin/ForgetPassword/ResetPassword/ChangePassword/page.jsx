// "use client";
// // src/app/ChangePassword/page.jsx

// import { useState } from "react";
// import axios from "axios";

// export default function ChangePassword() {
//   const [form, setForm] = useState({
//     currentPassword: "",
//     newPassword: "",
//     email: "",
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
//     formData.append("CurrentPassword", form.currentPassword);
//     formData.append("NewPassword", form.newPassword);
//     formData.append("Email", form.email);

//     try {
//       const { data } = await axios.put(
//         "http://154.38.186.138:5000/api/Authentication/ChangePassword",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Response:", data);
//     } catch (error) {
//       if (error.response) {
//         console.error("Response error:", error.response.data);
//       } else if (error.request) {
//         console.error("Request error:", error.request);
//       } else {
//         console.error("Error:", error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Change Password</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Current Password:</label>
//           <input
//             type="password"
//             name="currentPassword"
//             value={form.currentPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>New Password:</label>
//           <input
//             type="password"
//             name="newPassword"
//             value={form.newPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Change Password</button>
//       </form>
//     </div>
//   );
// }
// "use client";

// // pages/Signin/ForgetPassword/ResetPassword/ChangePassword.jsx

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Loader } from "react-loader-spinner";
// import { useForm, FormProvider, useFormContext } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// const ChangePassword = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const { handleSubmit, register, watch, formState: { errors } } = useForm();
//   const { email } = router.query; // Get email from router query params

//   const onSubmit = async (formData) => {
//     setIsLoading(true);
//     try {
//       const { newPassword, confirmPassword } = formData;

//       // Validate passwords
//       if (newPassword !== confirmPassword) {
//         toast.error("Passwords do not match");
//         return;
//       }

//       // Call API to change password
//       const response = await axios.put(
//         "http://154.38.186.138:5000/api/Authentication/ChangePassword",
//         {
//           CurrentPassword: formData.currentPassword,
//           NewPassword: newPassword,
//           Email: email,
//         },
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Assuming success
//       toast.success("Password changed successfully");
//       router.push("/"); // Redirect to home page after successful password change
//     } catch (error) {
//       toast.error("Failed to change password. Please try again.");
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
//             Change Your Password
//           </p>
//           <FormProvider {...useForm()}>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//               <div>
//                 <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
//                   Current Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     {...register("currentPassword", { required: true })}
//                     id="currentPassword"
//                     type="password"
//                     className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.currentPassword ? 'border-red-500' : ''}`}
//                     placeholder="Current Password"
//                   />
//                 </div>
//                 {errors.currentPassword && (
//                   <p className="text-red-500 text-xs mt-1">Current Password is required</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                   New Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     {...register("newPassword", { required: true, minLength: 8 })}
//                     id="newPassword"
//                     type="password"
//                     className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.newPassword ? 'border-red-500' : ''}`}
//                     placeholder="New Password"
//                   />
//                 </div>
//                 {errors.newPassword && (
//                   <p className="text-red-500 text-xs mt-1">New Password is required and must be at least 8 characters long</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     {...register("confirmPassword", { required: true })}
//                     id="confirmPassword"
//                     type="password"
//                     className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.confirmPassword ? 'border-red-500' : ''}`}
//                     placeholder="Confirm Password"
//                   />
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-xs mt-1">Please confirm your new password</p>
//                 )}
//               </div>
//               <Button disabled={isLoading} type="submit" className="w-full text-xl">
//                 {!isLoading ? "Change Password" : <Loader type="ThreeDots" color="#fff" height={20} width={20} />}
//               </Button>
//             </form>
//           </FormProvider>
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
// };

// export default ChangePassword;

"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      await axios.post(
        "http://154.38.186.138:5000/api/Authentication/ResetPassword",
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Password reset successfully. Please log in with your new password.");
      router.push("/login");
    } catch (e) {
      toast.error("An error occurred. Please try again later.");
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
            Change your password for <span className="text-primary font-bold">MEDIX</span>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="New Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                        placeholder="Confirm New Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit" className="w-full text-xl">
                {!isLoading ? "Submit" : <Loader className="w-4 h-4 animate-spin" />}
              </Button>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href={"/login"} className="text-xs text-gray-500 ">
              Back to Login
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
