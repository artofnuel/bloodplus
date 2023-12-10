"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";
import Statement from "./components/Statement";
import FAQComponent from "./components/Faq";
import { useFaq } from "./store/useFaq";

export default function Home() {
  const { faqs } = useFaq();

  const span = [
    {
      title: "BloodPlus Donor Awareness & Support Initiative",
      body: `is committed to increasing the pool of voluntary blood donors in Nigeria
    through innovative and effective strategies. In pursuit of this goal, we
    propose the development of an online blood donation scheduling system.`,
    },
    {
      title:
        "Voluntary blood donors are the foundation of a safe, sustainable blood supply.",
      body: `Without a system based on voluntary unpaid blood donation, particularly regular voluntary donation, no country can provide sufficient blood for all patients who require transfusion.`,
    },
  ];
  const tertiary = "tertiary";
  const primary = "primary";
  return (
    <main className="">
      <Hero />
      <Statement title={span[0].title} body={span[0].body} primary={primary} />
      <Services />
      <Statement
        title={span[1].title}
        body={span[1].body}
        tertiary={tertiary}
      />
      <FAQComponent faqs={faqs} />
      <Cta />
    </main>
  );
}
