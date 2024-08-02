import Image from "next/image";
import Link from 'next/link';

import Hero from "@/components/hero";
import ProjectSection from "@/components/projects";
import Experience from "@/components/experience";

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
      
      {/* hero */}
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

      {/* experience */}
      <Experience/>

      {/* project */}
      <ProjectSection/>

      

      {/* contacts */}
      <section id="contacts" className="w-full h-fit pt-[64px] py-[32px] flex-col mx-auto justify-center items-center bg-gradient-glass">
        <h1 className="font-extrabold text-[48px] justfiy-center max-w-[572px] mx-auto items-center h-fit text-center mb-12">Dive In below to explore our collaboration!</h1>
        
        {/* baris pertama */}
        <div className="flex justify-center mx-auto p-4 gap-[32px]">
          {/* item pertama */}
          <Link href="https://github.com/mhmdrazn">
            <button className="max-w-[310px] space-y-[12px] px-[86px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px]">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/github.png" alt="github" fill></Image>
                </div>
                <div className="font-bold text-[24px]">Github</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>

          <Link href="https://www.linkedin.com/in/muhammadrazan/">
            <button className="w-[310px] space-y-[12px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/linkedin.png" alt="linkedin" fill></Image>
                </div>
                <div className="font-bold text-[24px] self-center">LinkedIn</div>
              </div>
              <div className="text-[#696969]">
                Muhammad Razan
              </div>
            </button>
          </Link>

          <Link href="https://www.instagram.com/mhmdrazn/">
            <button className="w-[310px] space-y-[12px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] contact-hover hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/ig.png" alt="ig" fill></Image>
                </div>
                <div className="font-bold text-[24px] self-center">Instagram</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>
        </div>

        {/* baris kedua */}
        <div className="flex justify-center mx-auto p-4 mb-[64px] gap-[32px]">
          {/* item pertama */}
          <Link href="https://dribbble.com/mhmdrazn">
            <button className="w-[310px] space-y-[12px] px-[16px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/dribbble.png" alt="dribbble" fill></Image>
                </div>
                <div className="font-bold text-[24px]">Dribbble</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>

          <Link href="https://medium.com/@mhmdrazn">
            <button className="w-[310px] space-y-[12px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/medium.png" alt="medium" fill></Image>
                </div>
                <div className="font-bold text-[24px] self-center">Medium</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>
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
