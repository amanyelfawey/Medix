// "use client"

// // src/app/UserProfile/page.jsx

// import { useState } from 'react';
// import axios from 'axios';

// export default function UserProfile() {
//   const [form, setForm] = useState({
//     username: '',
//     password: '',
//     name: '',
//     phone: '',
//     email: '',
//     date_of_birth: '',
//     gender: '',
//     image: null,
//   });

//   const handleChange = (event) => {
//     const { user, value } = event.target;
//     setForm({
//       ...form,
//       [user]: value,
//     });
//   };

//   const handleFileChange = (event) => {
//     setForm({
//       ...form,
//       image: event.target.files[0],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('username', form.username);
//     formData.append('password', form.password);
//     formData.append('name', form.name);
//     formData.append('phone', form.phone);
//     formData.append('email', form.email);
//     formData.append('date_of_birth', form.date_of_birth);
//     formData.append('gender', form.gender);
//     if (form.image) {
//       formData.append('image', form.image);
//     }

//     try {
//       const { data } = await axios.post(
//         'http://154.38.186.138:5000/api/Patients/', // Update this to your actual API endpoint
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
//       <h1>User Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" name="username" value={form.username} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={form.password} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={form.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select name="gender" value={form.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="file" name="image" onChange={handleFileChange} />
//         </div>
//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isDoctor: false,
    name: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    image: null,
  });

  const router = useRouter();

  useEffect(() => {
    // Simulating fetching initial user data from the server
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://154.38.186.138:5000/api/Patients/{id}", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setUser({
        ...user,
        [name]: files[0],
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Username", user.username);
    formData.append("Email", user.email);
    formData.append("Password", user.password);
    formData.append("Name", user.name);
    formData.append("Phone", user.phone);
    formData.append("Date_Of_birth", user.date_of_birth);
    formData.append("Gender", user.gender);
    formData.append("Image", user.image);
    formData.append("IsDoctor", user.isDoctor);

    try {
      const { data } = await axios.put("http://154.38.186.138:5000/api/Patients/{id}", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Profile updated:", data);
      router.push("/UserProfile");
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
      <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
        <div className="w-full p-8 lg:w-1/2">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="logo" width={200} height={80} />
          </div>
          <p className="text-xl text-gray-600 text-center">
            Update your profile, <span className="text-primary font-bold">MEDIX</span>!
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Username: </label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Email Address</label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Password</label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Name</label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Phone</label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Date of Birth</label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="date"
                name="date_of_birth"
                value={user.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Gender</label>
              <select
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                name="gender"
                value={user.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Profile Image</label>
              <input
                className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="file"
                name="image"
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-secondary text-white font-bold py-2 px-4 w-full rounded hover:bg-primary"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
