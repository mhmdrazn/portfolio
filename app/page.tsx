import Image from "next/image";
import Link from 'next/link';

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProjectSection from "@/components/projects";
import Experience from "@/components/experience";
import Card from "@/components/molecules/contactCard";

export default function Home() {
  return (
    <main>
      <Navbar/>


     

      {/* contacts */}
      <section id="contacts" className="w-full h-fit pt-[64px] py-[32px] flex-col flex mx-auto justify-center items-center bg-gradient-glass gap-6">
        

        <h1 className="font-extrabold text-[32px] justfiy-center max-w-[360px] mx-auto items-center h-fit text-center mb-8 md:text-[48px] md:max-w-fit">Dive In below to explore our collaboration!</h1>
        
        {/* baris pertama */}
        <div className="justify-center items-center mx-auto flex-col flex gap-6 md:flex-row">
          {/* item pertama */}
          <Card
            url="https://github.com/mhmdrazn"
            img="/contacts/github.png"
            username="mhmdrazn"
            platform="Github"
          />
          <Card
            url="https://www.linkedin.com/in/muhammadrazan/"
            img="/contacts/linkedin.png"
            username="Muhammad Razan"
             platform="LinkedIn"
          />

          <Card
            url="https://www.instagram.com/mhmdrazn/"
            img="/contacts/ig.png"
            username="mhmdrazn"
             platform="Instagram"
          />
        </div>

        {/* baris kedua */}
        <div className="justify-center items-center mx-auto flex-col flex mb-8 gap-6 md:flex-row">
          {/* item pertama */}
          <Card
            url="https://www.dribbble.com/mhmdrazn/"
            img="/contacts/dribbble.png"
            username="mhmdrazn"
             platform="Dribbble"
          />

          <Card
            url="https://www.instagram.com/medium/"
            img="/contacts/medium.png"
            username="mhmdrazn"
             platform="Medium"
          />
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="w-[20px] h-[20px] relative place-content-center">
            <Image src="/c.svg" alt="c" fill></Image>
          </div>
          <div className="text-[#696969] font-semibold text-[18px]"> Muhammad Razan. All Rights Reserved.</div>
        </div>
      </section>

    </main>
  );
}
