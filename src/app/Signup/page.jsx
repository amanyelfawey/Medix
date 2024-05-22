
"use client";

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    isDoctor: false,
  });

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRadioChange = (event) => {
    setUser({
      ...user,
      isDoctor: event.target.value === 'yes',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('Username', user.username);
    formData.append('Email', user.email);
    formData.append('Password', user.password);
    formData.append('IsPatient', !user.isDoctor);
    formData.append('IsDoctor', user.isDoctor);

    try {
      const { data } = await axios.post(
        'http://154.38.186.138:5000/api/Authentication/Register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', data);
      router.push('/UserProfile');
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
      <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
        <div className="w-full p-8 lg:w-1/2">
          <div className='flex justify-center'>
            <Image src='/logo.png' alt='logo' width={200} height={80} />
          </div>
          <p className="text-xl text-gray-600 text-center">
            Welcome to <span className='text-primary font-bold'>MEDIX</span>!
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Username: </label>
              <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="username" value={user.username} onChange={handleChange} required />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Email Address</label>
              <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" value={user.email} onChange={handleChange} required />
            </div>
            <div className="mt-4">
              <label className="block text-primary text-sm font-bold mb-2">Password</label>
              <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" value={user.password} onChange={handleChange} required />
            </div>
            <div className='flex'>
              <label className="block text-primary text-sm font-bold mb-2">Are you a doctor?</label>
              <div>
                <input className='mx-10' type="radio" id="doctorYes" name="isDoctor" value="yes" checked={user.isDoctor === true} onChange={handleRadioChange} required />
                <label htmlFor="doctorYes" className="block text-primary text-sm font-bold mb-2 mx-10">Yes</label>
              </div>
              <div>
                <input type="radio" id="doctorNo" name="isDoctor" value="no" checked={user.isDoctor === false} onChange={handleRadioChange} required />
                <label htmlFor="doctorNo" className="block text-primary text-sm font-bold mb-2">No</label>
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="bg-secondary text-white font-bold py-2 px-4 w-full rounded hover:bg-primary">Sign Up</button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href={"/Login"} className='text-xs text-gray-500 '> Already have an account? <span className="text-xs text-primary uppercase"> Login</span></Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
