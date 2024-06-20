// import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import About from './About';


function Footer() {
  return (
    <div>
<footer className="bg-gradient-to-b from-customTeal to-customDarkGreen">
  <div className="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:pt-24">
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8 animate-bounce">
      <Link
        className="inline-block rounded-full bg-secondary p-2 text-white shadow transition hover:bg-primary sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600"
        href={""}
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex   ">
          {/* <Image src="/MEDIX.com.png" alt="logo" width={250} height={100} /> */}
          <h1 className='text-white font-bolder font-serif text-5xl '>MEDIX<span className='text-secondary'>.com</span></h1>
        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center  text-md leading-relaxed text-gray-200 lg:text-left dark:text-gray-400"
        >
          Your well-being is our priority. Explore our medical website to discover valuable insights and resources for a healthier life.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12  "
      >
        <li className=' hover:scale-125 transition-all ease-in-out'>
          <Link
            className=" text-white hover:text-white/75"
            href="#about"
          >
            About
          </Link>
        </li>

        <li className=' hover:scale-125 transition-all ease-in-out'>
          <Link
            className=" text-white hover:text-white/75"
            href="#services"
          >
            Services
          </Link>
        </li>

         <li className=' hover:scale-125 transition-all ease-in-out'>
          <Link
            className=" text-white hover:text-white/75"
            href="/FindDoctors"
          >
            Doctors
          </Link>
        </li> 

        <li className=' hover:scale-125 transition-all ease-in-out'>
          <Link
            className=" text-white hover:text-white/75"
            href="#contact"
          >
            Contact Us
          </Link>
        </li>

        <li className=' hover:scale-125 transition-all ease-in-out'>
          <Link
            className=" text-white hover:text-white/75"
            href={"http://localhost:3000/Signup"}
          >
            Join Medix Doctors?
          </Link>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-100 lg:text-right dark:text-gray-400">
      Copyright &copy; 2024. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer;
