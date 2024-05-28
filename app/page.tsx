import Image from "next/image";
import Hero from "./hero";
import About from "./about";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
    </main>
  );
}
