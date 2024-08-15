import Image from "next/image";
import Link from "next/link";

import { div } from "three/webgpu";
import { cn } from "@/lib/utils";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardStack } from "../ui/card-stack";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { grid, techStacks, techStacks2, techStacks3 } from "@/data";

export default function aboutme() {
  return (
    <div className="flex flex-col md:flex md:flex-row mx-auto justify-center items-center h-fit gap-12 md:py-20 bg-[#121212]">
      <CardSpotlight className="h-fit lg:w-[480px] md:w-[420px] w-[380px] justify-center items-center rounded-2xl">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
        It is Me! 👋 
        </p>
        <div className="text-neutral-200 mt-4 relative z-20 font-thin">
          Hello! I'm Muhammad <span className="bg-gradient-text text-transparent bg-clip-text font-extrabold"> Razan  </span>Parisya Putra, an Undergraduate Student. I have experienced 2+ years in UI/UX Design and a year of Front-End.
        </div>
        <p className="text-xl font-bold relative z-20 mt-8 mb-2 text-white">
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