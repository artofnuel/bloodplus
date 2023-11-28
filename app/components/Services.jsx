"use client";
import React from "react";
import Image from "next/image";
import { Assets, Volunteers } from "../assets/data";

const Services = () => {
  return (
    <main className="w-full h-auto p-4 lg:p-8 py-10">
      <section className="">
        <div className="text-primary space-y-10">
          <h2 className="text-2xl lg:text-4xl font-bold border-b-8 border-secondary inline">
            Volunteering?
          </h2>
          <p className="text-lg text-justify lg:text-center text-white bg-secondary p-4 rounded-md">
            Whether you are supporting blood or plasma donors during their
            donation process, recruiting people for blood, plasma, stem cell
            donations, organizing donation or typing events, or raising
            awareness about the importance of blood or plasma donation; you too
            are an integral part of BloodPlus's Lifeline.
          </p>
        </div>
      </section>
      <section className="py-10  space-y-5">
        <div className="space-y-3">
          <h2 className="text-primary text-2xl lg:text-4xl font-bold border-b-8 border-secondary inline">
            What can I gain from this?
          </h2>
          <p className="text-xl italic">Besides saving lives...</p>
        </div>
        <section className="py-10 w-full h-auto mx-auto grid lg:grid-cols-3 justify-center items-start gap-5">
          {Volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 p-4 drop-shadow-md bg-white rounded-md"
            >
              <Image
                src={volunteer.image}
                alt={volunteer.title}
                className="w-1/2 lg:w-1/3 h-full object-cover object-center"
              />
              <div className="lg:w-2/3 space-y-3">
                <h3 className="text-xl text-tertiary font-bold">
                  {volunteer.title}
                </h3>
                <p className="text-lg text-tertiary font-medium">
                  {volunteer.descript}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Services;
