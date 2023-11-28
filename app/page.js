import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
    </main>
  );
}
