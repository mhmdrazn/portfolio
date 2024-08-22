"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {Button} from "@nextui-org/button";
import { FlipWords } from "../ui/flip-words";
import { TypeAnimation } from 'react-type-animation';
import { BackgroundBeams } from "@/components/ui/backgroundbeams";


export default function hero() {
    const words = ["Delight", "Inspire", "Elevate"];
    return (
        <section id="home" className = "w-full h-screen bg-[#121212] items-center flex justify-center z-10">
            <div className="h-[581px] w-[1208.66px] absolute scale-[0.25] md:scale-[0.45] lg:scale-[0.65] top-10 z-20 lg:top-24">
                <Image src="/hero/web.svg" alt="web" fill></Image>
            </div>

            <div className="h-[293px] w-[1480px] absolute scale-[0.23] md:scale-[0.45] lg:scale-[0.65] top-48 z-20 lg:top-56">
                <Image src="/hero/island.svg" alt="island" fill></Image>
            </div>

            <div className="container justify-center z-20 mt-24 md:mt-56 lg:mt-96">
                <div className="space-y-6 justify-center">
                    <div className = "flex-row space-y-4 lg:space-y-4">
                        <h1 className = "text-[20px] font-extrabold leading-tight text-shadow-white text-center max-w-full md:text-[56px] lg:text-[70px] text-glow">Design. Develop.<FlipWords words={words}/> </h1>
                        <div className = "relative items-center justify-center flex flex-col gap-0 lg:gap-2">
                            <p className = "relative text-[16px] font-bold justify-center text-center lg:text-[32px]">I am <span>Muhammad Razan</span></p>
                            <p className = "relative text-[12px] font-thin justify-center text-center lg:text-[24px]">A passionate <span className="font-extrabold">
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

                    <div className="md:hidden space-x-2 md:space-x-4 flex justify-center">
                        <Link href="https://drive.google.com/uc?export=download&id=1MTfq-1S3hDR8pdZ0bQFNoxDhGcc6zcin">
                            <Button size="sm" color="default" variant="shadow" className="px-[24px] py-[8px]">
                                Portfolio
                            </Button>
                        </Link>
                        <Link href="https://drive.google.com/uc?export=download&id=10F4hm24ngdmHdlXtxscbtL9pyf5CW3A-">
                            <Button size="sm" color="default" variant="ghost" className="w-24 py-[8px]">
                                CV
                            </Button>                            
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-2 md:space-x-4 justify-center">
                        <Link href="https://drive.google.com/uc?export=download&id=1MTfq-1S3hDR8pdZ0bQFNoxDhGcc6zcin">
                            <Button color="default" variant="shadow" className="w-32 px-[16px] py-[8px]">
                                Portfolio
                            </Button>
                        </Link>
                        <Link href="https://drive.google.com/uc?export=download&id=10G0WAxqlXvvyWOASeHTWb7uFTYHUKCCR">
                            <Button color="default" variant="ghost" className="w-32 px-[16px] py-[8px]">
                                CV
                            </Button>                            
                        </Link>
                    </div>
                </div>
            </div>
            <BackgroundBeams className="z-10 md:opacity-30 opacity-90"/>
        </section>
    )
}