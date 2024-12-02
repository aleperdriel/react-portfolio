"use client"
import Image from "next/image";
import firstImg from "./image2.jpg";
import iopImg from "./banner.jpeg";
import strappleImg from "./strappleit.jpg";
import Hero from './/components/Hero';
import ListCard from "./components/ListCard";
import 'tailwindcss/tailwind.css'
import "./globals.css"
import { Section } from "./components/Section";
import Link from "next/link";
import PillLink from "./components/PillLink";
import Tag from "./components/Tag";

export default function Home() {
  
  return (
    <div>
      <main>
        <Hero></Hero>

        <Section className="h-full" id="about" title="About me">
          <div className="w-2/3 mx-auto">
            <p className="text-lg my-6 leading-10">I am interested in electronics, artificial intelligence and robotics. On my first year, I focused on integrating technology in nature by working on touch interactions' sonification with plants. I love making things with my own hands, try and errors and having to figure out how to do something. On another project, I am currently trying to find the best process to use a fiber laser cutting and engraving machine to make our own PCBs quickly.</p>
            <div className="w-full justify-between flex flex-wrap pt-10">
              <div className="border-r-2 pr-4 pt-4">
                <h3 className="text-2xl font-bold"> Skills</h3>
                <ul className="mt-6">
                  <li className="mt-6"><span className="font-bold">Web Development:</span> React.js, Next.js, Vue.js</li>
                  <li>HTML, CSS, PHP & MySQL</li>
                  <li className="mt-6"><span className="font-bold">Electronics: </span>Circuit design, Soldering, Testing</li>
                  <li className="mt-6"><span className="font-bold">AI: </span> Numpy, Panda, Basics of Machine Learning</li>
                </ul>
              </div>
              <div className="border-r-2 pr-4 pt-4">
                <h3 className="text-2xl font-bold">Education</h3>
                <ul className="mt-6">
                  <li className="mt-6"><span className="font-bold">Master of Science - IFT La Défense, France</span> | Current</li>
                  <li>Artificial Lives Research Group</li>
                  <li className="mt-6"><span className="font-bold">Web Development Bachelor - IIM</span> | 2020 - 2023</li>
                  <li className="mt-6"><span className="font-bold">Semester Abroad - Dublin Dorset College</span> | 2022</li>
                </ul>
              </div>
              <div className="px-4 pt-4">
                <h3 className="text-2xl font-bold">Professional experiences</h3>
                <ul className="mt-6">
                  <li className="mt-6"><span className="font-bold">Audioptic Trade Services</span> | 2024</li>
                  <li>Sentiment analysis using LLMs</li>
                  <li className="mt-6"><span className="font-bold">La Plateforme du Bâtiment</span> | 2023</li>
                  <li>Fullstack developer</li>
                  <li className="mt-6"><span className="font-bold">Atomic Digital Design</span> | 2022</li>
                  <li>Web/Web AR developer</li>

                </ul>
              </div>
            </div>
          </div>
          
        </Section>
        <Section id="projects" title="Projects" className="mt-12">
          <p className="ml-24 text-lg">A few school projects that I made during the last two years.</p>

          <div className="w-2/3 flex flex-col mx-auto">
            <ListCard image={strappleImg} title="Strapple It - Kickstarter">
              <p className="">Successful Kickstarter project. A kit of leather straps to help you carry more on or without your bag (or anywhere else...)</p>
              <PillLink to="https://www.kickstarter.com/projects/zoemichel/quickstarter-strapple-it-the-freedom-to-carry-more" className="mt-6 mx-0">See more</PillLink>
              <div className="mt-6">
                <Tag label="Leather work"></Tag>
                <Tag label="Manufacturing"></Tag>
                <Tag label="Marketing"></Tag>
                <Tag label="Digital Communication"></Tag>
              </div>
            </ListCard>
            <ListCard image={iopImg} className="flex-row-reverse" title="Internet of Plants">
              <p>The Internet of Plants project aims to capture and redefine the human-plant interaction through music. Adding a fully developed electronical platform to a plant, the project can capture data from the environment and the plant itself. A first sonfication is done directly on the platform. The full experience is reach using a sonification server that will create an immersive art installation.</p>
              <PillLink to="https://ift.devinci.fr/projects/Internet-of-Plants" className="mt-6 mx-0">See more</PillLink>
              <PillLink to="https://aleperdriel.github.io/internet-of-plants-threejs/" className="mt-6 mx-4">See the 3D Experience</PillLink>
              <div className="mt-6">
                <Tag label="Electronics"></Tag>
                <Tag label="Soldering"></Tag>
                <Tag label="Computer Science"></Tag>
                <Tag label="Python"></Tag>
              </div>
            </ListCard>
            <ListCard image={firstImg} title="Interactive garment">
            <p>Imagine clothes that react to your environment, change their shapes when close to any obstacle or even move itself to interact with your surroundings. This is what we aim on this project. Mixing robotics, electronics and fashion design.</p>
            <PillLink to="https://www.kickstarter.com/projects/zoemichel/quickstarter-strapple-it-the-freedom-to-carry-more" className="mt-6 mx-0">See more</PillLink>
            <div className="mt-6">
              <Tag label="Robotics"></Tag>
              <Tag label="Electronics"></Tag>
              <Tag label="Design"></Tag>
              <Tag label="Artistic Project"></Tag>
              <p className="inline mr-2 rounded py-1 px-2 bg-gray-200">Robotics</p>
              <p className="inline mx-2 rounded py-1 px-2 bg-gray-200">Electronics</p>
              <p className="inline mx-2 rounded py-1 px-2 bg-gray-200">Design</p>
              <p className="inline mx-2 rounded py-1 px-2 bg-gray-200">Artistic project</p>

            </div>
            </ListCard>
          </div>
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
