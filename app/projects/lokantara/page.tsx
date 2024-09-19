import React from 'react'
import Navbar from "@/components/section/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

export default function Lokantara() {
    return (
        <div className='bg-black flex flex-col h-full w-full pb-16 items-center'>
            <Navbar/>
            <div className='flex flex-col gap-5 w-[1024px] min-h-screen mt-20 md:mt-32'>
                <div className='relative h-[45px] w-[236.7px]'>
                    <Image src='/projects/loka.png' alt='logo-loka' fill></Image>
                </div>

                <div>
                    
                </div>
                <div className='font-thin text-sm'>
                    Focusing on the Nusantara subtheme, this app offers unforgettable travel experiences and promotes unique  destinations across Indonesia. Lokantara provides up-to-date information on tourist spots, cultural richness, and local cuisine, supporting domestic tourism and fostering pride in Indonesia's heritage.
                    <br />
                    <br />
                    Lokantara is an online tour platform for local and international travelers in Indonesia, offering interactive and gamified travel experiences. It guides travelers to iconic spots with gamified routes and includes features like a translator, currency calculator, nearby friends, and a one-click emergency assistance.
                    <br />
                    <br />
                    The platform also provides event information and a marketplace where users can exchange points earned from visiting attractions and completing quests for local Indonesian crafts, enhancing the travel experience with engaging and practical tools.
                </div>
                <div className='relative w-[1024] h-[576px]'>
                    <Image src="/lokantara/page-loka.png" alt='page-loka' fill></Image>
                </div>
            </div>

            
            
        </div>
      
    )
}