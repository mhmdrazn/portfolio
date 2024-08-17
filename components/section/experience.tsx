"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const content = [
    {
      title: 
      <div className="flex flex-col gap-4">
        <div className="flex gap-[24px]">
            <div className="relative w-[34.05px] h-[52px] scale-80">
                <Image src="/experience/betau.png" alt="betau" fill></Image>
            </div>
            <div className="text-[36px] font-bold self-center">Beta.U</div>
        </div>
        <div className="flex gap-8">
          <div className="text-[16px] font-medium text-[#737373]">
            UI/UX Designer
          </div>
          <div className="text-[16px] font-medium text-[#737373]">
            Jun 24 - Present
          </div>
        </div>
      </div>,
      description:
      <div className="flex flex-col gap-6">
        At BETA U, a dynamic software house focused on swiftly and creatively transforming ideas into Minimum Viable Products (MVPs), I am responsible for crafting engaging user experiences and designing intuitive user interfaces that align perfectly with project goals. I work closely with front-end teams to ensure seamless integration and execution, bringing client visions to life through meticulous design and collaboration.
        <Link href="https:/instagram.com/betafor.u">
            <Button className="w-fit px-8 bg-gradient-glass">
              <div className="h-[23px] w-fit">
                  Go to page
              </div>
              <div className="relative self-center h-[15px] w-[15px]">
                  <Image src="/export.svg" alt="export" fill></Image>
              </div>
            </Button>
          </Link>
      </div>,
      content: (
        <div className="h-fit text-center w-fit bg-[#121212] flex items-center relative justify-center">
          {/* Soon Posted! <br />Haven't take a photos yet. Lol */}
          <Image src="/experience/betaulogo.png" alt="betau" fill></Image>
        </div>
      ),  
    },
    {
      title: 
      <div className="flex flex-col gap-4">
        <div className="flex gap-[24px]">
            <div className="relative w-[59.66px] h-[52px] scale-80">
                <Image src="/experience/ise.png" alt="ise" fill></Image>
            </div>
            <div className="text-[36px] font-bold self-center">ISE! 2024</div>
        </div>
        <div className="flex gap-8">
          <div className="text-[16px] font-medium text-[#737373]">
            UI/UX Designer
          </div>
          <div className="text-[16px] font-medium text-[#737373]">
            Jun 24 - Present
          </div>
        </div>
      </div>,
      description:
        <div className="flex flex-col gap-6">
          Information Systems Expo (ISE!) is an annual event organized by the Information Systems Student. It comprises a series of events in the fields of information technology and business. ISE! aims to introduce the ITS Department of Information Systems to the broader community through various works and achievements.
          <Link href="https:/ise-its.com">
            <Button className="w-fit px-8 bg-gradient-glass">
              <div className="h-[23px] w-fit">
                  Go to page
              </div>
              <div className="relative self-center h-[15px] w-[15px]">
                  <Image src="/export.svg" alt="export" fill></Image>
              </div>
            </Button>
          </Link>
        </div>,
      content: (
        <div className="h-[320px] text-center w-[480x] flex items-center relative justify-center">
          {/* Soon Posted! <br />Haven't take a photos yet. Lol */}
          <Image src="/experience/iselp.png" alt="iselp" fill></Image>
        </div>
      ),
    },
    {
      title:
        <div className="flex flex-col gap-4">
          <div className="relative w-[186.47px] h-[35px]">
              <Image src="/experience/tedx.svg" alt="tedx" fill></Image>
          </div>
          <div className="flex gap-8">
            <div className="text-[16px] font-medium text-[#737373]">
              UI/UX Designer
            </div>
            <div className="text-[16px] font-medium text-[#737373]">
              Feb - Jul 24 
            </div>
          </div>  
        </div>,
      description:
        <div className="flex flex-col gap-6">
          TED, a non-profit organization founded in 1984, is renowned for its TED Talks, which cover a wide range of topics, from science and technology to personal growth. Through its mission to spread ideas that inspire positive change, TED has extended its influence globally, including through independently organized TEDx events. <br /> <br />TEDxITS 2024, specifically, is a significant event within the ITS community, designed to showcase and disseminate innovative and unexplored ideas. It aims to ignite meaningful discussions, foster connections among participants, and build a vibrant community around the shared pursuit of knowledge and innovation.
          <Link href="https:/tedxits.org">
            <Button className="w-fit px-8 bg-gradient-glass">
              <div className="h-[23px] w-fit">
                  Go to page
              </div>
              <div className="relative self-center h-[15px] w-[15px]">
                  <Image src="/export.svg" alt="export" fill></Image>
              </div>
            </Button>
          </Link>
          
        </div>,           
      content: (
        <div className="h-[320px] w-[480x] flex items-center relative justify-center">
          <Image src="/experience/tedxmain.jpg" alt="tedxmainevent" fill></Image>
        </div>
      ),
    },
    {
      title:
      <div className="flex flex-col gap-4">
        <div className="relative w-[149.7px] h-[72px]">
            <Image src="/experience/ilits.png" alt="ilits" fill></Image>
        </div>
        <div className="flex gap-8">
          <div className="text-[16px] font-medium text-[#737373]">
            UI/UX Designer
          </div>
          <div className="text-[16px] font-medium text-[#737373]">
            Oct 23 - Mar 24
          </div>
        </div>
      </div>,
      description:
      <div className="flex flex-col gap-6">
        Ini Lho ITS! 2024 is a dynamic initiative aimed at cultivating the enthusiasm of high school students, encouraging them to become integral members of the Sepuluh Nopember Institute of Technology (ITS) community. This engaging roadshow event is designed to provide an insightful introduction to the ITS campus, fostering the interest of prospective students in the academic offerings and vibrant campuss life at ITS.
          <Link href="https:/inilho-its.ac.id">
            <Button className="w-fit px-8 bg-gradient-glass">
              <div className="h-[23px] w-fit">
                  Go to page
              </div>
              <div className="relative self-center h-[15px] w-[15px]">
                  <Image src="/export.svg" alt="export" fill></Image>
              </div>
            </Button>
          </Link>
      </div>,
      content: (
        <div className="h-[320px] w-[480x] flex items-center relative justify-center">
          <Image src="/experience/ilits.jpg" alt="ilitsfarewell" fill></Image>
        </div>
      ),
    },
  ];

  export default function StickyScrollRevealDemo() {
    return (
      <div>
        <StickyScroll content={content} />
      </div>
    );
  }