import React from 'react'
import Navbar from "@/components/section/navbar";
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function page() {
  return (
    <div className='bg-black flex flex-col h-full w-screen'>
      <Navbar/>
      <div className='flex flex-col pt-[96px] items-center justify-center gap-5 px-36 h-screen w-full z-20'>
        <div className='flex flex-col pt-[96px] items-center justify-center gap-2'>
          <div className='flex font-semibold text-3xl w-fit'>
            Hold up, Razan is cooking!
          </div>

          <div className='flex font-semibold text-xl w-fit'>
            We'll be right back 👀 [WIP]
          </div>

          <div className='font-extralight w-fit'>
            Plz comeback later and go somewhere else for now like 
          </div>
        </div>

        <Link href="/">
          <Button className='w-fit px-8 bg-gradient-glass'>
            <div className='h-[23px] w-fit'>
              Go back home :v
            </div>
          </Button>
        </Link>
      </div>

      <div className=' w-full h-full absolute h-screen-nav opacity-50'>
        <Image src="/page_projects/wip-anime-2.gif" alt="wip" fill></Image>
      </div>
    </div>
  )
}