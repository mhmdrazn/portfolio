import Image from "next/image";
import Link from 'next/link';

import Hero from "@/components/hero";
import ProjectSection from "@/components/projects";
import Experience from "@/components/experience";
import Card from "@/components/molecules/contactCard";

export default function Home() {
  return (
    <main>
      <header className="fixed flex z-50 bg-[#121212] w-full h-20 items-center justify-center gap-[56px] shadow-2xl">
        <ul className="flex"> 
          <a href="#home"><li className="listnavbar">Home</li></a>
          <a href="#aboutme"><li className="listnavbar">About Me</li></a>
          <a href="#experiences"><li className="listnavbar">Experiences</li></a>
          <a href="#projects"><li className="listnavbar">Projects</li></a>
          <a href="#contacts"><li className ="listnavbar">Contacts</li></a>
        </ul>
      </header>
      
      <Hero/>

      {/* about me */}
      <section id="aboutme" className="h-fit w-full">
      <div className="items-center justify-center w-full align-top flex mx-auto gap-28 py-32">
          <div className="relative w-[268.19px] h-[352px] object-contain">
            <Image src="/ganteng.png" alt="fotonya razan" fill></Image>
          </div>

          <div className="container flex-col h-fit w-fit space-y-6">
            <div className="text-[48px] font-extrabold">👋 It is Me!</div>
            <div className="font-thin max-w-[330px] text-justify">
              Hello! I'm <span className="font-extrabold">Muhammad Razan Parisya Putra</span>, an Undergraduate Student. I have experienced 2+ years in UI/UX Design and Front-End (just beginning 😚).
            </div>
            <div className="max-w-[330px] text-justify">
              My journey is driven by a love for creating intuitive, user-centric designs that not only look fantastic but also provide seamless experiences. Join me as I continue to innovate and make a mark in these exciting fields!
            </div>
          </div>


          <div className="space-y-4">
            <div className="text-[48px] font-extrabold">🎓 Education</div>
            <div className="relative w-[314.19px] h-[278.93px]">
              <Image src="/education.svg" alt="education" fill></Image>
            </div>
          </div>
        </div>
      </section>

      <Experience/>

      <ProjectSection/>

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
