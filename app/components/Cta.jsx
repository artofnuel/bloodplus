"use client";
import React from "react";
import Image from "next/image";
import { Assets } from "../assets/data";

const Cta = () => {
  return (
    <main>
      <section className="w-full h-auto lg:h-screen flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-full p-4 lg:p-8 bg-secondary text-white flex flex-col justify-center items-start gap-3">
          <p className="text-xl lg:text-2xl">When you donate blood</p>
          <h4 className="text-3xl lg:text-5xl">
            You make a
            <span className="text-primary/90 pl-2 font-bold">difference</span>
            <br /> and save a
            <span className="text-primary/90 pl-2 font-bold">life</span>
          </h4>
          <button className="text-2xl mt-5 p-4 px-12 text-primary bg-white rounded-md font-bold hover:scale-105 hover:-translate-y-2 hover:translate-x-1 transition-all duration-500 ease-in-out">
            Donate today
          </button>
        </div>
        <div className="lg:w-1/2 h-full">
          <Image
            src={Assets.bkg}
            alt="CTA"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Cta;
