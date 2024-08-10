"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {Button} from "@nextui-org/button";
import { FlipWords } from "../ui/flip-words";
import TypingAnimation from "@/components/magicui/typing-animation";
import { TypeAnimation } from 'react-type-animation';
import { BackgroundBeams } from "@/components/ui/backgroundbeams";


export default function hero() {
    const words = ["Delight", "Inspire", "Elevate"];
    return (
        <section id="home" className = "w-full h-screen bg-[#121212] items-center flex justify-center z-10">
            <div className="h-[581px] w-[1208.66px] absolute scale-[0.35] md:scale-[0.45] lg:scale-[0.65] top-20 z-20">
                <Image src="/hero/web.svg" alt="web" fill></Image>
            </div>

            <div className="h-[293px] w-[1480px] absolute scale-[0.30] md:scale-[0.45] lg:scale-[0.65] top-56 z-20">
                <Image src="/hero/island.svg" alt="island" fill></Image>
            </div>

            <div className="container flex justify-center z-20 mt-24 md:mt-56 lg:mt-96">
                <div className="space-y-6 justify-center">
                    <div className = "flex-row space-y-4 lg:space-y-4">
                        <h1 className = "text-[32px] font-extrabold text-shadow-white text-center md:text-[56px] lg:text-[72px] text-glow">Design. Develop. <FlipWords words={words}/> </h1>
                        <div className = " items-center justify-center flex flex-col gap-0 lg:gap-2">
                            <p className = "text-[20px] font-bold justify-center text-center lg:text-[32px]">I am <span>Muhammad Razan</span></p>
                            <p className = "text-[16px] font-thin justify-center text-center lg:text-[24px]">A passionate <span className="font-extrabold">
                                    <TypeAnimation sequence={[
                                        'UI/UX', // Types 'One'
                                        150, // Waits 2s
                                        'UI/UX Designer',
                                        3000,
                                        '',
                                        1000,
                                        'Front-End', // Deletes 'One' and types 'Two'
                                        150, // wait 0.15 s
                                        'Front-End Developer',
                                        3000, // wait 3s
                                        '',
                                        1000, // Waits 1s
                                        () => {
                                        console.log('Sequence completed');
                                        },
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '18px lg:24px', display: 'inline-block' }}
                                    />
                                </span> </p> 
                            
                        </div>
                    </div>

                    <div className="space-x-4 flex justify-center">
                        <Link href="https://drive.google.com/uc?export=download&id=1MTfq-1S3hDR8pdZ0bQFNoxDhGcc6zcin">
                            <Button color="default" variant="flat" className="w-32 px-[16px] py-[8px]">
                                Portfolio
                            </Button>
                        </Link>
                        <Link href="https://drive.google.com/uc?export=download&id=1_QeC48sM0Mtt9k8J0UGyCVvhDEdYoAeD">
                            <Button color="default" variant="flat" className="w-32 px-[16px] py-[8px]">
                                CV
                            </Button>                            
                        </Link>
                    </div>
                </div>
            </div>
            <BackgroundBeams className="z-10 opacity-30"/>
        </section>
    )
}