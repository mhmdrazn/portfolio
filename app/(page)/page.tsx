"use client";
import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/section/navbar";
import Hero from "@/components/section/hero";
import AboutMe from "@/components/section/aboutme";
import Experience from "@/components/section/experience";
import Card from "@/components/molecules/contactCard";
import Tabs from "@/components/section/projects-tab";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar/>
      <section className="overflow-hidden">
        <Hero/>
      </section>
      <section id="aboutme" className="bg-black relative justify-start flex overflow-hidden">
        <AboutMe/>
      </section>
      <section id="experiences">
        <Experience/>
      </section>
      <section id="projects" className="flex flex-row mx-auto bg-black h-fit w-full items-center justify-center pt-10 pb-[940px] md:pt-20 md:pb-[560px] lg:pt-16 lg:pb-80 overflow-hidden">
        <Tabs/>
      </section>
      

      {/* section contacts */}
      
      <section id="contacts" className="w-full h-fit bg-neutral-900 pt-[64px] py-[32px] px-6 flex-col flex mx-auto justify-center items-center gap-6 overflow-hidden">
        <h1 className="font-extrabold text-[1.5rem] leading-tight justfiy-center max-w-[360px] mx-auto items-center h-fit text-center mb-8 md:text-[36px] lg:text-[48px] md:max-w-[480px] lg:max-w-[640px] overflow-hidden">Dive In below to explore our collaboration!</h1>
        <div className="justify-center items-center mx-auto flex-col flex gap-6 xl:flex-row md:flex-col overflow-hidden">
          <Card
            href="https://github.com/mhmdrazn"
            img="/contacts/github.png"
            username="mhmdrazn"
            platform="Github"
          />

          <div className="flex flex-col gap-6 md:flex-row">
            <Card
              href="https://www.linkedin.com/in/muhammadrazan/"
              img="/contacts/linkedin.png"
              username="Muhammad Razan"
              platform="LinkedIn"
            />

            <Card
              href="https://www.instagram.com/mhmdrazn/"
              img="/contacts/ig.png"
              username="mhmdrazn"
              platform="Instagram"
            />
          </div>
          
        </div>

        <div className="justify-center items-center mx-auto flex-col flex mb-8 gap-6 md:flex-row">
          <Card
            href="https://www.dribbble.com/mhmdrazn/"
            img="/contacts/dribbble.png"
            username="mhmdrazn"
             platform="Dribbble"
          />

          <Card
            href="https://medium.com/@mhmdrazn"
            img="/contacts/medium.png"
            username="mhmdrazn"
             platform="Medium"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="w-[12px] h-[12px] md:h-[14px] md:w-[14px] relative place-content-center">
            <Image src="/c.svg" alt="c" fill></Image>
          </div>
          <div className="text-[#696969] font-regular text-[14px] md:text-[16px]">2024. Muhammad Razan</div>
        </div>
      </section>
      
    </main>
  );
}
