import { Brain, CalendarCheck, User, Users2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <section className="pb-12 pt-20 pl-20 pr-20 bg-gray-100 lg:pb-[90px] lg:pt-[120px]" id="services">
      <div className="container-fluid mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20 ">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span> */}
              <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-primary dark:text-white sm:text-4xl md:text-[40px]">
                What We <span className="text-secondary">Offer</span> 
              </h2>
              <p className="  text-2xl text-gray-500 dark:text-dark-6">
              Your well-being is our priority.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center mt-2">

    
    <div className="p-4 max-w-sm  ">
        <div className="flex rounded-2xl mb-40  h-full dark:bg-gray-800 hover:bg-opacity-75 bg-Footer bg-opacity-100 border-3 border-Footer p-8 flex-col 
         hover:scale-105 transition-all ease-in-out ">
        
            <div className="  flex items-center mb-3 ">
                <div
                    className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-secondary text-white flex-shrink-0
                    ">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <CalendarCheck/>
                    </svg>
                </div>
                <h2 className="text-white dark:text-white text-xl font-medium ">Book an Appointment</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow ">
                <p className="leading-relaxed text-lg text-gray-100 dark:text-gray-300 pt-2">
                Book your appointment today and take the first step towards better health 
                </p>
                <Link href={"http://localhost:3000/MedixAI"} className="mt-3 text-gray-100 dark:text-white hover:text-secondary 
                hover:translate-x-10 transition-all
                inline-flex items-center text-lg">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </div>



    <div className="p-4 max-w-sm mb-1 mx-2">
    <div className="flex rounded-2xl  mb-40 h-full dark:bg-gray-800  hover:bg-opacity-75 bg-Footer bg-opacity-100 border-3 border-Footer   p-8 flex-col 
         hover:scale-105 transition-all ease-in-out">
        
            <div className="  flex items-center mb-3 ">
                <div
                    className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-secondary text-white flex-shrink-0
                    ">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <Users2/>
                    </svg>
                </div>
                <h2 className="text-white dark:text-white text-xl font-medium ">Find The Best Doctor</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow ">
                <p className="leading-relaxed text-lg text-gray-100 dark:text-gray-300 pt-2">
                Start your journey towards optimal health by selecting your preferred doctor today.
                </p>
                <a href="#" className="mt-3 text-gray-100 dark:text-white hover:text-secondary 
                hover:translate-x-10 transition-all
                inline-flex items-center text-lg">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>



    <div className="p-4 max-w-sm ">
        <div className="flex rounded-2xl  mb-40 h-full dark:bg-gray-800 hover:bg-opacity-75 bg-Footer bg-opacity-100 border-3 border-Footer p-8 flex-col 
         hover:scale-105 transition-all ease-in-out ">
        
            <div className="  flex items-center mb-3  ">
                <div
                    className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-secondary text-white flex-shrink-0
                    ">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <Brain/>
                    </svg>
                </div>
                <h2 className="text-white dark:text-white text-xl font-medium ">Medix AI</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow ">
                <p className="leading-relaxed text-lg text-gray-100 dark:text-gray-300 pt-2">
                Add a medical report.
A detailed health report helps the Ai model to diagnose you better.
                </p>
                <Link href={"http://localhost:3000/MedixAI"} className="mt-3 text-gray-100 dark:text-white hover:text-secondary 
                hover:translate-x-10 transition-all
                inline-flex items-center text-lg">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </div>







    {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </span>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                    online.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div> */}















</div>


      </div>
    </section>
  );
};


export default Service;
