
'use client';

import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState({ message: '', type: '' });
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('Email', user.email);
    formData.append('Password', user.password);

    try {
      const { data } = await axios.post(
        'http://154.38.186.138:5000/api/Authentication/login',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', data);

      if (data.message === "Unauthorized") {
        

        setAlert({ message: 'The email or password is wrong, try again.', type: 'error' });
      } else {
        setAlert({ message: 'Logged in successfully!', type: 'success' });
        router.push('/UserProfile');
      }
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
        setAlert({ message: 'The email or password is wrong, try again.', type: 'error' });
      } else if (error.request) {
        console.error('Request error:', error.request);
        setAlert({ message: 'The email or password is wrong, try again.', type: 'error' });
      } else {
        console.error('Error:', error.message);
        setAlert({ message: 'The email or password is wrong, try again.', type: 'error' });
      }
    }
  };

  return (
    <div>
      <div className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
        <div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
          <div className="w-full p-8 lg:w-1/2">
            <div className='flex justify-center '>
              <Image src='/logo.png' alt='logo' width={200} height={80} />
            </div>
            <p className="text-xl text-gray-600 text-center">Welcome back to <span className='text-primary font-bold'>MEDIX</span>!</p>
            {alert.message && (
              <div className={`p-4 mb-4 text-sm ${alert.type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'} rounded-lg`} role="alert">
                {alert.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-primary text-sm font-bold mb-2">Email Address</label>
                <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" value={user.email} onChange={handleChange} required />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-primary text-sm font-bold mb-2">Password</label>
                  <Link href={"http://localhost:3000/Login/Forgetpassword"} className="text-xs text-gray-500">Forget Password?</Link>
                </div>
                <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" value={user.password} onChange={handleChange} required />
              </div>
              <div className="mt-8">
                <button className="bg-secondary text-white font-bold py-2 px-4 w-full rounded hover:bg-primary">Login</button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link href={"http://localhost:3000/Signup"} className='text-xs text-gray-500 '> New Member? <span className="text-xs text-primary uppercase "> sign up</span></Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
