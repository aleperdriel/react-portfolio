import Image from "next/image";
import styles from "./page.module.css";
import { Bebas_Neue } from 'next/font/google';
import Header from './/components/Header';
import Hero from './/components/Hero';
import 'tailwindcss/tailwind.css'
import "./globals.css"
import { Section } from "./components/Section";


const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Section className="text-blue-50">
        <h2>yuooo</h2>
      </Section>


    </div>

  );
}
