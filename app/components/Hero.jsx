import React from "react";
import Image from "next/image";
import herobkg from "../assets/herobkg.jpg";

const Hero = () => {
  return (
    <main className="w-full h-screen scroll-smooth">
      <section className="w-full h-full relative">
        <div className="w-full h-full absolute inset-0 bg-black/60 z-10"></div>
        <div className="w-full h-screen overflow-hidden">
          <Image
            src={herobkg}
            alt="hero"
            objectFit=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full p-4 lg:p-8 absolute flex flex-col justify-center items-start gap-5 inset-0 z-30">
          <h1 className="text-2xl lg:text-4xl text-white">
            Don't forget you can save lives
            <br />
            by donating
            <span className="text-4xl lg:text-6xl pl-2 font-bold text-primary">
              Blood!
            </span>
          </h1>
          <button className="p-4 px-12 rounded full bg-primary text-white font-medium hover:scale-105 hover:-translate-y-2 hover:translate-x-1 transition-all duration-500 ease-in-out">
            Join Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
