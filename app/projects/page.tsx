import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@nextui-org/button';
import Navbar from "@/components/section/navbar";
import ProjectsCard from '@/components/molecules/projectsCard';
import {Divider} from "@nextui-org/divider";
import {Chip} from "@nextui-org/chip";

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

      <div className='flex flex-col gap-7 md:gap-8 pt-20 md:pt-32 px-8 md:px-16 lg:px-24 w-full h-fit max-h-full pb-8 items-start md:items-center overflow-hidden'>
        <div className='flex flex-col gap-1 md:gap-3 md:w-[756px] lg:w-[1024px]'>
          <div className='text-4xl md:text-4xl w-full font-bold'>
            Projects
          </div>
          <div className='lg:text-lg w-full font-light'>
            Showcase of my works on UI/UX Design.
          </div>

          <div className='flex flex-row gap-3'>
            <Chip radius="sm" size='lg' variant='solid' className='p-4 font-thin text-sm'>Mobile Application</Chip>
            <Chip radius="sm" size='lg' variant='flat' className='p-4 font-thin text-sm bg-gradient-glass'>Website Design</Chip>
          </div>
        </div>

        <Divider className='md:w-[756px] lg:w-[1024px]'></Divider>
        
        <div className='md:w-[756px] lg:w-[1024px] text-2xl'>
          Mobile Application
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <ProjectsCard
              nama='Lokantara'
              banner='/banner-projects/banner-loka.png'
              logo='/projects/loka.png'
              desc='Focusing on the Nusantara subtheme, this app promotes unique destinations across Indonesia. Lokantara provides up-to-date information on tourist spots, cultural richness, and local cuisine, fostering pride in Indonesian heritage.'
              link=''
              ukuranLogo='relative h-[35px] w-[184.1px]'
            />

            <ProjectsCard
              nama='BuangBijak'
              banner='/banner-projects/banner-buangbijak.png'
              logo='/projects/buangbijak.png'
              desc='BuangBijak, a recycling and waste management application. BuangBijak aims to connect users with recycling services to promote environmental cleanliness by facilitating the collection, classification, and recycling of unused items.'
              link=''
              ukuranLogo='relative h-[35px] w-[195.92px]'
            />
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <ProjectsCard
              nama='URide'
              banner='/banner-projects/banner-uride.png'
              logo='/projects/uride.png'
              desc='URide revolutionizes automotive vehicle assistance in Indonesia, providing on demand repairs and real-time monitoring. It connects users with skilled mechanics swiftly and transparently, boosting business opportunities for workshops'
              link=''
              ukuranLogo='relative h-[35px] w-[101.89px]'
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

        <Divider className='md:w-[756px] lg:w-[1024px]'></Divider>

        <div className='md:w-[756px] lg:w-[1024px] text-2xl'>
          Website Design
        </div>
        
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <ProjectsCard
              nama='ISE'
              banner='/banner-projects/banner-ise.png'
              logo='/banner-projects/logo-ise.png'
              desc='Information Systems Expo (ISE!) is an annual event organized by the Information Systems Student. Designing ISE! website 2024 for BIONIX user page, BIONIX admin dashboard page, RISE user form, profile user dashboard, and design system adjustment.'
              link='https://ise-its.com'
              ukuranLogo='relative h-[55px] w-[169.13px]'
            />

            <ProjectsCard
              nama='TEDX'
              banner='/banner-projects/banner-tedx.png'
              logo='/experience/tedx.svg'
              desc='In TEDxITS I am collaborated closely with visual designers to develop the user interface of TEDxITS website. Contribute on designing Past Event landing page, Pre-Event 2 landing page, and admin dashboard.'
              link='https://tedxits.org'
              ukuranLogo='relative h-[55px] w-[133.19px]'
            />
          </div>
          

          <div className='flex flex-col md:flex-row gap-6'>
            <ProjectsCard
              nama='ILITS'
              banner='/banner-projects/banner-ilits.png'
              logo='/experience/ilits.png'
              desc='Ini Lho ITS! 2024 is a dynamic initiative aimed at cultivating the enthusiasm of high school students. Responsible for the design and development of the Ini Lho ITS! 2024 website. Including faculty page, about page, admin dashboard, and user form.'
              link='https://inilho.its.ac.id'
              ukuranLogo='relative h-[55px] w-[114.36px]'
            />

            <ProjectsCard
              nama='mabacup'
              banner='/banner-projects/banner-mabacup.png'
              logo='/experience/mabacup.svg'
              desc='As Lead UI/UX Designer for Maba Cup, Me and my teams was responsible for crafting and developing the events website. Contribute and reviewing coming soon page, user form, and announcement page.'
              link='https://mabacup-its.com/'
              ukuranLogo='relative h-[55px] w-[107.21px]'
            />
          </div>
        </div>

      </div>
    </div>
  )
}