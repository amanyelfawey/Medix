import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'

export default function page() {
  return (
    <div>
      
      <div className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full ">



<div className="flex bg-gray-100 rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center p-4">

    <div className="w-full p-8 lg:w-1/2">
        <div className='flex justify-center '><Image src='/logo.png' alt='logo'
    width={200} height={80}/></div>
    
        <p className="text-xl text-gray-600 text-center">Reset your Password</p>
        
            
        <div className="mt-4 flex items-center justify-between">
            
            <p className="text-md font-semibold mx-auto text-center text-gray-500 ">Enter a new password for your account</p>
            
        </div>
        <div className="mt-4">
            <label className="block text-primary text-sm font-bold mb-2">New Password</label>
            <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
        </div>

        <div className="mt-4">
            <label className="block text-primary text-sm font-bold mb-2">Confirm Password</label>
            <input className="bg-link text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
        </div>

        <div className="mt-8">
            <button className="bg-secondary text-white font-bold py-2 px-4 w-full rounded hover:bg-primary">Reset Password</button>
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

