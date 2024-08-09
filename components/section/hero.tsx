"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {Button, ButtonGroup} from "@nextui-org/button";
import { FlipWords } from "../ui/flip-words";


export default function hero() {
    const words = ["Delight", "Inspire", "Elevate"];
    return (
        <section id="home" className = "w-full h-screen bg-[#121212] items-center flex justify-center z-10">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="h-[581px] w-[1208.66px] absolute -z-0 scale-[0.35] md:scale-[0.45] lg:scale-[0.65] top-32">
                <Image src="/hero/web.svg" alt="web" fill></Image>
            </div>

            <div className="h-[293px] w-[1480px] absolute -z-0 mb-32 scale-[0.30] md:scale-[0.45] lg:scale-[0.65] top-56">
                <Image src="/hero/island.svg" alt="island" fill></Image>
            </div>

            <div className="container flex justify-center z-20 mt-24 md:mt-56 lg:mt-96">
                <div className="space-y-6 justify-center">
                    <div className = "flex-row lg:space-y-4">
                        <h1 className = "text-[36px] font-extrabold text-shadow-white text-center md:text-[56px] lg:text-[72px]">Design. Develop. <FlipWords words={words}/> </h1>
                        <div className = " items-center justify-center flex flex-col gap-2 lg:gap-2">
                            <p className = "text-[24px] font-medium justify-center text-center lg:text-[32px]">I am <span>Muhammad Razan</span></p>
                            <p className = "text-[18px] font-medium justify-center text-center lg:text-[24px]">A passionate UI/UX Designer</p>
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
        </section>
    )
}