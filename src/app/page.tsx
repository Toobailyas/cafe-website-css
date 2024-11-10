"use client";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Product from "./component/Product";
import OurStory from "./component/Ourstory"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Hero />
      <Product />
      <OurStory />
      <Contact />
    </main>
    
  );
}