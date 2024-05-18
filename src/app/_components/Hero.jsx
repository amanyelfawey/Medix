import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

function Hero() {
  return (
    <div>
    <section id='home'>
      
  <div className=" bg-[url('/bg-hero.png')] herobg  w-full  ">
  <div className="relative mx-auto  px-4 
  
  sm:px-6 sm:py-12 lg:px-8 lg:py-16  ">
  
   
    <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 relative">
      <div className="drhero overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
        <Image
          alt="drFedaa"
          src="/DrHeroo.png"width={1000} height={1000}
          className="  inset-0 h-full w-full object-cover"
          // className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      
      

      <div className="lg:py-24 max-w-screen-x container">
        <h2 className="text-primary font-bold text-4xl ">Your Good Health Makes
Your Happiness.</h2>

        <p className="mt-6 mb-8 text-gray-600 text-2xl">
        we are here for your care.
        </p>
        <Link href={"http://localhost:3000/Signup"}>
        <Button
          className="  rounded bg-secondary px-12 my-12 text-lg font-light   text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-primary"
        >
          Get Started
        </Button>
        </Link>
        
      </div>
    
      <div className='gap-8 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
      <Image
          alt="drFedaa"
          src="/item3.png"width={85} height={85}
          className=" mx-32 pt-5 animate-bounce"
  
        />
        <Image
          alt="drFedaa"
          src="/item1.png"width={85} height={85}
          className=" mr-40 animate-bounce"

        />
        <Image
          alt="drFedaa"
          src="/item2.png"width={95} height={85}
          className=" my-16 animate-bounce"

        />
        <Image
          alt="drFedaa"
          src="/item4.png"width={85} height={85}
          className=" animate-bounce "

        />
      </div>


    </div>
  </div>
  </div>
</section>




{/* <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="/hero4.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-primary opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4 font-serif">Your Good Health Makes
Your Happiness.</h1>
    <p className="text-lg text-gray-300 mb-8 font-serif">we are here for your care.</p>
    <a href="#" className="bg-primary text-gray-200 hover:bg-secondary  py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Appointment</a>
  </div>
</div> */}

{/* <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Your Good Health Makes
Your 
                    <span className="text-5xl sm:text-7xl">
                    Happiness.
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/hero3.jpg" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
        </div> */}




{/* <div className="flex bg-white  h-[539px] w-full" >
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
                <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                <div className="flex justify-center lg:justify-start mt-6">
                    <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                    <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div>
            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 " >
            <div className="h-full object-cover m-6 py-6" >
            <Image src={"/hero5.jpg"} width={1000} height={700}/>
                
            </div>
        </div>
    </div> */}
</div>











  )
}

export default Hero;
