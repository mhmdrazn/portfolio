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
    <main>
      <Navbar/>
      <Hero/>
      {/* <AboutMe/>
      <Experience/> */}
      <section id="projects" className="min-h-fit h-fit w-full items-center justify-center flex pt-28 pb-72">
        <Tabs/>
      </section>
      

      {/* contacts */}
      <section id="contacts" className="w-full h-fit pt-[64px] py-[32px] flex-col flex mx-auto justify-center items-center bg-gradient-glass gap-6">
        

        <h1 className="font-extrabold text-[32px] justfiy-center max-w-[360px] mx-auto items-center h-fit text-center mb-8 md:text-[36px] lg:text-[48px] md:max-w-[480px] lg:max-w-[640px]">Dive In below to explore our collaboration!</h1>
        
        {/* baris pertama */}
        <div className="justify-center items-center mx-auto flex-col flex gap-6 xl:flex-row md:flex-col">
          {/* item pertama */}
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

        {/* baris kedua */}
        <div className="justify-center items-center mx-auto flex-col flex mb-8 gap-6 md:flex-row">
          {/* item pertama */}
          <Card
            href="https://www.dribbble.com/mhmdrazn/"
            img="/contacts/dribbble.png"
            username="mhmdrazn"
             platform="Dribbble"
          />

          <Card
            href="https://www.instagram.com/medium/"
            img="/contacts/medium.png"
            username="mhmdrazn"
             platform="Medium"
          />
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="w-[12px] h-[12px] md:h-[14px] md:w-[14px] relative place-content-center">
            <Image src="/c.svg" alt="c" fill></Image>
          </div>
          <div className="text-[#696969] font-regular text-[14px] md:text-[16px]"> Muhammad Razan</div>
        </div>
      </section>
    </main>
  );
}
