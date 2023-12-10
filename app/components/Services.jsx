"use client";
import React from "react";
import Image from "next/image";
import { Assets, Volunteers } from "../assets/data";

const Services = () => {
  return (
    <main className="w-full h-auto p-4 lg:p-8 py-10">
      <article className="">
        <h2 className="p-2 border-b-4 border-tertiary text-primary inline-block font-bold text-xl lg:text-4xl">
          What is our Goal?
        </h2>
        <section className="mt-4 grid lg:grid-cols-2 gap-5">
          {Volunteers.map((data, index) => (
            <ul className="p-2 bg-secondary rounded-md text-white">
              <li>
                <h3>{data.title}</h3>
                <p>{data.descript}</p>
              </li>
            </ul>
          ))}
        </section>
      </article>
    </main>
  );
};

export default Services;
