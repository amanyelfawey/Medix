import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'

export default function page() {
  return (
    <div>
      
      <div className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full ">



<div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">
    {/* <div className="hidden lg:block lg:w-1/2 bg-cover">
    <Image
        src="/hero3.jpg"
        alt=""
        className="w-full rounded-2xl"
        width={200}
        height={100}
      />
    </div> */}
    <div className="w-full p-8 lg:w-1/2">
        <div className='flex justify-center '><Image src='/logo.png' alt='logo'
    width={200} height={80}/></div>
    
        <p className="text-xl text-gray-600 text-center">Forgot Your Password?</p>
        
            
        <div className="mt-4 flex items-center justify-between">
            
            <p className="text-md font-semibold text-center text-gray-500 ">Send a link to your email to reset your password</p>
            
        </div>
        <div className="mt-4">
            <label className="block text-primary text-sm font-bold mb-2">Email Address</label>
            <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
        </div>

        <div className="mt-8">
            <button className="bg-secondary text-white font-bold py-2 px-4 w-full rounded hover:bg-primary">Send Reset Link</button>
        </div>
        <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href={"http://localhost:3000/Login"}  className='text-s text-gray-500  '> Back to  < span className="text-s text-primary  "> Login</span></Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
    </div>
</div>
</div>

    </div>
  )
}
