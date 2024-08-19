import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/button";

import { div } from "three/webgpu";
import { cn } from "@/lib/utils";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardStack } from "../ui/card-stack";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { grid, techStacks, techStacks2, techStacks3 } from "@/data";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Aboutme() {
  return (
    <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row mx-auto justify-center items-center h-fit gap-20 md:py-20 py-24">
      <div className="flex flex-col md:flex-row md:flex justify-center items-center gap-6">

        <div className="flex flex-col justify-center items-center gap-6 mt-36">
          <CardContainer className="bg-slate-200 bg-opacity-5 h-48 rounded-2xl flex justify-end items-end">
            <CardBody className="flex justify-end items-end h-fit bg-transparent bg-opacity-5 lg:w-[360px] md:w-[420px] w-[380px] rounded-xl">
              <CardItem
                translateZ="50"
                className="w-[358.1px] h-[400px] relative flex flex-row justify-end"
              >
                <Image src="/aboutme/fotogw.png" alt='photo' fill></Image>
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardSpotlight className="h-fit lg:w-[360px] md:w-[420px] w-[380px] justify-center flex flex-col items-center gap-4 rounded-xl">
            <p className="text-xl font-bold relative z-20 text-white w-fit">
            Start a project together? 🚀
            </p>
            <Link href="mailto:razan4944@gmail.com" className="flex justify-center items-center">
              <Button color="default" variant="shadow" className="w-32 px-[16px] py-[8px]">
                  Email Me!
              </Button>
            </Link>
          </CardSpotlight>
        </div>
        

        <div className="flex flex-col justify-center items-center gap-6">
          <CardSpotlight className="h-fit lg:w-[420px] md:w-[420px] w-[380px] justify-center items-center rounded-xl">
            <p className="text-2xl font-bold relative z-20 text-white">
            It is Me! 👋 
            </p>
            <div className="text-neutral-200 mt-4 relative z-20 font-thin">
              Hello! I am Muhammad <span className="bg-gradient-text text-transparent bg-clip-text font-extrabold"> Razan  </span>Parisya Putra, an Undergraduate Student. I have experienced 2+ years in UI/UX Design and a year of Front-End.
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-fit lg:w-[420px] md:w-[420px] w-[380px] justify-center items-center rounded-xl">
            <p className="text-2xl font-bold relative z-20 mb-4 text-white">
              Tech Stacks
            </p>
            <InfiniteMovingCards
              items={techStacks}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCards
              items={techStacks2}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCards
              items={techStacks3}
              direction="right"
              speed="fast"
            />
          </CardSpotlight>
        </div>
      </div>
      
      <div className="flex flex-col gap-10 items-center justify-center w-fit">
        <div className="flex gap-5 items-center">  
          <p className="text-[#999999]">Discover me on</p>
          <Link href="https://medium.com/mhmdrazn" className="flex gap-4">
            <div className="w-[30px] h-[30px] relative">
              <Image src="/contacts/medium.png" alt="medium" fill></Image>
            </div>
            <p className="text-[18px] font-semibold">Medium</p>
          </Link>
        </div>
        <CardStack items={CARDS} />
      </div>
    </div>
  )
}

const CARDS = [
  {
    id: 0,
    name: "Mechanisms of Computer Memory Retention",
    content: (
      <p>
        Memory is one of the important elements in a computer that has a central role in processing data and programs. We can liken this memory to computer memory. Its function is to store data that will be used by the computer when operating. <br/> <br/> There are two main actions related to memory: writing and reading. When we write to memory, we store data....</p>
    ),
  },
  {
    id: 1,
    name: "Central Processing Unit: The Cognitive Hub of a Computer",
    content: (
      <p>
        Like the heart of a computer, the CPU or central processing unit is the unit that is responsible for executing the various programs that we run. Various programs such as Microsoft Office, Safari, or Opera, consist of a series of individual operations called instructions, because these instructions "instruct" the computer what to do.
      </p>
    ),
  },
  {
    id: 2,
    name: "Architectural and Innovations of Advanced CPU Design",
    content: (
      <p>
        If we develop a small program for our CPU that allows division of two numbers by performing repeated subtraction operations. For example, to divide 16 by 4, we perform repeated subtraction such as 16 minus 4, 4, 4, until we reach zero or a negative number as a marker for completion. <br/> <br/> However, this approach is very inefficient...
       </p>
    ),
  },
];
