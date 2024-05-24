// "use client"
// import React, { useEffect, useState } from 'react'
// import DoctorDetails from './_compnent/DoctorDetails'

// export default function Details({params }) {

//     // const [doctor ,setDoctor]=useState();
//     // useEffect(()=>{
//     //     getDoctorById();
//     // },[])

//     // const getDoctorById=(params.recordId) => {
        

//     // }



//   return (
//     <div className='p-5 md:px-20'>
//       <h2 className='font-bold'>Details</h2>
//       <div className='grid  gird-cols-1 md:grid-cols-4'>

//         {/* DoctorDetail */}
//         <div className=' col-span-3'>
//             <DoctorDetails Doctors={Doctors}/>
//         </div>


//         {/* SuggestDoctors */}

//         <div>

//         </div>





//       </div>


//     </div>
//   )
// }

// "use client"
// import Image from 'next/image'
// import { MapPin, Phone, Stethoscope } from 'lucide-react'; // Ensure Stethoscope is imported

// import { Button } from '@/components/ui/button';
// import React, { useEffect, useState } from 'react';

// export default function Details({ params }) {
//   const [doctor, setDoctor] = useState(null);
//   const { id } = params;

//   useEffect(() => {
//     getDoctorById(id);
//   }, [id]);

//   const getDoctorById = async (id) => {
//     try {
//       const res = await fetch(`http://154.38.186.138:5000/api/Doctors/${id}`);
//       const data = await res.json();
//       setDoctor(data);
//     } catch (error) {
//       console.error('Error fetching doctor details:', error);
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className='p-5 md:px-20'>
//         <h2 className='font-bold'>Details</h2>
//         <div className='grid grid-cols-1 md:grid-cols-4'>
//           {/* DoctorDetail */}
//           <div className='col-span-3'>
//             <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
//               {/* Doctor Image */}
//               <div> 
//                 <Image 
//                   src={doctor.image || '/default-image.jpg'} // Use a default image if none is provided
//                   width={200}
//                   height={200}
//                   alt='Doctor-Image'
//                   className='rounded-lg w-full h-[280px] object-cover'
//                 />
//               </div>
              
//               {/* Doctor Info */}
//               <div className='col-span-2 mt-6 flex flex-col gap-3 md:px-10 items-baseline'>
//                 <h2 className='font-bold text-2xl'>{doctor.name}</h2>
//                 <h2 className='flex gap-2 text-2xl'>
//                   <MapPin />
//                   <span>{doctor.address}</span>
//                 </h2>
//                 <h2 className='text-md flex gap-2'>
//                   <Phone />
//                   <span>{doctor.phone}</span>
//                 </h2>
//                 <h2 className='flex gap-2'>
//                   <Stethoscope />
//                   <span className='text-[10px] bg-secondary p-1 rounded-full px-2'>{doctor.speciality}</span>
//                 </h2>
//                 <Button className="mt-3 rounded-full">Book Appointment</Button>
//               </div>
//             </div>

//             {/* Doctor Bio */}
//             <div className='p-3 border-[1px] rounded-lg mt-5'>
//               <h2 className='font-bold text-[20px]'>About Me</h2>
//               <p>{doctor.bio || "No bio available."}</p>
//             </div>
//           </div>

//           {/* SuggestDoctors */}
//           <div>
//             {/* Suggest doctors implementation here if needed */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
