import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="grid grid-cols-1 gap-10 mt-10 md:mt-0 md:grid-cols-2 ">
        <div className="flex flex-col justify-around items-start ml-20">
        <div className="text-3xl text-blue-500 ">
          Exciting Mega Sale with a Special
          <br />
          <span className="text-green-500">Offer—Save Up to 60%!</span>{" "}
        </div>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          inventore enim quis eius quasi reprehenderit, alias maiores iure
          numquam tempora labore non, tempore consectetur repudiandae accusamus
          sit magnam totam. Nisi.
        </div>
        <div className="flex justify-center mx-auto ">
          <Button className="bg-blue-500 mr-10 hover:bg-blue-400 ">Shop Now</Button>
          <Button>Expore More</Button>
        </div>
      </div>
      <div className=" ml-20">
        <Image src='/images/dm.png' width={400} height={400} alt="digital marketing" />
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
