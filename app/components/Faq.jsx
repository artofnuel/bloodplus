"use client";
import React from "react";
import { useFaq } from "../store/useFaq";

const FAQComponent = () => {
  const { faqs, toggleFAQ } = useFaq();

  return (
    <div className="container mx-auto p-4 lg:p-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">FAQs</h1>
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center justify-between bg-tertiary text-white py-3 px-4 cursor-pointer rounded-md"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg font-medium">{faq.question}</p>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  faq.isOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {faq.isOpen && (
              <div className="bg-white py-2 px-4 mt-2 rounded-md shadow">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
