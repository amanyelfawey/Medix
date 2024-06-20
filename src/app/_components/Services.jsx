// import React from 'react'
// import Image from 'next/image'
// import { Brain, CalendarCheck, User, Users2 } from "lucide-react";
// import Link from 'next/link';


// export default function Services() {
//   return (



// <section className="pb-12  pl-5 pr-5 lg:pl-20 lg:pr-20 bg-link bg-opacity-25 lg:pb-[90px] lg:pt-[120px]" id="services">
//   <div className="container mx-auto">
//     {/* <div className="mx-4 flex flex-wrap">
//       <div className="w-full px-4">
//         <div className="mx-auto max-w-[510px] text-center lg:mb-20">
//           <h2 className="text-4xl font-bold leading-[1.2] text-primary dark:text-white sm:text-4xl md:text-[40px]">
//             What We <span className="text-secondary">Offer</span>
//           </h2>
//           <p className="text-2xl text-gray-500 dark:text-dark-6">
//             Your well-being is our priority.
//           </p>
//         </div>
//       </div>
//     </div> */}
//     <div className="flex  justify-center gap-5">
//       <div className=" relative flex justify-center align-content-center">
//         <div className="overflow-hidden sm:py-12">
//           <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
//             <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
//             <div className="relative z-10 mx-auto max-w-md">
//               <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
//                 <CalendarCheck/>
//                 </svg>
//               </span>
//               <h2 className="text-gray-600 group-hover:text-white/90 pt-4 pl-4 text-xl font-bold">Book an Appointment</h2>
//               <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
//                 <p>Book your appointment today and take the first step towards better health with our best doctors .</p>
//               </div>
//               <div className="pt-5 text-base font-semibold leading-7">
//                 <p>
//                   <Link href={"/FindDoctors"} className="secondary transition-all duration-300 text-primary group-hover:text-secondary">
//                     Learn More &rarr;
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>



        
//       </div>

//       <div className="relative flex justify-center align-content-center ">
//         <div className=" overflow-hidden sm:py-12">
//           <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
//             <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
//             <div className="relative z-10 mx-auto max-w-md">
//               <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
//                 <Users2/>
//                 </svg>
//               </span>
//               <h2 className="text-gray-600 group-hover:text-white/90 pt-4 pl-4 text-xl font-bold">Find The Best Doctor</h2>
//               <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
//                 <p>Start your journey towards optimal health by selecting your preferred doctor today.</p>
//               </div>
//               <div className="pt-5 text-base font-semibold leading-7">
//                 <p>
//                   <Link href={"/#OurDr"} className="secondary transition-all duration-300 text-primary group-hover:text-secondary">
//                     Learn More &rarr;
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>



        
//       </div>

//       <div className=" relative flex justify-center align-content-center">
//         <div className="overflow-hidden sm:py-12">
//           <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
//             <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
//             <div className="relative z-10 mx-auto max-w-md">
//               <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
//                   <Brain />
//                 </svg>
//               </span>
//               <h2 className="text-gray-600 group-hover:text-white/90 pt-4 pl-4 text-xl font-bold">Medix AI</h2>
//               <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
//                 <p>Add a medical report.
// A detailed health report helps the Ai model to diagnose you better.</p>
//               </div>
//               <div className="pt-5 text-base font-semibold leading-7">
//                 <p>
//                   <Link href={"/MedixAI"} className="secondary transition-all duration-300 text-primary group-hover:text-secondary">
//                     Learn More &rarr;
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//   )
// }


import React from 'react'
import Image from 'next/image'
import { Brain, CalendarCheck, Users2 } from "lucide-react";
import Link from 'next/link';

export default function Services() {
  return (
    <section className="pb-12 pl-5 pr-5 lg:pl-20 lg:pr-20 bg-link bg-opacity-25 lg:pb-[90px] lg:pt-[120px]" id="services">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="overflow-hidden sm:py-12">
          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
                <CalendarCheck className="h-10 w-10 text-white transition-all" />
              </span>
              <h2 className="text-gray-600 group-hover:text-white/90 pt-4 pl-4 text-xl font-bold">Book an Appointment</h2>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Book your appointment today and take the first step towards better health with our best doctors.</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <Link href={"/FindDoctors"} className="secondary transition-all duration-300 text-primary group-hover:text-secondary">
                    Learn More &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden sm:py-12">
          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
                <Users2 className="h-10 w-10 text-white transition-all" />
              </span>
              <h2 className="text-gray-600 group-hover:text-white/90 pt-4 pl-4 text-xl font-bold">Find The Best Doctor</h2>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Start your journey towards optimal health by selecting your preferred doctor today.</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <Link href={"/#OurDr"} className="secondary transition-all duration-300 text-primary group-hover:text-secondary">
                    Learn More &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden sm:py-12">
          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
                <Brain className="h-10 w-10 text-white transition-all" />
              </span>
              <h2 className="text-gray-600 group-hover:text-white/90 pt-4 pl-4 text-xl font-bold">Medix AI</h2>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Add a medical report. A detailed health report helps the AI model to diagnose you better.</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <Link href={"/MedixAI"} className="secondary transition-all duration-300 text-primary group-hover:text-secondary">
                    Learn More &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

