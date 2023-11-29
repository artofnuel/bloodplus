import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Cta />
    </main>
  );
}
