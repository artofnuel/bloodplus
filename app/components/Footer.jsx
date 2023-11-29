import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10">
      <main className="space-y-5">
        <section className="flex justify-center items-center gap-5 text-primary">
          <div className="p-3">
            <FaFacebookF
              size={30}
              className="hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="p-3">
            <FaInstagram
              size={30}
              className="hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="p-3">
            <FaLinkedinIn
              size={30}
              className="hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-in-out"
            />
          </div>
        </section>
        <section className="text-center">
          © Copyright 2023 BloodPus_ng. All Rights Reserved.
        </section>
      </main>
    </footer>
  );
};

export default Footer;
