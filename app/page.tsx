import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero></Hero>
      </div>
    </main>
  );
} 
