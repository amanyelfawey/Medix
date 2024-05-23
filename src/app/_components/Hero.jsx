import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function Hero() {
  return (
    <div>
      <section id="home">
        <div className=" bg-[url('/bg-hero.png')] herobg  w-full h-full">
          <div className="relative mx-auto  px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16  ">
            <div className="flex flex-col h-full lg:grid grid-cols-1  gap-8 lg:grid-cols-2 lg:gap-16 relative">
              <div className="drhero lg:block hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
                <Image
                  alt="drFedaa"
                  src="/DrHeroo.png"
                  width={1000}
                  height={1000}
                  className="  inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24 flex justify-center flex-col text-center items-center max-w-screen-x container min-h-[80vh] lg:min-h-auto">
                <h2 className="text-primary font-bold text-4xl ">
                  Your Good Health Makes Your Happiness.
                </h2>

                <p className="mt-6 mb-8 text-gray-600 text-2xl">we are here for your care.</p>
                <Link href={"http://localhost:3000/Signup"}>
                  <Button className="  rounded bg-secondary px-12 my-12 text-lg font-light   text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-primary">
                    Get Started
                  </Button>
                </Link>
              </div>

              <div className="gap-8 lg:block hidden overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                  alt="drFedaa"
                  src="/item3.png"
                  width={85}
                  height={85}
                  className=" mx-32 pt-5 animate-bounce"
                />
                <Image
                  alt="drFedaa"
                  src="/item1.png"
                  width={85}
                  height={85}
                  className=" mr-40 animate-bounce"
                />
                <Image
                  alt="drFedaa"
                  src="/item2.png"
                  width={95}
                  height={85}
                  className=" my-16 animate-bounce"
                />
                <Image
                  alt="drFedaa"
                  src="/item4.png"
                  width={85}
                  height={85}
                  className=" animate-bounce "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
