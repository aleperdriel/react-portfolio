"use client"
import Image from "next/image";
import firstImg from "./image2.jpg";
import Hero from './/components/Hero';
import ListCard from "./components/ListCard";
import 'tailwindcss/tailwind.css'
import "./globals.css"
import { Section } from "./components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <Section id="about" title="About me">

        </Section>
        <Section id="projects" title="Projects" className="mt-12 flex flex-col w-full items-center">
          <ListCard image={firstImg}></ListCard>
          <ListCard image={firstImg} className="flex-row-reverse"></ListCard>
          <ListCard image={firstImg}></ListCard>
          <ListCard image={firstImg} className="flex-row-reverse"></ListCard>
        </Section>
        

      </main>
      <Link href='contact'>

        {/* Scrolling banner */}
        <div className="flex gap-0 bg-contact_bg w-full bg-cover bg-center h-[700px] py-80 text-center cursor-arrow">
          <p className="banner-items whitespace-nowrap block text-9xl text-white font-bebas">LET'S GET IN TOUCH<span className="w-8 h-8 rounded-full mx-3 my-7 inline-block bg-orange-600"></span>LET'S GET IN TOUCH<span className="w-8 h-8 rounded-full mx-3 my-7 inline-block bg-orange-600"></span></p>
          <p className="banner-items whitespace-nowrap block text-9xl text-white font-bebas">LET'S GET IN TOUCH<span className="w-8 h-8 rounded-full mx-3 my-7 inline-block bg-orange-600"></span>LET'S GET IN TOUCH<span className="w-8 h-8 rounded-full mx-3 my-7 inline-block bg-orange-600"></span></p>
        </div>

        </Link>
    </div>

  );
}
