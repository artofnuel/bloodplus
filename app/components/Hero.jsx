"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import herobkg from "../assets/herobkg.jpg";

const Hero = () => {
  return (
    <main className="w-full h-screen scroll-smooth">
      <section className="w-full h-full relative">
        <div className="w-full h-full absolute inset-0 bg-black/80 lg:bg-black/20 z-10"></div>
        <div className="w-full h-screen overflow-hidden">
          <Image
            src={herobkg}
            alt="hero"
            objectFit=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full p-4 lg:p-8 absolute flex flex-col justify-center lg:justify-end items-start gap-2 inset-0 z-30">
          <h1 className="text-2xl lg:text-4xl text-primary uppercase font-bold">
            BloodPlus
          </h1>
          <p className="text-lg lg:w-[600px] text-justify text-white rounded-md lg:text-white">
            We strategize for the future, we have identified several key areas
            of focus to help us achieve our mission of increasing the pool of
            voluntary blood donors in Nigeria and increasing the access to safe
            blood and blood products in Nigeria.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
