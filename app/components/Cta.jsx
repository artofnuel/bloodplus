"use client";
import React from "react";
import Lottie from "lottie-react";
import heart from "../assets/heart.json";
import CountUp from "react-countup";

const Cta = () => {
  return (
    <main>
      <section className="w-full h-auto lg:h-screen flex flex-col lg:flex-row bg-secondary py-12">
        <div className="w-full p-4 lg:p-8 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-3">
          <p className="text-xl lg:text-2xl text-center font-light">
            join over{" "}
            <span>
              <CountUp end={3000} duration={4} suffix="+" />
            </span>{" "}
            and save lives
          </p>
          <h4 className="text-3xl lg:text-5xl">
            You make a
            <span className="text-tertiary pl-2 font-bold">difference</span>
            <br /> and save a
            <span className="text-tertiary pl-2 font-bold">life</span>
          </h4>
          <button className="text-2xl mt-5 p-4 px-12 text-primary bg-white rounded-md font-bold hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-2 hover:translate-x-1 transition-all duration-500 ease-in-out">
            Donate today
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Lottie animationData={heart} loop={true} />
        </div>
      </section>
    </main>
  );
};

export default Cta;
