// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'

// export default function OurDr() {
//   return (
//     <section id='OurDr' className=' overflow-hidden  pb-12 pt-28 lg:pb-[90px]  bg-gradient-to-b from-link to-customDarkGreen'>
//         <div className='mt-50'>
//             <h2 className='text-center font-bold text-5xl pb-10 text-gray-100'>Meet Our <span className='text-primary'>
//                 Professional Doctors</span></h2>
//         </div>
//     <div  className='  flex justify-center gap-8 p-5 
//    '>
      

    


// <div class="max-w-sm  overflow-hidden w-80  py-6  text-center bg-white bg-opacity-75 rounded lg:mt-0 xl:px-10  transform transition duration-500 hover:scale-110 ">
//     <div class="space-y-4 xl:space-y-6">
//         <Image class="mx-auto rounded-full h-36 w-36" src="/dr5.jpeg" alt="author avatar" width={100} height={100}/>
//         <div class="space-y-2">
//             <div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
//                 <h3 class="text-primary text-xl font-bold">Doctor</h3>
//                 <p class="text-gray-700">Dentist</p>

//             </div>
//         </div>
//     </div>

   
// <div className="px-6 py-4">
//     <Link href="#" className="text-white "><Button className="bg-secondary rounded">View Profile</Button> </Link>
//   </div>
// </div>




// <div class="max-w-sm  overflow-hidden w-80  py-6  text-center bg-white bg-opacity-75 rounded lg:mt-0 xl:px-10 transform transition duration-500 hover:scale-110 ">
//     <div class="space-y-4 xl:space-y-6">
//         <Image class="mx-auto rounded-full h-36 w-36" src="/dr6.jpeg" alt="author avatar" width={100} height={100}/>
//         <div class="space-y-2">
//             <div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
//                 <h3 class="text-primary text-xl font-bold">Doctor</h3>
//                 <p class="text-gray-700">Dentist</p>

//             </div>
//         </div>
//     </div>


// <div className="px-6 py-4">
//     <Link href="#" className="text-white "><Button className="bg-secondary rounded">View Profile</Button> </Link>
//   </div>
// </div>


// <div class="max-w-sm  overflow-hidden w-80  py-6  text-center bg-white bg-opacity-75 rounded lg:mt-0 xl:px-10 transform transition duration-500 hover:scale-110">
//     <div class="space-y-4 xl:space-y-6">
//         <Image class="mx-auto rounded-full h-36 w-36" src="/dr3.jpeg" alt="author avatar" width={100} height={100}/>
//         <div class="space-y-2">
//             <div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
//                 <h3 class="text-primary text-xl font-bold">Doctor</h3>
//                 <p class="text-gray-700">Dentist</p>

//             </div>
//         </div>
//     </div>

   
// <div className="px-6 py-4">
//     <Link href="#" className="text-white "><Button className="bg-secondary rounded">View Profile</Button> </Link>
//   </div>
// </div>

//     </div>

//     <div className=' px-10 py-6  font-semibold mb-5 text-xl mx-auto text-gray-100 text-center justify-center '>
//         <p>Our  <span className=''>Doctors</span> are passionate about what they do and strive to create a warm and welcoming environment for every patient.</p>
//     </div>
//  </section>
//   )
// }

"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope, CircleDollarSign, MapPin } from 'lucide-react';

export default function HomeDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch('http://154.38.186.138:5000/api/Doctors');
      const data = await res.json();
      setDoctors(data.slice(0, 3)); // Get the first 3 doctors
    }

    fetchDoctors();
  }, []);

  return (
    <section id='OurDr' className='overflow-hidden  pt-28 lg:pb-[90px] bg-gradient-to-b from-link to-customDarkGreen'>
      <div className='mt-50'>
        <h2 className='text-center font-bold text-5xl pb-10 text-gray-100'>
          Meet Our <span className='text-primary'>Professional Doctors</span>
        </h2>
      </div>
      <div className='flex flex-wrap justify-center gap-8 p-5'>
        {doctors.map((doctor) => (
          <div key={doctor.id} className='max-w-sm w-full sm:w-72 md:w-80 overflow-hidden py-6 text-center bg-white bg-opacity-75 rounded lg:mt-0 xl:px-10 transform transition duration-500 hover:scale-110'>
            <div className='space-y-4 xl:space-y-6'>
              <img className='mx-auto rounded-full h-36 w-36' src={doctor.image || '/DR.png'} alt={doctor.name} />
              <div className='space-y-2'>
                <div className='flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6'>
                  <h3 className='text-primary text-xl font-bold'>DR. {doctor.name}</h3>
                  <p className='text-gray-700'>{doctor.speciality}</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-4'>
              <Link href={`/FindDoctors/${doctor.id}`} className='text-white'>
                <Button className='bg-primary rounded'>View Profile</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-8'>
        <Link href='/FindDoctors'>
          <Button className='bg-secondary text-white rounded p-5  hover:bg-primary'>
            See More
          </Button>
        </Link>
      </div>
      <div className='px-10 py-6 font-semibold mb-5 text-xl mx-auto text-gray-100 text-center'>
        <p>
          Our <span>Doctors</span> are passionate about what they do and strive to create a warm and welcoming environment for every patient.
        </p>
      </div>
    </section>
  );
}

