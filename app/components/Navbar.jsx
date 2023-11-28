"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import useStore from "../store/useStore";

const Navbar = () => {
  const { showMenu, handleShowMenu, falseShowMenu } = useStore();

  return (
    <header className="w-full fixed bg-white drop-shadow-md">
      <nav>
        <div className="w-full flex justify-between items-center p-4 lg:p-8 relative">
          <button>
            <h1 className="text-primary text-xl lg:text-4xl font-bold">
              BloodPlus<span className="text-secondary">.ng</span>
            </h1>
          </button>
          <div
            onClick={handleShowMenu}
            className="block lg:hidden p-2 text-primary"
          >
            {showMenu ? <IoClose size={26} /> : <IoMenu size={26} />}
          </div>
          {showMenu === true && (
            <div className="w-1/2 fixed top-0 right-0 lg:hidden flex flex-col justify-center items-center bg-primary/90 text-white">
              <div
                onClick={falseShowMenu}
                className="w-full flex justify-end items-end p-6"
              >
                <IoClose size={26} />
              </div>
              <ul className="lg:hidden h-screen p-4 mt-20 flex flex-col justify-start items-start gap-5 font-medium text-lg">
                <li>
                  <button className="p-2 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    Donate
                  </button>
                </li>
                <li>
                  <button className="p-2 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    About Us
                  </button>
                </li>
                <li>
                  <button className="p-2 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    Contact
                  </button>
                </li>
                <li>
                  <button className="p-3 font-bold  hover:-translate-y-1 bg-white text-primary rounded-md transition-all duration-300 ease-in-out">
                    Account
                  </button>
                </li>
              </ul>
            </div>
          )}
          <ul className="lg:flex justify-center items-center gap-5 font-medium text-lg hidden">
            <li>
              <button className="p-2 text-tertiary hover:text-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
                Donate
              </button>
            </li>
            <li>
              <button className="p-2 text-tertiary hover:text-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
                About Us
              </button>
            </li>
            <li>
              <button className="p-2 text-tertiary hover:text-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
                Contact
              </button>
            </li>
            <li>
              <button className="p-3 font-bold text-white hover:-translate-y-1 bg-primary rounded-md transition-all duration-300 ease-in-out">
                Account
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
