import React from 'react'
import Navbar from "@/components/section/navbar";
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import ProjectsCard from '@/components/molecules/projectsCard';

export default function page() {
  return (
    <div className='bg-black flex flex-col h-full w-full pb-16'>
      <Navbar/>
      {/* <div className='flex flex-col pt-[96px] items-center justify-center gap-5 px-36 h-screen w-full z-20'>
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
      </div> */}

      <div className='flex flex-col gap-7 md:gap-10 pt-20 md:pt-32 px-8 md:px-16 lg:px-24 w-full h-fit max-h-full pb-8 items-start md:items-center overflow-hidden'>
        <div className='flex flex-col gap-3 md:gap-4 md:w-[756px] lg:w-[1024px]'>
          <div className='text-4xl md:text-4xl w-full font-bold'>
            Projects
          </div>
          <div className='lg:text-lg w-full font-light'>
            Showcase of my works on UI/UX Design.
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <ProjectsCard
              nama='Lokantara'
              banner='/banner-projects/banner-loka.png'
              logo='/projects/loka.png'
              desc='Focusing on the Nusantara subtheme, this app promotes unique destinations across Indonesia. Lokantara provides up-to-date information on tourist spots, cultural richness, and local cuisine, fostering pride in Indonesian heritage.'
              link=''
              ukuranLogo='relative h-[25px] w-[131.5px]'
            />

            <ProjectsCard
              nama='BuangBijak'
              banner='/banner-projects/banner-buangbijak.png'
              logo='/projects/buangbijak.png'
              desc='BuangBijak, a recycling and waste management application. BuangBijak aims to connect users with recycling services to promote environmental cleanliness by facilitating the collection, classification, and recycling of unused items.'
              link=''
              ukuranLogo='relative h-[25px] w-[139.94px]'
            />
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <ProjectsCard
              nama='URide'
              banner='/banner-projects/banner-uride.png'
              logo='/projects/uride.png'
              desc='URide revolutionizes automotive vehicle assistance in Indonesia, providing on demand repairs and real-time monitoring. It connects users with skilled mechanics swiftly and transparently, boosting business opportunities for workshops'
              link=''
              ukuranLogo='relative h-[25px] w-[72.78px]'
            />

            <ProjectsCard
              nama='Aimo'
              banner='/banner-projects/banner-aimo.png'
              logo='/projects/aimo.png'
              desc='Aimo is a mental health protection application specifically for mothers which aims to reduce the risk of mental disorders due to depression. Focuses on education, detection and assistance for pre-natal and post-natal mothers'
              link=''
              ukuranLogo='relative h-[35px] w-[107.21px]'
            />
          </div>
        </div>
      
      </div>
    </div>
  )
}