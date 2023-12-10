// store.js
import { create } from "zustand";

const useFaq = create((set) => ({
  faqs: [
    {
      question: "Why should I donate blood?",
      answer:
        "Blood is essential to the body and its shortage reduces bodily function and may lead to death, therefore the donated blood can help to keep people who need it alive.",
      isOpen: false,
    },
    {
      question: "Who are those who need blood?",
      answer:
        "People with severe cases of sickle cell anaemia, cancer, other forms of anaemia, road traffic accidents, severe bleeding during childbirth, surgical patients, people with severe burns etc.",
      isOpen: false,
    },
    {
      question: "How do I know I am qualified to donate?",
      answer:
        "Healthy people between the ages 18 and 65, male or female can donate. Donors must weigh at least 50 kg and be in good health. (*Additional eligibility criteria apply)",
      isOpen: false,
    },
    {
      question: "When am I not eligible?",
      answer:
        "If you have a chronic illness, pregnant, anaemic, or have been diagnosed with HIV, Hepatitis B or C and syphilis etc.",
      isOpen: false,
    },
    {
      question: "How much blood will be taken?",
      answer:
        "Approximately 450ml (of the 4.5-5.5 litres you have), which is just about a pint. Your body starts to replace the lost fluid almost immediately and completely over a very short period of time.",
      isOpen: false,
    },
    {
      question: "Why do people pay for the blood when they need it?",
      answer:
        "While donated blood is free, there are significant costs associated with collecting, testing, preparing components, labelling, storing and shipping, recruiting and educating donors, and quality assurance.",
      isOpen: false,
    },
    {
      question: "What do I benefit from being a blood donor?",
      answer:
        "Donating blood has benefits for your emotional and physical health. It helps to improve your emotional well-being.",
      isOpen: false,
    },
  ],
  toggleFAQ: (index) =>
    set((state) => ({
      faqs: state.faqs.map((faq, i) =>
        i === index
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      ),
    })),
}));

export { useFaq };
