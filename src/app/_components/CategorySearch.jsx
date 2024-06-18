import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


function CategorySearch() {
  return (
    <div className='mb-10 mt-10 items-center flex flex-col gap-3' id="dep">
        {/* <h2 className=' font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className=' text-gray-500 text-xl'>Search Your Doctor and Book Appointment</h2>

        <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." className=' rounded'/>
        <Button type="submit" className='rounded text-white'>
            <Search className='h-4 w-4 mr-3 text-white'/> Search</Button>
        </div> */}


<section className="text-gray-700 body-font">
  <div className="flex justify-center text-primary mt-10 text-4xl font-bold">
    Our <span className='text-secondary pl-2'> Departments </span>
  </div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
      <Link href={"http://localhost:3000/Dentists"}>
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <Image src="/dentist.png" className="w-32 mb-3" width={200} height={200}/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-600">Dentists</h2>
        </div>
        </Link>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <Link href={"http://localhost:3000/Cardiologists"}>
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <Image src="/heart.png" className="w-32 mb-3"width={200} height={200}/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-600">Cardiologists</h2>
        </div>
        </Link>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
      <Link href={"http://localhost:3000/Neurologists"}>
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <Image src="/brains.png" className="w-32 mb-3 "width={200} height={200}/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-600">Neurologists</h2>
        </div>
        </Link>
      </div>


      <div className="p-4 md:w-1/4 sm:w-1/2">
      <Link href={"http://localhost:3000/InternalDoctors"}>
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <Image src="/stomach1.png" className="w-32 mb-3 "width={200} height={200}/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-600">Internal Doctors</h2>
        </div>
        </Link>
      </div>




    </div>
  </div>
</section>

      
    </div>
  )
}

export default CategorySearch;